import Slider from "@/components/ServicesComp/Slider";
import Collage from "@/components/Pic";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ParquetingHero from "@/components/Hero/ParquetingHero";

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
      <ParquetingHero />
      <Slider beforeImage="/assests/beforemdk.jpg" afterImage="/assests/closetpic.jpg" />
      <Collage images={collageImages} />
      <Footer />
    </div>
  );
};

export default ClosetPage;
