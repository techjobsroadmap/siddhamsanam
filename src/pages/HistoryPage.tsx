
import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import { ScrollText, Leaf, Flask } from "lucide-react";

const HistoryPage = () => {
  const timelineEvents = [
    {
      year: "5000 BCE",
      title: "Origins of Siddha",
      description: "Ancient Tamil sages (Siddhars) developed the foundational principles",
      icon: <ScrollText className="w-6 h-6 text-siddha-accent-green" />
    },
    {
      year: "2000 BCE",
      title: "Herbal Medicine Development",
      description: "Systematic documentation of medicinal herbs and their properties",
      icon: <Leaf className="w-6 h-6 text-siddha-accent-green" />
    },
    {
      year: "1000 BCE",
      title: "Scientific Advancement",
      description: "Development of mineral and metallic medicines",
      icon: <Flask className="w-6 h-6 text-siddha-accent-green" />
    }
  ];

  return (
    <>
      <Helmet>
        <title>History of Siddha Medicine - Ancient Healing Tradition</title>
        <meta name="description" content="Explore the rich history of Siddha medicine, from its ancient origins to modern practice." />
      </Helmet>
      
      <div className="min-h-screen max-w-6xl mx-auto my-8 rounded-xl overflow-hidden shadow-xl pt-16">
        <Navbar />
        <div className="px-6 py-12 bg-siddha-light-beige">
          <h1 className="text-4xl font-bold text-siddha-dark-green mb-8">History of Siddha Medicine</h1>
          
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-6">
              <section>
                <h2 className="text-2xl font-bold text-siddha-dark-green mb-4">Ancient Origins</h2>
                <p className="text-siddha-dark-green">Siddha medicine is one of the oldest medical systems in the world, originating in South India. The word "Siddha" comes from "Siddhi" which means perfection or eternal bliss.</p>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold text-siddha-dark-green mb-4">Fundamental Principles</h2>
                <p className="text-siddha-dark-green">Based on the concept of balance between three doshas: Vatham (Wind), Pitham (Fire), and Kabam (Earth and Water). This ancient system emphasizes prevention and rejuvenation.</p>
              </section>
            </div>

            <div className="space-y-8">
              <h2 className="text-2xl font-bold text-siddha-dark-green">Historical Timeline</h2>
              {timelineEvents.map((event, index) => (
                <div key={index} className="flex gap-4 items-start bg-white p-4 rounded-lg shadow-md">
                  <div className="bg-siddha-light-beige p-2 rounded-full">
                    {event.icon}
                  </div>
                  <div>
                    <span className="text-siddha-accent-green font-bold">{event.year}</span>
                    <h3 className="font-bold text-siddha-dark-green">{event.title}</h3>
                    <p className="text-siddha-dark-green">{event.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HistoryPage;
