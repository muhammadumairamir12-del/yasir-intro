"use client";

import * as React from "react";
import { 
  LayoutDashboard, 
  ShoppingBag, 
  User, 
  Settings, 
  LogOut, 
  Bell, 
  Star,
  Search,
  Menu
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { SITE_CONFIG } from "@/config/multan";

const sidebarLinks = [
  { name: "Overview", href: "/dashboard/customer", icon: LayoutDashboard },
  { name: "My Bookings", href: "/dashboard/customer/bookings", icon: ShoppingBag },
  { name: "Reviews", href: "/dashboard/customer/reviews", icon: Star },
  { name: "Profile", href: "/dashboard/customer/profile", icon: User },
  { name: "Settings", href: "/dashboard/customer/settings", icon: Settings },
];

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

  return (
    <div className="flex min-h-screen bg-slate-50">
      {/* Sidebar - Desktop */}
      <aside className="hidden lg:flex flex-col w-64 bg-white border-r">
        <div className="p-6">
          <Link href="/" className="text-xl font-black text-primary tracking-tighter">
            {SITE_CONFIG.name}
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
                  pathname === link.href ? "bg-primary text-white shadow-lg shadow-primary/20" : "text-slate-500 hover:bg-slate-50 hover:text-primary"
                )}
              >
                <Icon className="h-5 w-5" />
                {link.name}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t">
           <Button variant="ghost" className="w-full justify-start gap-3 text-red-500 hover:text-red-600 hover:bg-red-50 font-bold rounded-xl">
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
            <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setIsSidebarOpen(true)}>
              <Menu className="h-6 w-6" />
            </Button>
            <div className="relative hidden md:block">
               <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
               <input 
                 type="text" 
                 placeholder="Search bookings..." 
                 className="bg-slate-50 border rounded-full h-10 pl-10 pr-4 text-sm w-64 focus:outline-none focus:ring-1 focus:ring-primary"
               />
            </div>
          </div>

          <div className="flex items-center gap-4">
             <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5" />
                <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white" />
             </Button>
             <div className="flex items-center gap-3 pl-4 border-l">
                <div className="text-right hidden sm:block">
                   <p className="text-sm font-bold">Ahmed Khan</p>
                   <p className="text-[10px] uppercase text-muted-foreground font-black">Customer</p>
                </div>
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>AK</AvatarFallback>
                </Avatar>
             </div>
          </div>
        </header>

        <main className="p-4 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
