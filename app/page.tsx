"use client";

import Spline from "@splinetool/react-spline/next";
import React, { useState } from "react";
import { motion } from "framer-motion";

type Project = {
  id: string;
  title: string;
  short: string;
  bullets: string[];
};

export default function QuantumAIPortfolio() {
  const [active, setActive] = useState<string>("home");
  const [openProject, setOpenProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: "q-sim",
      title: "Quantum Simulator (visual)",
      short: "Visual, explainable quantum circuit sandbox.",
      bullets: [
        "Runs on simulated qubits",
        "Visual gates and timelines",
        "Explains in plain English",
      ],
    },
    {
      id: "ai-lab",
      title: "AI Lab — Explainable Models",
      short: "Interpretable models for physics data and experiments.",
      bullets: [
        "Feature importance maps",
        "Interactive counterfactuals",
        "Notebook-ready code",
      ],
    },
    {
      id: "qc-ops",
      title: "QC Operations Toolkit",
      short: "Tools to debug, profile, and visualize quantum hardware behavior.",
      bullets: ["Noise maps", "Calibration timelines", "Telemetry dashboards"],
    },
  ];

  const handleProjectClick = (p: Project) => {
    setOpenProject({ ...p }); // ✅ explicit object copy ensures correct type
  };

  return (
    <div className="min-h-screen font-sans bg-black text-white relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <Spline scene="https://prod.spline.design/7UdLD3GH5sstxBrG/scene.splinecode" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />
      </div>

      {/* Main content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 py-8">
        <header className="flex flex-col items-center justify-center text-center py-24">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl sm:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-300 drop-shadow-lg"
          >
            Quantum • AI • Innovation
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-4 text-lg text-white/80 max-w-2xl"
          >
            Step into a hyper-real lab of quantum computing, AI consciousness,
            and future-shaping technology.
          </motion.p>
          <div className="mt-8 flex gap-4 flex-wrap justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-2xl backdrop-blur-xl bg-white/10 border border-white/20 shadow-lg hover:bg-white/20"
            >
              Enter Projects
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-2xl backdrop-blur-xl bg-gradient-to-r from-purple-500 to-cyan-400 text-black font-semibold"
            >
              Explore Labs
            </motion.button>
          </div>
        </header>

        <main className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Projects list */}
          <section className="lg:col-span-2">
            <h3 className="text-xl font-semibold mb-4">Highlighted Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {projects.map((p) => (
                <motion.article
                  key={p.id}
                  whileHover={{ y: -6 }}
                  className="p-4 bg-white/5 rounded-lg cursor-pointer"
                  onClick={() => handleProjectClick(p)} // ✅ fixed type-safe call
                >
                  <h4 className="font-bold">{p.title}</h4>
                  <p className="text-sm text-white/70 mt-2">{p.short}</p>
                  <div className="mt-3 text-xs text-white/60">
                    Click to expand • Live demo & code
                  </div>
                </motion.article>
              ))}
            </div>
          </section>

          {/* Sidebar */}
          <aside className="space-y-4">
            <div className="p-4 bg-white/4 rounded-xl">
              <h4 className="font-semibold">Live Qubit Count</h4>
              <div className="mt-3 text-3xl font-bold">128 ✦</div>
              <p className="text-sm text-white/70 mt-2">
                Simulated environment showing current virtual qubit availability.
              </p>
            </div>
          </aside>
        </main>

        <footer className="mt-12 text-sm text-white/60">
          Developed by Praneeth Boinpally • © {new Date().getFullYear()} •
          Open-source experiments
        </footer>
      </div>

      {/* Modal */}
      {openProject && (
        <div className="fixed inset-0 z-40 flex items-center justify-center p-6">
          <div
            className="absolute inset-0 bg-black/80"
            onClick={() => setOpenProject(null)}
          />
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative z-50 max-w-3xl w-full bg-white/5 rounded-xl p-6"
          >
            <h3 className="text-xl font-bold">{openProject.title}</h3>
            <p className="mt-2 text-white/70">{openProject.short}</p>
            <ul className="mt-4 list-disc pl-5 text-white/70">
              {openProject.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
            <div className="mt-6 flex gap-3">
              <a className="px-4 py-2 rounded bg-white/8">Open Demo</a>
              <a className="px-4 py-2 rounded border border-white/8">View Code</a>
              <button
                onClick={() => setOpenProject(null)}
                className="px-4 py-2 rounded bg-white/10"
              >
                Close
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
