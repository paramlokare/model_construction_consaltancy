import hero1 from "../assets/hero1.jpg";
import project1 from "../assets/project1.jpg";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import { motion } from "framer-motion";
import aboutBg from "../assets/images/about-bg.jpg";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";








const Home = () => {
  return (
    <>



      <Navbar />

      <section
        className="h-screen flex items-center justify-center text-center px-6 bg-cover bg-center relative"
        style={{
          backgroundImage: `url(${hero1})`,

        }}
      >
        
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10">

          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 2 }}
              className="text-5xl text-yellow-500"
            >
              MODEL

            </motion.h1>



            <h2 className="text-3xl md:text-4xl text-white mt-4 font-light">
              CONSTRUCTION & CONSULTANCY
            </h2>

            <p className="mt-6 text-gray-300 max-w-3xl">
              CONSTRUCTION MANAGEMENT BY MODEL CONSTRUCTION
              AND CONSULTANCY
            </p>

            <p className="text-yellow-400 mt-4">
              GST-27BRRPP2905C1ZP
            </p>
            <div className="mt-10 flex gap-4 justify-center flex-wrap">
              <a
                href="/projects"
                className="bg-yellow-500 text-black px-8 py-3 rounded-lg font-bold hover:bg-yellow-400 hover:scale-105 transition-all duration-300"
              >
                View Projects
              </a>

              <a
                href="/contact"
                className="border border-yellow-500 text-white px-6 py-3 rounded-lg hover:bg-yellow-500 hover:text-black transition-all duration-300"
              >
                Contact Us
              </a>
            </div>

          </motion.div>
        </div>

      </section >
      <section className="bg-zinc-900 py-20">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl text-center text-yellow-500 mb-12">
            Our Services
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-black p-8 rounded-xl hover:border-yellow-500 border border-transparent transition-all duration-300">
              <h3 className="text-2xl text-yellow-400 mb-4">
                Construction
              </h3>
              <p className="text-gray-400">
                Residential, Commercial and Industrial Projects.
              </p>
            </div>

            <div className="bg-black p-8 rounded-xl hover:border-yellow-500 border border-transparent transition-all duration-300">
              <h3 className="text-2xl text-yellow-400 mb-4">
                Project Management
              </h3>
              <p className="text-gray-400">
                Complete supervision and execution support.
              </p>
            </div>

            <div className="bg-black p-8 rounded-xl hover:border-yellow-500 border border-transparent transition-all duration-300">
              <h3 className="text-2xl text-yellow-400 mb-4">
                Consultancy
              </h3>
              <p className="text-gray-400">
                Planning, estimation and technical consulting.
              </p>
            </div>
            <div className="bg-black p-8 rounded-xl hover:border-yellow-500 border border-transparent transition-all duration-300">
              <h3 className="text-2xl text-yellow-400 mb-4">
                Construction
              </h3>
              <p className="text-gray-400">
                Residential, Commercial and Industrial Projects.
              </p>
            </div>

            <div className="bg-black p-8 rounded-xl hover:border-yellow-500 border border-transparent transition-all duration-300">
              <h3 className="text-2xl text-yellow-400 mb-4">
                Project Management
              </h3>
              <p className="text-gray-400">
                Complete supervision and execution support.
              </p>
            </div>

            <div className="bg-black p-8 rounded-xl hover:border-yellow-500 border border-transparent transition-all duration-300">
              <h3 className="text-2xl text-yellow-400 mb-4">
                Consultancy
              </h3>
              <p className="text-gray-400">
                Planning, estimation and technical consulting.
              </p>
            </div>

          </div>
        </div>
      </section>

      <section
        className="relative py-32 bg-fixed bg-cover bg-center"
        style={{
          backgroundImage: `url(${aboutBg})`,
        }}
      >
        <div className="absolute inset-0 bg-black/80"></div>

        <div className="relative z-10 max-w-6xl mx-auto text-center text-white">
          <h2 className="text-5xl text-yellow-500 mb-6">
            About Us
          </h2>

          <p>
            Construction Management by Model Construction and Consultancy
          </p>
        </div>
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
          <section className="relative h-screen">
             {/* <div>
                    <ImageSlider /></div>*/}
            <img  src={project1} alt="Project1"
              
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent"></div>

            <div className="relative z-10 h-full flex items-center pl-20">
              <div className="text-white">
              
        
                <h2 className="text-6xl text-yellow-500">
                  Residential Projects
                </h2>

                <p className="mt-5 text-xl">
                  Excellence in Construction Management
                </p>
              
              </div>


            </div>


          </section>

        </div>


      </section>

      <a
        href="https://wa.me/919922257909"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-xl animate-bounce"
      >
        <WhatsAppButton />
      </a>
      <Footer />

    </>
  );

};

export default Home;