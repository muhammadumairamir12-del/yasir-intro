import Link from "next/link";
import { CheckCircle2, Home } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function BookingSuccessPage() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center py-20 px-4">
      <div className="max-w-md w-full text-center space-y-8 animate-in fade-in zoom-in duration-500">
        <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
          <CheckCircle2 className="h-12 w-12" />
        </div>
        
        <div className="space-y-3">
          <h1 className="text-4xl font-bold text-slate-900">Booking Confirmed!</h1>
          <p className="text-muted-foreground text-lg">
            Thank you for choosing MultanSkill. Your booking has been successfully placed and a professional will be assigned shortly.
          </p>
        </div>

        <div className="bg-slate-50 rounded-2xl p-6 text-left space-y-4 border">
           <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground uppercase font-bold">Booking ID</span>
              <span className="font-mono font-bold">#MSK-129482</span>
           </div>
           <p className="text-sm">We&apos;ve sent a confirmation message to your phone and email with all the details.</p>
        </div>

        <div className="flex flex-col gap-3">
          <Link 
            href="/dashboard/customer" 
            className={cn(buttonVariants({ size: "lg" }), "h-12 font-bold")}
          >
            View My Bookings
          </Link>
          <Link 
            href="/" 
            className={cn(buttonVariants({ size: "lg", variant: "ghost" }), "h-12 font-bold")}
          >
            <Home className="mr-2 h-4 w-4" /> Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
