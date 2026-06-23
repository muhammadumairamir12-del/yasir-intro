import { Hero } from "@/components/home/Hero";
import { FeaturedServices } from "@/components/home/FeaturedServices";
import { HowItWorks } from "@/components/home/HowItWorks";
import { SITE_CONFIG, MULTAN_AREAS } from "@/config/multan";
import { MapPin, ShieldCheck, ThumbsUp, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      <Hero />
      <FeaturedServices />
      <HowItWorks />
      
      {/* Why Choose Us */}
      <section className="py-24 container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">Why Choose {SITE_CONFIG.name}?</h2>
            <p className="text-lg text-muted-foreground">We are committed to providing the highest quality home services in Multan with a focus on trust and professionalism.</p>
            
            <div className="space-y-6">
              {[
                { title: "Background Verified Partners", desc: "All our service providers go through a rigorous verification process.", icon: ShieldCheck },
                { title: "Standard Pricing", desc: "Transparent upfront pricing. No hidden charges or surprises.", icon: ThumbsUp },
                { title: "Satisfaction Guarantee", desc: "If you're not satisfied, we'll make it right. Your peace of mind is our priority.", icon: ThumbsUp },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square bg-slate-100 rounded-3xl overflow-hidden shadow-2xl relative">
               <div className="absolute inset-0 flex items-center justify-center text-8xl grayscale opacity-50">🏠</div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border max-w-xs">
               <p className="font-bold text-primary mb-2">100% Satisfaction</p>
               <p className="text-sm text-muted-foreground">&quot;Best AC repair service in Gulgasht! Highly recommended.&quot;</p>
               <p className="text-xs font-semibold mt-3">— Amna K.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">We Serve All of Multan</h2>
            <p className="text-muted-foreground">Find our professional services available in your area.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {MULTAN_AREAS.map((area) => (
              <div key={area} className="bg-white p-4 rounded-xl border flex items-center gap-3 hover:border-primary transition-colors cursor-default">
                <MapPin className="h-4 w-4 text-primary shrink-0" />
                <span className="text-sm font-medium">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile App CTA */}
      <section className="py-20 container mx-auto px-4">
        <div className="bg-primary rounded-3xl p-8 md:p-16 text-white overflow-hidden relative">
          <div className="absolute right-0 bottom-0 w-1/3 h-full opacity-10 pointer-events-none">
            <Smartphone className="w-full h-full" />
          </div>
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Experience the best services on our Mobile App</h2>
            <p className="text-primary-foreground/80 text-lg mb-10">Get 20% OFF on your first booking through the app. Available on iOS and Android.</p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-slate-100 rounded-full h-14 px-8 font-bold">
                Download for iOS
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 rounded-full h-14 px-8 font-bold">
                Download for Android
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
