"use client"

import { useEffect, useRef } from "react"

/** A lightweight, dependency-free WebGL road study used in the home hero. */
export default function RoadCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    const gl = canvas.getContext("webgl", { alpha: true, antialias: true })
    if (!gl) return

    const vertex = `attribute vec2 a_position; void main() { gl_Position = vec4(a_position, 0.0, 1.0); }`
    const fragment = `precision mediump float;
      uniform vec2 u_resolution; uniform float u_time; uniform vec2 u_pointer;
      float line(vec2 p, float x, float w) { return smoothstep(w, 0.0, abs(p.x - x)); }
      void main() {
        vec2 uv = gl_FragCoord.xy / u_resolution.xy; vec2 p = uv * 2.0 - 1.0;
        p.x *= u_resolution.x / u_resolution.y; float horizon = 0.42;
        float depth = max(0.0, (uv.y - horizon) / (1.0 - horizon));
        float bend = sin(depth * 2.4 + u_time * .18) * .10 + (u_pointer.x - .5) * .12 * depth;
        float roadHalf = mix(.045, 1.12, depth);
        float road = 1.0 - smoothstep(roadHalf, roadHalf + .018, abs(p.x - bend));
        vec3 sky = mix(vec3(.08,.10,.12), vec3(.25,.18,.13), uv.y);
        vec3 asphalt = vec3(.075,.08,.08) + depth * vec3(.045,.035,.02);
        vec3 color = mix(sky, asphalt, road * smoothstep(horizon, horizon + .02, uv.y));
        float center = line(vec2(p.x - bend, p.y), 0.0, mix(.002, .028, depth));
        float dash = step(.56, fract(depth * 10.0 - u_time * .75));
        float edge = line(vec2(abs(p.x - bend), p.y), roadHalf * .78, mix(.001, .009, depth));
        color += vec3(.94,.39,.12) * center * dash * road; color += vec3(.98,.79,.46) * edge * .72 * road;
        color += vec3(.95,.33,.10) * (.018 / (abs(uv.y - horizon) + .025)) * .12;
        gl_FragColor = vec4(color, .96);
      }`
    const compile = (type: number, source: string) => {
      const shader = gl.createShader(type)!
      gl.shaderSource(shader, source); gl.compileShader(shader)
      return shader
    }
    const program = gl.createProgram()!
    gl.attachShader(program, compile(gl.VERTEX_SHADER, vertex)); gl.attachShader(program, compile(gl.FRAGMENT_SHADER, fragment)); gl.linkProgram(program); gl.useProgram(program)
    const buffer = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer); gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]), gl.STATIC_DRAW)
    const position = gl.getAttribLocation(program, "a_position")
    gl.enableVertexAttribArray(position); gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0)
    const resolution = gl.getUniformLocation(program, "u_resolution"), time = gl.getUniformLocation(program, "u_time"), pointer = gl.getUniformLocation(program, "u_pointer")
    let cursor = { x: .5, y: .5 }, frame = 0
    const resize = () => { const dpr = Math.min(window.devicePixelRatio, 2), { width, height } = canvas.getBoundingClientRect(); canvas.width = width * dpr; canvas.height = height * dpr; gl.viewport(0, 0, canvas.width, canvas.height) }
    const draw = (ms: number) => { gl.uniform2f(resolution, canvas.width, canvas.height); gl.uniform1f(time, ms * .001); gl.uniform2f(pointer, cursor.x, cursor.y); gl.drawArrays(gl.TRIANGLES, 0, 6); frame = requestAnimationFrame(draw) }
    const move = (event: PointerEvent) => { const bounds = canvas.getBoundingClientRect(); cursor = { x: (event.clientX - bounds.left) / bounds.width, y: (event.clientY - bounds.top) / bounds.height } }
    resize(); window.addEventListener("resize", resize); canvas.addEventListener("pointermove", move); frame = requestAnimationFrame(draw)
    return () => { cancelAnimationFrame(frame); window.removeEventListener("resize", resize); canvas.removeEventListener("pointermove", move); gl.deleteProgram(program) }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" aria-hidden="true" />
}
