import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

<motion.div
  initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
>
  Contact Content
</motion.div>

const Contact = () => {
  return (
    <>
      <Navbar />

      <section className="py-24 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-12">

            {/* Left Side */}
            <div>
              <h2 className="text-5xl font-bold mb-6">
                <span className="text-black">Get In</span>{" "}
                <span className="text-[#D4AF37]">Touch</span>
              </h2>

              <p className="text-gray-600 text-lg leading-8">
                Whether you're planning a residential, commercial,
                or real estate development project, our team is ready
                to assist you.
              </p>

              <div className="mt-10 space-y-6">

                <div className="bg-white p-6 rounded-2xl shadow-lg">
                  <h3 className="font-bold text-gray-600 text-lg leading-8">📞 Phone</h3>
                  <p className="text-gray-600 text-lg leading-8">+91 98765 43210</p>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-lg">
                  <h3 className="font-bold text-gray-600 text-lg leading-8">📧 Email</h3>
                  <p className="text-gray-600 text-lg leading-8">info@modelconstruction.com</p>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-lg">
                  <h3 className="font-bold text-gray-600 text-lg leading-8">📍 Office</h3>
                  <p className="text-gray-600 text-lg leading-8">Pune, Maharashtra, India</p>
                </div>
                
              </div>
            </div>

            {/* Form */}
            <div className="backdrop-blur-xl bg-white/70 shadow-2xl rounded-3xl p-10">

              <form className="space-y-6">

                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-4 rounded-xl border focus:border-[#D4AF37] outline-none"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full p-4 rounded-xl border focus:border-[#D4AF37] outline-none"
                />

                <input
                  type="text"
                  placeholder="Phone Number"
                  className="w-full p-4 rounded-xl border focus:border-[#D4AF37] outline-none"
                />

                <textarea
                  rows={5}
                  placeholder="Your Message"
                  className="w-full p-4 rounded-xl border focus:border-[#D4AF37] outline-none"
                />

                <button
                  className="w-full bg-[#D4AF37] text-black font-bold py-4 rounded-xl hover:scale-105 transition duration-300"
                >
                  Send Message
                </button>

              </form>

            </div>

          </div>

        </div>
      </section>

      <Footer />
    </>
  );
};

export default Contact;