import React from "react";
import NavBar from "./components/Navbar";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import Highlights from "./components/Highlights";
import About from "./components/About";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <NavBar />
      <Hero />
      <Categories />
      <Highlights />
      <About />
      <Footer />
    </div>
  );
}
