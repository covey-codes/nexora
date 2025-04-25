import InfoBox from "@/components/InfoBox";

const AboutUs = () => {
  return (
    <div>
      <div className="flex justify-center items-center m-10">
        <h1 className="text-white bg-[#035772] p-5 rounded-[20px]">About Us</h1>
      </div>

      <div className="flex justify-center mb-12">
        <InfoBox
          title="1. Who are we?"
          content="At Nexora, we are driven to help students achieve their dreams. By leveraging our expertise in student recruitment, we connect ambitious individuals with top universities and colleges across the US, paving the way for exceptional academic journeys."
          className="hover:scale-105 hover:shadow-lg transition-transform duration-300"
        />
      </div>

      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-[90%]">
          <InfoBox
            title="2. What we offer"
            content="Our team of experienced advisers will walk with you through every step, simplifying the process and ensuring your transition to studying abroad is exciting as it is seamless."
            className="w-full hover:scale-105 hover:shadow-lg transition-transform duration-300"
          />
          <InfoBox
            title="3. Our Commitment"
            content="your success is our priority, we provide dependable hassle-free services designed to align perfectly with your goals and aspirations."
            className="w-full hover:scale-105 hover:shadow-lg transition-transform duration-300"
          />
          <InfoBox
            title="4. Our Mission"
            content="Our mission is to help students fufill their academic and career goals by linking them with top-tier educational institutions in the US."
            className="w-full hover:scale-105 hover:shadow-lg transition-transform duration-300"
          />
          <InfoBox
            title="5. Our Vision?"
            content="our vission is to become a global leader in the educational consultancy, crreating pathways for students to excel in diverse and thriving academic environments."
            className="w-full hover:scale-105 hover:shadow-lg transition-transform duration-300"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
