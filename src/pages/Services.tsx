import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const services = [
  "Project Feasibility Study",
  "Quantity & Estimation",
  "Project Planning",
  "Procurement Management",
  "Quality Management",
  "Cost Management",
  "Construction Execution",
  "Interior Execution",
  "Audit Reports",
  "Interior Fitout Design"
];

const Services = () => {
  return (
    <>
      <Navbar />

      <div className="pt-32 px-6 max-w-7xl mx-auto">

        <h1 className="text-5xl text-yellow-500 mb-12">
          Services
        </h1>

        <div className="grid md:grid-cols-3 gap-8">

          {services.map((item) => (
            <div
              key={item}
              className="border border-yellow-500 rounded-xl p-6 hover:bg-yellow-500 hover:text-black transition"
            >
              {item}
            </div>
          ))}

        </div>

      </div>

      <Footer />
    </>
  );
};

export default Services;