import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <>
      <Navbar />

      <section className="h-screen flex items-center justify-center bg-black text-center px-6">

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >

          <h1 className="text-6xl font-bold text-yellow-500">
            MODEL
          </h1>

          <h2 className="text-3xl text-white mt-4">
            CONSTRUCTION & CONSULTANCY
          </h2>

          <p className="mt-6 text-gray-300 max-w-3xl">
            CONSTRUCTION MANAGEMENT BY MODEL CONSTRUCTION
            AND CONSULTANCY
          </p>

          <p className="text-yellow-400 mt-4">
            GST-27BRRPP2905C1ZP
          </p>

        </motion.div>

      </section>

      <section className="py-20 bg-zinc-950">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl text-yellow-500 mb-8">
            Who We Are
          </h2>

          <p className="text-gray-300 text-lg leading-8">
            We are one of the most trusted construction PM consultants
            and contractors with experience of 40 lakh+ sqft projects.
          </p>

        </div>

      </section>

      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default Home;