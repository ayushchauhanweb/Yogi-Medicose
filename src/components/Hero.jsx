import React from "react";
import { MessageSquare, ShieldCheck, Zap, Tag, Clock } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative bg-linear-to-br from-slate-50 via-white to-emerald-50/30 py-16 md:py-24 border-b border-slate-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 text-center md:text-left">
          <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 px-3.5 py-1.5 rounded-xl text-xs font-bold border border-emerald-100 tracking-wide uppercase">
            <ShieldCheck className="h-4 w-4" /> Verified Retail Pharmacy Partner
          </div>

          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 leading-tight tracking-tight">
            Welcome to <br />
            <span className="text-emerald-600 font-extrabold">
              Yogi Medicose
            </span>
          </h1>

          <p className="text-slate-600 text-base max-w-md mx-auto md:mx-0 font-medium leading-relaxed">
            Your trusted healthcare partner providing 100% authentic medicines,
            clinical supplies, and lifestyle wellness products with expert
            pharmacist validation.
          </p>

          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 pt-2">
            <a
              href="https://wa.me/+919918949407/?text=Hi"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-8 py-4 rounded-xl shadow-lg shadow-emerald-600/10 text-center transition-all"
            >
              <MessageSquare className="h-5 w-5" /> Order on WhatsApp
            </a>
            <a
              href="#about"
              className="inline-flex items-center justify-center bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 font-semibold px-8 py-4 rounded-xl text-center transition-all shadow-sm"
            >
              Our Location
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-white p-6 rounded-2xl border border-slate-100 space-y-3 shadow-sm">
            <div className="text-emerald-600 bg-emerald-50 w-12 h-12 rounded-xl flex items-center justify-center">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <h3 className="font-bold text-slate-900 text-base">
              Certified Inventory
            </h3>
            <p className="text-xs text-slate-500 font-medium leading-relaxed">
              Direct batch tracking from global pharmaceutical manufacturers.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-100 space-y-3 shadow-sm md:mt-4">
            <div className="text-blue-600 bg-blue-50 w-12 h-12 rounded-xl flex items-center justify-center">
              <Zap className="h-6 w-6" />
            </div>
            <h3 className="font-bold text-slate-900 text-base">
              In-Store Quick Pickup
            </h3>
            <p className="text-xs text-slate-500 font-medium leading-relaxed">
              Verify availability in advance and collect your medicines directly
              at the counter without any delay.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-100 space-y-3 shadow-sm">
            <div className="text-amber-600 bg-amber-50 w-12 h-12 rounded-xl flex items-center justify-center">
              <Tag className="h-6 w-6" />
            </div>
            <h3 className="font-bold text-slate-900 text-base">
              Fair Generic Pricing
            </h3>
            <p className="text-xs text-slate-500 font-medium leading-relaxed">
              Transparent costs and bulk updates across regular medicinal
              groups.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-100 space-y-3 shadow-sm md:mt-4">
            <div className="text-indigo-600 bg-indigo-50 w-12 h-12 rounded-xl flex items-center justify-center">
              <Clock className="h-6 w-6" />
            </div>
            <h3 className="font-bold text-slate-900 text-base">
              24/7 Order Drop
            </h3>
            <p className="text-xs text-slate-500 font-medium leading-relaxed">
              Upload prescriptions anytime via digital support services.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
