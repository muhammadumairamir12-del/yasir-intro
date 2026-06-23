"use client";

import * as React from "react";
import { Search, MapPin, ArrowRight, ShieldCheck, Clock, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MULTAN_AREAS } from "@/config/multan";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative bg-slate-50 overflow-hidden py-20 lg:py-32">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden -z-10">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
              #1 Home Service Marketplace in Multan
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-6">
              Expert Home Services <br />
              <span className="text-primary">At Your Doorstep</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Trusted by 10,000+ households in Multan. Professional technicians for AC repair, plumbing, cleaning, and more.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col md:flex-row items-center gap-2 p-2 bg-white rounded-2xl md:rounded-full shadow-xl border"
          >
            <div className="w-full md:w-auto min-w-[180px]">
              <Select>
                <SelectTrigger className="border-none focus:ring-0 h-12 bg-transparent">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-primary" />
                    <SelectValue placeholder="Select Area" />
                  </div>
                </SelectTrigger>
                <SelectContent>
                  {MULTAN_AREAS.map((area) => (
                    <SelectItem key={area} value={area.toLowerCase().replace(/\s+/g, '-')}>
                      {area}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="hidden md:block w-px h-8 bg-slate-200" />

            <div className="flex-grow flex items-center relative w-full">
              <Search className="absolute left-4 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="What service do you need today?"
                className="pl-12 border-none focus-visible:ring-0 h-12 text-base"
              />
            </div>

            <Button size="lg" className="w-full md:w-auto h-12 px-8 rounded-xl md:rounded-full font-semibold group">
              Search
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>

          <div className="flex flex-wrap items-center justify-center gap-8 pt-8 text-sm font-medium text-muted-foreground">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-primary" />
              Verified Professionals
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-primary" />
              On-time Guarantee
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-5 w-5 text-primary fill-primary" />
              4.9/5 Avg Rating
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
