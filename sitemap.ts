import { Metadata } from "next";
import { notFound } from "next/navigation";
import { CATEGORIES, ALL_SERVICES, SITE_CONFIG } from "@/config/multan";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = CATEGORIES.find((c) => c.id === slug);

  if (!category) return { title: "Category Not Found" };

  return {
    title: `${category.name} Services in Multan`,
    description: `Expert ${category.name.toLowerCase()} services in Multan. Find professional technicians for ${category.services.join(", ")}.`,
  };
}

export default async function CategoryPage({ params }: PageProps) {
  const { slug } = await params;
  const category = CATEGORIES.find((c) => c.id === slug);

  if (!category) notFound();

  const services = ALL_SERVICES.filter((s) => s.category === slug);

  return (
    <div className="pb-20">
      <div className="bg-slate-950 text-white py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-[100px] -mr-48 -mt-48" />
        <div className="container mx-auto px-4 relative z-10">
           <nav className="flex items-center gap-2 text-sm text-slate-400 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/services" className="hover:text-white transition-colors">Categories</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-white font-medium">{category.name}</span>
          </nav>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">{category.name}</h1>
          <p className="text-xl text-slate-400 max-w-2xl">
             Professional and reliable {category.name.toLowerCase()} services tailored for Multan households.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-16">
         <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
            <h2 className="text-2xl font-bold">Available Services</h2>
            <div className="flex gap-2">
               <span className="text-sm font-medium bg-primary/10 text-primary px-3 py-1 rounded-full">{services.length} Services Found</span>
            </div>
         </div>

         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link key={service.id} href={`/services/${service.slug}`}>
                <Card className="group hover:shadow-xl transition-all duration-300 border-slate-100 h-full flex flex-col">
                  <div className="aspect-video bg-slate-100 flex items-center justify-center text-5xl grayscale group-hover:grayscale-0 transition-all">
                    🛠️
                  </div>
                  <CardContent className="p-6 flex-grow flex flex-col">
                    <h3 className="font-bold text-xl mb-2 group-hover:text-primary transition-colors">{service.name}</h3>
                    <p className="text-muted-foreground text-sm mb-6 flex-grow">
                      Book expert {service.name.toLowerCase()} in Multan. Professional work with 30-day warranty.
                    </p>
                    <div className="flex items-center justify-between mt-auto pt-4 border-t">
                       <span className="font-bold text-primary">From Rs. 499</span>
                       <Button size="sm" variant="ghost" className="group-hover:translate-x-1 transition-transform p-0">
                         View Details <ArrowRight className="ml-2 h-4 w-4" />
                       </Button>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
         </div>
      </div>

      {/* Trust Section */}
      <section className="mt-32 py-20 bg-slate-50 border-y">
        <div className="container mx-auto px-4 text-center">
           <h2 className="text-3xl font-bold mb-12">Why book {category.name} with us?</h2>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { title: "Expert Technicians", desc: "Top-rated pros with years of experience." },
                { title: "Standard Pricing", desc: "No hidden costs. Clear, upfront quotes." },
                { title: "Service Warranty", desc: "Your service is covered for 30 days." }
              ].map((item, i) => (
                <div key={i}>
                  <div className="w-16 h-16 bg-white rounded-full shadow-md flex items-center justify-center mx-auto mb-6 text-primary">
                    <ArrowRight className="h-6 w-6" />
                  </div>
                  <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              ))}
           </div>
        </div>
      </section>
    </div>
  );
}
