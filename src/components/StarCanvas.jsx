import { useEffect, useRef } from 'react'

export default function StarCanvas() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const cvs = canvasRef.current
    const ctx = cvs.getContext('2d')
    let W, H, stars = [], animId
    let pmx = window.innerWidth / 2, pmy = window.innerHeight / 2

    function resize() {
      W = cvs.width = window.innerWidth
      H = cvs.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    function mkS() {
      return {
        x: Math.random() * W, y: Math.random() * H,
        r: .3 + Math.random() * 1.1,
        a: Math.random(), da: .001 + Math.random() * .003,
        vx: (Math.random() - .5) * .12, vy: (Math.random() - .5) * .12,
      }
    }
    for (let i = 0; i < 180; i++) stars.push(mkS())

    const onMove = e => { pmx = e.clientX; pmy = e.clientY }
    window.addEventListener('mousemove', onMove)

    function draw() {
      ctx.clearRect(0, 0, W, H)
      stars.forEach(s => {
        s.a += s.da; if (s.a > 1 || s.a < 0) s.da *= -1
        s.x += s.vx + (pmx - s.x) * 4e-5
        s.y += s.vy + (pmy - s.y) * 4e-5
        if (s.x < 0) s.x = W; if (s.x > W) s.x = 0
        if (s.y < 0) s.y = H; if (s.y > H) s.y = 0
        ctx.beginPath(); ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(167,139,250,${s.a * .55})`; ctx.fill()
      })
      for (let i = 0; i < stars.length; i++) {
        for (let j = i + 1; j < stars.length; j++) {
          const dx = stars[i].x - stars[j].x, dy = stars[i].y - stars[j].y
          const d = Math.sqrt(dx * dx + dy * dy)
          if (d < 85) {
            ctx.beginPath(); ctx.moveTo(stars[i].x, stars[i].y); ctx.lineTo(stars[j].x, stars[j].y)
            ctx.strokeStyle = `rgba(167,139,250,${(1 - d / 85) * .07})`
            ctx.lineWidth = .5; ctx.stroke()
          }
        }
      }
      animId = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMove)
    }
  }, [])

  return <canvas id="star-canvas" ref={canvasRef} />
}
