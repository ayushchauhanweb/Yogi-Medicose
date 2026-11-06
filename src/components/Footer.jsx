import React from "react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-8 text-center text-sm border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-2">
        <p className="font-medium text-slate-300">
          © {new Date().getFullYear()} Yogi Medicose. All Rights Reserved.
        </p>
        <p className="text-slate-500 text-xs">
          Developed with passion for pure healthcare reliability.
        </p>
      </div>
    </footer>
  );
}
