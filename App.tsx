
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useSpring, useTransform, useInView } from 'framer-motion';
import { 
  Github, 
  Linkedin, 
  Mail, 
  X, 
  ChevronRight, 
  Cpu, 
  Layers, 
  Code, 
  TrendingUp, 
  Globe, 
  Shield, 
  RefreshCw, 
  ExternalLink,
  Activity as Heartbeat,
  Maximize2,
  Box,
  ZapOff,
  Zap,
  Terminal,
  Activity,
  Database,
  Cloud,
  Settings
} from 'lucide-react';
import { MURALI } from './constants';
import { Project } from './types';
import { ChatWidget } from './components/ChatWidget';
import { MagneticButton } from './components/MagneticButton';

// =========================================================
// ADVANCED COMPONENTS
// =========================================================

const SectionTitle = ({ children, pre, id }: { children: React.ReactNode; pre?: string; id?: string }) => (
  <div className="mb-16" id={id}>
    {pre && (
      <motion.div 
        initial={{ opacity: 0, x: -20 }} 
        whileInView={{ opacity: 1, x: 0 }} 
        viewport={{ once: true }}
        className="flex items-center gap-3 mb-6"
      >
        <div className="h-px w-10 bg-cyan-500 shadow-[0_0_10px_#06b6d4]" />
        <span className="text-cyan-500 font-black uppercase tracking-[0.5em] text-[10px]">{pre}</span>
      </motion.div>
    )}
    <motion.h2 
      initial={{ opacity: 0, y: 30 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="text-[6vw] md:text-[5vw] font-display font-black leading-[0.85] tracking-tighter uppercase italic text-white"
    >
      {children}
    </motion.h2>
  </div>
);

const TechStackMatrix = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <div ref={containerRef} className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 mb-32">
      {MURALI.skills.map((skill, i) => (
        <motion.div
          key={skill.name}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: i * 0.05, duration: 0.5 }}
          whileHover={{ y: -5, scale: 1.05 }}
          className="p-6 glass-card rounded-2xl flex flex-col items-center justify-center gap-3 group transition-all duration-300 hover:border-cyan-500/50 hover:bg-cyan-500/5 shadow-2xl"
        >
          <img src={skill.iconUrl} alt={skill.name} className="w-10 h-10 grayscale group-hover:grayscale-0 transition-all duration-500" />
          <span className="text-[10px] font-black uppercase tracking-widest text-slate-500 group-hover:text-white transition-colors">{skill.name}</span>
          <div className="w-full h-0.5 bg-white/5 rounded-full overflow-hidden">
            <motion.div 
              initial={{ width: 0 }}
              animate={isInView ? { width: `${skill.level}%` } : {}}
              transition={{ delay: 1 + i * 0.05, duration: 1 }}
              className="h-full bg-cyan-500 shadow-[0_0_8px_#06b6d4]"
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
};

// =========================================================
// REAL-TIME SIMULATORS (PREMIUM DARK)
// =========================================================

const SentinelDashboard = () => {
  const [nodes, setNodes] = useState<{ id: string; load: number; status: string }[]>([]);
  const [isPatching, setIsPatching] = useState(false);

  useEffect(() => {
    setNodes(Array.from({ length: 6 }, (_, i) => ({
      id: `NODE-0X${i + 1}`,
      load: Math.floor(Math.random() * 30) + 10,
      status: 'nominal'
    })));
    const interval = setInterval(() => {
      if (isPatching) return;
      setNodes(prev => prev.map(n => ({
        ...n,
        load: Math.min(100, Math.max(5, n.load + (Math.random() - 0.5) * 20))
      })));
    }, 1500);
    return () => clearInterval(interval);
  }, [isPatching]);

  const runPatch = () => {
    setIsPatching(true);
    setTimeout(() => {
      setNodes(prev => prev.map(n => ({ ...n, load: 12 })));
      setIsPatching(false);
    }, 1500);
  };

  return (
    <div className="w-full h-full bg-[#050505] p-8 font-mono text-xs flex flex-col border border-white/5 shadow-2xl">
      <div className="flex justify-between items-center mb-10 border-b border-white/5 pb-6">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse shadow-[0_0_10px_cyan]" />
          <span className="text-white font-black uppercase tracking-widest text-[9px]">Sentinel_Kernel_v9.1</span>
        </div>
        <span className="text-slate-600 text-[8px] uppercase tracking-[0.5em]">STATUS: ENCRYPTED</span>
      </div>
      <div className="grid grid-cols-2 gap-4 flex-1">
        {nodes.map(n => (
          <div key={n.id} className="p-4 bg-white/[0.02] border border-white/5 rounded-lg flex flex-col justify-between">
            <div className="flex justify-between text-[8px] mb-4">
              <span className="text-slate-500">{n.id}</span>
              <span className={n.load > 80 ? 'text-rose-500' : 'text-cyan-500'}>{n.load.toFixed(1)}%</span>
            </div>
            <div className="h-1 bg-white/5 rounded-full overflow-hidden">
              <motion.div animate={{ width: `${n.load}%` }} className={`h-full ${n.load > 80 ? 'bg-rose-500' : 'bg-cyan-500'}`} />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 flex justify-between items-end">
        <div>
          <p className="text-slate-600 text-[8px] uppercase tracking-widest mb-1">Global Health</p>
          <p className="text-2xl text-white font-display font-black italic">99.9%</p>
        </div>
        <button onClick={runPatch} className="px-6 py-2 bg-white text-black rounded-full font-black text-[9px] uppercase tracking-widest hover:bg-cyan-500 transition-all active:scale-95 shadow-xl">
          {isPatching ? 'PATCHING...' : 'INIT_PATCH'}
        </button>
      </div>
    </div>
  );
};

// =========================================================
// MAIN APP
// =========================================================

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <div className="relative selection:bg-cyan-500 selection:text-black">
      <ChatWidget />
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-cyan-500 origin-left z-[100] shadow-[0_0_15px_cyan]" style={{ scaleX }} />

      {/* --- NAVBAR --- */}
      <nav className="fixed top-0 left-0 right-0 z-50 py-6 transition-all duration-500">
        <div className="container mx-auto px-8 flex justify-between items-center">
          <button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="flex items-center gap-4 group">
            <div className="w-10 h-10 bg-white text-black rounded-2xl flex items-center justify-center font-black text-xl group-hover:rotate-12 transition-transform shadow-2xl">M</div>
            <span className="text-white font-black text-lg tracking-tighter uppercase hidden md:block">Murali Dasari</span>
          </button>
          <div className="flex items-center gap-10 text-[10px] font-black uppercase tracking-[0.4em] text-slate-500">
            {['Expertise', 'Projects', 'Contact'].map((item) => (
              <button 
                key={item} 
                onClick={() => document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })} 
                className="hover:text-cyan-500 transition-colors relative group py-1"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-500 group-hover:w-full transition-all duration-300" />
              </button>
            ))}
            <MagneticButton 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} 
              className="px-8 py-4 bg-white text-black rounded-full font-black text-[10px] uppercase tracking-[0.3em] hover:bg-cyan-500 transition-all shadow-2xl hover:scale-105 active:scale-95"
            >
              Control Link
            </MagneticButton>
          </div>
        </div>
      </nav>

      {/* --- HERO SECTION (ULTRA TIGHT) --- */}
      <section id="hero" className="min-h-screen pt-40 pb-0 flex flex-col justify-center relative overflow-hidden">
        <div className="container mx-auto px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="flex items-center gap-3 mb-10">
              <div className="h-px w-12 bg-cyan-500 shadow-[0_0_10px_cyan]" />
              <span className="text-cyan-500 font-black uppercase tracking-[0.6em] text-[11px]">System Status: Nominal</span>
            </div>
            
            <h1 className="text-[13vw] md:text-[10vw] font-display font-black leading-[0.75] tracking-tighter mb-10 text-glow">
              <span className="block text-white uppercase">Shipping</span>
              <span className="block text-white uppercase italic text-cyan-500">Autonomous</span>
              <span className="block text-white uppercase">Protocols.</span>
            </h1>

            <div className="grid lg:grid-cols-[2fr_1fr] gap-16 items-end">
              <div className="space-y-10">
                <p className="text-2xl md:text-4xl font-light text-slate-400 leading-tight max-w-5xl tracking-tighter">
                  {MURALI.bio}
                </p>
                <div className="flex flex-wrap gap-10">
                  <MagneticButton 
                    onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                    className="px-12 py-6 bg-white text-black rounded-full font-black text-xs uppercase tracking-[0.5em] flex items-center gap-4 hover:bg-cyan-500 shadow-2xl group transition-all"
                  >
                    Enter Control Matrix <ChevronRight size={18} className="group-hover:translate-x-2 transition-transform" />
                  </MagneticButton>
                  <div className="flex gap-8 items-center">
                    <a href={MURALI.github} target="_blank" className="p-6 bg-white/5 border border-white/10 rounded-2xl text-slate-500 hover:text-white transition-all transform hover:scale-110"><Github size={28} /></a>
                    <a href={MURALI.linkedin} target="_blank" className="p-6 bg-white/5 border border-white/10 rounded-2xl text-slate-500 hover:text-white transition-all transform hover:scale-110"><Linkedin size={28} /></a>
                  </div>
                </div>
              </div>
              <div className="hidden lg:block">
                 <div className="w-full aspect-[4/5] bg-[#050505] rounded-[4rem] border border-white/5 overflow-hidden shadow-2xl relative grayscale hover:grayscale-0 transition-all duration-[1000ms] group">
                    <img src={MURALI.heroImage} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-1000" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90" />
                 </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- CORE PRINCIPLES (NEW ADVANCED SECTION) --- */}
      <section className="py-40 border-y border-white/5 bg-white/[0.01]">
        <div className="container mx-auto px-8">
          <SectionTitle pre="Engineering Core">Architectural <br /> Philosophy.</SectionTitle>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { 
                icon: Shield, 
                title: "Reliability First", 
                desc: "Every system is designed with deterministic failure modes and sub-millisecond automated recovery protocols." 
              },
              { 
                icon: Zap, 
                title: "Infinite Scale", 
                desc: "Architecting for multi-region consistency while maintaining extreme token throughput in distributed AI workloads." 
              },
              { 
                icon: Box, 
                title: "Obsessive Clarity", 
                desc: "Clean architecture isn't just a choice; it's a hard requirement for operating high-frequency systems." 
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
                className="p-12 glass-card rounded-[3rem] group hover:border-cyan-500/50 transition-all duration-500"
              >
                <div className="w-16 h-16 bg-cyan-500/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-cyan-500 transition-all">
                  <item.icon size={32} className="text-cyan-500 group-hover:text-black transition-all" />
                </div>
                <h3 className="text-3xl font-display font-black text-white mb-4 uppercase italic tracking-tighter">{item.title}</h3>
                <p className="text-slate-500 text-lg leading-relaxed font-light group-hover:text-slate-200 transition-colors">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SYSTEMS EXPERTISE --- */}
      <section id="expertise" className="py-40 border-b border-white/5">
        <div className="container mx-auto px-8">
          <SectionTitle pre="Systemic Expertise">Operational <br /> Mastery.</SectionTitle>
          <div className="grid md:grid-cols-3 gap-8">
            {MURALI.expertise.map((exp, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="p-10 glass-card rounded-[2.5rem] group hover:bg-cyan-500/5 transition-all duration-700"
              >
                <div className="w-20 h-20 bg-white/[0.03] border border-white/10 rounded-3xl flex items-center justify-center mb-10 group-hover:rotate-[-10deg] transition-all">
                   {exp.iconName === 'cpu' && <Cpu size={32} className="text-cyan-500" />}
                   {exp.iconName === 'layers' && <Layers size={32} className="text-cyan-500" />}
                   {exp.iconName === 'code' && <Code size={32} className="text-cyan-500" />}
                </div>
                <h3 className="text-4xl font-display font-black text-white mb-6 uppercase italic tracking-tighter leading-none">{exp.title}</h3>
                <p className="text-cyan-500 text-[10px] font-black uppercase mb-10 tracking-[0.4em] font-mono border-l-2 border-cyan-500/50 pl-6 leading-relaxed">{exp.recruiterNotes}</p>
                <ul className="space-y-6 flex-1">
                  {exp.bullets.map((b, bi) => (
                    <li key={bi} className="flex gap-4 text-slate-400 text-lg leading-relaxed font-light group-hover:text-slate-100 transition-colors duration-500">
                      <div className="w-2 h-2 rounded-full bg-slate-800 mt-2 shrink-0 group-hover:bg-cyan-500 transition-all" />
                      {b}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- TECH STACK MATRIX (NEW) --- */}
      <section className="py-40 bg-[#050505]">
        <div className="container mx-auto px-8">
          <SectionTitle pre="Tech Arsenal">System <br /> Capabilities.</SectionTitle>
          <TechStackMatrix />
        </div>
      </section>

      {/* --- PRODUCTION MATRIX --- */}
      <section id="projects" className="py-40 bg-black">
        <div className="container mx-auto px-8">
          <SectionTitle pre="Control Nodes">Production <br /> Deployments.</SectionTitle>
          <div className="grid lg:grid-cols-2 gap-16">
            {MURALI.projects.map((p) => (
              <motion.div 
                key={p.id} 
                initial={{ opacity: 0, x: -30 }} 
                whileInView={{ opacity: 1, x: 0 }} 
                viewport={{ once: true }}
                className="p-12 glass-card rounded-[4rem] group hover:border-cyan-500/50 transition-all duration-700 flex flex-col relative overflow-hidden shadow-2xl"
              >
                <div className="flex justify-between items-start mb-16">
                  <div className="flex items-center gap-3">
                     <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse shadow-[0_0_15px_cyan]" />
                     <span className="text-cyan-500 font-black text-[10px] uppercase tracking-[0.4em]">Node: Active_Matrix</span>
                  </div>
                  <button 
                    onClick={() => setSelectedProject(p)} 
                    className="px-8 py-3 bg-white text-black rounded-full font-black text-[10px] uppercase tracking-[0.3em] hover:bg-cyan-500 transition-all shadow-xl active:scale-95"
                  >
                    Investigate Details <Maximize2 size={16} className="inline ml-2" />
                  </button>
                </div>
                <div className="flex-1">
                  <h3 className="text-5xl font-display font-black mb-8 uppercase italic tracking-tighter text-white group-hover:text-cyan-500 transition-colors">{p.title}</h3>
                  <p className="text-cyan-500 font-black mb-12 text-2xl italic tracking-tight uppercase border-b border-white/5 pb-8 leading-none">{p.tagline}</p>
                  <p className="text-slate-400 text-xl leading-relaxed mb-16 font-light tracking-tight line-clamp-3">
                    {p.description}
                  </p>
                </div>
                <div className="mt-auto">
                  <div className="grid grid-cols-3 gap-8 p-10 bg-white/[0.02] border border-white/5 rounded-[3rem] shadow-inner">
                    {p.metrics.map(m => (
                      <div key={m.label}>
                        <p className="text-[10px] text-slate-600 uppercase mb-3 font-black tracking-widest">{m.label}</p>
                        <div className="flex items-center gap-3">
                          <span className="text-3xl font-black font-mono text-white tracking-tighter">{m.value}</span>
                          {m.trend === 'up' && <TrendingUp size={24} className="text-emerald-500" />}
                          {m.trend === 'down' && <TrendingUp size={24} className="text-rose-500 rotate-180" />}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CONTACT TRANSMISSION --- */}
      <section id="contact" className="py-40 relative overflow-hidden bg-black border-t border-white/5">
        <div className="container mx-auto px-8 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
             <div className="flex flex-col items-start text-left">
                <SectionTitle pre="Transmission">Direct <br /> Uplink.</SectionTitle>
                <p className="text-4xl text-slate-400 font-light mb-20 tracking-tighter leading-tight">Available for Principal Engineering leadership and mission-critical architecture advisement.</p>
                <div className="space-y-12 w-full">
                  <a href={`mailto:${MURALI.email}`} className="flex items-center gap-8 group">
                    <div className="w-20 h-20 bg-white text-black rounded-3xl flex items-center justify-center group-hover:rotate-[15deg] group-hover:bg-cyan-500 transition-all shadow-2xl">
                      <Mail size={40} />
                    </div>
                    <div>
                      <p className="text-[12px] text-cyan-500 font-black uppercase tracking-[0.5em] mb-2 font-mono">Transmission_Signal</p>
                      <p className="text-4xl font-display font-black text-white hover:text-cyan-500 transition-all uppercase tracking-tighter leading-none">{MURALI.email}</p>
                    </div>
                  </a>
                  <div className="flex items-center gap-8 group">
                    <div className="w-20 h-20 bg-white/5 border border-white/10 rounded-3xl flex items-center justify-center text-slate-500 shadow-xl">
                      <Globe size={40} />
                    </div>
                    <div>
                      <p className="text-[12px] text-cyan-500 font-black uppercase tracking-[0.5em] mb-2 font-mono">Deployment_Vector</p>
                      <p className="text-4xl font-display font-black text-white uppercase tracking-tighter leading-none whitespace-nowrap">{MURALI.location}</p>
                    </div>
                  </div>
                </div>
             </div>

             <form className="bg-[#050505] p-16 rounded-[4rem] border border-white/5 space-y-12 w-full shadow-2xl relative overflow-hidden group/form" onSubmit={e => e.preventDefault()}>
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover/form:opacity-100 transition-opacity duration-1000" />
                <div className="grid md:grid-cols-2 gap-10 relative z-10">
                  <div className="space-y-4">
                    <label className="text-[11px] text-slate-600 font-black uppercase tracking-[0.4em] ml-6 font-mono">Entity_Id</label>
                    <input type="text" placeholder="Identity Name" className="w-full bg-white/[0.04] border border-white/10 p-8 rounded-[2rem] text-white outline-none focus:border-cyan-500/50 transition-all text-xl font-display placeholder:text-slate-800 shadow-inner" />
                  </div>
                  <div className="space-y-4">
                    <label className="text-[11px] text-slate-600 font-black uppercase tracking-[0.4em] ml-6 font-mono">Signal_Addr</label>
                    <input type="email" placeholder="Uplink Email" className="w-full bg-white/[0.04] border border-white/10 p-8 rounded-[2rem] text-white outline-none focus:border-cyan-500/50 transition-all text-xl font-display placeholder:text-slate-800 shadow-inner" />
                  </div>
                </div>
                <div className="space-y-4 relative z-10">
                  <label className="text-[11px] text-slate-600 font-black uppercase tracking-[0.4em] ml-6 font-mono">Mandate_Manifesto</label>
                  <textarea rows={4} placeholder="Describe the mission mandate..." className="w-full bg-white/[0.04] border border-white/10 p-8 rounded-[3rem] text-white outline-none focus:border-cyan-500/50 transition-all resize-none text-xl font-display placeholder:text-slate-800 shadow-inner" />
                </div>
                <button className="w-full py-10 bg-white text-black rounded-full font-black text-lg uppercase tracking-[0.6em] hover:bg-cyan-500 shadow-2xl transition-all relative z-10">
                  Broadcast Signal
                </button>
             </form>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-24 border-t border-white/5 bg-[#020202]">
        <div className="container mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-20">
          <div className="flex items-center gap-8">
            <div className="w-20 h-20 bg-white text-black rounded-3xl flex items-center justify-center font-black text-5xl shadow-2xl">M</div>
            <div>
              <p className="text-white font-black text-4xl uppercase tracking-tighter leading-none">Murali Dasari</p>
              <p className="text-[12px] text-cyan-500 font-black uppercase tracking-[0.8em] mt-3 font-mono">Principal_Architect_Sig_v4.2</p>
            </div>
          </div>
          <p className="text-[12px] text-slate-800 font-black uppercase tracking-[0.5em]">&copy; {new Date().getFullYear()} Murali Dasari | Nexus Core Active</p>
          <div className="flex gap-10">
            <a href={MURALI.github} target="_blank" className="text-slate-800 hover:text-white transition-all transform hover:scale-125 hover:rotate-6"><Github size={36} /></a>
            <a href={MURALI.linkedin} target="_blank" className="text-slate-800 hover:text-white transition-all transform hover:scale-125 hover:-rotate-6"><Linkedin size={36} /></a>
          </div>
        </div>
      </footer>

      {/* --- PROJECT MODAL (HIGH END) --- */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0, backdropFilter: 'blur(0px)' }} 
            animate={{ opacity: 1, backdropFilter: 'blur(40px)' }} 
            exit={{ opacity: 0, backdropFilter: 'blur(0px)' }} 
            className="fixed inset-0 z-[100] bg-black/98 flex flex-col p-4 md:p-20 overflow-y-auto"
          >
            <div className="container mx-auto max-w-7xl flex-1 flex flex-col">
              <div className="flex justify-between items-center mb-24">
                <button 
                  onClick={() => setSelectedProject(null)} 
                  className="flex items-center gap-8 text-slate-500 hover:text-white transition-all font-black uppercase tracking-[0.5em] text-[12px] font-mono"
                >
                  <div className="p-6 bg-white/5 border border-white/10 rounded-2xl group-hover:rotate-[-90deg] transition-transform">
                    <X size={32} />
                  </div>
                  TERMINATE_SESSION
                </button>
                <div className="flex gap-8">
                  <a href={selectedProject.github} target="_blank" className="p-6 bg-white/5 border border-white/10 rounded-2xl text-slate-500 hover:text-white transition-all transform hover:scale-110 shadow-xl"><Github size={32} /></a>
                  <a href={selectedProject.demo} target="_blank" className="p-6 bg-white text-black border border-white/10 rounded-2xl hover:bg-cyan-500 transition-all transform hover:scale-110 shadow-2xl"><ExternalLink size={32} /></a>
                </div>
              </div>

              <div className="flex-1 flex flex-col items-center">
                <div className="text-center mb-24 max-w-5xl">
                  <motion.h2 initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-[10vw] md:text-[8vw] font-display font-black text-white italic mb-8 leading-none tracking-tighter uppercase">{selectedProject.title}</motion.h2>
                  <p className="text-cyan-500 text-4xl font-black italic uppercase tracking-widest mb-16">{selectedProject.tagline}</p>
                </div>

                <div className="w-full flex justify-center h-[700px] mb-32 shadow-2xl rounded-[4rem] bg-[#050505] overflow-hidden border border-white/5">
                  {selectedProject.id === 'sentinel-anomaly' ? <SentinelDashboard /> : <LexiconDashboard />}
                </div>

                <div className="grid md:grid-cols-2 gap-24 w-full max-w-7xl pb-32">
                   <div className="space-y-12">
                      <div className="flex items-center gap-6">
                        <div className="h-px w-12 bg-cyan-500" />
                        <span className="text-[16px] text-slate-600 font-black uppercase tracking-[0.5em] font-mono">Systemic_Architecture</span>
                      </div>
                      <p className="text-slate-400 leading-relaxed text-3xl font-light tracking-tight">{selectedProject.architecture.description}</p>
                      <div className="p-12 bg-white/[0.02] border border-white/5 rounded-[3rem] shadow-inner">
                        <p className="text-[12px] text-cyan-500 uppercase mb-6 font-black tracking-[0.5em] font-mono border-b border-cyan-500/20 pb-4">Remediation_Strategy</p>
                        <p className="text-slate-100 leading-relaxed font-medium text-2xl italic">"{selectedProject.architecture.failureMitigation}"</p>
                      </div>
                   </div>
                   <div className="space-y-12">
                      <div className="flex items-center gap-6">
                        <div className="h-px w-12 bg-cyan-500" />
                        <span className="text-[16px] text-slate-600 font-black uppercase tracking-[0.5em] font-mono">Business_Impact</span>
                      </div>
                      <div className="bg-cyan-500/5 p-16 rounded-[4rem] border border-cyan-500/30 flex flex-col justify-center shadow-2xl">
                        <p className="text-white font-black text-7xl mb-12 tracking-tighter uppercase italic leading-[0.75]">{selectedProject.impact}</p>
                        <div className="space-y-8 pt-10 border-t border-cyan-500/20">
                          {selectedProject.metrics.map(m => (
                            <div key={m.label} className="flex justify-between items-center group/metric">
                              <span className="text-[14px] text-slate-500 uppercase font-black tracking-[0.2em] font-mono group-hover:text-cyan-500 transition-colors">{m.label}</span>
                              <div className="flex items-center gap-4">
                                <span className="text-4xl font-black font-mono text-white tracking-tighter">{m.value}</span>
                                {m.trend === 'up' && <TrendingUp size={32} className="text-emerald-500 shadow-[0_0_15px_emerald]" />}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                   </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const LexiconDashboard = () => {
  const [requests, setRequests] = useState<{ id: string; model: string; lat: number }[]>([]);
  useEffect(() => {
    const interval = setInterval(() => {
      setRequests(prev => {
        const newReq = {
          id: `RTX-${Math.random().toString(16).substring(2, 6).toUpperCase()}`,
          model: ['LLAMA-3.1', 'CLAUDE-3.5', 'GPT-4O'][Math.floor(Math.random() * 3)],
          lat: Math.floor(Math.random() * 25) + 5
        };
        return [newReq, ...prev.slice(0, 8)];
      });
    }, 800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-full bg-[#050505] p-8 font-mono text-xs flex flex-col border border-white/5">
      <div className="flex justify-between items-center mb-8 border-b border-white/5 pb-4">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
          <span className="text-white font-black uppercase tracking-widest text-[9px]">Lexicon_Gateway_Routing</span>
        </div>
      </div>
      <div className="space-y-3 flex-1 overflow-hidden">
        {requests.map(r => (
          <div key={r.id} className="flex items-center justify-between p-3 rounded-lg bg-white/[0.02] border border-white/5 group hover:bg-white/5 transition-all">
            <span className="text-slate-700 font-black text-[9px] group-hover:text-slate-400">{r.id}</span>
            <span className="text-white font-black text-[11px] uppercase tracking-tighter">{r.model}</span>
            <span className="text-blue-500 font-black text-[11px]">{r.lat}ms</span>
          </div>
        ))}
      </div>
      <div className="mt-8 grid grid-cols-2 gap-8 border-t border-white/5 pt-6">
        <div>
          <p className="text-slate-600 uppercase text-[8px] font-black tracking-widest mb-1">Semantic_Cache</p>
          <p className="text-3xl font-display font-black text-white italic">34.8%</p>
        </div>
        <div className="text-right">
          <p className="text-slate-600 uppercase text-[8px] font-black tracking-widest mb-1">Global_p99</p>
          <p className="text-3xl font-display font-black text-blue-500 italic">8.2ms</p>
        </div>
      </div>
    </div>
  );
};
