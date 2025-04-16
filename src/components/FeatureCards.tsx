
import { Link } from "react-router-dom";
import { Book, Stethoscope, ShoppingCart, Users } from "lucide-react";

const FeatureCards = () => {
  const features = [
    {
      icon: <Book className="w-10 h-10 text-siddha-light-brown" />,
      title: "History of Siddha",
      link: "/history",
      description: "Explore the ancient origins and evolution of Siddha medicine"
    },
    {
      icon: <Stethoscope className="w-10 h-10 text-siddha-dark-green" />,
      title: "Consult a Doctor",
      link: "/consult",
      description: "Connect with experienced Siddha practitioners"
    },
    {
      icon: <ShoppingCart className="w-10 h-10 text-siddha-accent-green" />,
      title: "Buy Medicine",
      link: "/store",
      description: "Purchase authentic Siddha medicines and herbs"
    },
    {
      icon: <Users className="w-10 h-10 text-siddha-brown" />,
      title: "Join Community",
      link: "/community",
      description: "Connect with other Siddha medicine enthusiasts"
    }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-6 py-6 bg-siddha-beige">
      {features.map((feature, index) => (
        <Link 
          to={feature.link} 
          key={index} 
          className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
        >
          <div className="text-center mb-2">
            {feature.icon}
          </div>
          <h3 className="text-lg font-medium text-siddha-dark-green text-center mb-2">
            {feature.title}
          </h3>
          <p className="text-sm text-siddha-dark-green text-center">
            {feature.description}
          </p>
        </Link>
      ))}
    </div>
  );
};

export default FeatureCards;
