
const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-dark-gradient relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-retro-grid bg-grid opacity-5"></div>
      <div className="absolute top-20 right-10 w-32 h-32 border border-neon-purple rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
      <div className="absolute bottom-20 left-10 w-24 h-24 border border-neon-cyan animate-pulse"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-retro font-bold text-transparent bg-neon-gradient bg-clip-text mb-6">
              ABOUT FLIXU
            </h2>
            <div className="w-24 h-1 bg-neon-cyan mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-white leading-relaxed font-retro">
                Crafting the sounds of tomorrow with the nostalgia of yesterday. FLIXU brings you into a world where 
                <span className="text-neon-pink"> neon lights</span> meet digital dreams and 
                <span className="text-neon-cyan"> synthetic melodies</span> paint the night sky.
              </p>
              
              <p className="text-lg text-white leading-relaxed font-retro">
                Specializing in <span className="text-neon-purple">Retrowave</span>, 
                <span className="text-neon-pink"> Synthwave</span>, and 
                <span className="text-neon-cyan"> Cyberpunk</span> soundscapes that transport you to the electric highways of a cybernetic future.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-6">
                <span className="px-4 py-2 border border-neon-pink text-neon-pink font-retro text-sm hover:bg-neon-pink hover:text-black transition-all duration-300">
                  SYNTHWAVE
                </span>
                <span className="px-4 py-2 border border-neon-cyan text-neon-cyan font-retro text-sm hover:bg-neon-cyan hover:text-black transition-all duration-300">
                  RETROWAVE
                </span>
                <span className="px-4 py-2 border border-neon-purple text-neon-purple font-retro text-sm hover:bg-neon-purple hover:text-black transition-all duration-300">
                  CYBERPUNK
                </span>
              </div>
            </div>
            
            <div className="relative">
              <div className="w-full h-64 bg-gradient-to-br from-neon-pink/20 to-neon-cyan/20 border border-neon-cyan/50 relative overflow-hidden">
                <div className="absolute inset-0 bg-retro-grid bg-grid opacity-30"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-4xl font-retro font-bold text-neon-pink animate-neon-pulse">
                    ♫ FLIXU ♫
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-neon-pink/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
