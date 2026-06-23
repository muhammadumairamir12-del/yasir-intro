import Link from "next/link";
import { SITE_CONFIG, CATEGORIES } from "@/config/multan";
import { Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-200">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-6">
            <Link href="/" className="text-2xl font-bold text-white">
              {SITE_CONFIG.name}
            </Link>
            <p className="text-slate-400 leading-relaxed">
              Premium home services marketplace in Multan. We provide trusted professionals for all your home needs, from AC repair to deep cleaning.
            </p>
            <div className="flex items-center gap-4">
              <Link href="#" className="hover:text-primary transition-colors text-xs font-bold">FB</Link>
              <Link href="#" className="hover:text-primary transition-colors text-xs font-bold">TW</Link>
              <Link href="#" className="hover:text-primary transition-colors text-xs font-bold">IG</Link>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Services</h4>
            <ul className="space-y-4">
              {CATEGORIES.slice(0, 5).map((cat) => (
                <li key={cat.id}>
                  <Link href={`/categories/${cat.id}`} className="text-slate-400 hover:text-white transition-colors">
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Company</h4>
            <ul className="space-y-4">
              <li><Link href="/about" className="text-slate-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/how-it-works" className="text-slate-400 hover:text-white transition-colors">How it Works</Link></li>
              <li><Link href="/become-provider" className="text-slate-400 hover:text-white transition-colors">Become a Partner</Link></li>
              <li><Link href="/contact" className="text-slate-400 hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="/privacy" className="text-slate-400 hover:text-white transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary shrink-0" />
                <span className="text-slate-400">{SITE_CONFIG.contact.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <span className="text-slate-400">{SITE_CONFIG.contact.phone}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <span className="text-slate-400">{SITE_CONFIG.contact.email}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-slate-500">
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
