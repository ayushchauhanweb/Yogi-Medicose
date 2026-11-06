import React, { useState } from "react";
import { Menu, X, Phone, Plus } from "lucide-react";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm border-b border-slate-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="shrink-0 flex items-center gap-2.5">
            <div className="bg-emerald-600 text-white p-2 rounded-xl flex items-center justify-center shadow-md shadow-emerald-600/10">
              <Plus className="h-5 w-5" strokeWidth={3} />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-lg text-slate-900 tracking-tight leading-none">
                YOGI <span className="text-emerald-600">MEDICOSE</span>
              </span>
              <span className="text-[10px] font-bold text-slate-400 tracking-widest mt-0.5">
                HEALTHCARE
              </span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8 font-semibold text-slate-600 text-sm">
            <a
              href="#hero"
              className="hover:text-emerald-600 transition-colors"
            >
              Home
            </a>
            <a
              href="#categories"
              className="hover:text-emerald-600 transition-colors"
            >
              Categories
            </a>
            <a
              href="#highlights"
              className="hover:text-emerald-600 transition-colors scroll-smooth"
            >
              Medical Catalog
            </a>
            <a
              href="#about"
              className="hover:text-emerald-600 transition-colors"
            >
              About Us
            </a>
            <a
              href="tel:+919918949407"
              className="inline-flex items-center gap-2 bg-emerald-600 text-white px-5 py-2 rounded-xl hover:bg-emerald-700 transition-all font-medium shadow-sm"
            >
              <Phone className="h-4 w-4" /> Call Pharmacy
            </a>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-700 focus:outline-none p-2 rounded-lg hover:bg-slate-50 transition-colors"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 px-4 pt-2 pb-4 space-y-2 shadow-inner">
          <a
            href="#hero"
            onClick={() => setIsOpen(false)}
            className="block font-semibold text-slate-700 p-2.5 rounded-xl hover:bg-slate-50"
          >
            Home
          </a>
          <a
            href="#categories"
            onClick={() => setIsOpen(false)}
            className="block font-semibold text-slate-700 p-2.5 rounded-xl hover:bg-slate-50"
          >
            Categories
          </a>
          <a
            href="#highlights"
            onClick={() => setIsOpen(false)}
            className="block font-semibold text-slate-700 p-2.5 rounded-xl hover:bg-slate-50"
          >
            Medical Catalog
          </a>
          <a
            href="#about"
            onClick={() => setIsOpen(false)}
            className="block font-semibold text-slate-700 p-2.5 rounded-xl hover:bg-slate-50"
          >
            About Us
          </a>
          <a
            href="tel:+919918949407"
            className="flex items-center justify-center gap-2 bg-emerald-600 text-white py-3 rounded-xl font-semibold mt-4 shadow-sm"
          >
            <Phone className="h-4 w-4" /> Call Pharmacy
          </a>
        </div>
      )}
    </nav>
  );
}
