import React from "react";
import { MapPin, Clock, Phone, Info } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-start">

        <div className="space-y-6 md:pr-4">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 bg-slate-100 border border-slate-200 px-3 py-1.5 rounded-lg">
            <Info className="h-3.5 w-3.5" /> Pharmacy Infrastructure
          </div>

          <div className="space-y-3">
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">
              About Yogi Medicose
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed font-medium">
              We operate a systematic, fully compliant retail pharmacy committed
              to high-standard medicine distribution. Yogi Medicose guarantees
              precise inventory tracking, optimal cold-chain maintenance, and
              direct healthcare transparency for all local medical requirements.
            </p>
          </div>

          <div className="space-y-5 pt-4 border-t border-slate-50">
            <div className="flex items-start gap-3.5 text-slate-700">
              <div className="text-emerald-600 bg-emerald-50 p-2 rounded-xl border border-emerald-100 mt-0.5 shrink-0">
                <MapPin className="h-4 w-4" />
              </div>
              <div className="text-sm">
                <h4 className="font-bold text-slate-900">Retail Location</h4>
                <p className="text-slate-500 font-medium mt-0.5">
                  YOGI MEDICOSE, Branda, Banda, Baranda, Uttar Pradesh 272162, India
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5 text-slate-700">
              <div className="text-blue-600 bg-blue-50 p-2 rounded-xl border border-blue-100 mt-0.5 shrink-0">
                <Clock className="h-4 w-4" />
              </div>
              <div className="text-sm">
                <h4 className="font-bold text-slate-900">Operational Hours</h4>
                <p className="text-slate-500 font-medium mt-0.5">
                  07:00 AM - 9:30 PM (Standard Retail Operations, Open Seven
                  Days A Week)
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5 text-slate-700">
              <div className="text-purple-600 bg-purple-50 p-2 rounded-xl border border-purple-100 mt-0.5 shrink-0">
                <Phone className="h-4 w-4" />
              </div>
              <div className="text-sm">
                <h4 className="font-bold text-slate-900">
                  Direct Support Helpline
                </h4>
                <p className="text-slate-500 font-medium mt-0.5">
                  +91 9918949407
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-95 rounded-2xl overflow-hidden border border-slate-200/80 shadow-md md:mt-2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3568.546866843069!2d83.00899087528249!3d26.566821276854913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39911939c3b0b347%3A0xb2fb5b7ee7b066c!2sYOGI%20MEDICOSE!5e0!3m2!1sen!2sin!4v1793894819647!5m2!1sen!2sin"
            className="w-full h-full"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            title="Yogi Medicose Official Location Map"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
