"use client";

import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-slate-900/95 backdrop-blur border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <a href="#home" className="font-semibold text-lg">
          Rahul
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8 text-sm text-slate-300">
          <a href="#services" className="hover:text-white">Services</a>
          <a href="#projects" className="hover:text-white">Projects</a>
          <a href="#skills" className="hover:text-white">Skills</a>
          <a href="#about" className="hover:text-white">About</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </nav>

        {/* Hamburger (Mobile Only) */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-slate-900 border-t border-slate-800 px-6 py-6 space-y-5 text-slate-300 text-lg">
          <a href="#services" onClick={() => setOpen(false)} className="block">Services</a>
          <a href="#projects" onClick={() => setOpen(false)} className="block">Projects</a>
          <a href="#skills" onClick={() => setOpen(false)} className="block">Skills</a>
          <a href="#about" onClick={() => setOpen(false)} className="block">About</a>
          <a href="#contact" onClick={() => setOpen(false)} className="block">Contact</a>
        </div>
      )}
    </header>
  );
}