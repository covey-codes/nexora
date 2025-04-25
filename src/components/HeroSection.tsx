const HeroSection = () => {
  return (
    <div className="relative mt-[-100px]">
      <img
        src="/nexoradashboard.png"
        alt="Dashboard"
        className="w-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-[#035772cc] to-transparent" />

      <div className="absolute inset-0 flex items-center pl-12">
        <div className="text-white max-w-xl space-y-6">
          <h1 className="text-6xl font-bold leading-tight">
            Welcome to Nexora
          </h1>
          <p className="text-2xl">
            Your trusted partner in pursuing higher education in the United States.
          </p>
          <div className="flex gap-4">
            <button className="bg-white text-[#035772] font-semibold px-8 py-4 rounded-full shadow transition-transform duration-300 transform hover:scale-110">
              Sign Up
            </button>
            <button className="border border-white text-white font-semibold px-8 py-4 rounded-full transition-transform duration-300 transform hover:scale-110">
              Request a Call Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
