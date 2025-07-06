
import { Music, Headphones, Youtube } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-black relative">
      <div className="absolute inset-0 bg-retro-grid bg-grid opacity-10"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-retro font-bold text-transparent bg-neon-gradient bg-clip-text mb-6">
            GET IN TOUCH
          </h2>
          <div className="w-24 h-1 bg-neon-purple mx-auto"></div>
        </div>
        
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xl text-white mb-12 font-retro leading-relaxed">
            Ready to dive into the <span className="text-neon-cyan">neon-soaked soundscapes</span> of the future? 
            Connect with FLIXU for collaborations, bookings, or just to share your love for 
            <span className="text-neon-pink"> retrowave vibes</span>.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gray-900/50 border border-neon-pink/30 p-6 hover:border-neon-pink hover:bg-gray-800/50 transition-all duration-300 group">
              <Music className="w-12 h-12 text-neon-pink mx-auto mb-4 group-hover:animate-pulse" />
              <h3 className="font-retro font-bold text-white mb-2">MUSIC PLATFORMS</h3>
              <p className="text-neon-cyan text-sm font-retro">Stream & Download</p>
            </div>
            
            <div className="bg-gray-900/50 border border-neon-cyan/30 p-6 hover:border-neon-cyan hover:bg-gray-800/50 transition-all duration-300 group">
              <Headphones className="w-12 h-12 text-neon-cyan mx-auto mb-4 group-hover:animate-pulse" />
              <h3 className="font-retro font-bold text-white mb-2">LIVE SETS</h3>
              <p className="text-neon-pink text-sm font-retro">DJ Bookings</p>
            </div>
            
            <div className="bg-gray-900/50 border border-neon-purple/30 p-6 hover:border-neon-purple hover:bg-gray-800/50 transition-all duration-300 group">
              <Youtube className="w-12 h-12 text-neon-purple mx-auto mb-4 group-hover:animate-pulse" />
              <h3 className="font-retro font-bold text-white mb-2">VISUAL CONTENT</h3>
              <p className="text-neon-cyan text-sm font-retro">Music Videos</p>
            </div>
          </div>
          
          <div className="space-y-6">
            <button className="px-12 py-4 bg-transparent border-2 border-neon-pink text-neon-pink font-retro font-bold hover:bg-neon-pink hover:text-black transition-all duration-300 border-neon-glow animate-glow mr-4">
              CONTACT@FLIXU.MUSIC
            </button>
            
            <div className="flex justify-center space-x-8 pt-8">
              <div className="w-12 h-12 border-2 border-neon-cyan hover:border-neon-pink transition-colors duration-300 flex items-center justify-center cursor-pointer">
                <Music className="w-6 h-6 text-neon-cyan hover:text-neon-pink transition-colors" />
              </div>
              <div className="w-12 h-12 border-2 border-neon-pink hover:border-neon-cyan transition-colors duration-300 flex items-center justify-center cursor-pointer">
                <Headphones className="w-6 h-6 text-neon-pink hover:text-neon-cyan transition-colors" />
              </div>
              <div className="w-12 h-12 border-2 border-neon-purple hover:border-neon-cyan transition-colors duration-300 flex items-center justify-center cursor-pointer">
                <Youtube className="w-6 h-6 text-neon-purple hover:text-neon-cyan transition-colors" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
