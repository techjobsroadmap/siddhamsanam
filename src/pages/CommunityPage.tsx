
import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import { Calendar, Users, MessageSquare } from "lucide-react";

const CommunityPage = () => {
  const events = [
    {
      date: "Apr 22",
      title: "Live Herbal Workshop",
      type: "Online"
    },
    {
      date: "May 5",
      title: "Siddha Medicine Conference",
      type: "In-Person"
    },
    {
      date: "May 15",
      title: "Community Healing Session",
      type: "Hybrid"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Siddha Community - Events and Discussion</title>
        <meta name="description" content="Join our vibrant Siddha medicine community. Participate in events, workshops, and discussions about traditional healing practices." />
      </Helmet>
      
      <div className="min-h-screen max-w-6xl mx-auto my-8 rounded-xl overflow-hidden shadow-xl pt-16">
        <Navbar />
        <div className="px-6 py-12 bg-siddha-light-beige">
          <h1 className="text-4xl font-bold text-siddha-dark-green mb-8">Siddha Community</h1>
          
          <div className="grid gap-8 md:grid-cols-2">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center gap-2 mb-6">
                <Calendar className="w-6 h-6 text-siddha-dark-green" />
                <h2 className="text-2xl font-bold text-siddha-dark-green">Upcoming Events</h2>
              </div>
              <div className="space-y-4">
                {events.map((event, index) => (
                  <div key={index} className="flex items-center gap-4 p-3 border border-gray-100 rounded">
                    <div className="bg-siddha-light-beige px-3 py-2 rounded text-center">
                      <span className="text-sm font-bold text-siddha-dark-green">{event.date}</span>
                    </div>
                    <div>
                      <h3 className="font-medium text-siddha-dark-green">{event.title}</h3>
                      <span className="text-sm text-siddha-accent-green">{event.type}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center gap-2 mb-4">
                  <Users className="w-6 h-6 text-siddha-dark-green" />
                  <h2 className="text-2xl font-bold text-siddha-dark-green">Join Our Community</h2>
                </div>
                <p className="text-siddha-dark-green mb-4">Connect with other practitioners and enthusiasts of Siddha medicine. Share experiences and learn together.</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center gap-2 mb-4">
                  <MessageSquare className="w-6 h-6 text-siddha-dark-green" />
                  <h2 className="text-2xl font-bold text-siddha-dark-green">Discussion Forums</h2>
                </div>
                <p className="text-siddha-dark-green">Participate in discussions about traditional healing practices, share your knowledge, and learn from others.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CommunityPage;
