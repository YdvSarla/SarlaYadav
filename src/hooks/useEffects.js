import { useEffect, useRef } from 'react'

export function useCursor() {
  useEffect(() => {
    const cur = document.getElementById('cur')
    const ring = document.getElementById('ring')
    if (!cur || !ring) return
    let mx = 0, my = 0, rx = 0, ry = 0
    const onMove = e => {
      mx = e.clientX; my = e.clientY
      cur.style.left = mx + 'px'; cur.style.top = my + 'px'
    }
    document.addEventListener('mousemove', onMove)
    let raf
    const loop = () => {
      rx += (mx - rx) * 0.1; ry += (my - ry) * 0.1
      ring.style.left = rx + 'px'; ring.style.top = ry + 'px'
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)
    const addHover = () => {
      document.querySelectorAll('a,button,.exp-tab,.pc-act,.tag,.sb').forEach(el => {
        el.addEventListener('mouseenter', () => document.body.classList.add('hover-active'))
        el.addEventListener('mouseleave', () => document.body.classList.remove('hover-active'))
      })
    }
    setTimeout(addHover, 500)
    return () => {
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [])
}

export function useRipple() {
  useEffect(() => {
    const onClick = e => {
      const r = document.createElement('div')
      r.className = 'ripple'
      const s = 120 + Math.random() * 80
      r.style.cssText = `width:${s}px;height:${s}px;left:${e.clientX - s / 2}px;top:${e.clientY - s / 2}px;background:rgba(167,139,250,0.18)`
      document.body.appendChild(r)
      setTimeout(() => r.remove(), 700)
    }
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [])
}

export function useStarCanvas() {
  useEffect(() => {
    const cvs = document.getElementById('cvs')
    if (!cvs) return
    const ctx = cvs.getContext('2d')
    let W, H, stars = [], pmx, pmy, raf
    const resize = () => { W = cvs.width = innerWidth; H = cvs.height = innerHeight; pmx = W / 2; pmy = H / 2 }
    resize()
    window.addEventListener('resize', resize)
    const mkS = () => ({ x: Math.random() * W, y: Math.random() * H, r: 0.3 + Math.random() * 1.1, a: Math.random(), da: 0.001 + Math.random() * 0.003, vx: (Math.random() - 0.5) * 0.12, vy: (Math.random() - 0.5) * 0.12 })
    for (let i = 0; i < 180; i++) stars.push(mkS())
    const onMove = e => { pmx = e.clientX; pmy = e.clientY }
    window.addEventListener('mousemove', onMove)
    const draw = () => {
      ctx.clearRect(0, 0, W, H)
      stars.forEach(s => {
        s.a += s.da; if (s.a > 1 || s.a < 0) s.da *= -1
        s.x += s.vx + (pmx - s.x) * 4e-5; s.y += s.vy + (pmy - s.y) * 4e-5
        if (s.x < 0) s.x = W; if (s.x > W) s.x = 0; if (s.y < 0) s.y = H; if (s.y > H) s.y = 0
        ctx.beginPath(); ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(167,139,250,${s.a * 0.55})`; ctx.fill()
      })
      for (let i = 0; i < stars.length; i++) for (let j = i + 1; j < stars.length; j++) {
        const dx = stars[i].x - stars[j].x, dy = stars[i].y - stars[j].y, d = Math.sqrt(dx * dx + dy * dy)
        if (d < 85) { ctx.beginPath(); ctx.moveTo(stars[i].x, stars[i].y); ctx.lineTo(stars[j].x, stars[j].y); ctx.strokeStyle = `rgba(167,139,250,${(1 - d / 85) * 0.07})`; ctx.lineWidth = 0.5; ctx.stroke() }
      }
      raf = requestAnimationFrame(draw)
    }
    draw()
    return () => { window.removeEventListener('resize', resize); window.removeEventListener('mousemove', onMove); cancelAnimationFrame(raf) }
  }, [])
}

export function useScrollReveal() {
  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          const d = +(e.target.dataset.delay || 0)
          setTimeout(() => e.target.classList.add('vis'), d)
          e.target.querySelectorAll('.bar-fill').forEach(b => {
            setTimeout(() => { b.style.width = b.dataset.w + '%' }, d + 200)
          })
        }
      })
    }, { threshold: 0.12 })
    const els = document.querySelectorAll('.reveal,.reveal-l')
    els.forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])
}

export function useTilt(selector) {
  useEffect(() => {
    const timer = setTimeout(() => {
      document.querySelectorAll(selector).forEach(card => {
        const onMove = e => {
          const rc = card.getBoundingClientRect(), x = e.clientX - rc.left, y = e.clientY - rc.top
          const rx = (y / rc.height - 0.5) * 14, ry = -(x / rc.width - 0.5) * 14
          card.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-8px)`
        }
        const onLeave = () => { card.style.transform = '' }
        card.addEventListener('mousemove', onMove)
        card.addEventListener('mouseleave', onLeave)
      })
    }, 300)
    return () => clearTimeout(timer)
  }, [])
}

export function useTyped(roles) {
  const ref = useRef(null)
  useEffect(() => {
    let ri = 0, ci = 0, del = false, timer
    const type = () => {
      const el = ref.current
      if (!el) return
      const w = roles[ri]
      if (!del) {
        el.textContent = w.slice(0, ci++)
        if (ci > w.length) { del = true; timer = setTimeout(type, 1800); return }
      } else {
        el.textContent = w.slice(0, ci--)
        if (ci < 0) { del = false; ri = (ri + 1) % roles.length; ci = 0 }
      }
      timer = setTimeout(type, del ? 48 : 88)
    }
    type()
    return () => clearTimeout(timer)
  }, [])
  return ref
}
