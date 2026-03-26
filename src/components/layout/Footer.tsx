import Link from "next/link";
import { Rabbit } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/5 py-16 bg-[#050505] w-full flex justify-center">
      <div className="w-full max-w-[95%] mx-auto flex flex-col md:flex-row justify-between items-center gap-6 px-4">
        
        <div className="flex items-center gap-3 cursor-pointer group">
          <div className="w-8 h-8 rounded-full border border-white/5 flex items-center justify-center bg-[#151515]">
            <Rabbit className="w-4 h-4 text-white" />
          </div>
          <span className="font-semibold text-lg tracking-tight text-white">Krud AI</span>
        </div>
        
        <div className="flex items-center gap-8 text-sm font-medium text-gray-400">
          <Link href="/blog/what-is-a-cli-agent" className="hover:text-white transition-colors">Philosophy</Link>
          <Link href="/blog/how-to-install-krud-ai" className="hover:text-white transition-colors">Documentation</Link>
          <Link href="https://github.com/max345789/krud-ai" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Security</Link>
        </div>
        
        <div className="text-sm text-gray-600 font-medium">
          © {new Date().getFullYear()} Krud AI. All rights strictly reserved.
        </div>
      </div>
    </footer>
  );
}
