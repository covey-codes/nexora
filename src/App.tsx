import AboutUs from "./components/AboutUs";
import AbroadEnquiries from "./components/AbroadEnquiries";
import ContactUs from "./components/ContactUs";
import HeroSection from "@/components/HeroSection";
import MeetOurTeam from "./components/MeetOurTeam";
import NavbarSection from "./components/NavbarSection";
import Enquires from "./components/Enquires";

const App = () => {
  return (
    <>
      <NavbarSection />
      <HeroSection />
      <AboutUs />
      <AbroadEnquiries />
      <MeetOurTeam />
      <Enquires />
      <ContactUs />
    </>
  );
};

export default App;
