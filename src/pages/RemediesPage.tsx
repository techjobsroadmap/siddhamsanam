
import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";

const RemediesPage = () => {
  const remedies = [
    {
      condition: "Digestive Health",
      remedies: [
        "Dry Ginger Powder with Honey",
        "Cumin and Fennel Tea",
        "Traditional Herbal Blend"
      ]
    },
    {
      condition: "Respiratory Support",
      remedies: [
        "Tulsi and Pepper Tea",
        "Thyme and Honey Mix",
        "Herbal Steam Inhalation"
      ]
    },
    {
      condition: "Joint Health",
      remedies: [
        "Turmeric Golden Paste",
        "Ginger Compress",
        "Herbal Oil Massage"
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Siddha Remedies - Traditional Healing Solutions</title>
        <meta name="description" content="Discover traditional Siddha remedies for common health conditions. Natural healing solutions from ancient wisdom." />
      </Helmet>
      
      <div className="min-h-screen max-w-6xl mx-auto my-8 rounded-xl overflow-hidden shadow-xl pt-16">
        <Navbar />
        <div className="px-6 py-12 bg-siddha-light-beige">
          <h1 className="text-4xl font-bold text-siddha-dark-green mb-8">Traditional Siddha Remedies</h1>
          
          <div className="grid gap-8 md:grid-cols-3">
            {remedies.map((category, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-siddha-dark-green mb-4">{category.condition}</h2>
                <ul className="space-y-3">
                  {category.remedies.map((remedy, idx) => (
                    <li key={idx} className="text-siddha-dark-green flex items-center">
                      <span className="w-2 h-2 bg-siddha-accent-green rounded-full mr-2"></span>
                      {remedy}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default RemediesPage;
