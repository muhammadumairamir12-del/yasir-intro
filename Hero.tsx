import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { 
  ShoppingBag, 
  Clock, 
  CheckCircle2, 
  Star,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CustomerDashboard() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold">Welcome back, Ahmed!</h1>
          <p className="text-muted-foreground">Here&apos;s what&apos;s happening with your home services.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { label: "Total Bookings", value: "12", icon: ShoppingBag, color: "text-blue-600 bg-blue-100" },
            { label: "Active Orders", value: "2", icon: Clock, color: "text-orange-600 bg-orange-100" },
            { label: "Completed", value: "10", icon: CheckCircle2, color: "text-green-600 bg-green-100" },
            { label: "Reviews Given", value: "8", icon: Star, color: "text-purple-600 bg-purple-100" },
          ].map((stat, i) => (
            <Card key={i} className="border-none shadow-sm">
              <CardContent className="p-6 flex items-center gap-4">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${stat.color}`}>
                  <stat.icon className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
                  <p className="text-2xl font-black">{stat.value}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Bookings */}
          <Card className="lg:col-span-2 border-none shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Recent Bookings</CardTitle>
              <Link 
                href="/dashboard/customer/bookings" 
                className={cn(buttonVariants({ variant: "ghost", size: "sm" }))}
              >
                View All
              </Link>
            </CardHeader>
            <CardContent>
               <div className="space-y-6">
                  {[
                    { id: "#MSK-9281", service: "AC Repair", date: "25 Feb, 2024", status: "In Progress", amount: "Rs. 499" },
                    { id: "#MSK-9244", service: "Deep Cleaning", date: "20 Feb, 2024", status: "Completed", amount: "Rs. 2,499" },
                    { id: "#MSK-9102", service: "Plumbing", date: "15 Feb, 2024", status: "Completed", amount: "Rs. 799" },
                  ].map((booking) => (
                    <div key={booking.id} className="flex items-center justify-between p-4 rounded-xl border bg-slate-50/50">
                       <div className="flex items-center gap-4">
                          <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-xl shadow-sm">🛠️</div>
                          <div>
                            <p className="font-bold">{booking.service}</p>
                            <p className="text-xs text-muted-foreground">{booking.date} • {booking.id}</p>
                          </div>
                       </div>
                       <div className="text-right">
                          <p className="font-bold text-sm">{booking.amount}</p>
                          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                            booking.status === "Completed" ? "bg-green-100 text-green-600" : "bg-orange-100 text-orange-600"
                          }`}>
                            {booking.status}
                          </span>
                       </div>
                    </div>
                  ))}
               </div>
            </CardContent>
          </Card>

          {/* Special Offers */}
          <Card className="border-none shadow-sm bg-primary text-white overflow-hidden relative">
             <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16" />
             <CardHeader>
                <CardTitle>Special Offers</CardTitle>
             </CardHeader>
             <CardContent className="space-y-6 relative z-10">
                <div className="space-y-2">
                   <p className="text-3xl font-black">20% OFF</p>
                   <p className="text-sm opacity-80">On your next plumbing service in Multan.</p>
                </div>
                <div className="bg-white/10 p-3 rounded-lg border border-white/20 font-mono text-center font-bold tracking-widest">
                   MULTAN20
                </div>
                <Button variant="secondary" className="w-full font-bold">
                   Book Now <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
             </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}
