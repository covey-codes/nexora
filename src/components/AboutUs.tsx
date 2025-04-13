import InfoBox from "@/components/AboutusInfo";

const AboutUs = () => {
  return (
    <div>
      <div className="flex justify-center items-center m-10">
        <h1 className="text-white bg-[#035772] p-5 rounded-[20px]">About Us</h1>
      </div>

      <div className="flex justify-center">
        <InfoBox
          title="1. Who are we?"
          content="At Nexora, we are driven to help students achieve their dreams. By leveraging our expertise in student recruitment, we connect ambitious individuals with top universities and colleges across the US, paving the way for exceptional academic journeys."
        />
      </div>
    </div>
  );
};

export default AboutUs;
