import { useEffect } from 'react'

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
    }, { threshold: .12 })

    const els = document.querySelectorAll('.reveal,.reveal-l')
    els.forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])
}

export function useTilt(selector) {
  useEffect(() => {
    const cards = document.querySelectorAll(selector)
    const handlers = []
    cards.forEach(card => {
      const onMove = e => {
        const rc = card.getBoundingClientRect()
        const x = e.clientX - rc.left, y = e.clientY - rc.top
        const rx = (y / rc.height - .5) * 14, ry = -(x / rc.width - .5) * 14
        card.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-8px)`
      }
      const onLeave = () => card.style.transform = ''
      card.addEventListener('mousemove', onMove)
      card.addEventListener('mouseleave', onLeave)
      handlers.push({ card, onMove, onLeave })
    })
    return () => handlers.forEach(({ card, onMove, onLeave }) => {
      card.removeEventListener('mousemove', onMove)
      card.removeEventListener('mouseleave', onLeave)
    })
  })
}
