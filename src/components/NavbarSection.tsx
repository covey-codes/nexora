const NavbarSection = () => {
  return (
    <div className="sticky top-0 z-50 backdrop-blur-md bg-white/30 shadow-md">
      <div className="max-w-5xl mx-auto py-3 flex items-center justify-between">
        
        <div className="mr-[]">
          <div className="ml-auto w-[70px]">
          <img src='/nexora.png' alt="logo" />
        </div>
        </div>

        <div className="flex-grow flex justify-center space-x-10 text-white font-medium">
          <ul className="list-none cursor-pointer hover:underline">
            <li>Home</li>
          </ul>
          <ul className="list-none cursor-pointer hover:underline">
            <li>About Us</li>
          </ul>
          <ul className="list-none cursor-pointer hover:underline">
            <li>Abroad Enquiries</li>
          </ul>
          <ul className="list-none cursor-pointer hover:underline">
            <li>Contact Us</li>
          </ul>
        </div>
        <button className="px-6 py-2 bg-[#011D26] text-white rounded-full hover:bg-[#03303f] transition duration-300">
            Sign Up
          </button>
        
      </div>
    </div>
  );
};

export default NavbarSection;
