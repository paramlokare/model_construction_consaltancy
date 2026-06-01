import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/919922257909"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 p-4 rounded-full text-3xl z-50"
    >
      <FaWhatsapp />
    </a>
  );
};

export default WhatsAppButton;