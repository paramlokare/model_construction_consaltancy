import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import aboutBanner from "../assets/about-banner.jpg";
import companyImage from "../assets/company.jpg";
import construction1 from "../assets/construction2.jpg";
import construction2 from "../assets/construction2.jpg";
import construction3 from "../assets/construction2.jpg";

const About = () => {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section
        className="h-[60vh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${aboutBanner})` }}
      >
        <div className="bg-black/60 w-full h-full flex items-center justify-center">
          <h1 className="text-5xl md:text-6xl text-white font-bold">
            About Us
          </h1>
        </div>
      </section>

      {/* Company Info */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          <div>
            <img
              src={companyImage}
              alt="Company"
              className="rounded-xl shadow-2xl hover:scale-105 duration-300"
            />
          </div>

          <div>
            <h2 className="text-4xl font-bold mb-6">
              Building Excellence Since 2010
            </h2>

            <p className="text-gray-600 leading-8">
              We specialize in residential, commercial and industrial
              construction projects. Our experienced team delivers
              high-quality developments with modern designs and
              sustainable construction practices.
            </p>

            <div className="grid grid-cols-3 gap-6 mt-10">
              <div>
                <h3 className="text-4xl font-bold text-yellow-500">50+</h3>
                <p>Projects</p>
              </div>

              <div>
                <h3 className="text-4xl font-bold text-yellow-500">15+</h3>
                <p>Years</p>
              </div>

              <div>
                <h3 className="text-4xl font-bold text-yellow-500">100%</h3>
                <p>Satisfaction</p>
              </div>
            </div>
          </div>

        </div>
      </section>
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            Our Work
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <img src={construction1} className="rounded-xl hover:scale-105 duration-300" />
            <img src={construction2} className="rounded-xl hover:scale-105 duration-300" />
            <img src={construction3} className="rounded-xl hover:scale-105 duration-300" />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default About;