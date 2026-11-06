import React from "react";
import {
  Pill,
  HeartPulse,
  Baby,
  Sparkles,
  Activity,
  Thermometer,
} from "lucide-react";

const categories = [
  {
    id: 1,
    name: "Prescription Drugs",
    icon: Pill,
    color: "text-emerald-600 bg-emerald-50 border-emerald-100",
  },
  {
    id: 2,
    name: "OTC Healthcare",
    icon: HeartPulse,
    color: "text-rose-600 bg-rose-50 border-rose-100",
  },
  {
    id: 3,
    name: "Infant & Baby Care",
    icon: Baby,
    color: "text-blue-600 bg-blue-50 border-blue-100",
  },
  {
    id: 4,
    name: "Dermatology & Skin",
    icon: Sparkles,
    color: "text-purple-600 bg-purple-50 border-purple-100",
  },
  {
    id: 5,
    name: "Fitness Supplements",
    icon: Activity,
    color: "text-amber-600 bg-amber-50 border-amber-100",
  },
  {
    id: 6,
    name: "Diagnostic Devices",
    icon: Thermometer,
    color: "text-indigo-600 bg-indigo-50 border-indigo-100",
  },
];

export default function Categories() {
  return (
    <section
      id="categories"
      className="py-16 bg-white border-b border-slate-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-12">
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Structured Medical Categories
          </h2>
          <p className="text-slate-500 mt-2 font-medium text-sm">
            Efficiently navigate verified pharma segments
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((cat) => {
            const IconComponent = cat.icon;
            return (
              <div
                key={cat.id}
                className="group cursor-pointer bg-slate-50 hover:bg-white border border-slate-100 hover:border-slate-200 p-6 rounded-2xl text-center transition-all shadow-sm hover:shadow-md"
              >
                <div
                  className={`w-12 h-12 mx-auto rounded-xl flex items-center justify-center border ${cat.color} mb-3 transform group-hover:scale-105 transition-transform`}
                >
                  <IconComponent className="h-5 w-5" />
                </div>
                <h4 className="font-bold text-slate-800 text-sm tracking-tight">
                  {cat.name}
                </h4>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
