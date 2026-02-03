import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";

const features = {
  meats: [
    "Picanha (Prime Top Sirloin)",
    "Costela (Beef Ribs)",
    "Cordeiro (Lamb Chops)",
    "Frango (Bacon-Wrapped Chicken)"
  ],
  market: [
    "Imported Cheeses & Charcuterie",
    "Fresh Exotic Salads",
    "Smoked Salmon",
    "Hot Seasonal Sides"
  ]
};

export default function GauchoGuide() {
  const [activeTab, setActiveTab] = useState("meat");

  return (
    <section className="bg-background py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="font-serif text-4xl font-bold text-foreground sm:text-5xl">The Gaucho Guide</h2>
          <p className="mt-4 text-lg text-muted-foreground">Select your experience. Unlimited possibilities.</p>
        </div>

        <Tabs defaultValue="meat" className="w-full" onValueChange={setActiveTab}>
          <div className="flex justify-center mb-12">
            <TabsList className="grid w-full max-w-md grid-cols-2 bg-muted/20 p-1">
              <TabsTrigger 
                value="meat" 
                className="text-lg font-serif data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                The Rodizio
              </TabsTrigger>
              <TabsTrigger 
                value="market" 
                className="text-lg font-serif data-[state=active]:bg-emerald-700 data-[state=active]:text-white"
              >
                Market Table
              </TabsTrigger>
            </TabsList>
          </div>

          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            {/* Text Content */}
            <div className="order-2 lg:order-1">
              <TabsContent value="meat" className="mt-0 space-y-6">
                <div className="space-y-4">
                  <h3 className="text-3xl font-bold text-primary">Fire-Roasted Perfection</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Our gauchos roam the dining room continuously, offering 15+ cuts of meat prepared on open flame. You control the pace with your dining card.
                  </p>
                </div>
                <ul className="grid gap-4 sm:grid-cols-2">
                  {features.meats.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-foreground/90">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/20 text-primary">
                        <Check className="h-3.5 w-3.5" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </TabsContent>

              <TabsContent value="market" className="mt-0 space-y-6">
                <div className="space-y-4">
                  <h3 className="text-3xl font-bold text-emerald-600">Fresh & Gourmet</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Balance the richness of the rodizio with our expansive Market Table. Featuring 50+ fresh items, including imported cheeses, artisan breads, and crisp vegetables.
                  </p>
                </div>
                <ul className="grid gap-4 sm:grid-cols-2">
                  {features.market.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-foreground/90">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-600">
                        <Check className="h-3.5 w-3.5" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </TabsContent>
            </div>

            {/* Visual */}
            <div className="order-1 lg:order-2">
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-muted">
                 {/* Cross-fade simulation with absolute positioning */}
                 <img
                  src="/images/meat-service.jpg"
                  alt="Gaucho carving meat"
                  className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${activeTab === 'meat' ? 'opacity-100' : 'opacity-0'}`}
                />
                <img
                  src="/images/market-table.jpg"
                  alt="Fresh market table salad bar"
                  className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${activeTab === 'market' ? 'opacity-100' : 'opacity-0'}`}
                />
                
                {/* Decorative border */}
                <div className="absolute inset-0 rounded-xl border-2 border-white/10 ring-1 ring-black/20" />
              </div>
            </div>
          </div>
        </Tabs>
      </div>
    </section>
  );
}
