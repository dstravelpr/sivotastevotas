import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import StatsSection from './components/StatsSection'
import WhyVoteSection from './components/WhyVoteSection'
import ComparisonSection from './components/ComparisonSection'
import OfficialsSection from './components/OfficialsSection'
import VotateSection from './components/VotateSection'
import AccountabilitySection from './components/AccountabilitySection'
import AlignSection from './components/AlignSection'
import IssuesSection from './components/IssuesSection'
import HistoryTimeline from './components/HistoryTimeline'
import QuizSection from './components/QuizSection'
import RegisterSection from './components/RegisterSection'
import ShareSection from './components/ShareSection'
import SubscribeSection from './components/SubscribeSection'
import Footer from './components/Footer'

const REVEAL_SELECTORS = [
  '.section__eyebrow', '.section__title', '.section__subtitle',
  '.stat-card', '.reason-card', '.issue-card', '.official-card',
  '.votate-card', '.votate-connect-card', '.comparison-col',
  '.timeline-item', '.quiz-card', '.votate-closing',
  '.power-node', '.case-card', '.align-card', '.align-closing',
].join(', ')

export default function App() {
  useEffect(() => {
    // Respeta usuarios que prefieren menos movimiento
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const els = document.querySelectorAll(REVEAL_SELECTORS)
    els.forEach((el) => {
      const siblings = Array.from(el.parentElement.children)
      el.style.transitionDelay = `${(siblings.indexOf(el) % 6) * 70}ms`
      el.classList.add('reveal-init')
    })

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('reveal-in')
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <>
      <Navbar />
      <Hero />
      <Marquee />
      <StatsSection />
      <WhyVoteSection />
      <ComparisonSection />
      <OfficialsSection />
      <VotateSection />
      <AccountabilitySection />
      <AlignSection />
      <IssuesSection />
      <HistoryTimeline />
      <QuizSection />
      <RegisterSection />
      <ShareSection />
      <SubscribeSection />
      <Footer />
    </>
  )
}
