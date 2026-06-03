import hero from "../assets/hero.jpg";
import project1 from "../assets/project1.jpg";
import project2 from "../assets/project2.jpg";
import project3 from "../assets/project3.jpg";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

const Home = () => {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section
        className="min-h-screen bg-cover bg-center bg-fixed relative flex items-center justify-center text-white"
        style={{
          backgroundImage: "url('/images/hero1.jpg')",


        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <img
          src={hero}
          alt="Hero"
          className="w-full h-96 object-cover"
        />
        <div className="relative z-10 text-center px-6">
          <h1 className="text-6xl md:text-8xl font-bold text-yellow-500">
            MODEL
          </h1>

          <h2 className="text-3xl md:text-5xl mt-4">
            CONSTRUCTION & CONSULTANCY
          </h2>

          <p className="mt-6 text-gray-300 max-w-3xl mx-auto text-lg">
            Delivering excellence in residential, commercial and industrial
            construction projects with quality, innovation and trust.
          </p>

          <p className="mt-3 text-yellow-400 font-semibold">
            GST : 27BRRPP2905C1ZP
          </p>

          <div className="mt-10 flex justify-center gap-4 flex-wrap">
            <a
              href="/projects"
              className="bg-yellow-500 text-black px-8 py-3 rounded-lg font-bold hover:bg-yellow-400 transition"
            >
              View Projects
              <img src={project1} alt="Project" />
              <img src={project2} alt="Project" />
              <img src={project3} alt="Project" />
            </a>

            <a
              href="/contact"
              className="border border-yellow-500 px-8 py-3 rounded-lg hover:bg-yellow-500 hover:text-black transition"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-zinc-950 text-white py-20 px-6">
        <div className="max-w-7xl mx-auto">

          <h2 className="text-4xl font-bold text-center text-yellow-500 mb-12">
            Our Services
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-zinc-900 p-8 rounded-xl hover:scale-105 transition">
              <h3 className="text-2xl font-bold text-yellow-400 mb-4">
                Residential Construction
              </h3>
              <p className="text-gray-300">
                Premium homes, villas and apartment projects built with
                modern engineering standards.
              </p>
            </div>

            <div className="bg-zinc-900 p-8 rounded-xl hover:scale-105 transition">
              <h3 className="text-2xl font-bold text-yellow-400 mb-4">
                Commercial Projects
              </h3>
              <p className="text-gray-300">
                Office buildings, retail spaces and business infrastructure
                designed for long-term success.
              </p>
            </div>

            <div className="bg-zinc-900 p-8 rounded-xl hover:scale-105 transition">
              <h3 className="text-2xl font-bold text-yellow-400 mb-4">
                Consultancy Services
              </h3>
              <p className="text-gray-300">
                Expert planning, project management and technical consultancy
                for construction excellence.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Projects Showcase */}
      <section className="bg-black text-white py-20 px-6">
        <div className="max-w-7xl mx-auto">

          <h2 className="text-4xl font-bold text-center text-yellow-500 mb-12">
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="overflow-hidden rounded-xl">

              <img src="/images/project1.jpg" />
              <img src="/images/project2.jpg" />
              <img src="/images/project3.jpg" />
            </div>

          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-zinc-950 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">

          <h2 className="text-4xl font-bold text-yellow-500 mb-10">
            Why Choose Model Construction
          </h2>

          <div className="grid md:grid-cols-4 gap-8">

            <div>
              <h3 className="text-5xl text-yellow-400 font-bold">10+</h3>
              <p className="mt-3">Years Experience</p>
            </div>

            <div>
              <h3 className="text-5xl text-yellow-400 font-bold">100+</h3>
              <p className="mt-3">Projects Delivered</p>
            </div>

            <div>
              <h3 className="text-5xl text-yellow-400 font-bold">50+</h3>
              <p className="mt-3">Satisfied Clients</p>
            </div>

            <div>
              <h3 className="text-5xl text-yellow-400 font-bold">24/7</h3>
              <p className="mt-3">Project Support</p>
            </div>

          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default Home;