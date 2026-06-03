import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import hero from "../assets/cityscape.jpg";

const services = [
  {
    title: "Residential Construction",
    desc: "Premium residential projects built with modern architecture and superior quality materials.",
    icon: "🏠",
  },
  {
    title: "Commercial Projects",
    desc: "Office spaces, retail complexes, and commercial developments tailored to business needs.",
    icon: "🏢",
  },
  {
    title: "Real Estate Development",
    desc: "End-to-end development solutions from planning to project completion.",
    icon: "📈",
  },
  {
    title: "Interior Design",
    desc: "Luxury interiors designed to maximize comfort and elegance.",
    icon: "✨",
  },
  {
    title: "Project Management",
    desc: "Professional supervision ensuring timely and cost-effective execution.",
    icon: "📋",
  },
  {
    title: "Renovation & Remodeling",
    desc: "Transforming old spaces into modern and functional environments.",
    icon: "🔨",
  },
];

const Services = () => {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section
        className="h-[70vh] bg-cover bg-center relative"
        style={{ backgroundImage: `url(${hero})` }}
      >
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-6xl font-bold text-white mb-4">
              Our Services
            </h1>
            <p className="text-gray-300 text-xl">
              Delivering Excellence In Construction & Real Estate
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-5xl font-extrabold">
              <span className="text-black">What We Offer</span>{" "}
              
            </h2>

            <div className="w-32 h-1 bg-[#D4AF37] mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:-translate-y-3 hover:shadow-2xl transition-all duration-300"
              >
                <div className="text-5xl mb-5">{service.icon}</div>
                <h3 className="text-2xl font-semibold mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-7">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Why Choose Model Constructions?
              </h2>

              <ul className="space-y-5 text-gray-700">
                <li>✔ 15+ Years Industry Experience</li>
                <li>✔ Premium Construction Quality</li>
                <li>✔ Transparent Pricing</li>
                <li>✔ On-Time Project Delivery</li>
                <li>✔ Dedicated Support Team</li>
              </ul>
            </div>

            <div className="bg-yellow-500 rounded-3xl p-10 text-black">
              <h3 className="text-5xl font-bold mb-4">500+</h3>
              <p className="text-xl">Successfully Completed Projects</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            Our Process
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              "Consultation",
              "Planning",
              "Construction",
              "Delivery",
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-yellow-500 rounded-full mx-auto mb-4 flex items-center justify-center text-black font-bold text-xl">
                  {index + 1}
                </div>
                <h3 className="text-xl">{step}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-yellow-500 text-center">
        <h2 className="text-5xl font-bold mb-6">
          Ready To Build Your Dream Project?
        </h2>

        <button className="bg-black text-white px-8 py-4 rounded-full hover:bg-gray-800 transition">
          Contact Us
        </button>
      </section>

      <Footer />
    </>
  );
};

export default Services;