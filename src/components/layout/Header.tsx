import Link from "next/link";
import { User, Shield, ArrowUpRight, Rabbit } from "lucide-react";

export function Header() {
  return (
    <header className="w-full flex justify-center pt-6 px-6 lg:px-12 fixed z-50 pointer-events-none">
      <div className="w-full max-w-[95%] flex items-center justify-between pointer-events-auto">
        
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
            {/* Using Rabbit as the core logo icon but keeping it white/black as in the shot */}
            <Rabbit className="w-6 h-6 text-black" fill="currentColor" />
          </div>
          <span className="text-xl font-medium tracking-tight text-white hidden sm:block">Krud AI</span>
        </div>

        {/* Center Nav Pill */}
        <nav className="hidden lg:flex items-center bg-[#151515]/90 backdrop-blur-md border border-white/5 rounded-full px-2 py-2">
          <div className="flex items-center px-4 space-x-8 text-sm font-medium text-gray-300">
            <Link href="#" className="text-white hover:text-white transition-colors">Home</Link>
            <Link href="#" className="hover:text-white transition-colors">Terminal App</Link>
            <Link href="#" className="hover:text-white transition-colors">Assets</Link>
            <Link href="#" className="hover:text-white transition-colors">Features</Link>
            <Link href="#" className="hover:text-white transition-colors">Pricing</Link>
            <Link href="#" className="hover:text-white transition-colors">FAQ</Link>
          </div>
          
          <div className="flex items-center ml-4 pl-4 border-l border-white/10 gap-2">
            <Link href="#" className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 text-gray-300 text-xs font-medium transition-colors">
              Protection <ArrowUpRight className="w-3 h-3 text-gray-400" />
            </Link>
            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center cursor-pointer">
              <Shield className="w-4 h-4 text-black" />
            </div>
          </div>
        </nav>

        {/* Right CTA */}
        <div className="flex items-center gap-3">
          <Link href="/signup" className="flex items-center gap-2 text-sm font-medium text-white hover:text-gray-300 transition-colors">
            <User className="w-4 h-4" />
            Create Account
          </Link>
        </div>

      </div>
    </header>
  );
}
