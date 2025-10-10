import SlideShow from "@/app/components/slideshow";

export default function Campsite() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <div className="flex items-center gap-4 mb-6">
        <img
          src="campsite-icon-2.png"
          alt="campsite icon"
          className="w-12 h-12 rounded-full border-2 border-stroke object-contain bg-background"
        />
        <h1 className="text-4xl font-bold text-headline">Campsite Scan</h1>
      </div>

       <p className="text-lg leading-relaxed mb-4 text-paragraph">
          <strong>Capstone Project</strong> - Supervised by Prof. Christian
          Muise (Queen’s MuLab)
        </p>

        <p className="text-lg leading-relaxed mb-6">
          Inspired by the growing number of forest fires in Canada, we wanted to
          explore how technology could support <em>Leave No Trace</em>
          principles and help protect our natural spaces and communities.
        </p>

        <p className="text-lg leading-relaxed mb-6">
          We built a computer vision system to detect fire risks in campsites
          using lightweight AI models optimized for mobile devices. Since no
          suitable dataset existed, we created one from scratch, gathering,
          labeling, and augmenting over 1,400 images. We also experimented with
          how labeling choices affected model performance and compared several
          model architectures to identify the most efficient.
        </p>

        <p className="text-lg leading-relaxed mb-6">
          The intended product flow was simple: when a camper finishes packing
          up, the app would use their phone camera to scan the site. If no
          hazards were detected, they’d receive a “clear to leave” message; if
          risks were found, the system would highlight them for review.
        </p>

        <p className="text-lg leading-relaxed mb-8">
          For future iterations, we envisioned expanding the dataset to include
          additional campsite hazards (like trash) and refining model deployment
          to balance on-device and cloud processing for areas with limited
          connectivity.
        </p>

      <SlideShow
        images={[
          "campsite/slides/campsite_1.png",
          "campsite/slides/campsite_2.png",
          "campsite/slides/campsite_3.png",
          "campsite/slides/campsite_4.png",
          "campsite/slides/campsite_5.png",
          "campsite/slides/campsite_6.png",
          "campsite/slides/campsite_7.png",
          "campsite/slides/campsite_8.png",
          "campsite/slides/campsite_9.png",
          "campsite/slides/campsite_10.png",
          "campsite/slides/campsite_11.png",
        ]}
      />
    </main>
  );
}