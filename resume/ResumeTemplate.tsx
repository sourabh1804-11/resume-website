import { Mail, Globe, Phone, Award, Zap, Briefcase, GraduationCap, ChevronRight, CheckCircle2, LayoutTemplate, Network, Layers, MonitorPlay } from 'lucide-react';

export default function ResumeTemplate() {
  return (
    <div className="bg-slate-100 min-h-screen py-10 print:py-0 print:bg-white font-sans text-slate-800 selection:bg-blue-200 selection:text-blue-900">
      <div className="max-w-[210mm] mx-auto space-y-10 print:space-y-0 print:max-w-none">
        
        {/* PAGE 1: THE EXECUTIVE DASHBOARD */}
        <div className="bg-white shadow-[0_20px_50px_rgba(8,_112,_184,_0.07)] print:shadow-none print:border-none w-full h-[297mm] print:h-[297mm] print:w-[210mm] print:mx-auto box-border relative overflow-hidden rounded-xl print:rounded-none flex flex-col" id="page-1">
          
          {/* Top Banner - Polished Tech Vibe */}
          <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 px-10 py-8 relative overflow-hidden border-b-4 border-blue-500 shrink-0">
             {/* Decorative Background Elements */}
             <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-blue-500/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3"></div>
             <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-[60px] translate-y-1/2 -translate-x-1/4"></div>
             
             <div className="relative z-10 flex justify-between items-center">
                <div className="space-y-3">
                  <h1 className="text-5xl font-black tracking-tight text-white drop-shadow-md">SOURABH SINGHAL</h1>
                  <div className="space-y-1.5">
                     <div className="flex items-center gap-3">
                        <div className="h-px w-10 bg-blue-500"></div>
                        <h2 className="text-lg font-bold text-blue-300 tracking-widest uppercase">Senior Cloud Data Engineer & AI Architect</h2>
                     </div>
                     <div className="flex items-center gap-3">
                        <div className="h-px w-10 bg-transparent"></div>
                        <h3 className="text-sm font-semibold text-slate-400 tracking-widest uppercase">Associate Manager <span className="text-slate-600 mx-1.5">|</span> Finance Tech Lead</h3>
                     </div>
                  </div>
                </div>
                <div className="text-right text-[13px] text-slate-300 space-y-2.5 font-medium border-l border-slate-700/50 pl-6 shrink-0">
                  <div className="flex items-center justify-end gap-2 hover:text-white transition-colors group"><Phone className="w-3.5 h-3.5 text-blue-400 group-hover:scale-110 transition-transform"/> <a href="tel:+919399984665" className="hover:underline">+91 93999 84665</a></div>
                  <div className="flex items-center justify-end gap-2 hover:text-white transition-colors group"><Mail className="w-3.5 h-3.5 text-blue-400 group-hover:scale-110 transition-transform"/> <a href="mailto:sourabhsinghal005@gmail.com" className="hover:underline">sourabhsinghal005@gmail.com</a></div>
                  <div className="flex items-center justify-end gap-2 hover:text-white transition-colors group"><Globe className="w-3.5 h-3.5 text-blue-400 group-hover:scale-110 transition-transform"/> <a href="https://ss11-blogs.vercel.app" target="_blank" rel="noopener noreferrer" className="hover:underline">ss11-blogs.vercel.app</a></div>
                  <div className="flex items-center justify-end gap-2 hover:text-white transition-colors group"><Globe className="w-3.5 h-3.5 text-blue-400 group-hover:scale-110 transition-transform"/> <a href="https://ss11-portfolio.vercel.app" target="_blank" rel="noopener noreferrer" className="hover:underline">ss11-portfolio.vercel.app</a></div>
                </div>
             </div>
          </div>

          <div className="p-8 pt-4 flex gap-8 relative flex-grow">
             {/* Subtle watermark background */}
             <div className="absolute top-1/2 left-1/4 transform -translate-y-1/2 text-slate-50 opacity-[0.03] pointer-events-none">
               <Network className="w-[30rem] h-[30rem]"/>
             </div>

             {/* Left Column (Stats & Skills - ATS Optimized) */}
             <div className="w-[35%] space-y-6 relative z-10">
                
                <section>
                  <h3 className="text-xs font-black text-slate-800 tracking-widest uppercase mb-3 flex items-center gap-2 pb-1.5 border-b-2 border-slate-100">
                    <div className="p-1 bg-blue-50 rounded-md"><Award className="w-3.5 h-3.5 text-blue-600"/></div>
                    Executive Profile
                  </h3>
                  <p className="text-[13px] text-slate-600 leading-relaxed text-justify font-medium">
                    Expert Senior Cloud Data Engineer with <strong className="text-blue-700 font-bold">6.5 years</strong> of experience specializing in high-performance Finance and Supply Chain data architectures. Proven leader managing complex environments through robust CI/CD governance, AI integration, and high-velocity Agile delivery.
                  </p>
                </section>

                <section>
                  <h3 className="text-xs font-black text-slate-800 tracking-widest uppercase mb-3 flex items-center gap-2 pb-1.5 border-b-2 border-slate-100">
                    <div className="p-1 bg-blue-50 rounded-md"><Zap className="w-3.5 h-3.5 text-blue-600"/></div>
                    Technical Expertise
                  </h3>
                  {/* Dense, ATS-friendly keyword section with enhanced visual pill design */}
                  <div className="space-y-4">
                    <div>
                      <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1.5 flex items-center gap-1"><Layers className="w-3 h-3"/> Core Data & Cloud</p>
                      <div className="flex flex-wrap gap-1.5">
                        {['Databricks', 'Azure Synapse', 'Azure ADF', 'PySpark', 'SQL', 'Python', 'Delta Lake', 'Medallion Arch'].map(skill => (
                          <span key={skill} className="px-2 py-0.5 bg-slate-50 text-slate-700 rounded-md text-[11px] font-bold border border-slate-200/60 shadow-sm">{skill}</span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1.5 flex items-center gap-1"><MonitorPlay className="w-3 h-3"/> AI & Ecosystem</p>
                      <div className="flex flex-wrap gap-1.5">
                        {['Gen AI', 'LLMs (Claude)', 'AI Agents', 'Unity Catalog', 'Power BI', 'Alteryx'].map(skill => (
                          <span key={skill} className="px-2 py-0.5 bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-800 rounded-md text-[11px] font-bold border border-blue-100 shadow-sm">{skill}</span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1.5 flex items-center gap-1"><LayoutTemplate className="w-3 h-3"/> Engineering Practices</p>
                      <div className="flex flex-wrap gap-1.5">
                        {['DevOps', 'CI/CD', 'Agile (ADO)', 'ETL/ELT', 'Data Modeling', 'Release Mgmt'].map(skill => (
                          <span key={skill} className="px-2 py-0.5 bg-slate-50 text-slate-700 rounded-md text-[11px] font-bold border border-slate-200/60 shadow-sm">{skill}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </section>

                <section>
                  <h3 className="text-xs font-black text-slate-800 tracking-widest uppercase mb-3 flex items-center gap-2 pb-1.5 border-b-2 border-slate-100">
                    <div className="p-1 bg-blue-50 rounded-md"><CheckCircle2 className="w-3.5 h-3.5 text-blue-600"/></div>
                    Certifications
                  </h3>
                  <ul className="text-[13px] text-slate-600 space-y-2 font-medium">
                    <li className="flex items-center gap-2.5 bg-slate-50 px-2.5 py-1.5 rounded-md border border-slate-100"><div className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.5)]"></div> AZ-900 / DP-900</li>
                    <li className="flex items-center gap-2.5 bg-slate-50 px-2.5 py-1.5 rounded-md border border-slate-100"><div className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.5)]"></div> Alteryx Advanced</li>
                    <li className="flex items-center gap-2.5 bg-slate-50 px-2.5 py-1.5 rounded-md border border-slate-100"><div className="w-1.5 h-1.5 rounded-full bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.5)]"></div> Gen AI Intermediate</li>
                  </ul>
                </section>
                
             </div>

             {/* Right Column (Executive Timeline) */}
             <div className="w-[65%] relative z-10">
                <h3 className="text-xs font-black text-slate-800 tracking-widest uppercase mb-6 flex items-center gap-2 pb-1.5 border-b-2 border-slate-100">
                  <div className="p-1 bg-blue-50 rounded-md"><Briefcase className="w-3.5 h-3.5 text-blue-600"/></div>
                  Professional Experience
                </h3>

                <div className="space-y-6 relative before:absolute before:top-2 before:bottom-10 before:-left-[1px] before:w-1 before:bg-gradient-to-b before:from-blue-500 before:via-blue-200 before:to-transparent before:rounded-full">
                  
                  {/* Tredence */}
                  <div className="relative pl-6 group">
                    <div className="absolute w-4 h-4 bg-white border-[3px] border-blue-500 rounded-full -left-[7px] top-1 group-hover:scale-125 transition-transform duration-300 shadow-md"></div>
                    <div className="flex justify-between items-start mb-0.5">
                      <div>
                        <h4 className="font-bold text-lg text-slate-900">Finance Tech Lead <span className="text-xs font-medium text-slate-500 ml-1">| Associate Manager</span></h4>
                        <p className="text-[11px] font-black text-blue-600 tracking-wide mt-0.5"><a href="https://www.tredence.com" target="_blank" rel="noopener noreferrer" className="hover:underline uppercase">TREDENCE ANALYTICS</a></p>
                      </div>
                      <span className="text-[10px] font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded-full uppercase tracking-wider border border-blue-100">May 2025 - Present</span>
                    </div>
                    <div className="mt-2.5 bg-gradient-to-br from-white to-slate-50 p-3.5 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all text-[13px] text-slate-700">
                      <p className="mb-1.5"><strong className="text-slate-900 font-bold bg-slate-100 px-1.5 py-0.5 rounded mr-1.5">Domain</strong> Industrial Finance Data Strategy</p>
                      <p className="mb-2"><strong className="text-slate-900 font-bold bg-slate-100 px-1.5 py-0.5 rounded mr-1.5">Impact</strong> Architected integrated environments using Unity Catalog & Databricks AI Agents (Claude-based).</p>
                      <div className="flex flex-wrap gap-1 pt-2 border-t border-slate-100">
                         {['Databricks', 'AI Agents', 'Unity Catalog', 'CI/CD'].map(t => <span key={t} className="text-[9px] font-bold uppercase tracking-wider bg-blue-50 text-blue-700 px-1.5 py-0.5 rounded">{t}</span>)}
                      </div>
                    </div>
                  </div>

                  {/* Genpact */}
                  <div className="relative pl-6 group">
                    <div className="absolute w-4 h-4 bg-white border-[3px] border-indigo-400 rounded-full -left-[7px] top-1 group-hover:scale-125 transition-transform duration-300 shadow-md"></div>
                    <div className="flex justify-between items-start mb-0.5">
                      <div>
                        <h4 className="font-bold text-lg text-slate-900">Assistant Manager <span className="text-xs font-medium text-slate-500 ml-1">| Sr. Data Engineer</span></h4>
                        <p className="text-[11px] font-black text-indigo-600 tracking-wide mt-0.5"><a href="https://www.genpact.com" target="_blank" rel="noopener noreferrer" className="hover:underline uppercase">GENPACT</a></p>
                      </div>
                      <span className="text-[10px] font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full uppercase tracking-wider border border-slate-200">Apr 2022 - May 2025</span>
                    </div>
                    <div className="mt-2.5 bg-gradient-to-br from-white to-slate-50 p-3.5 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all text-[13px] text-slate-700">
                      <p className="mb-1.5"><strong className="text-slate-900 font-bold bg-slate-100 px-1.5 py-0.5 rounded mr-1.5">Domain</strong> CPG & Life Sciences</p>
                      <p className="mb-2"><strong className="text-slate-900 font-bold bg-slate-100 px-1.5 py-0.5 rounded mr-1.5">Impact</strong> Engineered Medallion Architecture. Realized $46,800 savings via financial workflow automation.</p>
                      <div className="flex flex-wrap gap-1 pt-2 border-t border-slate-100">
                         {['Azure Synapse', 'Databricks', 'PySpark', 'Python'].map(t => <span key={t} className="text-[9px] font-bold uppercase tracking-wider bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded">{t}</span>)}
                      </div>
                    </div>
                  </div>

                  {/* Capgemini */}
                  <div className="relative pl-6 group">
                    <div className="absolute w-4 h-4 bg-white border-[3px] border-slate-300 rounded-full -left-[7px] top-1 group-hover:scale-125 transition-transform duration-300 shadow-md"></div>
                    <div className="flex justify-between items-start mb-0.5">
                      <div>
                        <h4 className="font-bold text-lg text-slate-900">Sr. Data Analyst</h4>
                        <p className="text-[11px] font-black text-slate-500 tracking-wide mt-0.5"><a href="https://www.capgemini.com" target="_blank" rel="noopener noreferrer" className="hover:underline uppercase">CAPGEMINI</a></p>
                      </div>
                      <span className="text-[10px] font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full uppercase tracking-wider border border-slate-200">Aug 2019 - Apr 2022</span>
                    </div>
                    <div className="mt-2.5 bg-gradient-to-br from-white to-slate-50 p-3.5 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all text-[13px] text-slate-700">
                      <p className="mb-1.5"><strong className="text-slate-900 font-bold bg-slate-100 px-1.5 py-0.5 rounded mr-1.5">Domain</strong> FMCG Supply Chain (Unilever)</p>
                      <p className="mb-2"><strong className="text-slate-900 font-bold bg-slate-100 px-1.5 py-0.5 rounded mr-1.5">Impact</strong> Optimized global supply chain operations through automated pipelines and DevOps integration.</p>
                      <div className="flex flex-wrap gap-1 pt-2 border-t border-slate-100">
                         {['Azure Data Factory', 'Databricks', 'PySpark'].map(t => <span key={t} className="text-[9px] font-bold uppercase tracking-wider bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded">{t}</span>)}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 space-y-3">
                   <div className="bg-gradient-to-r from-blue-50 to-transparent border-l-4 border-blue-500 p-3.5 rounded-r-lg flex items-center justify-between">
                      <div>
                        <p className="font-bold text-sm text-slate-900 flex items-center gap-2">
                          <Award className="w-4 h-4 text-blue-600"/> Career Milestones
                        </p>
                        <p className="text-xs text-slate-600 mt-0.5">Completed 3 Lean Projects <span className="mx-1">•</span> Achieved $46,800 direct cost savings</p>
                      </div>
                   </div>

                   <div className="bg-gradient-to-r from-indigo-50 to-transparent border-l-4 border-indigo-500 p-3.5 rounded-r-lg flex items-center justify-between">
                      <div>
                        <p className="font-bold text-sm text-slate-900 flex items-center gap-2">
                          <GraduationCap className="w-4 h-4 text-indigo-600"/> Education
                        </p>
                        <p className="text-xs text-slate-600 mt-0.5">
                          <strong className="text-slate-800">B.Tech: Civil Engineering</strong> <span className="mx-1">•</span> VIT University, Vellore <span className="mx-1 text-slate-300">|</span> 2015 - 2019
                        </p>
                        <p className="text-[11px] font-bold text-indigo-600 mt-0.5">CGPA: 7.77</p>
                      </div>
                   </div>
                </div>
             </div>
          </div>

          <div className="absolute bottom-3 left-0 right-0 flex items-center justify-center gap-4 text-[9px] text-slate-400 font-bold tracking-[0.2em] uppercase">
            <div className="h-px w-10 bg-slate-200"></div>
            Page 1 of 2 — Scroll for Deep Dives
            <div className="h-px w-10 bg-slate-200"></div>
          </div>
        </div>

        {/* PAGE Break styling for printing */}
        <div className="break-before-page print:block hidden"></div>

        {/* PAGE 2: DEEP DIVE */}
        <div className="bg-white shadow-[0_20px_50px_rgba(8,_112,_184,_0.07)] print:shadow-none print:border-none p-8 print:p-8 w-full h-[297mm] print:h-[297mm] box-border relative flex flex-col rounded-xl print:rounded-none overflow-hidden" id="page-2">
          
          <header className="border-b-4 border-slate-100 pb-3 mb-5 flex justify-between items-end shrink-0">
            <div>
              <h2 className="text-3xl font-black text-slate-900 tracking-tight flex items-center gap-3">
                <div className="w-1.5 h-8 bg-blue-500 rounded-full"></div>
                ARCHITECTURAL DEEP DIVES
              </h2>
              <p className="text-xs font-bold text-blue-600 uppercase tracking-[0.2em] mt-1 ml-4">Professional Experience Expanded</p>
            </div>
            <div className="text-right bg-slate-50 px-4 py-1.5 rounded-lg border border-slate-100">
               <p className="text-xs font-black text-slate-900 tracking-widest uppercase">Sourabh Singhal</p>
               <p className="text-[10px] text-slate-500 font-medium mt-0.5">Data & AI Engineering Lead</p>
            </div>
          </header>

          <div className="space-y-5 flex-grow overflow-hidden">
            
            {/* Tredence Details */}
            <section className="relative">
               <div className="absolute -left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-transparent rounded-full opacity-20"></div>
               <div className="flex justify-between items-baseline mb-1">
                 <h3 className="text-xl font-black text-slate-900 tracking-tight"><a href="https://www.tredence.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">Tredence Analytics</a></h3>
                 <span className="text-[11px] font-bold text-blue-700 bg-blue-50 border border-blue-100 px-2 py-0.5 rounded-full uppercase tracking-wider">May 2025 - Present</span>
               </div>
               <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Finance Tech Lead | Associate Manager</p>
               <ul className="space-y-2">
                 <li className="flex items-start gap-3">
                   <div className="p-0.5 bg-blue-50 rounded mt-0.5"><ChevronRight className="w-3 h-3 text-blue-600 shrink-0"/></div>
                   <span className="text-[13px] text-slate-600 leading-relaxed"><strong className="text-slate-900 font-bold">Orchestrate technical strategy</strong> for Finance data within the Industrial sector, managing 2 direct reportees and high-level stakeholder relations.</span>
                 </li>
                 <li className="flex items-start gap-3">
                   <div className="p-0.5 bg-blue-50 rounded mt-0.5"><ChevronRight className="w-3 h-3 text-blue-600 shrink-0"/></div>
                   <span className="text-[13px] text-slate-600 leading-relaxed"><strong className="text-slate-900 font-bold">Architected integrated environments</strong> utilizing Unity Catalog and Databricks AI Agents (Claude-based) for high-efficiency framework scaling.</span>
                 </li>
                 <li className="flex items-start gap-3">
                   <div className="p-0.5 bg-blue-50 rounded mt-0.5"><ChevronRight className="w-3 h-3 text-blue-600 shrink-0"/></div>
                   <span className="text-[13px] text-slate-600 leading-relaxed"><strong className="text-slate-900 font-bold">Governed production deployments</strong> across 4-tier environments (Dev, SIT, Pre-Prod, Prod) using strict CI/CD and Release Management protocols.</span>
                 </li>
                 <li className="flex items-start gap-3">
                   <div className="p-0.5 bg-blue-50 rounded mt-0.5"><ChevronRight className="w-3 h-3 text-blue-600 shrink-0"/></div>
                   <span className="text-[13px] text-slate-600 leading-relaxed"><strong className="text-slate-900 font-bold">Optimized high-velocity Sprint-based delivery cycles</strong> to ensure timely production of validated, audit-ready financial datasets.</span>
                 </li>
                 <li className="flex items-start gap-3">
                   <div className="p-0.5 bg-blue-50 rounded mt-0.5"><ChevronRight className="w-3 h-3 text-blue-600 shrink-0"/></div>
                   <span className="text-[13px] text-slate-600 leading-relaxed"><strong className="text-slate-900 font-bold">Navigated complex finance data structures</strong>, evaluating framework trade-offs to ensure seamless connectivity across business domains.</span>
                 </li>
               </ul>
            </section>

            {/* Genpact Details */}
            <section className="relative">
               <div className="absolute -left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-400 to-transparent rounded-full opacity-20"></div>
               <div className="flex justify-between items-baseline mb-1">
                 <h3 className="text-xl font-black text-slate-900 tracking-tight"><a href="https://www.genpact.com" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 transition-colors">Genpact</a></h3>
                 <span className="text-[11px] font-bold text-slate-600 bg-slate-100 border border-slate-200 px-2 py-0.5 rounded-full uppercase tracking-wider">April 2022 - May 2025</span>
               </div>
               <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Assistant Manager - Sr. Data Engineer</p>
               <ul className="space-y-2">
                 <li className="flex items-start gap-3">
                   <div className="p-0.5 bg-indigo-50 rounded mt-0.5"><ChevronRight className="w-3 h-3 text-indigo-600 shrink-0"/></div>
                   <span className="text-[13px] text-slate-600 leading-relaxed"><strong className="text-slate-900 font-bold">Realized $46,800 in annual cost savings</strong> through end-to-end automation of manual financial workflows and completion of 3 Lean Projects.</span>
                 </li>
                 <li className="flex items-start gap-3">
                   <div className="p-0.5 bg-indigo-50 rounded mt-0.5"><ChevronRight className="w-3 h-3 text-indigo-600 shrink-0"/></div>
                   <span className="text-[13px] text-slate-600 leading-relaxed"><strong className="text-slate-900 font-bold">Engineered Medallion Architecture</strong> (Silver/Gold layers) for CPG and Life Science sectors using Azure Synapse and Databricks.</span>
                 </li>
                 <li className="flex items-start gap-3">
                   <div className="p-0.5 bg-indigo-50 rounded mt-0.5"><ChevronRight className="w-3 h-3 text-indigo-600 shrink-0"/></div>
                   <span className="text-[13px] text-slate-600 leading-relaxed"><strong className="text-slate-900 font-bold">Developed an automated tool</strong> for Life Science manufacturing to identify the impact of material discontinuation using Azure Synapse.</span>
                 </li>
                 <li className="flex items-start gap-3">
                   <div className="p-0.5 bg-indigo-50 rounded mt-0.5"><ChevronRight className="w-3 h-3 text-indigo-600 shrink-0"/></div>
                   <span className="text-[13px] text-slate-600 leading-relaxed"><strong className="text-slate-900 font-bold">Upskilled 10+ engineers</strong> through comprehensive technical workshops on ADF, Databricks, and Gen AI framework integration.</span>
                 </li>
               </ul>
            </section>

            {/* Capgemini Details */}
            <section className="relative">
               <div className="absolute -left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-slate-300 to-transparent rounded-full opacity-40"></div>
               <div className="flex justify-between items-baseline mb-1">
                 <h3 className="text-xl font-black text-slate-900 tracking-tight"><a href="https://www.capgemini.com" target="_blank" rel="noopener noreferrer" className="hover:text-slate-600 transition-colors">Capgemini</a></h3>
                 <span className="text-[11px] font-bold text-slate-600 bg-slate-100 border border-slate-200 px-2 py-0.5 rounded-full uppercase tracking-wider">August 2019 - April 2022</span>
               </div>
               <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Sr. Data Analyst</p>
               <ul className="space-y-2">
                 <li className="flex items-start gap-3">
                   <div className="p-0.5 bg-slate-100 rounded mt-0.5"><ChevronRight className="w-3 h-3 text-slate-600 shrink-0"/></div>
                   <span className="text-[13px] text-slate-600 leading-relaxed"><strong className="text-slate-900 font-bold">Optimized global supply chain</strong> data operations for Unilever (FMCG) through automated pipelines and DevOps integration.</span>
                 </li>
                 <li className="flex items-start gap-3">
                   <div className="p-0.5 bg-slate-100 rounded mt-0.5"><ChevronRight className="w-3 h-3 text-slate-600 shrink-0"/></div>
                   <span className="text-[13px] text-slate-600 leading-relaxed"><strong className="text-slate-900 font-bold">Developed high-availability ETL pipelines</strong> in Azure Data Factory with low-latency PySpark transformations in Azure Databricks.</span>
                 </li>
                 <li className="flex items-start gap-3">
                   <div className="p-0.5 bg-slate-100 rounded mt-0.5"><ChevronRight className="w-3 h-3 text-slate-600 shrink-0"/></div>
                   <span className="text-[13px] text-slate-600 leading-relaxed"><strong className="text-slate-900 font-bold">Applied DevOps principles</strong> to streamline end-to-end delivery for large-scale supply chain and finance datasets.</span>
                 </li>
               </ul>
            </section>
          </div>

          <div className="mt-4 bg-gradient-to-br from-slate-900 to-slate-800 p-5 rounded-2xl text-center relative overflow-hidden shadow-2xl shrink-0">
             <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-[60px] -translate-y-1/2 translate-x-1/2"></div>
             <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/20 rounded-full blur-[60px] translate-y-1/2 -translate-x-1/2"></div>
             
             <div className="relative z-10 flex flex-col items-center">
                <h4 className="text-lg font-black text-white mb-1 tracking-tight">Beyond the Paper</h4>
                <p className="text-slate-300 mb-4 max-w-xl mx-auto text-xs leading-relaxed font-medium">
                  This document captures the highlights. To explore my interactive projects, deep technical insights, and the complete journey from Civil Engineering to AI Data Architecture, visit my digital portfolio.
                </p>
                <a href="https://ss11-portfolio.vercel.app" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-2 bg-white text-slate-900 px-6 py-2 rounded-full font-bold hover:bg-blue-50 transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:scale-105 active:scale-95 text-xs">
                  <Globe className="w-3.5 h-3.5 text-blue-600 group-hover:animate-spin-slow"/> ss11-portfolio.vercel.app
                </a>
             </div>
          </div>
          
          <div className="absolute bottom-3 left-0 right-0 flex items-center justify-center gap-4 text-[9px] text-slate-400 font-bold tracking-[0.2em] uppercase">
            <div className="h-px w-10 bg-slate-200"></div>
            Page 2 of 2
            <div className="h-px w-10 bg-slate-200"></div>
          </div>
        </div>
      </div>
      
      {/* Print Button (Hidden during actual printing) */}
      <div className="fixed bottom-8 right-8 print:hidden z-50">
        <button onClick={() => window.print()} className="group bg-slate-900 text-white px-8 py-4 rounded-full shadow-2xl font-bold hover:bg-blue-600 flex items-center gap-3 transition-all duration-300 hover:scale-105 active:scale-95 ring-4 ring-slate-900/10 hover:ring-blue-600/20">
           <MonitorPlay className="w-5 h-5 group-hover:scale-110 transition-transform"/>
           Print / Save as PDF
        </button>
      </div>

    </div>
  );
}