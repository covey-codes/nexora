const MeetOurTeam = () => {
  return (
    <div className="px-6 mt-20">
      <div className="flex justify-center items-center flex-col text-center">
        <h1 className="text-3xl font-semibold mb-6">Meet Our Talented Team</h1>
        <p className="text-gray-600 max-w-2xl">
          At the heart of our success is a team of passionate professionals driven by innovation<br />
          and excellence. From creative thinkers to tech wizards, each member brings a unique<br />
          expertise, collaborating seamlessly to achieve our vision.
        </p>
        <div>
          <button className="bg-[#011D26] text-white py-3 px-6 rounded-2xl mt-10 hover:scale-105 transition-transform duration-300">
            Get In Touch
          </button>
        </div>
      </div>

      <div className="flex justify-center gap-20 mt-12 flex-wrap">
  {["team1.png", "team2.png", "team3.png", "team4.png"].map((img, index) => (
    <div
      key={index}
      className="w-80 h-80 bg-gray-200 rounded-xl shadow-md overflow-hidden hover:shadow-lg hover:-translate-y-10 transition-transform duration-300 cursor-pointer"
    >
      <img
        src={`/${img}`} 
        alt={`Team member ${index + 1}`}
        className="w-full h-full object-cover"
      />
    </div>
        ))}
      </div>

      
    </div>
  );
};

export default MeetOurTeam;
