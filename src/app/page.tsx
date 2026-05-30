import Hero from "@/components/home/Hero";
import FeaturedCategories from "@/components/home/FeaturedCategories";
import BestSellers from "@/components/home/BestSellers";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import InstagramReels from "@/components/home/InstagramReels";
import Reviews from "@/components/home/Reviews";
import GalleryPreview from "@/components/home/GalleryPreview";

export default function Home() {
  return (
    <>
      <Hero />
      <InstagramReels />
      <FeaturedCategories />
      <BestSellers />
      <WhyChooseUs />
      <Reviews />
      <GalleryPreview />
    </>
  );
}
