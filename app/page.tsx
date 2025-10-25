"use client";

import Spline from '@splinetool/react-spline/next';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

// QuantumAI_Crazy3D_Portfolio.jsx
// Single-file React component (TailwindCSS + Framer Motion + Spline viewer)
// Default export a React component for preview in Canvas.
interface Project {
  id: string;
  title: string;
  short: string;
  bullets: string[];
}

export default function QuantumAIPortfolio() {
  const [active, setActive] = useState('home');
  const [openProject, setOpenProject] = useState<Project | null>(null);
  const nav = ['home', 'about', 'projects', 'demos', 'glossary', 'contact'];

  const projects = [
    {
      id: 'q-sim',
      title: 'Quantum Simulator (visual)',
      short: 'Visual, explainable quantum circuit sandbox.',
      bullets: ['Runs on simulated qubits', 'Visual gates and timelines', 'Explains in plain English']
    },
    {
      id: 'ai-lab',
      title: 'AI Lab — Explainable Models',
      short: 'Interpretable models for physics data and experiments.',
      bullets: ['Feature importance maps', 'Interactive counterfactuals', 'Notebook-ready code']
    },
    {
      id: 'qc-ops',
      title: 'QC Operations Toolkit',
      short: 'Tools to debug, profile, and visualize quantum hardware behavior.',
      bullets: ['Noise maps', 'Calibration timelines', 'Telemetry dashboards']
    }
  ];

  return (
    <div className="min-h-screen font-sans bg-black text-white relative overflow-hidden">
      {/* 3D Spline background in full-bleed layer */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Spline viewer iframe (replace src with your Spline scene) */}
        <Spline scene="https://prod.spline.design/7UdLD3GH5sstxBrG/scene.splinecode" />
        {/* subtle gradient overlay for contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />
      </div>

      {/* Page content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 py-8">
        <header className="flex flex-col items-center justify-center text-center py-24">
          <motion.h1 initial={{opacity:0, y:20}} animate={{opacity:1,y:0}} transition={{duration:0.8}} className="text-6xl sm:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-300 drop-shadow-lg">Quantum • AI • Innovation</motion.h1>
          <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.6, duration:0.8}} className="mt-4 text-lg text-white/80 max-w-2xl">Step into a hyper-real lab of quantum computing, AI consciousness, and future-shaping technology.</motion.p>
          <div className="mt-8 flex gap-4 flex-wrap justify-center">
            <motion.button whileHover={{scale:1.05}} whileTap={{scale:0.95}} className="px-8 py-4 rounded-2xl backdrop-blur-xl bg-white/10 border border-white/20 shadow-lg hover:bg-white/20">Enter Projects</motion.button>
            <motion.button whileHover={{scale:1.05}} whileTap={{scale:0.95}} className="px-8 py-4 rounded-2xl backdrop-blur-xl bg-gradient-to-r from-purple-500 to-cyan-400 text-black font-semibold">Explore Labs</motion.button>
          </div>
        </header>

        <main className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left column: intro */}
          <section className="lg:col-span-2">
            <motion.div initial={{opacity:0, y:20}} animate={{opacity:1,y:0}} transition={{duration:0.6}}>
              <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight">We make quantum physics simple — and wild.</h2>
              <p className="mt-4 text-lg text-white/80">Interactive demos, plain-English explainers, and production-ready tooling to let curious people (and researchers) explore quantum computing and AI. No PhD required.</p>

              <div className="mt-6 flex gap-3 flex-wrap">
                <button onClick={() => setActive('projects')} className="px-5 py-3 rounded-2xl bg-white/10 hover:bg-white/14">Explore Projects</button>
                <button onClick={() => setActive('demos')} className="px-5 py-3 rounded-2xl border border-white/10">Try a Demo</button>
                <a href="#glossary" onClick={() => setActive('glossary')} className="px-5 py-3 rounded-2xl bg-white/6">Quick Glossary</a>
              </div>

              {/* Accessibility & quick explainers */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 bg-white/4 rounded-lg">
                  <h3 className="font-semibold">For Beginners</h3>
                  <p className="text-sm text-white/70 mt-2">Simple analogies, visuals, and short videos explaining qubits, superposition, and entanglement.</p>
                </div>
                <div className="p-4 bg-white/4 rounded-lg">
                  <h3 className="font-semibold">For Engineers</h3>
                  <p className="text-sm text-white/70 mt-2">Code snippets, notebooks, and API docs to reproduce experiments and run simulations locally or in the cloud.</p>
                </div>
                <div className="p-4 bg-white/4 rounded-lg">
                  <h3 className="font-semibold">For Researchers</h3>
                  <p className="text-sm text-white/70 mt-2">Datasets, reproducible pipelines, and open-source toolkits for benchmarking and noise studies.</p>
                </div>
              </div>
            </motion.div>

            {/* Projects list */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Highlighted Projects</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {projects.map(p => (
                  <motion.article key={p.id} whileHover={{y:-6}} className="p-4 bg-white/5 rounded-lg cursor-pointer" onClick={() => setOpenProject(p)}>
                    <h4 className="font-bold">{p.title}</h4>
                    <p className="text-sm text-white/70 mt-2">{p.short}</p>
                    <div className="mt-3 text-xs text-white/60">Click to expand • Live demo & code</div>
                  </motion.article>
                ))}
              </div>
            </div>
          </section>

          {/* Right column: live widgets */}
          <aside className="space-y-4">
            <div className="p-4 bg-white/4 rounded-xl">
              <h4 className="font-semibold">Live Qubit Count</h4>
              <div className="mt-3 text-3xl font-bold">128 ✦</div>
              <p className="text-sm text-white/70 mt-2">Simulated environment showing current virtual qubit availability.</p>
            </div>

            <div className="p-4 bg-white/4 rounded-xl">
              <h4 className="font-semibold">Latest Insight</h4>
              <p className="mt-2 text-sm text-white/70">How noise shapes error rates — interactive viz inside demos.</p>
            </div>

            <div className="p-4 bg-white/4 rounded-xl">
              <h4 className="font-semibold">Get Involved</h4>
              <p className="mt-2 text-sm text-white/70">Contribute code, design experiments, sponsor compute — we welcome collaborators.</p>
              <a href="#contact" onClick={() => setActive('contact')} className="mt-3 inline-block px-3 py-2 rounded-md bg-white/6">Contact</a>
            </div>
          </aside>
        </main>

        {/* Sections that can be activated via nav (simple single-file behavior) */}
        <section className="mt-12">
          {active === 'about' && (
            <div className="p-6 bg-white/4 rounded-xl">
              <h3 className="text-2xl font-bold">About — TL;DR</h3>
              <p className="mt-3 text-white/80">We blend quantum experiments and AI tooling into playful, open projects. We explain hard concepts with analogies, visuals, and interactive toys so anyone can tinker.</p>
              <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 bg-white/6 rounded">Qubits = spinning coins that can be heads and tails at once (superposition)</div>
                <div className="p-4 bg-white/6 rounded">Entanglement = magic link between coins — flip one, the other shows a linked behavior</div>
                <div className="p-4 bg-white/6 rounded">Measurement = checking the coin — it becomes a definite heads or tails</div>
              </div>
            </div>
          )}

          {active === 'projects' && (
            <div className="p-6 bg-white/4 rounded-xl">
              <h3 className="text-2xl font-bold">Projects</h3>
              <p className="mt-3 text-white/80">Full list of active experiments and apps. Click a project tile to open details and demo links.</p>
              <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                {projects.map(p => (
                  <article key={'full-'+p.id} className="p-4 bg-white/6 rounded-lg">
                    <h4 className="font-semibold">{p.title}</h4>
                    <p className="text-sm text-white/70 mt-2">{p.short}</p>
                    <ul className="mt-2 text-xs list-disc pl-4 text-white/60">{p.bullets.map(b => <li key={b}>{b}</li>)}</ul>
                    <div className="mt-3"><button onClick={() => setOpenProject(p)} className="px-3 py-2 rounded-md bg-white/8">Open</button></div>
                  </article>
                ))}
              </div>
            </div>
          )}

          {active === 'demos' && (
            <div className="p-6 bg-white/4 rounded-xl">
              <h3 className="text-2xl font-bold">Live Demos</h3>
              <p className="mt-3 text-white/80">Interactive embeddable sandboxes — quantum circuits you can drag-and-drop, AI explainers with sliders, and noise playgrounds.</p>
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-white/6 rounded">Quantum Circuit Sandbox (drag gates)</div>
                <div className="p-4 bg-white/6 rounded">AI Counterfactual Explorer (change inputs, see effect)</div>
              </div>
            </div>
          )}

          {active === 'glossary' && (
            <div id="glossary" className="p-6 bg-white/4 rounded-xl">
              <h3 className="text-2xl font-bold">Glossary — Quick</h3>
              <dl className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <dt className="font-semibold">Qubit</dt>
                  <dd className="text-sm text-white/70">Quantum bit, can be in many states until measured.</dd>
                </div>
                <div>
                  <dt className="font-semibold">Superposition</dt>
                  <dd className="text-sm text-white/70">Like a coin spinning: not strictly heads or tails until you check it.</dd>
                </div>
                <div>
                  <dt className="font-semibold">Entanglement</dt>
                  <dd className="text-sm text-white/70">Strong connection between particles across distance.</dd>
                </div>
              </dl>
            </div>
          )}

          {active === 'contact' && (
            <div id="contact" className="p-6 bg-white/4 rounded-xl">
              <h3 className="text-2xl font-bold">Contact & Collaborate</h3>
              <p className="mt-3 text-white/80">Want to contribute? Sponsor compute? Help write demos? Reach out with your idea.</p>
              <form className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input aria-label="name" placeholder="Your name" className="p-3 rounded bg-white/6" />
                <input aria-label="email" placeholder="Email" className="p-3 rounded bg-white/6" />
                <textarea aria-label="message" placeholder="Short message" className="p-3 rounded bg-white/6 col-span-full" rows={4}></textarea>
                <button className="px-4 py-2 rounded bg-gradient-to-r from-indigo-500 to-cyan-400 text-black font-semibold col-span-full">Send</button>
              </form>
            </div>
          )}
        </section>

        <footer className="mt-12 text-sm text-white/60">Developed by Praneeth Boinpally • © {new Date().getFullYear()} • Open-source experiments</footer>
      </div>

      {/* Project modal */}
      {openProject && (
        <div className="fixed inset-0 z-40 flex items-center justify-center p-6">
          <div className="absolute inset-0 bg-black/80" onClick={() => setOpenProject(null)} />
          <motion.div initial={{scale:0.9, opacity:0}} animate={{scale:1, opacity:1}} className="relative z-50 max-w-3xl w-full bg-white/5 rounded-xl p-6">
            <h3 className="text-xl font-bold">{openProject.title}</h3>
            <p className="mt-2 text-white/70">{openProject.short}</p>
            <ul className="mt-4 list-disc pl-5 text-white/70">{openProject.bullets.map(b => <li key={b}>{b}</li>)}</ul>
            <div className="mt-6 flex gap-3">
              <a className="px-4 py-2 rounded bg-white/8">Open Demo</a>
              <a className="px-4 py-2 rounded border border-white/8">View Code</a>
              <button onClick={() => setOpenProject(null)} className="px-4 py-2 rounded bg-white/10">Close</button>
            </div>
          </motion.div>
        </div>
      )}

      {/* small accessibility helper */}
      <div className="fixed right-4 bottom-4 z-50">
        <button title="Increase text" onClick={() => document.documentElement.style.fontSize = '18px'} className="px-3 py-2 rounded bg-white/6">A+</button>
      </div>
    </div>
  );
}
