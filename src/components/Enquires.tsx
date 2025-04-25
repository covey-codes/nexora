const Enquires = () => {
    return (
      <div className="relative mt-10 w-full h-[500px]">
        <img
          src="/walkdown.png"
          alt="Walk down"
          className="w-full h-full object-cover"
        />
  
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Take Your First Step Today
          </h1>
          <p className="text-md max-w-xl mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Begin your journey with confidence and support every step of the way.
          </p>
          <button className="bg-[#011d2426] text-white px-8 py-4 rounded-xl text-lg font-semibold border border-white hover:scale-110 transition-transform duration-300 shadow-xl hover:shadow-2xl">
  Get Started
</button>

        </div>
      </div>
    );
  };
  
  export default Enquires;
  