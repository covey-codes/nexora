import { FaPhoneAlt, FaMapMarkerAlt, FaHome } from "react-icons/fa";

const ContactUs = () => {
  return (
    <div className="bg-[#035772] text-white py-16 px-8">
      <div className="text-center font-bold text-4xl mb-12">Contact Us!!</div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">Get In Touch</h2>
          <p>Lets start your journey towards success. Reach out to us today:</p>
          
          <div className="flex items-center space-x-4">
            
            <FaPhoneAlt size={20} />
            <p>Call: +234 800 123 4567</p>
          </div>
          <div className="flex flex-col space-y-2 space-x-3">
            
            <p>Email: contact@nexora.com</p>
            <p>stay connected with us on social media <br /> for updates, tips and success stories from our students.</p>
          </div>

          <div className="flex items-center space-x-3">
            <FaMapMarkerAlt size={20} />
            <p>Address: 123 Main Street, Lagos, Nigeria</p>
          </div>

          <div className="flex items-center space-x-3">
            <FaHome size={20} />
            <p>23Dud, House No. 12</p>
          </div>
          <div>
            <img className="rounded-xl" src="/map.png" alt="" />
          </div>
          <div><p>© 2024 powered by Seedgap Ltd </p></div>
        </div>

        <div className="bg-[#035772CC] bg-opacity-80 rounded-xl p-6 text-black shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Leave a Message</h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#035772]"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#035772]"
            />
            <textarea
              placeholder="Message"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 h-28 resize-none focus:outline-none focus:ring-2 focus:ring-[#035772]"
            ></textarea>
            <button
              type="submit"
              className="bg-[#035772] text-white px-6 py-3 rounded-xl font-semibold hover:scale-105 transition-transform duration-300 border border-white"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
