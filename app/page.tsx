import css from "./page.module.css";
import Hero from "@/components/Hero/Hero";
import MiniAbout from "@/components/MiniAbout/MiniAbout";
import GalleryPreview from "@/components/GalleryPreview/GalleryPreview";

const Home = () => {
  return (
    <div className={css.container}>
      <Hero />
      <MiniAbout />
      <GalleryPreview />
    </div>
  );
};
export default Home;
