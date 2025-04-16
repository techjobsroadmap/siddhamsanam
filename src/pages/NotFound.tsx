
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";

const NotFound = () => {
  return (
    <div className="min-h-screen max-w-6xl mx-auto my-8 rounded-xl overflow-hidden shadow-xl">
      <Navbar />
      <div className="bg-siddha-beige px-6 py-24 flex flex-col items-center justify-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-siddha-dark-green">
          Page Not Found
        </h1>
        <p className="text-lg mb-8 text-siddha-dark-green">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Link to="/" className="btn-primary">
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
