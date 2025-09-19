"use client";
import Navbar from "@/components/Navbar";
import AnimatedBG from "@/components/AnimatedBG";
import { motion } from "framer-motion";
import { useCallback, useEffect, useMemo, useState } from "react";

export default function CrowmanToolPage() {
  const [dragOver, setDragOver] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [running, setRunning] = useState(false);
  const [progress, setProgress] = useState(0);
  const valid = !!file;
  const [showDashboard, setShowDashboard] = useState(false);
  const [compact, setCompact] = useState(true); // small tool window by default
  const [online, setOnline] = useState<boolean>(true);

  // Lock body scroll on this page to avoid any global scrollbar
  useEffect(() => {
    const prev = document.body.style.overflow;
    const prevHtml = document.documentElement.style.overflow;
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
      document.documentElement.style.overflow = prevHtml;
    };
  }, []);

  // Track network status for status bar
  useEffect(() => {
    const update = () => setOnline(navigator.onLine);
    update();
    window.addEventListener('online', update);
    window.addEventListener('offline', update);
    return () => {
      window.removeEventListener('online', update);
      window.removeEventListener('offline', update);
    };
  }, []);

  const onDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragOver(false);
    const f = e.dataTransfer.files?.[0];
    if (f) {
      if (!f.name.endsWith(".zip")) {
        alert("Please drop a .zip file");
        return;
      }
      setFile(f);
    }
  }, []);

  const onBrowse = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    if (f) {
      if (!f.name.endsWith(".zip")) {
        alert("Please select a .zip file");
        e.target.value = "";
        return;
      }
      setFile(f);
    }
  }, []);

  const startAnalyze = async () => {
    if (!valid) return;
    setRunning(true);
    setProgress(0);
    // Simulate progress for demo UI
    for (let i = 0; i <= 100; i += 2) {
      await new Promise((r) => setTimeout(r, 50));
      setProgress(i);
    }
    setRunning(false);
    // Show a mock IDE-style dashboard after completion
    setShowDashboard(true);
  };

  const cardTitle = useMemo(() => {
    return "Analyze Your Project's Cloud Readiness";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="relative isolate flex-1 py-0 overflow-hidden">
        <AnimatedBG glows={false} />
        <div className={showDashboard && !compact ? 'mx-auto max-w-none px-0 h-[calc(100vh-4rem)] flex' : 'mx-auto max-w-[1400px] px-8 sm:px-14 lg:px-24'}>
          {!showDashboard ? (
            <div className="flex justify-center items-center" style={{ minHeight: 'calc(100vh - 6rem)' }}>
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-md rounded-2xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/30"
              >
              <h1 className="text-xl sm:text-2xl font-semibold tracking-tight text-center">
                {cardTitle}
              </h1>
              <p className="mt-2 text-center text-sm text-neutral-300">
                Get a complete report in minutes. All analysis is done securely on your local machine.
              </p>

              {/* Dropzone */}
              <div
                className={`mt-6 rounded-xl border-2 ${dragOver ? 'border-brand-400 bg-brand-500/10' : 'border-dashed border-white/15 bg-neutral-900/50'} p-4 cursor-pointer`}
                onDragEnter={(e) => { e.preventDefault(); setDragOver(true); }}
                onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
                onDragLeave={(e) => { e.preventDefault(); setDragOver(false); }}
                onDrop={onDrop}
                onClick={() => document.getElementById('zip-input')?.click()}
              >
                <div className="flex items-center gap-3">
                  <div className="text-3xl">📁</div>
                  <div>
                    <p className="text-sm font-medium">Drag and drop your project ZIP file here</p>
                    <p className="text-xs text-neutral-400">or click to browse</p>
                  </div>
                </div>
                {file && (
                  <p className="mt-3 text-xs text-neutral-300">Selected: {file.name}</p>
                )}
                <input id="zip-input" type="file" accept=".zip" className="hidden" onChange={onBrowse} />
              </div>

              {/* Analyze button */}
              <button
                disabled={!valid || running}
                onClick={startAnalyze}
                className="mt-4 w-full rounded-md px-4 py-2 text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed bg-emerald-500 hover:bg-emerald-400 text-neutral-950 transition"
              >
                {running ? 'Analyzing…' : 'Analyze Project'}
              </button>

              {/* Progress */}
              {running && (
                <div className="mt-4">
                  <div className="h-2 w-full rounded bg-neutral-800 overflow-hidden">
                    <div className="h-2 bg-emerald-400 transition-all" style={{ width: `${progress}%` }} />
                  </div>
                  <p className="mt-2 text-xs text-neutral-400 text-center">{progress}%</p>
                </div>
              )}

              <p className="mt-3 text-[11px] text-neutral-500 text-center">
                Demo-only UI. No files are uploaded. For production, we can wire this to a local engine.
              </p>
              </motion.div>
            </div>
          ) : (
            // Mock IDE dashboard (full screen or compact)
            <div className={compact ? 'flex items-center justify-center' : 'flex-1'} style={compact ? { minHeight: 'calc(100vh - 4rem)' } : undefined}>
            <motion.div
              initial={{opacity:0}}
              animate={{opacity:1}}
              transition={{duration:0.4}}
              className={`${compact ? 'max-w-6xl w-full mx-auto h-[80vh]' : 'w-full h-[calc(100vh-4rem)]'} rounded-xl border border-white/10 bg-white/5 overflow-hidden flex flex-col`}
            >
              <div className="flex items-center justify-between px-4 py-2 border-b border-white/10 bg-neutral-900/60 shrink-0">
                <div className="flex items-center gap-2 text-xs">
                  <span className="inline-block h-3 w-3 rounded-full bg-red-500" />
                  <span className="inline-block h-3 w-3 rounded-full bg-yellow-500" />
                  <span className="inline-block h-3 w-3 rounded-full bg-green-500" />
                  <span className="ml-3 text-neutral-300">Vulnerability Scan • {file?.name}</span>
                </div>
                <div className="flex items-center gap-2">
                  <button onClick={()=> setCompact((v)=>!v)} className="text-xs px-2 py-1 rounded bg-white/10 hover:bg-white/20">
                    {compact ? 'Fullscreen' : 'Compact'}
                  </button>
                  <button onClick={()=>{setShowDashboard(false); setFile(null);}} className="text-xs px-2 py-1 rounded bg-white/10 hover:bg-white/20">New Analysis</button>
                </div>
              </div>
              <div className="grid grid-rows-1 flex-1">
                <div className="grid grid-cols-12 h-full overflow-hidden">
                  {/* Sidebar: Vulnerabilities only */}
                  <aside className="col-span-12 md:col-span-3 border-right border-white/10 bg-neutral-950/40 p-3 text-sm overflow-hidden">
                    <p className="text-xs uppercase tracking-wide text-neutral-400">Vulnerabilities</p>
                    <div className="mt-2 rounded-lg border border-white/10 bg-white/5 p-3 space-y-2">
                      <div className="flex items-center justify-between text-sm"><span>Critical</span><span className="text-rose-300">0</span></div>
                      <div className="flex items-center justify-between text-sm"><span>High</span><span className="text-orange-300">1</span></div>
                      <div className="flex items-center justify-between text-sm"><span>Medium</span><span className="text-amber-300">2</span></div>
                      <div className="flex items-center justify-between text-sm"><span>Low</span><span className="text-neutral-300">3</span></div>
                    </div>
                  </aside>
                  {/* Main: Vuln list */}
                  <div className="col-span-12 md:col-span-9 p-4 overflow-hidden">
                    <div className="rounded border border-white/10 bg-neutral-950/60 overflow-auto h-full">
                      <div className="sticky top-0 z-10 flex items-center justify-between px-4 py-2 border-b border-white/10 bg-neutral-900/70 text-xs">
                        <span>Found 6 vulnerabilities</span>
                        <div className="flex items-center gap-2">
                          <button className="rounded px-2 py-1 bg-white/10 hover:bg-white/20">Filter</button>
                          <button className="rounded px-2 py-1 bg-white/10 hover:bg-white/20">Export</button>
                        </div>
                      </div>
                      <div className="divide-y divide-white/10 text-sm">
                        <div className="grid grid-cols-12 gap-2 px-4 py-3">
                          <div className="col-span-5">
                            <p className="font-medium">lodash 4.17.19</p>
                            <p className="text-xs text-neutral-400">CVE-2020-8203 • Prototype pollution</p>
                          </div>
                          <div className="col-span-2"><span className="inline-flex items-center text-xs rounded px-2 py-0.5 bg-orange-500/20 text-orange-300">High</span></div>
                          <div className="col-span-3 text-xs text-neutral-300">Fixed in 4.17.21</div>
                          <div className="col-span-2 text-right"><button className="rounded px-2 py-1 bg-white/10 hover:bg-white/20 text-xs">View</button></div>
                        </div>
                        <div className="grid grid-cols-12 gap-2 px-4 py-3">
                          <div className="col-span-5">
                            <p className="font-medium">minimist 1.2.2</p>
                            <p className="text-xs text-neutral-400">CVE-2020-7598 • Prototype pollution</p>
                          </div>
                          <div className="col-span-2"><span className="inline-flex items-center text-xs rounded px-2 py-0.5 bg-amber-500/20 text-amber-300">Medium</span></div>
                          <div className="col-span-3 text-xs text-neutral-300">Fixed in 1.2.6</div>
                          <div className="col-span-2 text-right"><button className="rounded px-2 py-1 bg-white/10 hover:bg-white/20 text-xs">View</button></div>
                        </div>
                        <div className="grid grid-cols-12 gap-2 px-4 py-3">
                          <div className="col-span-5">
                            <p className="font-medium">serialize-javascript 2.1.1</p>
                            <p className="text-xs text-neutral-400">CVE-2019-16769 • XSS</p>
                          </div>
                          <div className="col-span-2"><span className="inline-flex items-center text-xs rounded px-2 py-0.5 bg-amber-500/20 text-amber-300">Medium</span></div>
                          <div className="col-span-3 text-xs text-neutral-300">Fixed in 2.1.2</div>
                          <div className="col-span-2 text-right"><button className="rounded px-2 py-1 bg-white/10 hover:bg-white/20 text-xs">View</button></div>
                        </div>
                        <div className="grid grid-cols-12 gap-2 px-4 py-3">
                          <div className="col-span-5">
                            <p className="font-medium">axios 0.21.0</p>
                            <p className="text-xs text-neutral-400">CVE-2021-3749 • SSRF</p>
                          </div>
                          <div className="col-span-2"><span className="inline-flex items-center text-xs rounded px-2 py-0.5 bg-neutral-500/20 text-neutral-300">Low</span></div>
                          <div className="col-span-3 text-xs text-neutral-300">Fixed in 0.21.2</div>
                          <div className="col-span-2 text-right"><button className="rounded px-2 py-1 bg-white/10 hover:bg-white/20 text-xs">View</button></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Status bar */}
              <div className="shrink-0 h-8 border-t border-white/10 bg-neutral-900/70 px-3 text-[11px] text-neutral-300 flex items-center gap-4">
                <div className="flex items-center gap-1">
                  <span className={`inline-block h-2.5 w-2.5 rounded-full ${running ? 'bg-amber-400' : 'bg-emerald-400'}`}></span>
                  <span>Engine: {running ? `Analyzing ${progress}%` : 'Idle'}</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="inline-block h-2.5 w-2.5 rounded-full bg-emerald-400"></span>
                  <span>Health: OK</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className={`inline-block h-2.5 w-2.5 rounded-full ${online ? 'bg-emerald-400' : 'bg-rose-400'}`}></span>
                  <span>{online ? 'Online' : 'Offline'}</span>
                </div>
              </div>
            </motion.div>
            </div>
          )}
        </div>
      </main>
      {/* No footer on tool page for focused experience */}
    </div>
  );
}
