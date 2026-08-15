"use client"

import Link from "next/link"
import { ArrowUpRight, MapPin } from "lucide-react"
import { motion } from "framer-motion"
import { useEffect, useRef } from "react"

type PageHeroProps = {
  eyebrow: string
  title: React.ReactNode
  description: string
  primary?: { label: string; href: string }
  secondary?: { label: string; href: string }
  detail?: string
  mode?: "road" | "ledger" | "orbit" | "signal" | "paper"
}

const modes = { road: 0, ledger: 1, orbit: 2, signal: 3, paper: 4 }

export default function PageHero({ eyebrow, title, description, primary, secondary, detail = "Bronx, New York", mode = "road" }: PageHeroProps) {
  return <section className={`page-hero page-hero--${mode}`} aria-labelledby="page-heading"><KineticField mode={modes[mode]} /><div className="page-hero-lines" aria-hidden="true" /><div className="relative mx-auto flex min-h-[510px] max-w-[1280px] flex-col justify-between px-5 py-10 sm:px-9 lg:min-h-[590px] lg:px-14 lg:py-14"><motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} className="hero-kicker"><span /> {eyebrow}<i /> {detail}</motion.div><div className="grid gap-9 pb-4 lg:grid-cols-[1fr_.45fr] lg:items-end"><div><motion.h1 id="page-heading" initial={{ opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .08, duration: .75 }} className="page-hero-title">{title}</motion.h1><motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .18, duration: .65 }} className="mt-6 max-w-xl text-[15px] leading-6 text-stone-200 sm:text-base">{description}</motion.p>{(primary || secondary) && <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .26, duration: .65 }} className="mt-8 flex flex-wrap gap-3">{primary && <Link href={primary.href} className="button-bright">{primary.label} <ArrowUpRight size={18} /></Link>}{secondary && <Link href={secondary.href} className="button-quiet">{secondary.label}</Link>}</motion.div>}</div><motion.aside initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: .25, duration: .75 }} className="page-hero-stamp"><MapPin size={17} className="text-orange-300" /><p>Real help, right here in your neighborhood.</p><span>Beauty &amp; The Beast · 2011—Now</span></motion.aside></div></div></section>
}

function KineticField({ mode }: { mode: number }) {
  const ref = useRef<HTMLCanvasElement>(null)
  useEffect(() => {
    const canvas = ref.current
    if (!canvas || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    const gl = canvas.getContext("webgl", { alpha: true })
    if (!gl) return
    const v = `attribute vec2 p;void main(){gl_Position=vec4(p,0.,1.);}`
    const f = `precision mediump float;uniform vec2 r;uniform float t;uniform float m;
      float g(vec2 p,float s){return smoothstep(s,0.,abs(sin(p)));}
      void main(){vec2 u=gl_FragCoord.xy/r;vec2 p=u*2.-1.;p.x*=r.x/r.y;vec3 c=vec3(.075,.086,.08);float a=0.;
      if(m<.5){float d=max(0.,(u.y-.34)/.66);float w=mix(.04,1.15,d);float b=sin(d*3.+t*.25)*.12;float rd=1.-smoothstep(w,w+.02,abs(p.x-b));c+=rd*vec3(.055,.035,.015);a=g((p.x-b)*mix(18.,1.4,d)+t*1.1, .10)*rd*d;}
      else if(m<1.5){float x=g(p.x*11.+t*.7,.035);float y=g(p.y*9.-t*.35,.035);c+=vec3(.13,.075,.025)*(x+y);a=g((p.x+p.y)*5.-t,.08);}
      else if(m<2.5){float q=length(p-vec2(.35*sin(t*.3),.12*cos(t*.2)));float ring=g(q*15.-t*1.5,.05);c+=vec3(.12,.07,.03)*ring;a=g(atan(p.y,p.x)*5.+t, .04);}
      else if(m<3.5){float s=g(p.x*8.+p.y*5.+t*1.2,.035);c+=vec3(.11,.055,.02)*s;a=g(length(p)*9.-t*1.4,.05);}
      else {float n=g(p.x*20.+sin(p.y*3.+t),.02);c+=vec3(.08,.045,.02)*n;a=g(p.y*13.-t*.8,.025);}
      c+=vec3(.95,.33,.10)*a;gl_FragColor=vec4(c,.98);}`
    const shader = (type: number, source: string) => { const s = gl.createShader(type)!; gl.shaderSource(s, source); gl.compileShader(s); return s }
    const program = gl.createProgram()!; gl.attachShader(program, shader(gl.VERTEX_SHADER, v)); gl.attachShader(program, shader(gl.FRAGMENT_SHADER, f)); gl.linkProgram(program); gl.useProgram(program)
    const buffer = gl.createBuffer(); gl.bindBuffer(gl.ARRAY_BUFFER, buffer); gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]), gl.STATIC_DRAW); const p = gl.getAttribLocation(program,"p"); gl.enableVertexAttribArray(p); gl.vertexAttribPointer(p,2,gl.FLOAT,false,0,0)
    const r = gl.getUniformLocation(program,"r"), t = gl.getUniformLocation(program,"t"), m = gl.getUniformLocation(program,"m"); let frame = 0
    const resize = () => { const d = Math.min(devicePixelRatio,2), b = canvas.getBoundingClientRect(); canvas.width = b.width*d; canvas.height = b.height*d; gl.viewport(0,0,canvas.width,canvas.height) }
    const draw = (time: number) => { gl.uniform2f(r,canvas.width,canvas.height); gl.uniform1f(t,time*.001); gl.uniform1f(m,mode); gl.drawArrays(gl.TRIANGLES,0,6); frame=requestAnimationFrame(draw) }
    resize(); addEventListener("resize",resize); frame=requestAnimationFrame(draw); return()=>{cancelAnimationFrame(frame);removeEventListener("resize",resize);gl.deleteProgram(program)}
  },[mode])
  return <canvas ref={ref} className="absolute inset-0 h-full w-full" aria-hidden="true" />
}
