import { Button } from "@/components/ui/button";
import { ArrowRight, Flame } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-fire.jpg"
          alt="Fire roasting meat"
          className="h-full w-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        <div className="mb-6 flex items-center gap-2 rounded-full border border-primary/30 bg-black/40 px-4 py-1 text-sm font-medium text-primary backdrop-blur-sm animate-fade-in">
          <Flame className="h-4 w-4" />
          <span className="tracking-widest uppercase">The Art of Fire</span>
        </div>
        
        <h1 className="mb-6 max-w-4xl font-serif text-5xl font-bold leading-tight tracking-tight text-white sm:text-7xl md:text-8xl animate-slide-up">
          LUMINA
          <span className="block text-3xl font-light italic text-white/80 sm:text-5xl mt-2">Churrascaria</span>
        </h1>
        
        <p className="mb-10 max-w-xl text-lg text-white/90 md:text-xl font-light animate-slide-up-delay">
          Experience the authentic gaucho tradition. Unlimited premium cuts, carved tableside, paired with our gourmet market table.
        </p>

        <div className="flex flex-col gap-4 sm:flex-row animate-fade-in-delay">
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 min-w-[200px] text-lg h-14 font-serif">
            Reserve Table
          </Button>
          <Button size="lg" variant="outline" className="border-white/20 bg-white/5 text-white hover:bg-white/10 hover:text-primary min-w-[200px] text-lg h-14 font-serif backdrop-blur-sm">
            View Menu
          </Button>
        </div>
      </div>
    </section>
  );
}
