import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen bg-[#050505] text-white">
      <Header />
      <main className="flex-1 w-full pt-24">{children}</main>
      <Footer />
    </div>
  );
}
