import Features from "@/views/homepage/feature";
import Gallery from "@/views/homepage/gallery";
import Hero from "@/views/homepage/hero";
import ProductsSection from "@/views/homepage/productsSection";
import WhySection from "@/views/homepage/whySection";

export default function Home() {
  return (
    <>
      <Hero />
      {/* <VideoIntro /> */}
      <WhySection/>
      <ProductsSection />
      <Features />
      <Gallery />
    </>
    
  );
}
