import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <>
      <Navbar />

      <div className="pt-32 px-6 max-w-4xl mx-auto">

        <h1 className="text-5xl text-yellow-500 mb-10">
          Contact Us
        </h1>

        <form className="space-y-4">

          <input
            type="text"
            placeholder="Name"
            className="w-full p-4 bg-zinc-900 rounded"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full p-4 bg-zinc-900 rounded"
          />

          <input
            type="text"
            placeholder="Phone"
            className="w-full p-4 bg-zinc-900 rounded"
          />

          <textarea
            rows={5}
            placeholder="Message"
            className="w-full p-4 bg-zinc-900 rounded"
          />

          <button
            className="bg-yellow-500 text-black px-8 py-3 rounded font-bold"
          >
            Send Message
          </button>

        </form>

        <div className="mt-10">

          <p>Phone : 9922257909</p>

          <p>Email : jayantconstructions@gmail.com</p>

          <p>Hinjewadi Phase 3, Pune</p>

        </div>

      </div>

      <Footer />
    </>
  );
};

export default Contact;