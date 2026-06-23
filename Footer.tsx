"use client";

import * as React from "react";
import { 
  LayoutDashboard, 
  Briefcase, 
  Wallet, 
  Star, 
  User, 
  Settings, 
  LogOut, 
  Bell, 
  Search,
  Menu,
  TrendingUp,
  Clock,
  CheckCircle2,
  AlertCircle
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SITE_CONFIG } from "@/config/multan";

const sidebarLinks = [
  { name: "Overview", href: "/dashboard/provider", icon: LayoutDashboard },
  { name: "Jobs & Orders", href: "/dashboard/provider/orders", icon: Briefcase },
  { name: "Earnings", href: "/dashboard/provider/earnings", icon: Wallet },
  { name: "Reviews", href: "/dashboard/provider/reviews", icon: Star },
  { name: "Profile", href: "/dashboard/provider/profile", icon: User },
  { name: "Settings", href: "/dashboard/provider/settings", icon: Settings },
];

export default function ProviderDashboard() {
  const pathname = usePathname();

  return (
    <div className="flex min-h-screen bg-slate-50">
      {/* Sidebar - Desktop */}
      <aside className="hidden lg:flex flex-col w-64 bg-slate-900 text-slate-300 border-r border-slate-800">
        <div className="p-6">
          <Link href="/" className="text-xl font-black text-white tracking-tighter">
            {SITE_CONFIG.name} <span className="text-[10px] bg-primary px-2 py-0.5 rounded ml-1">PRO</span>
          </Link>
        </div>
        
        <nav className="flex-grow px-4 space-y-1">
          {sidebarLinks.map((link) => {
            const Icon = link.icon;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all",
                  pathname === link.href ? "bg-primary text-white" : "hover:bg-slate-800 hover:text-white"
                )}
              >
                <Icon className="h-5 w-5" />
                {link.name}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-slate-800">
           <Button variant="ghost" className="w-full justify-start gap-3 text-slate-400 hover:text-white hover:bg-slate-800 font-bold rounded-xl">
              <LogOut className="h-5 w-5" />
              Logout
           </Button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-grow flex flex-col">
        {/* Top Header */}
        <header className="h-16 bg-white border-b flex items-center justify-between px-4 lg:px-8 sticky top-0 z-30">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="lg:hidden">
              <Menu className="h-6 w-6" />
            </Button>
            <h2 className="font-bold text-lg hidden sm:block">Provider Dashboard</h2>
          </div>

          <div className="flex items-center gap-4">
             <div className="flex items-center bg-green-50 text-green-700 px-3 py-1 rounded-full text-xs font-bold gap-1.5 border border-green-100">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                Online
             </div>
             <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5" />
                <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white" />
             </Button>
             <Avatar>
               <AvatarImage src="https://github.com/shadcn.png" />
               <AvatarFallback>MS</AvatarFallback>
             </Avatar>
          </div>
        </header>

        <main className="p-4 lg:p-8 space-y-8">
           <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <h1 className="text-3xl font-bold">Good Morning, Multan Services!</h1>
                <p className="text-muted-foreground">You have 3 new job requests today.</p>
              </div>
              <Button className="font-bold shadow-lg shadow-primary/20">Manage Availability</Button>
           </div>

           {/* Stats */}
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
             {[
               { label: "Today's Earnings", value: "Rs. 4,500", icon: Wallet, color: "text-green-600 bg-green-100", trend: "+12%" },
               { label: "Active Jobs", value: "3", icon: Briefcase, color: "text-blue-600 bg-blue-100", trend: "0%" },
               { label: "Completed Jobs", value: "142", icon: CheckCircle2, color: "text-purple-600 bg-purple-100", trend: "+5%" },
               { label: "Avg Rating", value: "4.8", icon: Star, color: "text-yellow-600 bg-yellow-100", trend: "+0.1" },
             ].map((stat, i) => (
               <Card key={stat.label} className="border-none shadow-sm">
                 <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                       <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${stat.color}`}>
                          <stat.icon className="h-6 w-6" />
                       </div>
                       <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded-lg flex items-center gap-1">
                          <TrendingUp className="h-3 w-3" /> {stat.trend}
                       </span>
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
              {/* Active Jobs */}
              <Card className="lg:col-span-2 border-none shadow-sm">
                <CardHeader>
                  <CardTitle>Active Job Requests</CardTitle>
                </CardHeader>
                <CardContent>
                   <div className="space-y-6">
                      {[
                        { id: "JOB-9921", service: "AC General Service", area: "Gulgasht Colony", time: "10:30 AM", status: "Urgent" },
                        { id: "JOB-9922", service: "Electrical Wiring", area: "DHA Multan", time: "01:00 PM", status: "Scheduled" },
                      ].map((job) => (
                        <div key={job.id} className="flex flex-col md:flex-row md:items-center justify-between p-6 rounded-2xl border bg-slate-50/50 gap-4">
                           <div className="flex items-center gap-4">
                              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-2xl shadow-sm">⚡</div>
                              <div>
                                <p className="font-extrabold text-lg">{job.service}</p>
                                <div className="flex items-center gap-3 text-sm text-muted-foreground mt-1">
                                   <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {job.time}</span>
                                   <span className="flex items-center gap-1">📍 {job.area}</span>
                                </div>
                              </div>
                           </div>
                           <div className="flex items-center gap-3">
                              <Button variant="outline" className="font-bold border-2">Decline</Button>
                              <Button className="font-bold shadow-lg shadow-primary/20">Accept Job</Button>
                           </div>
                        </div>
                      ))}
                   </div>
                </CardContent>
              </Card>

              {/* Performance */}
              <Card className="border-none shadow-sm">
                <CardHeader>
                   <CardTitle>Your Performance</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                   <div className="space-y-2">
                      <div className="flex justify-between text-sm font-bold">
                         <span>Job Completion Rate</span>
                         <span>98%</span>
                      </div>
                      <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                         <div className="h-full bg-green-500 w-[98%]" />
                      </div>
                   </div>
                   <div className="space-y-2">
                      <div className="flex justify-between text-sm font-bold">
                         <span>On-time Arrival</span>
                         <span>92%</span>
                      </div>
                      <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                         <div className="h-full bg-primary w-[92%]" />
                      </div>
                   </div>
                   
                   <div className="pt-6 border-t">
                      <div className="flex items-center gap-3 p-4 bg-yellow-50 rounded-2xl border border-yellow-100">
                         <AlertCircle className="h-6 w-6 text-yellow-600 shrink-0" />
                         <p className="text-xs text-yellow-800 font-medium">
                            Complete 5 more jobs this week to unlock the <b>Top Rated</b> badge!
                         </p>
                      </div>
                   </div>
                </CardContent>
              </Card>
           </div>
        </main>
      </div>
    </div>
  );
}
