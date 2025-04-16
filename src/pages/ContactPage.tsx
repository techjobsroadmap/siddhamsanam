
import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactPage = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us - Siddha Medicine & Studies</title>
        <meta name="description" content="Get in touch with our Siddha medicine experts. Contact us for consultations, inquiries, and support." />
      </Helmet>
      
      <div className="min-h-screen max-w-6xl mx-auto my-8 rounded-xl overflow-hidden shadow-xl pt-16">
        <Navbar />
        <div className="px-6 py-12 bg-siddha-light-beige">
          <h1 className="text-4xl font-bold text-siddha-dark-green mb-8">Contact Us</h1>
          
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-siddha-dark-green mb-6">Get in Touch</h2>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-siddha-accent-green" />
                    <span className="text-siddha-dark-green">info@siddhamedicine.com</span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-siddha-accent-green" />
                    <span className="text-siddha-dark-green">+1 (555) 123-4567</span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-siddha-accent-green" />
                    <span className="text-siddha-dark-green">123 Healing Street, Wellness City</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-siddha-dark-green mb-6">Send us a Message</h2>
              
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-siddha-dark-green mb-1">Name</label>
                  <input type="text" className="w-full px-3 py-2 border border-gray-200 rounded focus:outline-none focus:border-siddha-accent-green" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-siddha-dark-green mb-1">Email</label>
                  <input type="email" className="w-full px-3 py-2 border border-gray-200 rounded focus:outline-none focus:border-siddha-accent-green" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-siddha-dark-green mb-1">Message</label>
                  <textarea rows={4} className="w-full px-3 py-2 border border-gray-200 rounded focus:outline-none focus:border-siddha-accent-green"></textarea>
                </div>
                
                <button type="submit" className="w-full bg-siddha-accent-green text-white py-2 px-4 rounded hover:bg-siddha-dark-green transition-colors">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
