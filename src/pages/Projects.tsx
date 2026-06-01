import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const projects = [
  "Karaswada Goa - 160000 sqft",
  "REVANTA - 115000 sqft",
  "Siddhivinayak Commercial - 110000 sqft",
  "ARTMECIYA - 70000 sqft",
  "PRAGATI APARTMENT - 60000 sqft",
  "ESSENCIYA - 35000 sqft",
  "VALENCIYA - 30000 sqft"
];

const Projects = () => {
  return (
    <>
      <Navbar />

      <div className="pt-32 px-6 max-w-7xl mx-auto">

        <h1 className="text-5xl text-yellow-500 mb-12">
          Projects
        </h1>

        <div className="grid md:grid-cols-3 gap-8">

          {projects.map((project) => (
            <div
              key={project}
              className="bg-zinc-900 rounded-xl p-6 border border-yellow-500"
            >
              <h3 className="text-xl">
                {project}
              </h3>
            </div>
          ))}

        </div>

      </div>

      <Footer />
    </>
  );
};

export default Projects;