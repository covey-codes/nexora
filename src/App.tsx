import AboutUs from "./components/AboutUs";
import AbroadEnquiries from "./components/AbroadEnquiries";
import ContactUs from "./components/ContactUs";
import HeroSection from "./components/HeroSection";
import MeetOurTeam from "./components/MeetOurTeam";
import NavbarSection from "./components/NavbarSection";

const App = () => {
  return (
    <>
      <NavbarSection />
      <HeroSection />
      <AboutUs />
      <AbroadEnquiries />
      <MeetOurTeam />
      <ContactUs />
    </>
  );
};

export default App;
