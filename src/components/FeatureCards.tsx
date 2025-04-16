
import { Link } from "react-router-dom";
import { Hourglass, Stethoscope, BowlFood, Users } from "lucide-react";

const FeatureCards = () => {
  const features = [
    {
      icon: <Hourglass className="w-10 h-10 text-siddha-light-brown" />,
      title: "History of Siddha",
      link: "/history"
    },
    {
      icon: <Stethoscope className="w-10 h-10 text-siddha-dark-green" />,
      title: "Consult a Doctor",
      link: "/consult"
    },
    {
      icon: <BowlFood className="w-10 h-10 text-siddha-accent-green" />,
      title: "Buy Medicine",
      link: "/store"
    },
    {
      icon: <Users className="w-10 h-10 text-siddha-brown" />,
      title: "Join Community",
      link: "/community"
    }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-6 py-6 bg-siddha-beige">
      {features.map((feature, index) => (
        <Link to={feature.link} key={index} className="feature-card">
          <div className="text-center mb-2">
            {feature.icon}
          </div>
          <h3 className="text-lg font-medium text-siddha-dark-green">
            {feature.title}
          </h3>
        </Link>
      ))}
    </div>
  );
};

export default FeatureCards;
