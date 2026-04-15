import { useEffect, useRef } from 'react'

export default function Cursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)

  useEffect(() => {
    const dot = dotRef.current
    const ring = ringRef.current
    let mx = 0, my = 0, rx = 0, ry = 0

    const onMove = e => {
      mx = e.clientX; my = e.clientY
      dot.style.left = mx + 'px'; dot.style.top = my + 'px'
    }
    document.addEventListener('mousemove', onMove)

    let animId
    const loop = () => {
      rx += (mx - rx) * .1; ry += (my - ry) * .1
      ring.style.left = rx + 'px'; ring.style.top = ry + 'px'
      animId = requestAnimationFrame(loop)
    }
    loop()

    const hoverEls = () => document.querySelectorAll('a,button,.exp-tab,.tag,.sb,.cl,.pc,.sk-card')
    const addHover = () => {
      hoverEls().forEach(el => {
        el.addEventListener('mouseenter', () => document.body.classList.add('hover-active'))
        el.addEventListener('mouseleave', () => document.body.classList.remove('hover-active'))
      })
    }
    addHover()
    const obs = new MutationObserver(addHover)
    obs.observe(document.body, { childList: true, subtree: true })

    const onClick = e => {
      const r = document.createElement('div')
      r.className = 'ripple'
      const s = 120 + Math.random() * 80
      r.style.cssText = `width:${s}px;height:${s}px;left:${e.clientX - s / 2}px;top:${e.clientY - s / 2}px;background:rgba(167,139,250,0.18)`
      document.body.appendChild(r)
      setTimeout(() => r.remove(), 700)
    }
    document.addEventListener('click', onClick)

    return () => {
      cancelAnimationFrame(animId)
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('click', onClick)
      obs.disconnect()
    }
  }, [])

  return (
    <>
      <div className="cursor-dot" ref={dotRef} />
      <div className="cursor-ring" ref={ringRef} />
    </>
  )
}
