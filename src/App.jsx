import Navbar from './components/Navbar'
import Hero from './components/Hero'
import StatsSection from './components/StatsSection'
import WhyVoteSection from './components/WhyVoteSection'
import ComparisonSection from './components/ComparisonSection'
import OfficialsSection from './components/OfficialsSection'
import IssuesSection from './components/IssuesSection'
import HistoryTimeline from './components/HistoryTimeline'
import RegisterSection from './components/RegisterSection'
import ShareSection from './components/ShareSection'
import SubscribeSection from './components/SubscribeSection'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <StatsSection />
      <WhyVoteSection />
      <ComparisonSection />
      <OfficialsSection />
      <IssuesSection />
      <HistoryTimeline />
      <RegisterSection />
      <ShareSection />
      <SubscribeSection />
      <Footer />
    </>
  )
}
