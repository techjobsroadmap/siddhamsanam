
import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import { HeartPulse, Brain, HandMetal } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PulseDiagnosisPage = () => {
  const sections = [
    {
      title: "Understanding Pulse Points",
      description: "Learn about the three vital pulse points used in Siddha diagnosis",
      icon: <HeartPulse className="w-6 h-6 text-siddha-accent-green" />
    },
    {
      title: "Reading Techniques",
      description: "Traditional methods to read and interpret different pulse patterns",
      icon: <Brain className="w-6 h-6 text-siddha-accent-green" />
    },
    {
      title: "Practical Application",
      description: "How practitioners use pulse diagnosis to identify health conditions",
      icon: <HandMetal className="w-6 h-6 text-siddha-accent-green" />
    }
  ];

  return (
    <>
      <Helmet>
        <title>Pulse Diagnosis in Siddha Medicine</title>
        <meta name="description" content="Learn about traditional Siddha pulse diagnosis methods" />
      </Helmet>
      
      <div className="min-h-screen max-w-6xl mx-auto my-8 rounded-xl overflow-hidden shadow-xl pt-16">
        <Navbar />
        <div className="px-6 py-12 bg-siddha-light-beige">
          <h1 className="text-4xl font-bold text-siddha-dark-green mb-8">Understanding Pulse Diagnosis</h1>
          
          <div className="grid gap-6 md:grid-cols-3">
            {sections.map((section, index) => (
              <Card key={index} className="bg-white">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    {section.icon}
                    <CardTitle className="text-xl text-siddha-dark-green">
                      {section.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-siddha-dark-green">{section.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PulseDiagnosisPage;
