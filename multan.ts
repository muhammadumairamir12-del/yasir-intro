import { CheckCircle2, Search, CalendarCheck, Smile } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      title: "Choose a Service",
      description: "Select from our wide range of professional services for your home.",
      icon: Search,
      color: "bg-blue-100 text-blue-600",
    },
    {
      title: "Book a Slot",
      description: "Pick a date and time that works best for you. No waiting around.",
      icon: CalendarCheck,
      color: "bg-purple-100 text-purple-600",
    },
    {
      title: "Service Delivery",
      description: "Our verified professional arrives at your doorstep on time.",
      icon: CheckCircle2,
      color: "bg-green-100 text-green-600",
    },
    {
      title: "Enjoy & Rate",
      description: "Pay securely after the job is done and share your feedback.",
      icon: Smile,
      color: "bg-orange-100 text-orange-600",
    },
  ];

  return (
    <section className="py-24 bg-slate-950 text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px] -mr-48 -mt-48" />
      
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How it Works</h2>
          <p className="text-slate-400 text-lg">Booking professional services in Multan has never been easier.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-slate-800 -z-0" />
          
          {steps.map((step, index) => (
            <div key={index} className="relative z-10 flex flex-col items-center text-center group">
              <div className={`w-24 h-24 rounded-3xl ${step.color} flex items-center justify-center mb-6 shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                <step.icon className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-slate-400 leading-relaxed">{step.description}</p>
              
              <div className="mt-4 w-8 h-8 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center font-bold text-sm">
                {index + 1}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
