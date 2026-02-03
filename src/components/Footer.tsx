import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin, Clock, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-white border-t border-white/10">
      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="font-serif text-3xl font-bold mb-6">Lumina Churrascaria</h2>
              <p className="text-zinc-400 max-w-md">
                Experience the timeless tradition of Southern Brazil. 
                Where rustic elegance meets culinary excellence.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="space-y-4">
                <div className="flex items-start gap-3 text-zinc-300">
                  <MapPin className="h-5 w-5 text-primary shrink-0" />
                  <div>
                    <p className="font-semibold text-white">Keller Location</p>
                    <p>1234 Main Street</p>
                    <p>Keller, TX 76248</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-zinc-300">
                  <Phone className="h-5 w-5 text-primary shrink-0" />
                  <p>(555) 123-4567</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3 text-zinc-300">
                  <Clock className="h-5 w-5 text-primary shrink-0" />
                  <div>
                    <p className="font-semibold text-white">Hours</p>
                    <p>Mon-Thu: 5pm - 10pm</p>
                    <p>Fri-Sat: 4pm - 11pm</p>
                    <p>Sun: 4pm - 9pm</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Reserve Widget */}
          <div className="bg-zinc-900 p-8 rounded-2xl border border-white/5">
            <h3 className="font-serif text-2xl font-bold mb-2">Reserve Your Table</h3>
            <p className="text-zinc-400 mb-6">Secure your spot for an unforgettable evening.</p>
            
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-zinc-300">Date</label>
                  <Input type="date" className="bg-zinc-800 border-zinc-700 text-white" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-zinc-300">Guests</label>
                  <select className="flex h-10 w-full rounded-md border border-zinc-700 bg-zinc-800 px-3 py-2 text-sm text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">
                    <option>2 Guests</option>
                    <option>4 Guests</option>
                    <option>6+ Guests</option>
                  </select>
                </div>
              </div>
              <div className="space-y-2">
                 <label className="text-sm font-medium text-zinc-300">Email</label>
                 <Input type="email" placeholder="you@example.com" className="bg-zinc-800 border-zinc-700 text-white" />
              </div>
              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold h-12">
                Find a Table
              </Button>
            </form>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 text-center text-sm text-zinc-500">
          © {new Date().getFullYear()} Lumina Churrascaria. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
