
import { Music } from "lucide-react";

const MusicSection = () => {
  const tracks = [
    {
      title: "Neon Dreams",
      genre: "Synthwave",
      duration: "4:23",
      year: "2024"
    },
    {
      title: "Cyber Highway",
      genre: "Retrowave",
      duration: "3:45",
      year: "2024"
    },
    {
      title: "Digital Rain",
      genre: "Cyberpunk",
      duration: "5:12",
      year: "2023"
    },
    {
      title: "Miami Nights",
      genre: "Synthwave",
      duration: "4:01",
      year: "2023"
    }
  ];

  return (
    <section id="music" className="py-24 bg-black relative">
      <div className="absolute inset-0 bg-retro-grid bg-grid opacity-10"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-retro font-bold text-transparent bg-neon-gradient bg-clip-text mb-6">
            FEATURED TRACKS
          </h2>
          <div className="w-24 h-1 bg-neon-pink mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {tracks.map((track, index) => (
            <div
              key={index}
              className="bg-gray-900/50 border border-neon-cyan/30 p-6 hover:border-neon-pink/60 transition-all duration-300 group hover:bg-gray-800/50"
            >
              <div className="flex items-center justify-between mb-4">
                <Music className="w-8 h-8 text-neon-pink group-hover:text-neon-cyan transition-colors" />
                <span className="text-neon-cyan font-retro text-sm">{track.year}</span>
              </div>
              
              <h3 className="text-xl font-retro font-bold text-white mb-2 group-hover:text-neon-pink transition-colors">
                {track.title}
              </h3>
              
              <div className="flex justify-between items-center text-sm">
                <span className="text-neon-cyan font-retro">{track.genre}</span>
                <span className="text-white font-retro">{track.duration}</span>
              </div>
              
              <div className="mt-4 w-full bg-gray-700 h-1">
                <div className="bg-neon-pink h-1 w-0 group-hover:w-full transition-all duration-1000"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MusicSection;
