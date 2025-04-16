
import { Link } from "react-router-dom";
import HeroIllustration from "./illustrations/HeroIllustration";

const Hero = () => {
  return (
    <div className="bg-siddha-beige px-6 py-12 md:py-20 flex flex-col md:flex-row items-center justify-between relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/public/lovable-uploads/aa652baa-54e5-4999-bf3e-c36c16ca77af.png')] bg-cover opacity-10 z-0"></div>
      
      <div className="z-10 w-full md:w-1/2 mb-8 md:mb-0">
        <HeroIllustration />
      </div>
      
      <div className="z-10 w-full md:w-1/2 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-siddha-dark-green">
          Welcome<br />
          to Siddha Medicine<br />
          & Studies
        </h1>
        <p className="text-lg md:text-xl text-siddha-dark-green mb-8">
          Ancient Wisdom. Modern Wellness
        </p>
        <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
          <Link to="/learn" className="btn-primary">Learn More</Link>
          <Link to="/consult" className="btn-secondary">Consult Now</Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
