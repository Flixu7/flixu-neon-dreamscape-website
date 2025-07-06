
const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-dark-gradient">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-retro-grid bg-grid opacity-20 animate-pulse"></div>
      
      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-20 w-16 h-16 border-2 border-neon-pink rotate-45 animate-float"></div>
      <div className="absolute top-40 right-32 w-12 h-12 border-2 border-neon-cyan animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-40 left-40 w-8 h-8 bg-neon-purple animate-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="text-center z-10 px-6">
        <h1 className="text-6xl md:text-8xl font-retro font-black text-transparent bg-neon-gradient bg-clip-text animate-neon-pulse mb-8">
          FLIXU
        </h1>
        
        <div className="text-xl md:text-2xl font-retro text-white mb-4 tracking-widest">
          RETROWAVE • SYNTHWAVE • CYBERPUNK
        </div>
        
        <div className="text-lg text-neon-cyan mb-12 font-retro">
          ELECTRONIC MUSIC PRODUCER
        </div>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button className="px-8 py-4 bg-transparent border-2 border-neon-pink text-neon-pink font-retro font-bold hover:bg-neon-pink hover:text-black transition-all duration-300 border-neon-glow animate-glow">
            LISTEN NOW
          </button>
          <button className="px-8 py-4 bg-transparent border-2 border-neon-cyan text-neon-cyan font-retro font-bold hover:bg-neon-cyan hover:text-black transition-all duration-300 border-neon-glow">
            LATEST TRACKS
          </button>
        </div>
      </div>
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
    </section>
  );
};

export default Hero;
