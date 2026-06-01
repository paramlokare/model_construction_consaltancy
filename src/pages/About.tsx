import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const About = () => {
  return (
    <>
      <Navbar />

      <div className="pt-32 px-6 max-w-6xl mx-auto">

        <h1 className="text-5xl text-yellow-500 mb-10">
          About Us
        </h1>

        <p className="text-gray-300 leading-8">
          We are one of the most trusted construction PM consultants
          and contractors, providing professional expertise and
          high-quality service to every project.
        </p>

        <div className="mt-12">

          <h2 className="text-3xl text-yellow-500 mb-4">
            Our Mission
          </h2>

          <p>
            We aspire to become a top project management consultancy
            by creating a legacy of engineering marvels.
          </p>

        </div>

        <div className="mt-12">

          <h2 className="text-3xl text-yellow-500 mb-4">
            Our Vision
          </h2>

          <p>
            To improve quality of work by systemizing and optimizing
            construction methods.
          </p>

        </div>

      </div>

      <Footer />
    </>
  );
};

export default About;