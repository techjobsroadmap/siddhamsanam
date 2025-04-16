
import { Link } from "react-router-dom";
import GarlicIllustration from "./illustrations/GarlicIllustration";
import HerbsIllustration from "./illustrations/HerbsIllustration";
import PulseDiagnosisIllustration from "./illustrations/PulseDiagnosisIllustration";

const RemediesSection = () => {
  const remedies = [
    {
      illustration: <GarlicIllustration />,
      title: "Natural Remedy for Acidity",
      link: "/remedies/acidity"
    },
    {
      illustration: <HerbsIllustration />,
      title: "Siddha Detox for Seasonal Changes",
      link: "/remedies/detox"
    },
    {
      illustration: <PulseDiagnosisIllustration />,
      title: "How Pulse Diagnosis Works",
      link: "/remedies/pulse-diagnosis"
    }
  ];

  return (
    <div className="bg-siddha-light-beige px-6 py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-siddha-dark-green">
          Home Remedies
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {remedies.map((remedy, index) => (
            <Link to={remedy.link} key={index} className="remedy-card">
              <div className="p-4 bg-siddha-beige aspect-square flex items-center justify-center">
                {remedy.illustration}
              </div>
              <div className="p-4">
                <h3 className="text-lg font-medium text-siddha-dark-green">
                  {remedy.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RemediesSection;
