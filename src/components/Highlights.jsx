import React from "react";
import { UploadCloud, FileText, CheckCircle2, ShieldAlert } from "lucide-react";

export default function Highlights() {
  return (
    <section id="highlights" className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[11px] font-extrabold tracking-widest text-emerald-700 bg-emerald-50 border border-emerald-100 px-3.5 py-1.5 rounded-lg uppercase">
            Quick Order Process
          </span>
          <h2 className="text-3xl font-black text-slate-900 tracking-tight mt-3">
            Order Via Prescription
          </h2>
          <p className="text-slate-500 mt-2 font-medium text-sm leading-relaxed">
            Share your regular medical practitioner documents to instantly
            reserve verified inventory before visiting the retail counter.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm relative group hover:shadow-md transition-all">
            <div className="absolute top-6 right-8 text-slate-200 font-black text-5xl group-hover:text-emerald-50 transition-colors select-none">
              01
            </div>
            <div className="text-emerald-600 bg-emerald-50 w-12 h-12 rounded-xl flex items-center justify-center border border-emerald-100 mb-6">
              <UploadCloud className="h-5 w-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-lg tracking-tight">
              Upload Prescription
            </h3>
            <p className="text-slate-500 text-xs font-medium leading-relaxed mt-2">
              Capture a legible image of your physician certificate or share a
              structured medical digital PDF securely.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm relative group hover:shadow-md transition-all">
            <div className="absolute top-6 right-8 text-slate-200 font-black text-5xl group-hover:text-emerald-50 transition-colors select-none">
              02
            </div>
            <div className="text-blue-600 bg-blue-50 w-12 h-12 rounded-xl flex items-center justify-center border border-blue-100 mb-6">
              <FileText className="h-5 w-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-lg tracking-tight">
              Pharmacist Verification
            </h3>
            <p className="text-slate-500 text-xs font-medium leading-relaxed mt-2">
              Our registered pharmaceutical staff cross-checks therapeutic
              indications, batch validity, and molecular constraints.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm relative group hover:shadow-md transition-all">
            <div className="absolute top-6 right-8 text-slate-200 font-black text-5xl group-hover:text-emerald-50 transition-colors select-none">
              03
            </div>
            <div className="text-indigo-600 bg-indigo-50 w-12 h-12 rounded-xl flex items-center justify-center border border-indigo-100 mb-6">
              <CheckCircle2 className="h-5 w-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-lg tracking-tight">
              Instant Store Pickup
            </h3>
            <p className="text-slate-500 text-xs font-medium leading-relaxed mt-2">
              Receive a structured notification message once verified, allowing
              immediate prioritized checkout bypass at our offline facility.
            </p>
          </div>
        </div>

        <div className="mt-12 bg-white border border-slate-100 p-6 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="bg-amber-50 text-amber-600 p-3 rounded-xl border border-amber-100 hidden sm:block">
              <ShieldAlert className="h-5 w-5" />
            </div>
            <div className="text-center sm:text-left">
              <h4 className="font-bold text-slate-900 text-base">
                Privacy & Compliance Guarantee
              </h4>
              <p className="text-slate-500 text-xs font-medium mt-0.5">
                All uploaded clinical records are systematically encrypted and
                handled strictly within legal diagnostic storage protocols.
              </p>
            </div>
          </div>
          <a
            href={`https://wa.me/+919918949407/?text=Hi`}
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto bg-slate-900 hover:bg-emerald-600 text-white font-semibold text-xs px-6 py-3.5 rounded-xl text-center transition-all whitespace-nowrap shadow-sm"
          >
            Send Prescription on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
