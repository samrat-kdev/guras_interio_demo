import Slider from "@/components/ServicesComp/Slider";
import Collage from "@/components/Pic";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FalseCeilingHero from "@/components/Hero/FalseCeilingHero";

const ClosetPage = () => {
  const collageImages = [
    "/assests/woo.jpg",
    "/assests/woo.jpg",
    "/assests/woo.jpg",
    "/assests/woo.jpg",
    "/assests/woo.jpg",
    "/assests/woo.jpg",

  ];

  return (
    <div>
      <Header />
      <FalseCeilingHero />
      <Slider beforeImage="/assests/beforemdk.jpg" afterImage="/assests/closetpic.jpg" />
      <Collage images={collageImages} />
      <Footer />
    </div>
  );
};

export default ClosetPage;
