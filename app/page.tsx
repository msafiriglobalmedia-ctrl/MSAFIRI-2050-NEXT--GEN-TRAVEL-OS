"use client";
import { useState } from "react";

export default function Msafiri2050() {
  return (
    <div className="min-h-screen bg-[#050A14] text-white">
      {/* NAVBAR FUTURISTIC */}
      <nav className="flex justify-between items-center p-6 border-b border-cyan-500/20">
        <h1 className="text-2xl font-black tracking-widest">MSAFIRI<span className="text-cyan-400">.2050</span></h1>
        <div className="flex gap-6 text-sm">
          <span className="text-cyan-400">● LIVE SYSTEM</span>
          <span>Flights</span><span>Buses</span><span>Cargo</span>
        </div>
      </nav>

      {/* HERO 2050 */}
      <div className="text-center py-20 px-4">
        <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent">
          TRAVEL BEYOND TIME
        </h2>
        <p className="mt-4 text-gray-400">Dar es Salaam → Zanzibar → Dubai → Mars Transit Hub | Powered by AI</p>

        {/* SEARCH BOX YA 2050 */}
        <div className="mt-12 bg-white/5 backdrop-blur-xl border border-cyan-500/30 p-8 rounded-[2rem] max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-4">
          <input placeholder="FROM: DAR" className="bg-black/50 border border-white/10 p-4 rounded-xl" />
          <input placeholder="TO: ZNZ / DXB / AMS" className="bg-black/50 border border-white/10 p-4 rounded-xl" />
          <input type="date" className="bg-black/50 border border-white/10 p-4 rounded-xl" />
          <select className="bg-black/50 border border-white/10 p-4 rounded-xl">
            <option>Electric Bus</option><option>Hyperloop</option><option>KLM e-Jet</option>
          </select>
          <button className="bg-cyan-400 text-black font-black p-4 rounded-xl hover:bg-cyan-300">
            SEARCH → 2050
          </button>
        </div>
      </div>

      {/* LIVE TICKETS */}
      <div className="grid md:grid-cols-3 gap-6 p-8 max-w-6xl mx-auto">
        {[
          { from: "DAR", to: "ZNZ", time: "06:00", price: "35,000", type: "E-Bus" },
          { from: "DAR", to: "DXB", time: "14:30", price: "850,000", type: "GB Airlines" },
          { from: "DAR", to: "AMS", time: "22:00", price: "1,200,000", type: "KLM x Msafiri" },
        ].map((t, i) => (
          <div key={i} className="bg-gradient-to-br from-white/10 to-white/5 p-6 rounded-2xl border border-white/10">
            <div className="flex justify-between">
              <span className="text-cyan-400 text-xs">{t.type}</span>
              <span className="text-green-400 text-xs">● SEATS AVAILABLE</span>
            </div>
            <h3 className="text-3xl font-bold mt-4">{t.from} → {t.to}</h3>
            <p className="text-gray-400 mt-2">{t.time} | AI-Powered Check-in</p>
            <div className="flex justify-between items-center mt-6">
              <span className="text-2xl font-bold">TZS {t.price}</span>
              <button className="bg-white text-black px-6 py-2 rounded-full text-sm font-bold">BOOK NOW</button>
            </div>
          </div>
        ))}
      </div>

      <footer className="text-center p-10 text-xs text-gray-500">
        © 2050 Msafiri Group | Built by DIT CST Graduate | CEO - GB Airlines Ecosystem
      </footer>
    </div>
  )
}
