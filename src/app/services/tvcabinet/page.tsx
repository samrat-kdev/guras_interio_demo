import Slider from "@/components/ServicesComp/Slider";
import Collage from "@/components/Pic";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TVcabinethero from "@/components/Hero/TVcabinethero";

const ClosetPage = () => {
  const collageImages = [
    "/assests/b.jpg",
    "/assests/b.jpg",
    "/assests/b.jpg",
    "/assests/b.jpg",
    "/assests/b.jpg",
    "/assests/b.jpg",

  ];

  return (
    <div>
      <Header />
      <TVcabinethero />
      <Slider beforeImage="/assests/beforemdk.jpg" afterImage="/assests/closetpic.jpg" />
      <Collage images={collageImages} />
      <Footer />
    </div>
  );
};

export default ClosetPage;
