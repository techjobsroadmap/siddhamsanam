
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-siddha-light-beige px-4 py-4 rounded-t-xl">
      <div className="flex items-center justify-start space-x-4 md:space-x-6 max-w-6xl mx-auto">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/about" className="nav-link">About Siddha</Link>
        <Link to="/learn" className="nav-link">Learn Siddha</Link>
        <Link to="/remedies" className="nav-link">Remedies</Link>
        <Link to="/consult" className="nav-link">Consult Online</Link>
        <Link to="/store" className="nav-link">Store</Link>
        <Link to="/community" className="nav-link">Community</Link>
        <Link to="/contact" className="nav-link">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
