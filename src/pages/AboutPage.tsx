
import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>About Siddha Medicine - Ancient Healing Tradition</title>
        <meta name="description" content="Learn about the ancient tradition of Siddha medicine, its principles, history, and modern applications in holistic healing." />
      </Helmet>
      
      <div className="min-h-screen max-w-6xl mx-auto my-8 rounded-xl overflow-hidden shadow-xl pt-16">
        <Navbar />
        <div className="px-6 py-12 bg-siddha-light-beige">
          <h1 className="text-4xl font-bold text-siddha-dark-green mb-8">About Siddha Medicine</h1>
          
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-6">
              <section>
                <h2 className="text-2xl font-bold text-siddha-dark-green mb-4">Ancient Wisdom</h2>
                <p className="text-siddha-dark-green">Siddha medicine is one of the oldest systems of medicine originating in ancient Tamil Nadu, India. The word Siddha means established truth, and practitioners are called Siddhars.</p>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold text-siddha-dark-green mb-4">Core Principles</h2>
                <p className="text-siddha-dark-green">The system is based on a combination of ancient wisdom and practical healing methods, focusing on the balance between mind, body, and spirit.</p>
              </section>
            </div>

            <div className="space-y-6">
              <section>
                <h2 className="text-2xl font-bold text-siddha-dark-green mb-4">Modern Applications</h2>
                <p className="text-siddha-dark-green">Today, Siddha medicine continues to provide holistic healing solutions, combining traditional knowledge with modern understanding of health and wellness.</p>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold text-siddha-dark-green mb-4">Treatment Approach</h2>
                <p className="text-siddha-dark-green">Treatments include herbal preparations, mineral supplements, and yogic practices, all aimed at maintaining the body's natural balance.</p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
