import { Star } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

export default function ExperienceSteps() {
  const steps = [
    {
      icon: <Disc className="h-10 w-10" />,
      title: "Flip The Token",
      desc: "Green means 'Go'. Our gauchos will immediately begin serving you. Flip to Red when you need a pause."
    },
    {
      icon: <UtensilsCrossed className="h-10 w-10" />,
      title: "Carved Tableside",
      desc: "Watch as our chefs carve succulent cuts of beef, lamb, pork, and chicken directly onto your plate."
    },
    {
      icon: <Wine className="h-10 w-10" />,
      title: "Savor & Repeat",
      desc: "Pair with a bottle from our award-winning wine list. The experience continues as long as you wish."
    }
  ];

  return (
    <section className="bg-muted/30 py-24 relative overflow-hidden">
        {/* Background Texture */}
        <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"}} />

      <div className="container relative mx-auto px-4">
        <div className="mb-16 text-center">
          <span className="text-primary font-bold tracking-widest uppercase text-sm">How it works</span>
          <h2 className="font-serif text-3xl font-bold mt-3 sm:text-4xl">Skewer to Table</h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <div key={index} className="group relative">
              {/* Connector Line (Desktop) */}
              {index !== steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-1/2 w-full h-px bg-border -z-10" />
              )}
              
              <Card className="border-none bg-background/50 shadow-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:bg-background">
                <CardContent className="flex flex-col items-center p-8 text-center">
                  <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-background border border-primary/20 shadow-sm group-hover:border-primary transition-colors">
                    <div className="text-primary group-hover:scale-110 transition-transform duration-300">
                      {step.icon}
                    </div>
                  </div>
                  <h3 className="mb-3 font-serif text-xl font-bold">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
