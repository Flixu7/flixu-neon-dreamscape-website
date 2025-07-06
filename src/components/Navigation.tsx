
import { Music, Headphones, Youtube } from "lucide-react";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-neon-cyan/30">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-retro font-bold text-neon-pink animate-neon-pulse">
            FLIXU
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-white hover:text-neon-cyan transition-colors duration-300 font-retro">
              HOME
            </a>
            <a href="#music" className="text-white hover:text-neon-cyan transition-colors duration-300 font-retro">
              MUSIC
            </a>
            <a href="#about" className="text-white hover:text-neon-cyan transition-colors duration-300 font-retro">
              ABOUT
            </a>
            <a href="#contact" className="text-white hover:text-neon-cyan transition-colors duration-300 font-retro">
              CONTACT
            </a>
          </div>
          
          <div className="flex items-center space-x-4">
            <Music className="w-6 h-6 text-neon-pink hover:text-neon-cyan transition-colors cursor-pointer" />
            <Headphones className="w-6 h-6 text-neon-pink hover:text-neon-cyan transition-colors cursor-pointer" />
            <Youtube className="w-6 h-6 text-neon-pink hover:text-neon-cyan transition-colors cursor-pointer" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
