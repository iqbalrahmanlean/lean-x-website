// app/page.tsx
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Features from '@/components/Features';
import Footer from '@/components/Footer';
import VisionMission from '@/components/VisionMission';
import ContactSection from '@/components/ContactSection';
import PaymentPlatformSection from '@/components/PaymentPlatformSection';
import SeamlessIntegrationSection from '@/components/SeamlessIntegrationSection';
import WhoWeveWorkedWith from '@/components/WhoWeveWorkedWith';
import OurAdvisorSection from '@/components/OurAdvisorSection';
import OurLeadershipSection from '@/components/OurLeadershipSection';
import MeetOurTeamSection from '@/components/MeetOurTeamSection';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Features />
        <VisionMission />
        <PaymentPlatformSection />
        <SeamlessIntegrationSection />
        <WhoWeveWorkedWith />
        <OurAdvisorSection />
        <OurLeadershipSection />
        <MeetOurTeamSection />
        <ContactSection />




      </main>
      <Footer />
    </div>
  );
}