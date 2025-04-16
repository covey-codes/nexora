import ServiceBox from "@/components/ServiceBox";

const AbroadEnquiries = () => {
  return (
    <div className="bg-[#035772] min-h-screen mt-[100px] px-4 pb-10">
      <div className="flex justify-center mb-6">
        <div className="bg-white px-10 py-4 mt-[50px] rounded-[20px]">
          <h1 className="text-[#035772] text-2xl font-semibold text-center">
            Abroad Enquiries
          </h1>
        </div>
      </div>

      <div className="flex justify-center mb-10">
        <p className="text-white max-w-2xl text-center text-lg leading-relaxed">
          Our comprehensive range of services ensures that your journey to studying in the UK is smooth, efficient, and enriching.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto mt-10">
        <ServiceBox
          image='/graduate.png'
          title="Admissions"
          intro="The US university admission process can be complex, but we are here to simplify it for you. Our team provides personalized support to help you."
          points={[
            "Select the perfect course and institution for your goals",
            "Craft and submit standout applications",
            "Confidently handle interviews and meet admission criteria",
          ]}
        />

        <ServiceBox
          image='/contact.png'
          title="Visa"
          intro="Securing a US student visa is a crusial part of your journey, and we are here to make it easy. Our visa experts will."
          points={[
            "Guide you through all the visa requirements",
            "Assit with reviewing and completing your applications",
            "Ensure a smooth, hassle-free visa process from start to finish.",
          ]}
        />
      </div>

      <div className="flex flex-col gap-6 max-w-4xl mx-auto mt-10">
        <ServiceBox
          image='/dollar.png'
          title="Funding"
          intro="Education is a valuable experience, and we are committed to helping you make it affordable. We offer:"
          points={[
            "Expert advise on finding scholarship opportunities",
            "Guidiance on student loans and effective financial planning",
            "Support in securing grants and bursaries to ease your financial journey",
          ]}
        />

        <ServiceBox
          image='/house.png'
          title="Living in the UK"
          intro="Adjusting to life in a new country can be both exciting and challanging. Seedgap provides practical support to help you settle in."
          points={[
            "Accommodations: Discover safe, convenient housing options",
            "jobs: Acess part-time job oppurtunities to support your studies",
            "Social integration: Connect with new friends and immerse yourself in the UK's vibrant culture.",
          ]}
        />
      </div>
    </div>
  );
};

export default AbroadEnquiries;
