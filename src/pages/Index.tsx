import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeatureCards from "@/components/FeatureCards";
import LearnSection from "@/components/LearnSection";
import RemediesSection from "@/components/RemediesSection";
import CommunitySection from "@/components/CommunitySection";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Siddha Medicine & Studies | Ancient Wisdom, Modern Wellness</title>
        <meta name="description" content="Discover the ancient wisdom of Siddha Medicine adapted for modern wellness. Learn about traditional remedies, consult with practitioners, and join our community." />
      </Helmet>
      
      <div className="min-h-screen max-w-6xl mx-auto my-8 rounded-xl overflow-hidden shadow-xl pt-16">
        <Navbar />
        <Hero />
        <FeatureCards />
        <LearnSection />
        <RemediesSection />
        <CommunitySection />
      </div>
    </>
  );
};

export default Index;
