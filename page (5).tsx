"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Users, 
  UserCheck, 
  ShoppingBag, 
  BarChart3, 
  TrendingUp, 
  Search,
  MoreVertical,
  Filter,
  Download
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-slate-50 p-4 lg:p-10 space-y-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-black tracking-tight">System Administration</h1>
          <p className="text-muted-foreground font-medium">Platform overview for MultanSkill</p>
        </div>
        <div className="flex gap-3">
           <Button variant="outline" className="font-bold">
              <Download className="mr-2 h-4 w-4" /> Export Report
           </Button>
           <Button className="font-bold bg-slate-900 hover:bg-slate-800">
              Update Platform
           </Button>
        </div>
      </div>

      {/* Admin Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: "Total Revenue", value: "Rs. 1.2M", icon: BarChart3, trend: "+24% from last month", color: "text-green-600" },
          { label: "Total Bookings", value: "2,840", icon: ShoppingBag, trend: "+12% from last month", color: "text-primary" },
          { label: "Active Customers", value: "8,421", icon: Users, trend: "+8% from last month", color: "text-orange-600" },
          { label: "Verified Providers", value: "156", icon: UserCheck, trend: "+4% from last month", color: "text-purple-600" },
        ].map((stat) => (
          <Card key={stat.label} className="border-none shadow-sm">
            <CardContent className="p-6">
               <div className="flex justify-between items-start mb-4">
                  <div className={`w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center ${stat.color}`}>
                     <stat.icon className="h-6 w-6" />
                  </div>
                  <Badge variant="secondary" className="bg-green-50 text-green-700 hover:bg-green-100 border-none">
                    <TrendingUp className="h-3 w-3 mr-1" /> {stat.trend.split(' ')[0]}
                  </Badge>
               </div>
               <p className="text-sm font-bold text-muted-foreground mb-1">{stat.label}</p>
               <h3 className="text-3xl font-black">{stat.value}</h3>
               <p className="text-[10px] text-muted-foreground mt-2 font-medium">{stat.trend}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
         {/* Order Management Table */}
         <Card className="xl:col-span-2 border-none shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between pb-6">
               <div>
                  <CardTitle>Recent Orders</CardTitle>
                  <p className="text-sm text-muted-foreground font-medium mt-1">Manage and track latest service bookings in Multan</p>
               </div>
               <div className="flex items-center gap-2">
                  <div className="relative hidden sm:block">
                     <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                     <Input placeholder="Search orders..." className="pl-9 w-64 h-9 bg-slate-50 border-none" />
                  </div>
                  <Button variant="outline" size="icon" className="h-9 w-9">
                     <Filter className="h-4 w-4" />
                  </Button>
               </div>
            </CardHeader>
            <CardContent>
               <Table>
                  <TableHeader className="bg-slate-50">
                    <TableRow className="border-none">
                      <TableHead className="font-bold text-slate-900 rounded-l-lg">ID</TableHead>
                      <TableHead className="font-bold text-slate-900">Service</TableHead>
                      <TableHead className="font-bold text-slate-900">Customer</TableHead>
                      <TableHead className="font-bold text-slate-900">Provider</TableHead>
                      <TableHead className="font-bold text-slate-900">Status</TableHead>
                      <TableHead className="font-bold text-slate-900 text-right rounded-r-lg">Amount</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      { id: "#MSK-4001", service: "AC General Repair", customer: "Usman Ali", provider: "Smart Cooling", status: "Pending", amount: "Rs. 1,200" },
                      { id: "#MSK-4002", service: "Full Home Cleaning", customer: "Sara Khan", provider: "CleanPro Multan", status: "Completed", amount: "Rs. 4,500" },
                      { id: "#MSK-4003", service: "Water Tank Cleaning", customer: "Imran Ahmed", provider: "Fast Plumbers", status: "Confirmed", amount: "Rs. 2,500" },
                      { id: "#MSK-4004", service: "Electrician", customer: "Bilal Raza", provider: "Volt Masters", status: "Cancelled", amount: "Rs. 800" },
                      { id: "#MSK-4005", service: "Pest Control", customer: "Faisal Qureshi", provider: "Shield Pest", status: "Completed", amount: "Rs. 3,500" },
                    ].map((order) => (
                      <TableRow key={order.id} className="border-slate-100">
                        <TableCell className="font-bold">{order.id}</TableCell>
                        <TableCell className="font-medium">{order.service}</TableCell>
                        <TableCell>{order.customer}</TableCell>
                        <TableCell className="text-muted-foreground font-medium">{order.provider}</TableCell>
                        <TableCell>
                           <Badge className={
                             order.status === "Completed" ? "bg-green-100 text-green-700 hover:bg-green-100 border-none" :
                             order.status === "Pending" ? "bg-orange-100 text-orange-700 hover:bg-orange-100 border-none" :
                             order.status === "Cancelled" ? "bg-red-50 text-red-700 hover:bg-red-50 border-none" :
                             "bg-blue-50 text-blue-700 hover:bg-blue-50 border-none"
                           }>
                             {order.status}
                           </Badge>
                        </TableCell>
                        <TableCell className="text-right font-black">{order.amount}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
               </Table>
            </CardContent>
         </Card>

         {/* Analytics / Quick Actions */}
         <div className="space-y-8">
            <Card className="border-none shadow-sm overflow-hidden">
               <CardHeader className="bg-slate-900 text-white">
                  <CardTitle>Category Performance</CardTitle>
               </CardHeader>
               <CardContent className="p-6 space-y-6">
                  {[
                    { name: "Repair & Maintenance", share: 45, color: "bg-blue-500" },
                    { name: "Cleaning Services", share: 30, color: "bg-green-500" },
                    { name: "Installations", share: 15, color: "bg-orange-500" },
                    { name: "Home Care", share: 10, color: "bg-purple-500" },
                  ].map((cat) => (
                    <div key={cat.name} className="space-y-2">
                       <div className="flex justify-between text-xs font-bold uppercase tracking-wider text-slate-500">
                          <span>{cat.name}</span>
                          <span>{cat.share}%</span>
                       </div>
                       <div className="w-full h-2 bg-slate-100 rounded-full">
                          <div className={`h-full ${cat.color} rounded-full`} style={{ width: `${cat.share}%` }} />
                       </div>
                    </div>
                  ))}
               </CardContent>
            </Card>

            <Card className="border-none shadow-sm">
               <CardHeader>
                  <CardTitle>System Notifications</CardTitle>
               </CardHeader>
               <CardContent className="p-0">
                  <div className="divide-y divide-slate-100">
                     {[
                       { title: "New Provider Application", time: "2 mins ago", type: "info" },
                       { title: "Server Load High", time: "15 mins ago", type: "warning" },
                       { title: "Database Backup Completed", time: "1 hour ago", type: "success" },
                     ].map((notif, i) => (
                       <div key={i} className="p-4 flex items-start gap-3 hover:bg-slate-50 transition-colors cursor-pointer">
                          <div className={`w-2 h-2 rounded-full mt-2 shrink-0 ${
                             notif.type === "warning" ? "bg-red-500" : "bg-blue-500"
                          }`} />
                          <div>
                             <p className="text-sm font-bold">{notif.title}</p>
                             <p className="text-xs text-muted-foreground">{notif.time}</p>
                          </div>
                       </div>
                     ))}
                  </div>
                  <Button variant="ghost" className="w-full h-12 text-xs font-bold text-primary">View All System Logs</Button>
               </CardContent>
            </Card>
         </div>
      </div>
    </div>
  );
}
