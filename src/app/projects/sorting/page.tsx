export default function Sorting() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <div className="flex items-center gap-4 mb-6">
        <img
          src="/portfolio/sorting-icon.png"   
          alt="sorting icon"
          className="w-12 h-12 rounded-full border-2 border-stroke object-contain bg-background"
        />
        <h1 className="text-4xl font-bold text-headline">Sorting Visualizer</h1>
      </div>
      <p className="text-lg leading-relaxed mb-8">
          When I was first learning to code, sorting algorithms didn’t really
          click for me until I saw someone demonstrate them with a deck of
          cards. So, when I decided to learn more advanced algorithms like heap sort, I built a visualization tool to
          help myself understand them - and in the process, picked up some web
          development skills too. It’s simple, but it helped me build a strong foundation in both algorithmic thinking 
          and front-end development.
       </p>
       <div className="mb-8">
          <a
            href="https://shaunaat.github.io/sorting-visualizer/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-button text-buttonText font-bold px-6 py-3 rounded-xl hover:opacity-90 transition"
          >
            View Live Project
          </a>
        </div>
        <img
            src="/portfolio/gifs/sorting-vis.gif"
            alt="Sorting visualizer in action"
            className="w-full rounded-xl border-2 border-highlight shadow-md mb-8"
        />


      
    </main>
  );
}