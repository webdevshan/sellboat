import ExitFunnelHero from '@/components/ExitFunnelHero'
import ExitProcess from '@/components/ExitProcess'
import LeadCapture from '@/components/LeadCapture'
import WhySell from '@/components/WhySell'
import ReferralSection from '@/components/ReferralSection'
import ReferralForm from '@/components/ReferralForm'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <ExitFunnelHero />
      <WhySell />
      <ExitProcess />
      <LeadCapture />
      <ReferralSection />
      <ReferralForm />
    </div>
  )
}
