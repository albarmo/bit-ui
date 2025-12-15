import Link from "next/link";
import { Terminal, Cpu, Layers, ArrowRight, Copy } from "lucide-react";

function GridBackground() {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
      <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-77.5 w-77.5 rounded-full bg-primary/20 opacity-20 blur-[100px]"></div>
    </div>
  );
}

// Komponen Terminal Mockup yang lebih cantik
function CodeWindow() {
  return (
    <div className="relative rounded-xl bg-[#0a0a0a] border border-white/10 shadow-2xl overflow-hidden w-full max-w-lg mx-auto transform transition-all hover:scale-[1.01]">
      <div className="flex items-center gap-2 px-4 py-3 bg-white/5 border-b border-white/5">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>
        <div className="ml-4 text-xs text-white/40 font-mono">bash</div>
      </div>
      <div className="p-6 font-mono text-sm space-y-2">
        <div className="flex items-center gap-2">
          <span className="text-green-400">➜</span>
          <span className="text-blue-400">~</span>
          <span className="text-white">npx my-ui init</span>
        </div>
        <div className="text-white/50 pl-4">
          <p>Initializing project...</p>
          <p>Installing dependencies...</p>
        </div>
        <div className="flex items-center gap-2 pt-2">
          <span className="text-green-400">✔</span>
          <span className="text-white">Success! Project ready.</span>
        </div>
        <div className="flex items-center gap-2 animate-pulse">
          <span className="text-green-400">➜</span>
          <span className="text-blue-400">~</span>
          <span className="w-2 h-5 bg-white/50 block"></span>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden font-sans">
      <GridBackground />

      {/* Navbar Sticky Glassmorphism */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
        <div className="container px-6 h-14 flex items-center justify-between mx-auto max-w-6xl">
          <div className="font-bold text-xl tracking-tight flex items-center gap-2">
            <div className="w-6 h-6 bg-primary rounded-md flex items-center justify-center text-primary-foreground text-xs">B</div>
            Bit UI
          </div>
          <nav className="flex items-center gap-6 text-sm font-medium text-muted-foreground">
            <Link href="/docs" className="hover:text-foreground transition-colors">Documentation</Link>
            <Link href="/components" className="hover:text-foreground transition-colors">Components</Link>
            <Link 
              href="https://github.com" 
              className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              GitHub
            </Link>
          </nav>
        </div>
      </header>

      <main className="container px-6 mx-auto max-w-6xl">
        {/* Hero Section */}
        <section className="py-20 md:py-32 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-center md:text-left space-y-8">
            <div className="inline-flex items-center rounded-full border bg-muted/50 px-3 py-1 text-sm text-muted-foreground backdrop-blur-sm">
              <span className="flex h-2 w-2 rounded-full bg-green-500 mr-2 animate-pulse"></span>
              v1.0.0 is now stable
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-foreground leading-[1.1]">
              Build UI at <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
                Warp Speed
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-lg mx-auto md:mx-0 leading-relaxed">
              Koleksi komponen modern yang ringan, accessible, dan siap pakai untuk Next.js project kamu.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
              <Link 
                href="/docs" 
                className="h-12 px-8 rounded-lg bg-primary text-primary-foreground font-medium flex items-center gap-2 hover:bg-primary/90 transition shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                Get Started <ArrowRight className="w-4 h-4" />
              </Link>
              
              <div className="h-12 px-4 rounded-lg border bg-background flex items-center gap-3 text-sm font-mono text-muted-foreground hover:border-primary/50 transition cursor-pointer group relative">
                <span className="select-all">$ npm install my-ui</span>
                <Copy className="w-4 h-4 group-hover:text-foreground transition-colors" />
              </div>
            </div>
          </div>

          <div className="flex-1 w-full max-w-xl">
            <CodeWindow />
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 border-t">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Why Choose Bit UI?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Didesain khusus untuk performa dan developer experience yang maksimal.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Terminal className="w-6 h-6 text-purple-500" />}
              title="CLI Powerful"
              desc="Inisialisasi project dan tambahkan komponen hanya dengan satu baris perintah terminal."
            />
            <FeatureCard 
              icon={<Cpu className="w-6 h-6 text-blue-500" />}
              title="Lightweight"
              desc="Hanya import apa yang kamu butuhkan. Bundle size tetap kecil dan performa aplikasi terjaga."
            />
            <FeatureCard 
              icon={<Layers className="w-6 h-6 text-green-500" />}
              title="Customizable"
              desc="Bukan black box. Code komponen sepenuhnya milikmu dan mudah dikustomisasi sesuai brand."
            />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-12 bg-muted/20">
        <div className="container px-6 mx-auto max-w-6xl flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-muted-foreground">
            © 2025 Bit Group Asia. Built with Next.js & Tailwind.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <Link href="#" className="hover:text-foreground">Twitter</Link>
            <Link href="#" className="hover:text-foreground">GitHub</Link>
            <Link href="#" className="hover:text-foreground">Discord</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="p-6 rounded-2xl border bg-background/50 hover:bg-muted/50 transition-all hover:shadow-lg hover:-translate-y-1 group">
      <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="font-bold text-xl mb-2 group-hover:text-primary transition-colors">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">
        {desc}
      </p>
    </div>
  );
}