import SlideShow from "@/app/components/slideshow";

export default function BridgeMedAI() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <div className="flex items-center gap-4 mb-6">
        <img
          src="/bridgemed-icon.png"   
          alt="bridgemed icon"
          className="w-12 h-12 rounded-full border-2 border-stroke object-contain bg-background"
        />
        <h1 className="text-4xl font-bold text-headline">BridgeMedAI</h1>
      </div>
      <p className="text-paragraph mb-6">
        Proposal developed for the Synapsis BioHackathon. Our team won <span className="font-semibold">1st place </span>
        for this idea, which focused on improving patient access to medical data and matching to clinical trials, especially for rare diseases.
      </p>

      <SlideShow
        images={[
            "/bridgemed/slides/BRIDGEMED_1.png",
            "/bridgemed/slides/BRIDGEMED_2.png",
            "/bridgemed/slides/BRIDGEMED_3.png",
            "/bridgemed/slides/BRIDGEMED_4.png",
            "/bridgemed/slides/BRIDGEMED_5.png",
            "/bridgemed/slides/BRIDGEMED_6.png",
            "/bridgemed/slides/BRIDGEMED_7.png",
            "/bridgemed/slides/BRIDGEMED_8.png",
            "/bridgemed/slides/BRIDGEMED_9.png",
            "/bridgemed/slides/BRIDGEMED_10.png",
            "/bridgemed/slides/BRIDGEMED_11.png",
            "/bridgemed/slides/BRIDGEMED_12.png",
            "/bridgemed/slides/BRIDGEMED_13.png",
            "/bridgemed/slides/BRIDGEMED_14.png",
            "/bridgemed/slides/BRIDGEMED_15.png",
            "/bridgemed/slides/BRIDGEMED_16.png",
            "/bridgemed/slides/BRIDGEMED_17.png",
            "/bridgemed/slides/BRIDGEMED_18.png",
            "/bridgemed/slides/BRIDGEMED_19.png",
            "/bridgemed/slides/BRIDGEMED_20.png",
            "/bridgemed/slides/BRIDGEMED_21.png",
            "/bridgemed/slides/BRIDGEMED_22.png",
            "/bridgemed/slides/BRIDGEMED_23.png"
        ]}
      />

      
    </main>
  );
}