import Link from "next/link";
import { ALL_SERVICES, CATEGORIES } from "@/config/multan";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Wrench, Sparkles, Settings, Home as HomeIcon, LucideIcon } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const iconMap: Record<string, LucideIcon> = {
  Wrench: Wrench,
  Sparkles: Sparkles,
  Settings: Settings,
  Home: HomeIcon,
};

export function FeaturedServices() {
  const featured = ALL_SERVICES.slice(0, 8);

  return (
    <section className="py-24 container mx-auto px-4">
      <div className="flex flex-col md:flex-row justify-between items-end gap-4 mb-12">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">Popular Services</h2>
          <p className="text-muted-foreground text-lg">Most booked services in Multan right now.</p>
        </div>
        <Link 
          href="/services" 
          className={cn(buttonVariants({ variant: "outline" }))}
        >
          View All Services <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {featured.map((service) => (
          <Link key={service.id} href={`/services/${service.slug}`}>
            <Card className="group hover:shadow-xl transition-all duration-300 border-slate-100 overflow-hidden">
              <div className="aspect-[4/3] bg-slate-100 relative overflow-hidden">
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-4xl">🛠️</span>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-2">
                   <h3 className="font-bold text-lg group-hover:text-primary transition-colors">{service.name}</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-4">Professional {service.name.toLowerCase()} for your home in Multan.</p>
                <div className="flex items-center text-primary font-semibold text-sm">
                  Book Now <ArrowRight className="ml-1 h-3 w-3 opacity-0 group-hover:opacity-100 transition-all translate-x-0 group-hover:translate-x-1" />
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      <div className="mt-20">
        <h3 className="text-2xl font-bold mb-8 text-center">Top Categories</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {CATEGORIES.map((cat) => {
            const Icon = iconMap[cat.icon || "Wrench"];
            return (
              <Link key={cat.id} href={`/categories/${cat.id}`}>
                <Card className="hover:border-primary transition-all text-center p-8 bg-slate-50 border-none shadow-none group">
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-sm group-hover:bg-primary group-hover:text-white transition-all">
                    <Icon className="h-8 w-8" />
                  </div>
                  <h4 className="font-bold text-slate-900">{cat.name}</h4>
                  <p className="text-xs text-muted-foreground mt-2">{cat.services.length} Services</p>
                </Card>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  );
}
