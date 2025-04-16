
import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import { Leaf, Cloud, Sun } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const DetoxRemedyPage = () => {
  const remedies = [
    {
      title: "Spring Detox",
      description: "Herbal blend of neem and turmeric for seasonal cleansing",
      icon: <Sun className="w-6 h-6 text-siddha-accent-green" />
    },
    {
      title: "Monsoon Immunity",
      description: "Special herbal mixture to boost immunity during rainy season",
      icon: <Cloud className="w-6 h-6 text-siddha-accent-green" />
    },
    {
      title: "Winter Wellness",
      description: "Warming herbs and spices for winter detoxification",
      icon: <Leaf className="w-6 h-6 text-siddha-accent-green" />
    }
  ];

  return (
    <>
      <Helmet>
        <title>Siddha Detox for Seasonal Changes</title>
        <meta name="description" content="Traditional Siddha detox remedies for different seasons" />
      </Helmet>
      
      <div className="min-h-screen max-w-6xl mx-auto my-8 rounded-xl overflow-hidden shadow-xl pt-16">
        <Navbar />
        <div className="px-6 py-12 bg-siddha-light-beige">
          <h1 className="text-4xl font-bold text-siddha-dark-green mb-8">Seasonal Detox Remedies</h1>
          
          <div className="grid gap-6 md:grid-cols-3">
            {remedies.map((remedy, index) => (
              <Card key={index} className="bg-white">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    {remedy.icon}
                    <CardTitle className="text-xl text-siddha-dark-green">
                      {remedy.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-siddha-dark-green">{remedy.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default DetoxRemedyPage;
