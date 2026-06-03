import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import hero2 from "../assets/hero2.jpg";

import project1 from "../assets/project1.jpg";
import project2 from "../assets/project2.jpg";
import project3 from "../assets/project3.jpg";
import project4 from "../assets/project4.jpg";
import project5 from "../assets/project5.jpg";
import project6 from "../assets/project6.jpg";

const projects = [
  {
    image: project1,
    title: "Luxury Residential Tower",
    location: "Pune",
  },
  {
    image: project2,
    title: "Commercial Business Hub",
    location: "Mumbai",
  },
  {
    image: project3,
    title: "Premium Villa Community",
    location: "Nashik",
  },
  {
    image: project4,
    title: "Corporate Office Complex",
    location: "Pune",
  },
  {
    image: project5,
    title: "Modern Shopping Center",
    location: "Mumbai",
  },
  {
    image: project6,
    title: "High Rise Apartments",
    location: "Pune",
  },
];

const Projects = () => {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section
        className="h-[75vh] bg-cover bg-center relative"
        style={{ backgroundImage: `url(${hero2})` }}
      >
        <div className="absolute inset-0 bg-black/70 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-4">
              Our Projects
            </h1>

            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transforming visions into landmarks through innovation,
              craftsmanship and excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">
            <h2 className="text-5xl font-extrabold">
              <span className="text-black">Featured </span>
              <span className="text-[#D4AF37]">Projects</span>
            </h2>

            <div className="w-32 h-1 bg-[#D4AF37] mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {projects.map((project, index) => (
              <div
                key={index}
                className="group overflow-hidden rounded-3xl bg-white shadow-xl hover:shadow-2xl transition duration-500"
              >
                <div className="overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-72 object-cover group-hover:scale-110 duration-700"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">
                    {project.title}
                  </h3>

                  <p className="text-gray-500">
                    📍 {project.location}
                  </p>

                  <button className="mt-4 text-[#D4AF37] font-semibold">
                    View Details →
                  </button>
                </div>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center">

            <div>
              <h3 className="text-5xl font-bold text-[#D4AF37]">100+</h3>
              <p>Projects Completed</p>
            </div>

            <div>
              <h3 className="text-5xl font-bold text-[#D4AF37]">15+</h3>
              <p>Years Experience</p>
            </div>

            <div>
              <h3 className="text-5xl font-bold text-[#D4AF37]">500+</h3>
              <p>Happy Clients</p>
            </div>

            <div>
              <h3 className="text-5xl font-bold text-[#D4AF37]">50+</h3>
              <p>Commercial Sites</p>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Projects;