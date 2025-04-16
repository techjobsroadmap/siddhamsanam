
import { Link } from "react-router-dom";
import SiddhaEducationIllustration from "./illustrations/SiddhaEducationIllustration";

const LearnSection = () => {
  return (
    <div className="bg-siddha-light-beige px-6 py-12">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-siddha-dark-green">
              Learn Siddha
            </h2>
            <p className="text-lg mb-6 text-siddha-dark-green">
              Start Your Journey in Siddha Education
            </p>
            <Link to="/courses" className="inline-block text-siddha-dark-green font-medium border-b-2 border-siddha-accent-green hover:text-siddha-accent-green transition-colors duration-200">
              View Courses
            </Link>
          </div>
          
          <div className="w-full md:w-1/2">
            <div className="bg-siddha-beige rounded-lg p-6">
              <SiddhaEducationIllustration />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearnSection;
