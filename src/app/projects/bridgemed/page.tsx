import SlideShow from "@/app/components/slideshow";

const base = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function BridgeMedAI() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <div className="flex items-center gap-4 mb-6">
        <img
          src="/portfolio/bridgemed-icon.png" 
          alt="bridgemed icon"
          className="w-12 h-12 rounded-full border-2 border-stroke object-contain bg-background"
        />
        <h1 className="text-4xl font-bold text-headline">BridgeMedAI</h1>
      </div>
      <p className="text-lg leading-relaxed mb-8">
          <strong className="text-headline">Challenge:</strong> Develop AI-driven or
            decentralized approaches to improve patient recruitment for clinical trials,
            particularly for rare diseases and personalized medicine.
        </p>

        <p className="text-lg leading-relaxed mb-6">
          <strong className="text-headline">Our Response:</strong> We wanted to
          address two major issues in healthcare:
        </p>

        <ul className="list-disc list-inside mb-6 space-y-2">
          <li>
            A lack of interoperable systems preventing efficient access to
            patient records, leading to longer diagnostic timelines and limited
            patient ownership of health data.
          </li>
          <li>
            Limited reach in clinical trial recruitment, which slows treatment
            development, especially for rare diseases.
          </li>
        </ul>

        <p className="text-lg leading-relaxed mb-8">
          To tackle these, we proposed <strong>BridgeMedAI</strong>, a secure
          hub that unifies fragmented patient records and uses AI-driven
          semantic matching to connect patients with researchers and
          specialists. Our proposal won first place for its innovative approach
          to data interoperability and ethical AI in healthcare.
        </p>

      <SlideShow
        images={[
            "./bridgemed/slides/BRIDGEMED_1.png",
            "./bridgemed/slides/BRIDGEMED_2.png",
            "./bridgemed/slides/BRIDGEMED_3.png",
            "./bridgemed/slides/BRIDGEMED_4.png",
            "./bridgemed/slides/BRIDGEMED_5.png",
            "./bridgemed/slides/BRIDGEMED_6.png",
            "./bridgemed/slides/BRIDGEMED_7.png",
            "./bridgemed/slides/BRIDGEMED_8.png",
            "./bridgemed/slides/BRIDGEMED_9.png",
            "./bridgemed/slides/BRIDGEMED_10.png",
            "./bridgemed/slides/BRIDGEMED_11.png",
            "./bridgemed/slides/BRIDGEMED_12.png",
            "./bridgemed/slides/BRIDGEMED_13.png",
            "./bridgemed/slides/BRIDGEMED_14.png",
            "./bridgemed/slides/BRIDGEMED_15.png",
            "./bridgemed/slides/BRIDGEMED_16.png",
            "./bridgemed/slides/BRIDGEMED_17.png",
            "./bridgemed/slides/BRIDGEMED_18.png",
            "./bridgemed/slides/BRIDGEMED_19.png",
            "./bridgemed/slides/BRIDGEMED_20.png",
            "./bridgemed/slides/BRIDGEMED_21.png",
            "./bridgemed/slides/BRIDGEMED_22.png",
            "./bridgemed/slides/BRIDGEMED_23.png"
        ]}
      />

      
    </main>
  );
}