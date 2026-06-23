import { Metadata } from "next";
import { notFound } from "next/navigation";
import { ALL_SERVICES, SITE_CONFIG, MULTAN_AREAS } from "@/config/multan";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Star, ShieldCheck, Clock, MapPin, ChevronRight } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = ALL_SERVICES.find((s) => s.slug === slug);

  if (!service) return { title: "Service Not Found" };

  return {
    title: `${service.name} Services in Multan`,
    description: `Professional ${service.name} in Multan. Reliable, affordable, and expert technicians available in all areas including Gulgasht, Cantt, and DHA Multan.`,
    openGraph: {
      title: `${service.name} Services in Multan | ${SITE_CONFIG.name}`,
      description: `Book professional ${service.name} now. Best rates in Multan.`,
    }
  };
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = ALL_SERVICES.find((s) => s.slug === slug);

  if (!service) notFound();

  return (
    <div className="pb-20">
      {/* Service Hero */}
      <section className="bg-slate-50 py-12 border-b">
        <div className="container mx-auto px-4">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <Link href="/" className="hover:text-primary">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/services" className="hover:text-primary">Services</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground font-medium">{service.name}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900">{service.name} Services in Multan</h1>
              <div className="flex items-center gap-4 text-sm font-medium">
                 <div className="flex items-center text-yellow-500">
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                    <span className="ml-2 text-slate-600">4.9 (1,200+ Reviews)</span>
                 </div>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Experience hassle-free {service.name.toLowerCase()} with {SITE_CONFIG.name}. Our background-verified professionals ensure quality work at transparent prices.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Button size="lg" className="rounded-full h-14 px-10 text-lg font-bold">
                  Book {service.name} Now
                </Button>
                <Button size="lg" variant="outline" className="rounded-full h-14 px-10 text-lg font-bold">
                   Check Prices
                </Button>
              </div>
            </div>
            <div className="aspect-video bg-slate-200 rounded-3xl overflow-hidden relative">
               <div className="absolute inset-0 flex items-center justify-center text-6xl grayscale opacity-40">🛠️</div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            <Tabs defaultValue="details" className="w-full">
              <TabsList className="w-full justify-start border-b rounded-none bg-transparent h-12 p-0 gap-8">
                <TabsTrigger value="details" className="data-[state=active]:border-primary data-[state=active]:text-primary border-b-2 border-transparent rounded-none h-full bg-transparent p-0 px-2 font-bold">Details</TabsTrigger>
                <TabsTrigger value="pricing" className="data-[state=active]:border-primary data-[state=active]:text-primary border-b-2 border-transparent rounded-none h-full bg-transparent p-0 px-2 font-bold">Pricing</TabsTrigger>
                <TabsTrigger value="faq" className="data-[state=active]:border-primary data-[state=active]:text-primary border-b-2 border-transparent rounded-none h-full bg-transparent p-0 px-2 font-bold">FAQ</TabsTrigger>
              </TabsList>
              
              <TabsContent value="details" className="mt-8 space-y-8">
                <div className="prose prose-slate max-w-none">
                   <h3 className="text-2xl font-bold mb-4">What&apos;s Included in {service.name}?</h3>
                   <p className="text-muted-foreground mb-6">Our professional {service.name.toLowerCase()} package covers everything you need to get your home back in shape.</p>
                   <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none p-0">
                      {[
                        "Standard professional tools used",
                        "Background-verified technician",
                        "Service warranty included",
                        "Post-service cleanup",
                        "Transparent upfront pricing",
                        "Available 7 days a week"
                      ].map((feature, i) => (
                        <li key={i} className="flex items-center gap-3 text-slate-700">
                          <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0" />
                          {feature}
                        </li>
                      ))}
                   </ul>
                </div>

                <div>
                   <h3 className="text-2xl font-bold mb-6">How it Works</h3>
                   <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                      {[
                        { step: "1", title: "Book", desc: "Select date & time for your service." },
                        { step: "2", title: "Relax", desc: "Our expert arrives at your home." },
                        { step: "3", title: "Pay", desc: "Pay securely after the work is done." }
                      ].map((item, i) => (
                        <div key={i} className="text-center">
                          <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                            {item.step}
                          </div>
                          <h4 className="font-bold mb-1">{item.title}</h4>
                          <p className="text-sm text-muted-foreground">{item.desc}</p>
                        </div>
                      ))}
                   </div>
                </div>
              </TabsContent>

              <TabsContent value="pricing" className="mt-8">
                <Card className="border-none shadow-none bg-slate-50 p-8">
                  <h3 className="text-2xl font-bold mb-6">Transparent Pricing</h3>
                  <div className="space-y-4">
                     <div className="flex justify-between items-center pb-4 border-b">
                        <span className="font-medium">Standard {service.name}</span>
                        <span className="font-bold text-primary">Starts from Rs. 499</span>
                     </div>
                     <div className="flex justify-between items-center pb-4 border-b">
                        <span className="font-medium">Emergency Service</span>
                        <span className="font-bold text-primary">+ Rs. 200</span>
                     </div>
                     <div className="flex justify-between items-center">
                        <span className="font-medium">Warranty (30 Days)</span>
                        <span className="text-green-600 font-bold">FREE</span>
                     </div>
                  </div>
                  <p className="mt-6 text-sm text-muted-foreground italic">Note: Final price will be quoted by the technician based on the exact scope of work.</p>
                </Card>
              </TabsContent>

              <TabsContent value="faq" className="mt-8">
                 <div className="space-y-6">
                    {[
                      { q: `How long does ${service.name} take?`, a: "Usually it takes between 1-3 hours depending on the complexity." },
                      { q: "Is there any warranty?", a: "Yes, we provide a 30-day service warranty on all our home services." },
                      { q: "What if I'm not satisfied?", a: "We offer a 100% satisfaction guarantee. If you're unhappy, we'll fix it for free." }
                    ].map((faq, i) => (
                      <div key={i} className="border-b pb-6">
                        <h4 className="font-bold text-lg mb-2">{faq.q}</h4>
                        <p className="text-muted-foreground">{faq.a}</p>
                      </div>
                    ))}
                 </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
             <Card className="sticky top-24">
               <CardContent className="p-6 space-y-6">
                  <div className="space-y-2">
                    <h4 className="font-bold text-xl">Book this service</h4>
                    <p className="text-sm text-muted-foreground">Select your location to see availability.</p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 p-3 rounded-lg border bg-slate-50">
                      <MapPin className="h-5 w-5 text-primary" />
                      <span className="text-sm font-medium">Multan, PK</span>
                    </div>
                  </div>

                  <Button className="w-full h-12 text-lg font-bold">Continue to Booking</Button>
                  
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="p-3 bg-slate-50 rounded-lg">
                       <ShieldCheck className="h-5 w-5 text-primary mx-auto mb-1" />
                       <span className="text-[10px] uppercase font-bold text-slate-500">Secure</span>
                    </div>
                    <div className="p-3 bg-slate-50 rounded-lg">
                       <Clock className="h-5 w-5 text-primary mx-auto mb-1" />
                       <span className="text-[10px] uppercase font-bold text-slate-500">Fast</span>
                    </div>
                  </div>
               </CardContent>
             </Card>

             <div>
                <h4 className="font-bold mb-4">Service Areas in Multan</h4>
                <div className="flex flex-wrap gap-2">
                   {MULTAN_AREAS.slice(0, 8).map((area) => (
                     <span key={area} className="text-xs px-2 py-1 bg-slate-100 rounded text-slate-600">{area}</span>
                   ))}
                   <span className="text-xs px-2 py-1 bg-slate-100 rounded text-slate-600 font-bold">+{MULTAN_AREAS.length - 8} More</span>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
