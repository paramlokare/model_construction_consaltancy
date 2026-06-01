import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-md border-b border-yellow-500">

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <Link to="/">
          <img
            src={logo}
            alt="Model Construction"
            className="h-14"
          />
        </Link>

        <div className="flex gap-6 text-white font-medium">

          <Link to="/">Home</Link>

          <Link to="/about">About</Link>

          <Link to="/services">Services</Link>

          <Link to="/projects">Projects</Link>

          <Link to="/contact">Contact</Link>

        </div>

      </div>

    </nav>
  );
};

export default Navbar;