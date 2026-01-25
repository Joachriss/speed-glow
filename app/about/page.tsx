import PageHero from "@/components/common/PageHero";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* HERO */}
      <PageHero
        title="Beauty That Moves With You"
        subtitle="About Speed Glow"
        punchline="We believe skincare should be simple, effective, and empowering. 
        Speed Glow was born to help you feel confident in your skin — every single day."
        image="/images/gallery/Web-3.jpg"
      />

      {/* STORY */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-6xl grid grid-cols-1 gap-16 md:grid-cols-2 items-center">

          {/* TEXT */}
          <div>
            <h2 className="text-3xl font-bold mb-6">
              Our Story
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Speed Glow was created for people who want real skincare results
              without complicated routines. We focus on clean, effective
              formulas that hydrate, brighten, and restore balance to your skin.
            </p>

            <p className="text-gray-600 text-lg leading-relaxed">
              Every product is thoughtfully designed to fit seamlessly into
              your daily life — because glowing skin isn’t about perfection,
              it’s about confidence.
            </p>
          </div>

          {/* IMAGE */}
          <div className="relative">
            <div className="absolute -inset-8 bg-pink-300/20 blur-3xl rounded-full" />
            <Image
              src="/images/gallery/all-red.jpg"
              alt="Speed Glow Beauty"
              width={600}
              height={700}
              className="relative rounded-3xl object-cover shadow-xl"
            />
          </div>

        </div>
      </section>

      {/* VALUES */}
      <section className="bg-pink-50 py-20 px-4">
        <div className="container mx-auto max-w-5xl text-center">
          <h2 className="text-3xl font-bold mb-8">
            What We Stand For
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed">
            ✨ Clean ingredients  
            ✨ Honest beauty  
            ✨ Confidence over perfection  
            ✨ Skincare that fits real lives
          </p>
        </div>
      </section>

    </div>
  );
}
