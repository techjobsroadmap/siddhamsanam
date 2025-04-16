
import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import { Citrus, Leaf, Heart } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AcidityRemedyPage = () => {
  const remedies = [
    {
      title: "Dry Ginger Tea",
      description: "Boil dry ginger powder in water and consume after meals",
      icon: <Leaf className="w-6 h-6 text-siddha-accent-green" />
    },
    {
      title: "Cumin Water",
      description: "Soak cumin seeds overnight and drink the water in the morning",
      icon: <Citrus className="w-6 h-6 text-siddha-accent-green" />
    },
    {
      title: "Herbal Mix",
      description: "Mix holy basil leaves with honey for quick relief",
      icon: <Heart className="w-6 h-6 text-siddha-accent-green" />
    }
  ];

  return (
    <>
      <Helmet>
        <title>Natural Remedy for Acidity - Siddha Medicine</title>
        <meta name="description" content="Traditional Siddha remedies for treating acidity naturally" />
      </Helmet>
      
      <div className="min-h-screen max-w-6xl mx-auto my-8 rounded-xl overflow-hidden shadow-xl pt-16">
        <Navbar />
        <div className="px-6 py-12 bg-siddha-light-beige">
          <h1 className="text-4xl font-bold text-siddha-dark-green mb-8">Natural Remedy for Acidity</h1>
          
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

export default AcidityRemedyPage;
