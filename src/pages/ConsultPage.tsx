
import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import { Calendar, Phone, Video } from "lucide-react";

const ConsultPage = () => {
  const consultationTypes = [
    {
      title: "Video Consultation",
      description: "Face-to-face online consultation with experienced Siddha practitioners",
      icon: <Video className="w-8 h-8 text-siddha-dark-green" />
    },
    {
      title: "Phone Consultation",
      description: "Convenient phone consultations for quick health guidance",
      icon: <Phone className="w-8 h-8 text-siddha-dark-green" />
    },
    {
      title: "In-Person Visit",
      description: "Traditional in-person consultation at our wellness centers",
      icon: <Calendar className="w-8 h-8 text-siddha-dark-green" />
    }
  ];

  return (
    <>
      <Helmet>
        <title>Consult Siddha Practitioners Online</title>
        <meta name="description" content="Book online consultations with experienced Siddha medicine practitioners. Get personalized health advice and treatment plans." />
      </Helmet>
      
      <div className="min-h-screen max-w-6xl mx-auto my-8 rounded-xl overflow-hidden shadow-xl pt-16">
        <Navbar />
        <div className="px-6 py-12 bg-siddha-light-beige">
          <h1 className="text-4xl font-bold text-siddha-dark-green mb-8">Consult with Siddha Experts</h1>
          
          <div className="grid gap-8 md:grid-cols-3">
            {consultationTypes.map((type, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="mb-4">{type.icon}</div>
                <h3 className="text-xl font-bold text-siddha-dark-green mb-2">{type.title}</h3>
                <p className="text-siddha-dark-green">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ConsultPage;
