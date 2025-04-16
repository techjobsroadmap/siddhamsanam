
import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import { Leaf, Droplet, Pills } from "lucide-react";

const StorePage = () => {
  const products = [
    {
      category: "Herbal Medicines",
      items: [
        {
          name: "Traditional Herbal Blend",
          price: "$24.99",
          icon: <Leaf className="w-6 h-6 text-siddha-accent-green" />
        },
        {
          name: "Immunity Boost Mix",
          price: "$29.99",
          icon: <Leaf className="w-6 h-6 text-siddha-accent-green" />
        }
      ]
    },
    {
      category: "Essential Oils",
      items: [
        {
          name: "Therapeutic Oil Blend",
          price: "$19.99",
          icon: <Droplet className="w-6 h-6 text-siddha-accent-green" />
        },
        {
          name: "Massage Oil",
          price: "$22.99",
          icon: <Droplet className="w-6 h-6 text-siddha-accent-green" />
        }
      ]
    },
    {
      category: "Supplements",
      items: [
        {
          name: "Herbal Capsules",
          price: "$34.99",
          icon: <Pills className="w-6 h-6 text-siddha-accent-green" />
        },
        {
          name: "Mineral Complex",
          price: "$39.99",
          icon: <Pills className="w-6 h-6 text-siddha-accent-green" />
        }
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Siddha Medicine Store - Traditional Products</title>
        <meta name="description" content="Shop authentic Siddha medicine products, herbs, supplements, and therapeutic oils. Quality assured traditional remedies." />
      </Helmet>
      
      <div className="min-h-screen max-w-6xl mx-auto my-8 rounded-xl overflow-hidden shadow-xl pt-16">
        <Navbar />
        <div className="px-6 py-12 bg-siddha-light-beige">
          <h1 className="text-4xl font-bold text-siddha-dark-green mb-8">Siddha Medicine Store</h1>
          
          <div className="grid gap-8 md:grid-cols-3">
            {products.map((category, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-siddha-dark-green mb-6">{category.category}</h2>
                <div className="space-y-4">
                  {category.items.map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between p-3 border border-gray-100 rounded">
                      <div className="flex items-center gap-3">
                        {item.icon}
                        <span className="text-siddha-dark-green">{item.name}</span>
                      </div>
                      <span className="font-medium text-siddha-accent-green">{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default StorePage;
