import React, { useState, useEffect } from 'react';

function App() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [activeTab, setActiveTab] = useState('/root/about');
  const [systemLogs, setSystemLogs] = useState([]);
  const [selectedProject, setSelectedProject] = useState(0);

  // Cold Boot Terminal Loading States
  const [bootStage, setBootStage] = useState(0);
  const [bootLogs, setBootLogs] = useState([]);

  // Paste your ImageKit Link right here inside this string variable
  const IMAGEKIT_PROFILE_URL = "https://ik.imagekit.io/ugweqp16c/image.png";

  // Cold Boot Loader Animation Timeline Sequence
useEffect(() => {
  const bootLines = [
    "rakibul@MyPC:~$ initializing deep_system_cold_boot pipeline...",
    "HOST MACHINE: Localhost // REGION: Guwahati, Assam, India",
    "KERNEL ENGINE: Kali Linux Core Runtime Engine (x86_64 base configuration)",
    "--------------------------------------------------------------------------------",
    "[ STARTING ] Checking user authentication maps and environment variables...",
    "[   OK   ] Identity verified: Rakibul Hussain // Level: Root Engineer",
    "[   OK   ] Academic Kernel verified: B.Tech Computer Science & Engineering",
    "[   OK   ] Institutional node mapped: Assam Down Town University (AdtU v2026)",
    "--------------------------------------------------------------------------------",
    "[ RECOVERY ] Scanning hardware and programming language compilers...",
    "[   OK   ] Primary Engine loaded: JavaScript (ES6+ runtime environment)",
    "[   OK   ] Structural systems active: C/C++ compiler toolchain",
    "[   OK   ] Scripting automation layer online: Python language build v3.11",
    "[   OK   ] Query engine ready: Structured Query Language (SQL) database tools",
    "[   OK   ] Core runtime stack synchronized: Node.js server pipelines",
    "--------------------------------------------------------------------------------",
    "[ MOUNTING ] Initializing structural data layer arrays...",
    "[   OK   ] NoSQL cluster linked: MongoDB Community Driver Array",
    "[   OK   ] Relational database engine active: MySQL Client System",
    "[   OK   ] Enterprise relational mapping engine: PostgreSQL Server",
    "--------------------------------------------------------------------------------",
    "[ NETWORK  ] Establishing live handshake communication sockets...",
    "[   OK   ] Secure link online: TechFlora Global Workforce Pvt. Ltd. Server Node",
    "[   OK   ] Production target matched: Software Engineer active runtime pipeline",
    "[   OK   ] Infrastructure bridge stable: Assam Power Distribution Company Limited (APDCL)",
    "[   OK   ] Legacy data tracking system loaded: APDCL File Management System",
    "--------------------------------------------------------------------------------",
    "[ PARSING  ] Verifying full 11-tier project registries...",
    "[   OK   ] Blueprint 01: [Cinemate] - Low latency global video sync pipeline",
    "[   OK   ] Blueprint 02: [Glorious lab] - Skills learning & workspace platform",
    "[   OK   ] Blueprint 03: [Superb] - Relational full-stack media stream engine",
    "[   OK   ] Blueprint 04: [File Management System] - Enterprise digitization tool",
    "[   OK   ] Blueprint 05: [Automated Toll Gate] - IoT telemetry hardware array",
    "[   OK   ] Blueprint 06: [Real-Time Chat App] - Asynchronous frame messaging",
    "[   OK   ] Blueprint 07: [Campus Bazaar] - Student transactional peer network",
    "[   OK   ] Blueprint 08: [FoodReels] - Short video culinary metrics stream",
    "[   OK   ] Blueprint 09: [News Web App] - Dynamic asynchronous REST aggregator",
    "[   OK   ] Blueprint 10: [Excel Sheet Handler] - Python multi-tier computation engine",
    "[   OK   ] Blueprint 11: [Task Management App] - Collaborative task database matrix",
    "--------------------------------------------------------------------------------",
    "[ SECURE   ] Checking authorization certificates & verified credentials...",
    "[   OK   ] Encryption key checked: Coursera Introduction to SQL Token",
    "[   OK   ] Encryption key checked: Coursera Intermediate PostgreSQL Token",
    "[   OK   ] Encryption key checked: Cisco Network Academy Cybersecurity clearance",
    "[   OK   ] Encryption key checked: Python for Everybody certification verification",
    "[   OK   ] Encryption key checked: MongoDB Complete Guide security validation",
    "[   OK   ] Encryption key checked: Google Cloud Fundamentals digital authorization",
    "[   OK   ] Encryption key checked: Generative AI Training - GDSC token node",
    "--------------------------------------------------------------------------------",
    "[ GRAPHICS ] Compiling structural interface rendering frames...",
    "[   OK   ] Client frame framework parsed: React.js UI engine template",
    "[   OK   ] Style utilities injected: Tailwind CSS layout matrix layout",
    "[   OK   ] Binding local assets and profile image ImageKit pointers...",
    "[   OK   ] System telemetry dashboard compiled successfully.",
    "--------------------------------------------------------------------------------",
    "rakibul@MyPC:~$ sudo systemctl start show-portfolio.service",
    "STATUS: RUNNING // Deployed successfully. Launching crossover interface..."
  ];

 
    if (bootStage < bootLines.length) {
      const timer = setTimeout(() => {
        setBootLogs(prev => [...prev, bootLines[bootStage]]);
        setBootStage(prev => prev + 1);
      }, 70); // Medium speed rhythm
      return () => clearTimeout(timer);
    } else {
      // Once all lines are printed, trigger the transition to main layout
      const timer = setTimeout(() => {
        setSystemLogs([
          `[${new Date().toLocaleTimeString()}] [SYS] Interface fully mounted successfully.`,
          `[${new Date().toLocaleTimeString()}] [SYS] Network matrix channels stable.`,
          `[${new Date().toLocaleTimeString()}] [SYS] All project blueprints verified and loaded.`,
          `[${new Date().toLocaleTimeString()}] [SYS] System telemetry dashboard active.`,
        ]);
        setIsBooted(true); // Terminal over, now unlock main page!
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [bootStage]);

  const addLog = (message) => {
    const timestamp = new Date().toLocaleTimeString();
    setSystemLogs(prev => [`[${timestamp}] ${message}`, ...prev.slice(0, 4)]);
  };




  const handleMessage = (e) => {
    e.preventDefault();
    setSubmitted(true);
    addLog(`DATA_TRANSMISSION: Payload from ${form.name.toUpperCase()} buffered.`);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: '', email: '', subject: '', message: '' });
  };

  const certifications = [
    "Introduction to SQL - Coursera", "Intermediate PostgreSQL - Coursera",
    "Python for Everybody - Coursera", "Introduction to Cybersecurity - Network Academy",
    "MongoDB Complete Guide - Coursera", "JavaScript & MongoDB Development - Coursera",
    "Cloud Computing Fundamentals - Google Cloud", "Generative AI Training - GDSC"
  ];

  const experiences = [
    {
      role: "Software Engineer  & Management Support",
      company: "TechFlora Global Workforce Pvt. Ltd.",
      date: "July 3, 2026 - Present",
      loc: "Guwahati, Assam, India",
      bullets: [
        "Design and develop full-stack web applications using React.js, Node.js, Express.js, and MySQL.",
        "Maintain and enhance the company's corporate website, HRM platform, and internal business applications.",
        "Develop secure REST APIs, implement authentication systems, and optimize database performance.",
        "Provide technical support by troubleshooting software issues, resolving bugs, and assisting end users."
      ]
    },
    {
      role: "Intern - Full Stack Web Developer",
      company: "TechFlora Global Workforce Pvt. Ltd.",
      date: "April 3, 2026 - July 2026",
      loc: "Guwahati, Assam, India",
      bullets: [
        "Developed Techflora's corporate website and secure internal tools on Hostinger environments.",
        "Built stable full-stack applications integrating Node.js, Express.js, React.js, and MySQL frameworks."
      ]
    },
    {
      role: "Summer Intern - Full Stack Web Developer",
      company: "Assam Power Distribution Company Limited (APDCL)",
      date: "July 1, 2025 - July 31, 2025",
      loc: "Assam, India",
      bullets: [
        "Digitized traditional tracking pipelines with a custom File Management System architecture.",
        "Engineered the relational processing layer using an integrated Node/Express/React/MySQL compiler."
      ]
    }
  ];

  const involvements = [
    "Google Developer Group (GDG) structural campus participant",
    "ZOHO India Android application development pipeline attendee",
    "Young India (Yi) volunteer operator in Guwahati region",
    "University asset design and decoration unit teammate"
  ];

  const projects = [
    { name: "Superb", platform: "Independent Node", tech: ["React.js", "Node.js", "Express", "MySQL"], desc: "Full-stack web application for watching movies and TV shows with synchronized real-time video playback and live chat." },
    { name: "Glorious lab", platform: "Independent Node", tech: ["React.js", "Node.js", "Express", "MySQL"], desc: "Full-stack workspace startup application designed for trainees to learn skills and receive modular mentor reviews." },
    { name: "Cinemate", platform: "Smart India Hackathon 2024", tech: ["React.js", "Node.js", "Socket.io", "WebRTC"], desc: "Sub-latency video pipeline system synchronizing media playback grids across remote global nodes." },
    { name: "File Management System", platform: "APDCL Core Deployment", tech: ["Node.js", "Express", "React", "MySQL", "Tailwind"], desc: "Enterprise transformation engine modernizing legacy processing workflows for electricity supply clusters." },
    { name: "Automated Toll Gate", platform: "IoT Array Node", tech: ["Arduino UNO", "C++", "Servo Motors", "IoT"], desc: "Hardware automated system triggering physical barrier vectors via responsive telemetry arrays." },
    { name: "Real-Time Chat App", platform: "Independent Node", tech: ["JavaScript", "Socket.io", "Node.js", "HTML/CSS"], desc: "Dynamic frame messaging engine with immediate payload synchronization algorithms." },
    { name: "Campus Bazaar", platform: "Academic Hub", tech: ["React", "Node.js", "Express", "MongoDB"], desc: "Student-centric transactional peer array with verified authentication gateways." },
    { name: "FoodReels", platform: "Social App Stack", tech: ["React", "Firebase", "Node.js", "Express", "MongoDB"], desc: "Asynchronous content engine parsing short video culinary metrics and recipe feeds." },
    { name: "News Web App", platform: "API Aggregator", tech: ["JavaScript", "REST APIs", "HTML/CSS"], desc: "Real-time global asset fetcher refreshing dynamic data arrays asynchronously." },
    { name: "Excel Sheet Handler", platform: "Automation Stack", tech: ["Python", "Pandas", "Openpyxl"], desc: "Data processing automation layer streamlining structural multi-tier sheet computations." },
    { name: "Task Management App", platform: "Independent Node", tech: ["React", "Node.js", "Express", "MongoDB"], desc: "Collaborative task management solution with real-time updates and seamless integration." }
  ];

  // 1. Full-Screen Kali Linux Terminal Boot Screen Loader Component
  if (bootStage < 34) {
    return (
      <div className="min-h-screen bg-[#05070a] text-emerald-400 font-mono p-4 sm:p-8 flex flex-col justify-between selection:bg-emerald-500 selection:text-black">
        <div className="max-w-4xl space-y-3">
          <div className="flex items-center gap-2 text-xs border-b border-zinc-900 pb-2 mb-4 text-zinc-500 font-semibold">
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-kali-red animate-pulse"></span>
            <span>RAKIBUL_HUSSAIN // B.TECH CSE CORE DEPLOYMENT v2026</span>     
                 </div>
          <div className="space-y-1.5 text-xs sm:text-sm">
            {bootLogs.map((log, index) => (
              <p key={index} className={log.startsWith('[ OK ]') ? 'text-emerald-400/90' : 'text-kali-cyan font-bold animate-pulse'}>
                {log}
              </p>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-3 text-[10px] text-zinc-600 border-t border-zinc-900 pt-4 font-matrix">
          <span>COMPILING PORTFOLIO PIPELINES</span>
          <span className="w-4 h-1 bg-kali-cyan animate-pulse"></span>
        </div>
      </div>
    );
  }

  // 2. Main Portfolio Landing View (Fades in perfectly after boot sequence)
  return (


    
    
    <div className="min-h-screen bg-kali-bg text-slate-400 font-mono text-xs md:text-sm selection:bg-kali-cyan selection:text-kali-bg p-2 sm:p-4 md:p-8 relative animate-fade-in">

      {/* Nothing Tech Grid Matrix Background arrays */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#161d2a_1px,transparent_1px),linear-gradient(to_bottom,#161d2a_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none opacity-30"></div>
      <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] bg-[size:1rem_1rem] pointer-events-none opacity-20"></div>

      {/* Main Container Shell */}
      <div className="max-w-6xl mx-auto border border-slate-800 rounded-3xl bg-kali-card/10 backdrop-blur-xl p-4 md:p-8 relative overflow-hidden shadow-[0_0_50px_-12px_rgba(10,13,20,0.8)]">

        {/* Hardware structural wire corners */}
        <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-slate-700 rounded-tl-xl pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-slate-700 rounded-tr-xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-slate-700 rounded-bl-xl pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-slate-700 rounded-br-xl pointer-events-none"></div>

        {/* Global Nav Row */}
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-slate-800 pb-6 mb-8 gap-4">
          <div className="space-y-1">
            <h1 className="font-matrix text-2xl text-white tracking-tighter flex items-center gap-2">
              RAKIBUL HUSSAIN <span className="w-2 h-2 rounded-full bg-kali-red animate-ping"></span>
            </h1>
            <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">MERN_FULLSTACK_DEVELOPER_CORE_v4.0</p>
          </div>

          <nav className="flex flex-wrap gap-2 bg-kali-bg/80 p-1.5 border border-slate-800 rounded-xl w-full md:w-auto">
            {['/root/about', '/root/experience', '/root/projects', '/root/contact'].map((tab) => (
              <a
                key={tab}
                href={tab.replace('/root/', '#')}
                onClick={() => { setActiveTab(tab); addLog(`MapsD: Accessing ${tab.toUpperCase()}`); }}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold uppercase transition-all duration-300 tracking-wider flex-1 md:flex-none text-center ${activeTab === tab
                    ? 'bg-kali-cyan/10 text-kali-cyan border border-kali-cyan/20 shadow-[0_0_15px_-4px_rgba(0,240,255,0.3)]'
                    : 'text-slate-500 border border-transparent hover:text-slate-300'
                  }`}
              >
                {tab}
              </a>
            ))}
          </nav>
        </header>





        {/* Live System Telemetry Command Outputs */}
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <div className="md:col-span-2 bg-kali-bg border border-slate-800/80 rounded-xl p-4 flex flex-col justify-between h-32 relative shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)]">
            <div className="flex justify-between items-center border-b border-slate-900 pb-1.5 mb-2 text-[10px] text-slate-500 font-bold">
              <span>⚡ LIVE SYSTEM TELEMETRY STREAM</span>
              <span className="text-kali-cyan animate-pulse">STATUS::EXEC_OK</span>
            </div>
            <div className="font-mono text-[11px] space-y-1 overflow-hidden flex flex-col-reverse flex-grow">
              {systemLogs.map((log, i) => (
                <p key={i} className={`truncate ${i === 0 ? 'text-kali-cyan' : 'text-slate-600'}`}>{log}</p>
              ))}
            </div>
          </div>

          <div className="bg-kali-card border border-slate-800 rounded-xl p-4 flex items-center justify-between group hover:border-slate-700 transition duration-300">
            <div className="space-y-1">
              <span className="font-matrix text-[10px] text-slate-500">[AVAILABILITY]</span>
              <h3 className="text-white font-bold tracking-tight text-xs lg:text-sm">DEVELOP & DEPLOYMENTS</h3>
              <p className="text-[10px] text-kali-cyan uppercase font-bold tracking-wider">● Open for Engagement</p>
            </div>
            <div className="relative w-12 h-12 flex items-center justify-center border-2 border-dashed border-slate-800 rounded-full group-hover:rotate-45 transition duration-700">
              <div className="w-8 h-8 rounded-full border-2 border-kali-red flex items-center justify-center animate-pulse">
                <div className="w-2 h-2 rounded-full bg-kali-red"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Section: System Bio & ImageKit Frame Panel Layout */}
        <section id="about" className="grid md:grid-cols-3 gap-6 mb-12 scroll-mt-24">

          {/* NEW: Transparent Hardware ImageKit Photo Frame */}
          <div className="border border-slate-800 bg-kali-card/40 p-4 rounded-2xl flex flex-col items-center justify-center space-y-4 group relative overflow-hidden shadow-2xl">
            <div className="absolute top-2 left-3 font-matrix text-[9px] text-slate-500">[ASSET_BI_NODE]</div>

            {/* The Image Wrapper Box */}
            <div className="w-full aspect-square max-w-[210px] rounded-xl border border-slate-800/80 bg-kali-bg flex items-center justify-center relative overflow-hidden group-hover:border-kali-cyan/40 transition duration-300 shadow-inner">
              {IMAGEKIT_PROFILE_URL.includes("your_id") ? (
                /* Fallback Placeholder Frame if link is unpasted */
                <div className="text-center p-4 space-y-2 select-none">
                  <div className="w-8 h-8 mx-auto border-2 border-dashed border-slate-700 text-slate-600 rounded-full flex items-center justify-center font-bold animate-spin">+</div>
                  <p className="text-[10px] text-slate-500 uppercase tracking-tight">Paste ImageKit URL<br />Inside App.jsx</p>
                </div>
              ) : (
                /* Native User Photo Element Output rendering */
                <img
                  src={IMAGEKIT_PROFILE_URL}
                  alt="Rakibul Hussain Profile Node"
                  className="w-full h-full object-cover grayscale opacity-85 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 scale-100 group-hover:scale-105"
                />
              )}
              {/* Dot-matrix design style accent tab overlays inside image window */}
              <div className="absolute bottom-1 right-2 text-[8px] font-mono text-slate-600 bg-black/40 px-1 rounded select-none">SYS_IMG_01</div>
            </div>

            {/* Micro Details Metrics block under photo */}
            <div className="w-full bg-kali-bg/40 border border-slate-900 rounded-xl p-3 text-[11px] space-y-1 font-mono text-slate-400">
              <p className="flex justify-between border-b border-slate-900 pb-1">
                <span className="text-slate-600 font-bold">NAME:</span>
                <span className="text-white font-bold">Rakibul Hussain</span>
              </p>
              <p className="flex justify-between">
                <span className="text-slate-600 font-bold">ROLE:</span>
                <span className="text-kali-cyan font-semibold">Full Stack || Engineer </span>
              </p>
            </div>
          </div>

          {/* Biography Descriptions Component */}
          <div className="md:col-span-2 space-y-4 bg-kali-card/40 border border-slate-800/60 p-6 rounded-2xl flex flex-col justify-between">
            <div className="space-y-3">
              <div className="font-matrix text-[9px] bg-slate-900 border border-slate-800 text-kali-cyan px-2 py-0.5 inline-block rounded">
                CORE_BIO_ARRAY
              </div>
              <h2 className="text-xl md:text-2xl font-bold text-white tracking-tight">
                Transforming complex architecture specs into clean responsive logic setups.
              </h2>
              <p className="text-slate-400 leading-relaxed text-xs sm:text-sm">
                Computer Science student at Assam Downtown University, graduating in 2026. Armed with explicit practical runtime execution loops across enterprise platforms including **APDCL** and **TechFlora Global**. Expert in compiling fast micro-service clusters under the MERN tech matrix.
              </p>
            </div>

            {/* Tech Stack Arrays */}
            <div className="pt-4 border-t border-slate-800/60 space-y-3">
              <div className="flex flex-col sm:flex-row gap-2 sm:items-center">
                <span className="text-[10px] uppercase text-slate-500 w-24 font-bold">// Languages:</span>
                <div className="flex flex-wrap gap-1.5">
                  {["C/C++", "Python", "JavaScript", "SQL"].map(t => (
                    <span key={t} className="bg-kali-bg border border-slate-900 px-2 py-0.5 text-slate-300 rounded text-xs">{t}</span>
                  ))}
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-2 sm:items-center">
                <span className="text-[10px] uppercase text-slate-500 w-24 font-bold">// Web Tech:</span>
                <div className="flex flex-wrap gap-1.5">
                  {["React.js", "Node.js", "Express.js", "HTML/CSS", "Tailwind CSS"].map(t => (
                    <span key={t} className="bg-kali-bg border border-slate-900 px-2 py-0.5 text-kali-cyan rounded text-xs">{t}</span>
                  ))}
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-2 sm:items-center">
                <span className="text-[10px] uppercase text-slate-500 w-24 font-bold">// Databases:</span>
                <div className="flex flex-wrap gap-1.5">
                  {["MySQL", "PostgreSQL", "MongoDB"].map(t => (
                    <span key={t} className="bg-kali-bg border border-slate-900 px-2 py-0.5 text-slate-300 rounded text-xs">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Academic Qualification Matrices */}
        <section className="bg-kali-card/20 border border-slate-800 rounded-2xl p-5 mb-12 grid sm:grid-cols-2 gap-6">
          <div>
            <div className="font-matrix text-[9px] text-slate-500 mb-3">[REGISTRATION_LEDGER_A]</div>
            <div className="relative pl-3 border-l-2 border-kali-cyan">
              <h4 className="text-white font-bold text-xs sm:text-sm">B.Tech (CSE) — CGPA 7.9</h4>
              <p className="text-[11px] text-slate-500">Assam Down Town University, Guwahati (Graduation 2026)</p>
            </div>
          </div>
          <div>
            <div className="font-matrix text-[9px] text-slate-500 mb-3">[REGISTRATION_LEDGER_B]</div>
            <div className="relative pl-3 border-l-2 border-slate-800">
              <h4 className="text-slate-300 font-bold text-xs">Higher Secondary — 62.80%</h4>
              <p className="text-[11px] text-slate-500">SBKR Hajo Secondary School (AHSEC Boards)</p>
            </div>
          </div>
        </section>

        {/* Section: Industrial Employment Matrix */}
        <section id="experience" className="border-t border-slate-800 pt-10 mb-12 scroll-mt-24">
          <h3 className="font-matrix text-xs text-white mb-6 flex items-center gap-2">
            <span className="text-kali-cyan">//</span> DEPLOYMENT_TIMELINE_MATRIX
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                onClick={() => addLog(`EXAMINED: Employment node at ${exp.company.split(' ')[0]}`)}
                className="bg-kali-card/30 border border-slate-800 hover:border-slate-700 p-5 rounded-2xl transition duration-300 flex flex-col justify-between group cursor-pointer"
              >
                <div className="space-y-3">
                  <div className="flex justify-between items-start text-[11px]">
                    <span className="text-kali-cyan font-bold font-mono tracking-tight">{exp.date}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-kali-cyan transition"></span>
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm tracking-tight">{exp.role}</h4>
                    <p className="text-slate-500 text-[11px] uppercase font-bold mt-0.5">{exp.company}</p>
                  </div>
                  <ul className="space-y-2 text-xs text-slate-400 pt-2 border-t border-slate-900">
                    {exp.bullets.slice(0, 3).map((b, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-1.5 leading-relaxed">
                        <span className="text-kali-cyan text-[10px] mt-0.5">▹</span>
                        <span className="text-[11px]">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="text-[9px] text-slate-600 tracking-wider font-bold mt-4 uppercase">
                  LOC_REF:: {exp.loc.split(',')[0]}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Modular Grid: Credentials & Extra Activities */}
        <div className="grid md:grid-cols-2 gap-6 border-t border-slate-800 pt-10 mb-12">
          <div>
            <h3 className="font-matrix text-xs text-white mb-4 flex items-center gap-2">
              <span className="text-kali-cyan">//</span> HARDWARE_CREDENTIALS
            </h3>
            <div className="max-h-56 overflow-y-auto border border-slate-900 bg-kali-bg/30 rounded-xl p-3 space-y-1.5 custom-scrollbar">
              {certifications.map((cert, i) => (
                <div key={i} className="bg-kali-card border border-slate-800/60 rounded-lg px-3 py-2 flex justify-between items-center text-[11px] text-slate-400 hover:border-slate-700 transition">
                  <span className="truncate">{cert}</span>
                  <span className="text-[9px] text-kali-cyan font-bold font-matrix">✓ VERIFIED</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-matrix text-xs text-white mb-4 flex items-center gap-2">
              <span className="text-kali-red">//</span> EXTRA_CURRICULAR_ROUTINES
            </h3>
            <div className="max-h-56 overflow-y-auto border border-slate-900 bg-kali-bg/30 rounded-xl p-3 space-y-1.5">
              {involvements.map((inv, i) => (
                <div key={i} className="bg-kali-card border border-slate-800/60 rounded-lg px-3 py-2 flex items-start gap-2.5 text-[11px] text-slate-400">
                  <span className="text-kali-red font-bold">➜</span>
                  <span>{inv}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Section: 11-Tier Project Registry Blueprint Dashboard */}
        <section id="projects" className="border-t border-slate-800 pt-10 mb-12 scroll-mt-24">

          <div className="bg-kali-bg/90 border border-slate-800/80 rounded-2xl p-5 mb-6 relative overflow-hidden">
            <div className="absolute right-4 top-4 font-matrix text-[40px] text-slate-900 font-bold select-none tracking-tighter">
              BP_0{selectedProject + 1}
            </div>
            <div className="space-y-2 relative z-10">
              <div className="flex items-center gap-2 text-[10px]">
                <span className="text-kali-red font-bold font-matrix">● FOCUS_BLUEPRINT_VIEWER</span>
                <span className="text-slate-600">|</span>
                <span className="text-slate-400 uppercase tracking-widest">{projects[selectedProject].platform}</span>
              </div>
              <h4 className="text-lg font-extrabold text-white tracking-tight uppercase flex items-center gap-2">
                {projects[selectedProject].name} <span className="text-xs text-kali-cyan font-normal font-mono">({projects[selectedProject].tech.join(' + ')})</span>
              </h4>
              <p className="text-slate-300 text-xs leading-relaxed max-w-3xl">
                {projects[selectedProject].desc}
              </p>
            </div>
          </div>

          <div className="flex justify-between items-center mb-4">
            <h3 className="font-matrix text-xs text-white flex items-center gap-2">
              <span className="text-kali-cyan">//</span> PROJECT_REGISTRY_NODES
            </h3>
            <span className="text-[10px] text-slate-500">TOTAL_RECORDS: {projects.length}</span>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {projects.map((proj, idx) => (
              <div
                key={idx}
                onClick={() => { setSelectedProject(idx); addLog(`MOUNTED: Loaded blueprint data for ${proj.name.toUpperCase()}`); }}
                className={`border rounded-xl p-4 flex flex-col justify-between transition-all duration-300 cursor-pointer group ${selectedProject === idx
                    ? 'bg-kali-card border-kali-cyan/50 shadow-[0_0_15px_-4px_rgba(0,240,255,0.2)]'
                    : 'bg-kali-card/40 border-slate-800 hover:border-slate-700'
                  }`}
              >
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-[10px]">
                    <span className="text-slate-600 font-bold">NODE::0{idx + 1}</span>
                    <span className="text-[9px] font-bold text-slate-500 uppercase truncate max-w-[80px]">{proj.platform.split(' ')[0]}</span>
                  </div>
                  <h4 className="text-xs md:text-sm font-bold text-white group-hover:text-kali-cyan transition truncate tracking-tight uppercase">
                    {proj.name}
                  </h4>
                </div>
                <div className="flex flex-wrap gap-1 pt-4 border-t border-slate-900/60 mt-4">
                  {proj.tech.slice(0, 3).map((t, tIdx) => (
                    <span key={tIdx} className="text-[9px] bg-kali-bg px-1.5 py-0.5 text-slate-500 rounded font-mono">
                      {t}
                    </span>
                  ))}
                  {proj.tech.length > 3 && <span className="text-[8px] text-slate-600 font-bold mt-1">+{proj.tech.length - 3}</span>}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section: Contact Socket Packet Submissions */}
        <section id="contact" className="border-t border-slate-800 pt-10 mb-4 scroll-mt-24">
          <h3 className="font-matrix text-xs text-white mb-6 flex items-center gap-2">
            <span className="text-kali-cyan">//</span> INITIALIZE_TRANSMISSION_SOCKET
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-kali-bg/40 border border-slate-800 p-5 rounded-2xl flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <span className="font-matrix text-[9px] text-slate-500">[ENDPOINT_LEDGER]</span>
                <p className="text-slate-400 text-xs leading-relaxed">
                  Open a pipeline directly into my terminal workspace. Response channels dispatch within 1200 seconds max loop cycle.
                </p>
              </div>
              <div className="space-y-2 text-[11px] border-t border-slate-900 pt-3">
                <p><span className="text-slate-600 font-bold">MAIL:</span> <a href="mailto:rakibulhussain1100@gmail.com" className="text-white hover:text-kali-cyan transition">rakibulhussain1100@gmail.com</a></p>
                <p><span className="text-slate-600 font-bold">PHONE:</span> <span className="text-white">+91 8822750582</span></p>
                <p><span className="text-slate-600 font-bold">LOC:</span> <span className="text-white">Guwahati, Assam, India</span></p>
              </div>
            </div>

            <form onSubmit={handleMessage} className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <input
                type="text" required placeholder="SENDER_NAME" value={form.name}
                onChange={e => setForm({ ...form, name: e.target.value })}
                className="bg-kali-card border border-slate-800 rounded-xl p-3 text-white text-xs focus:outline-none focus:border-kali-cyan font-mono transition"
              />
              <input
                type="email" required placeholder="SOCKET_EMAIL" value={form.email}
                onChange={e => setForm({ ...form, email: e.target.value })}
                className="bg-kali-card border border-slate-800 rounded-xl p-3 text-white text-xs focus:outline-none focus:border-kali-cyan font-mono transition"
              />
              <input
                type="text" required placeholder="MESSAGE_SUBJECT" value={form.subject}
                onChange={e => setForm({ ...form, subject: e.target.value })}
                className="sm:col-span-2 bg-kali-card border border-slate-800 rounded-xl p-3 text-white text-xs focus:outline-none focus:border-kali-cyan font-mono transition"
              />
              <textarea
                required rows="3" placeholder="WRITE_RAW_PAYLOAD_STRING..." value={form.message}
                onChange={e => setForm({ ...form, message: e.target.value })}
                className="sm:col-span-2 bg-kali-card border border-slate-800 rounded-xl p-3 text-white text-xs focus:outline-none focus:border-kali-cyan font-mono resize-none transition"
              ></textarea>

              <div className="sm:col-span-2 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pt-1">
                <button
                  type="submit"
                  className="w-full sm:w-auto bg-kali-cyan text-kali-bg font-extrabold px-6 py-2.5 rounded-xl hover:bg-white transition-all duration-300 uppercase font-mono tracking-wider text-xs shadow-[0_4px_12px_rgba(0,240,255,0.15)]"
                >
                  TRANSMIT_PAYLOAD ⤿
                </button>
                {submitted && (
                  <span className="text-kali-red font-matrix text-[10px] uppercase tracking-tighter animate-pulse">
                    [!] SOCKET_PACKET_EMITTED_SUCCESSFULLY.
                  </span>
                )}
              </div>
            </form>
          </div>
        </section>

        {/* Global Footer info blocks */}
        <footer className="border-t border-slate-800 pt-6 mt-8 flex flex-col sm:flex-row justify-between items-center gap-3 text-[10px] text-slate-600 uppercase font-mono tracking-wider">
          <p>© 2026 Rakibul Hussain. Made with Tailwind v4 & Open Learning.</p>
          <div className="flex gap-4 font-matrix text-[9px]">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-kali-cyan transition">GITHUB_MODULE</a>
            <span>|</span>
            <span className="text-slate-700">COMPILED_UI: 200_OK</span>
          </div>
        </footer>

      </div>
    </div>



  );
}

export default App;