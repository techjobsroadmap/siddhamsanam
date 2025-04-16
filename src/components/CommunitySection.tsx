
import { Link } from "react-router-dom";
import { Calendar, ChevronRight } from "lucide-react";

const CommunitySection = () => {
  return (
    <div className="bg-siddha-light-beige px-6 py-12">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-siddha-dark-green">
            Community
          </h2>
          <Link to="/events" className="flex items-center text-siddha-dark-green hover:text-siddha-accent-green transition-colors duration-200">
            View Events <ChevronRight className="ml-1 w-5 h-5" />
          </Link>
        </div>
        
        <div className="bg-siddha-beige rounded-lg p-6 flex items-center">
          <div className="bg-siddha-light-beige rounded p-3 mr-6 flex flex-col items-center justify-center">
            <Calendar className="w-8 h-8 text-siddha-dark-green mb-1" />
            <span className="text-lg font-bold text-siddha-dark-green">22</span>
          </div>
          <div>
            <h3 className="text-xl font-bold text-siddha-dark-green mb-1">
              April 22 – Live Herbal Workshop <span className="text-sm font-normal">(Online)</span>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunitySection;
