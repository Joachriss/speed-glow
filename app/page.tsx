import Features from "@/views/homepage/feature";
import Gallery from "@/views/homepage/gallery";
import Hero from "@/views/homepage/hero";
import VideoIntro from "@/views/homepage/video-intro";

export default function Home() {
  return (
    <>
      <Hero />
      <VideoIntro />
      <Features />
      <Gallery />
    </>
    
  );
}
