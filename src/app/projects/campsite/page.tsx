import SlideShow from "@/app/components/slideshow";

export default function TravelJournalProject() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      {/* Title + Icon Row */}
      <div className="flex items-center gap-4 mb-6">
        <img
          src="/campsite-icon-2.png"
          alt="campsite icon"
          className="w-12 h-12 rounded-full border-2 border-stroke object-contain bg-background"
        />
        <h1 className="text-4xl font-bold text-headline">Campsite Scan</h1>
      </div>

      <p className="text-paragraph mb-6">
        Undergraduate capstone project exploring lightweight computer vision for detecting hazards in campsites.
      </p>

      <SlideShow
        images={[
          "/campsite/slides/campsite_1.png",
          "/campsite/slides/campsite_2.png",
          "/campsite/slides/campsite_3.png",
          "/campsite/slides/campsite_4.png",
          "/campsite/slides/campsite_5.png",
          "/campsite/slides/campsite_6.png",
          "/campsite/slides/campsite_7.png",
          "/campsite/slides/campsite_8.png",
          "/campsite/slides/campsite_9.png",
          "/campsite/slides/campsite_10.png",
          "/campsite/slides/campsite_11.png",
        ]}
      />
    </main>
  );
}