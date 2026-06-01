import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

const Home = () => {
  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-black text-white flex items-center justify-center px-6">

        <div className="text-center">

          <h1 className="text-6xl md:text-8xl font-bold text-yellow-500">
            MODEL
          </h1>

          <h2 className="text-3xl md:text-5xl mt-4">
            CONSTRUCTION & CONSULTANCY
          </h2>

          <p className="mt-6 text-gray-300 max-w-3xl mx-auto">
            Construction Management by Model Construction and Consultancy
          </p>

          <p className="mt-2 text-yellow-400">
            GST : 27BRRPP2905C1ZP
          </p>

          <div className="mt-10 flex justify-center gap-4">

            <a
              href="/projects"
              className="bg-yellow-500 text-black px-8 py-3 rounded-lg font-bold"
            >
              View Projects
            </a>

            <a
              href="/contact"
              className="border border-yellow-500 px-8 py-3 rounded-lg"
            >
              Contact Us
            </a>

          </div>

        </div>

      </section>

      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default Home;