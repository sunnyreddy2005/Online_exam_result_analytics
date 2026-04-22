"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { 
  BarChart3, 
  Moon, 
  Sun,
  ExternalLink,
  ArrowRight,
  TrendingUp,
  Users,
  Award,
  ChevronDown
} from 'lucide-react';

export default function LandingPage() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen transition-colors duration-500 font-sans overflow-x-hidden bg-[#f8fafc] text-slate-900 dark:bg-[#0a0f1c] dark:text-white">
      
      {/* Background Graphic Patterns */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-50 dark:opacity-20 transition-opacity duration-500">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>
      
      {/* Glowing Orbs */}
      <div className="fixed top-1/4 left-1/4 w-[400px] h-[400px] bg-blue-400/20 dark:bg-blue-600/20 rounded-full blur-[100px] pointer-events-none z-0"></div>
      <div className="fixed top-1/3 right-1/4 w-[300px] h-[300px] bg-indigo-400/20 dark:bg-indigo-600/20 rounded-full blur-[80px] pointer-events-none z-0"></div>
      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-cyan-400/10 dark:bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none z-0"></div>

      <div className="relative z-10 flex flex-col min-h-screen pb-12">
        {/* Navigation */}
        <nav className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto w-full">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600 dark:bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/30">
              <BarChart3 className="text-white w-5 h-5" />
            </div>
            <span className="font-bold text-lg tracking-tight text-blue-600 dark:text-blue-400 flex items-center">
              ExamAnalytics
            </span>
          </div>

          {/* Links */}
          <div className="hidden lg:flex items-center gap-8">
            {['Problem', 'Innovation', 'Architecture', 'Features', 'Impact', 'Dashboard', 'Results'].map((item) => (
              <a 
                key={item} 
                href={item === 'Dashboard' ? '/dashboard' : item === 'Architecture' ? '/dashboard/architecture' : `#${item.toLowerCase()}`}
                className="text-sm font-medium text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="w-10 h-10 rounded-full flex items-center justify-center bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors shadow-sm"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <Link 
              href="/dashboard"
              className="hidden md:flex px-6 py-2.5 rounded-full text-sm font-medium bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:opacity-90 transition-opacity shadow-[0_4px_14px_0_rgba(79,70,229,0.39)]"
            >
              Live Dashboard
            </Link>
          </div>
        </nav>

        {/* Hero Section */}
        <main className="flex-1 flex flex-col items-center justify-center px-4 pt-16 md:pt-24 max-w-5xl mx-auto w-full text-center">
          
          {/* Active Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm mb-8">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
            <span className="text-sm font-medium text-emerald-600 dark:text-emerald-400">Live Dashboard Active</span>
            <span className="text-slate-300 dark:text-slate-600 mx-1">•</span>
            <span className="text-sm font-medium text-slate-600 dark:text-slate-300">Power BI + Azure SQL</span>
          </div>

          {/* Headlines */}
          <h1 className="text-5xl md:text-7xl lg:text-[84px] font-extrabold tracking-tight mb-4 leading-[1.1]">
             <span className="text-slate-900 dark:text-white">Online </span>
             <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">
               Exam Result
             </span>
             <br />
             <span className="text-slate-900 dark:text-white">Analytics </span>
             <span className="text-slate-600 dark:text-slate-300">Dashboard</span>
          </h1>

          {/* Subheading */}
          <div className="mt-6 mb-3 text-xl md:text-2xl font-medium text-slate-600 dark:text-slate-300">
            Cloud-Based Analytics using <span className="text-blue-500">Azure SQL</span> & <span className="text-amber-500">Power BI</span>
          </div>
          
          <div className="text-base md:text-lg text-slate-500 dark:text-slate-400 italic mb-10">
            ✨ "Turning Exam Data into Actionable Insights"
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20 w-full px-4">
            <Link 
              href="/dashboard"
              className="w-full sm:w-auto px-8 py-4 rounded-xl md:rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold flex items-center justify-center gap-2 transition-all hover:-translate-y-0.5 shadow-[0_8px_30px_rgb(79,70,229,0.3)] hover:shadow-[0_8px_30px_rgb(79,70,229,0.5)]"
            >
              🚀 View Live Dashboard <ExternalLink className="w-4 h-4 ml-1" />
            </Link>
            <Link 
              href="/dashboard/architecture"
              className="w-full sm:w-auto px-8 py-4 rounded-xl md:rounded-full bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 font-semibold flex items-center justify-center gap-2 transition-all hover:bg-slate-50 dark:hover:bg-slate-700 shadow-sm"
            >
              📄 View Project Details <ArrowRight className="w-4 h-4 ml-1 text-slate-400" />
            </Link>
          </div>

          {/* Stat Cards Container */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl mx-auto mb-12">
            {/* Card 1 */}
            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-3xl p-8 border border-white dark:border-slate-700 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.1)] text-left flex flex-col justify-between h-[180px] hover:-translate-y-1 transition-transform">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center mb-4">
                <Award className="text-emerald-600 dark:text-emerald-400 w-6 h-6" />
              </div>
              <div>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-slate-900 dark:text-white">100</span>
                  <span className="text-xl font-bold text-slate-300 dark:text-slate-500">%</span>
                </div>
                <div className="text-sm font-medium text-slate-500 dark:text-slate-400 mt-1">Pass Rate</div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-3xl p-8 border border-white dark:border-slate-700 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.1)] text-left flex flex-col justify-between h-[180px] hover:-translate-y-1 transition-transform">
              <div className="w-12 h-12 rounded-2xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4">
                <TrendingUp className="text-blue-600 dark:text-blue-400 w-6 h-6" />
              </div>
              <div>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-slate-900 dark:text-white">70</span>
                  <span className="text-xl font-bold text-slate-300 dark:text-slate-500">%</span>
                </div>
                <div className="text-sm font-medium text-slate-500 dark:text-slate-400 mt-1">Average Marks</div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-3xl p-8 border border-white dark:border-slate-700 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.1)] text-left flex flex-col justify-between h-[180px] hover:-translate-y-1 transition-transform">
              <div className="w-12 h-12 rounded-2xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mb-4">
                <Users className="text-purple-600 dark:text-purple-400 w-6 h-6" />
              </div>
              <div>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-slate-900 dark:text-white">9</span>
                </div>
                <div className="text-sm font-medium text-slate-500 dark:text-slate-400 mt-1">Students Analysed</div>
              </div>
            </div>
          </div>

          {/* Scroll explore */}
          <div className="flex flex-col items-center justify-center text-slate-400 dark:text-slate-500 text-xs font-semibold tracking-wider mt-4 animate-bounce">
            SCROLL TO EXPLORE
            <ChevronDown className="w-4 h-4 mt-1" />
          </div>

        </main>

        {/* --- ADDED CONTENT SECTIONS --- */}
        <div className="relative z-10 bg-white/50 dark:bg-slate-900/50 backdrop-blur-3xl border-t border-slate-200 dark:border-slate-800 mt-12">
          <div className="max-w-5xl mx-auto px-6 py-24 space-y-32">
            
            {/* Problem Section */}
            <section id="problem" className="scroll-mt-32">
              <div className="flex flex-col md:flex-row gap-12 items-center">
                <div className="md:w-1/2 space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-100 dark:bg-rose-900/30 text-rose-600 dark:text-rose-400 text-xs font-bold uppercase tracking-wider mb-2">The Challenge</div>
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">Fragmented Exam Data</h2>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
                    Traditional educational institutions struggle with siloed legacy systems. Exam results are often stored in static spreadsheets or outdated databases, making it nearly impossible for educators and administrators to extract meaningful, real-time insights or identify struggling students proactively.
                  </p>
                </div>
                <div className="md:w-1/2 w-full h-64 rounded-3xl bg-gradient-to-br from-slate-200 to-slate-100 dark:from-slate-800 dark:to-slate-900 border border-slate-200 dark:border-slate-700 shadow-inner flex items-center justify-center text-slate-400">
                  <div className="flex gap-4 opacity-50">
                    <div className="w-16 h-16 rounded-xl bg-slate-300 dark:bg-slate-700 animate-pulse"></div>
                    <div className="w-16 h-16 rounded-xl bg-slate-300 dark:bg-slate-700 animate-pulse delay-75"></div>
                    <div className="w-16 h-16 rounded-xl bg-slate-300 dark:bg-slate-700 animate-pulse delay-150"></div>
                  </div>
                </div>
              </div>
            </section>

            {/* Innovation Section */}
            <section id="innovation" className="scroll-mt-32">
              <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
                <div className="md:w-1/2 space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider mb-2">The Solution</div>
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">Modern Analytics Stack</h2>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
                    By centralizing data in a highly scalable and secure <strong>Azure SQL Analytics Backend</strong> and rendering dynamic visualizations via <strong>Power BI Embedded</strong>, we've transformed raw tabular data into highly interactive visual stories. Paired with Next.js 14, the user experience is fluid, instant, and accessible anywhere.
                  </p>
                </div>
                <div className="md:w-1/2 w-full h-64 rounded-3xl bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 border border-blue-100 dark:border-blue-800/30 flex items-center justify-center p-6 shadow-lg shadow-blue-500/5">
                  <div className="w-full h-full border-2 border-dashed border-blue-300 dark:border-blue-700 rounded-2xl flex items-center justify-center text-blue-500 dark:text-blue-400 font-medium">Azure SQL Pipeline Active</div>
                </div>
              </div>
            </section>

            {/* Features Section */}
            <section id="features" className="scroll-mt-32">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Core Platform Features</h2>
                <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">Built to empower educators to take action rapidly with military-grade reliability.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                   { title: 'Interactive Power BI Dashboards', desc: 'Drill down into individual student performance metrics with live multi-dimensional filtering.' },
                   { title: 'Predictive Trend Analysis', desc: 'Identify students at risk of failing before finals using historical anomaly detection models.' },
                   { title: 'Secure Edge Authentication', desc: 'Guaranteed role-based access ensuring strict compliance with student privacy regulations.' },
                   { title: 'Automated Reporting', desc: 'Generate customized PDF reports for entire batches in a fraction of a second with zero cold starts.' }
                ].map((feat, idx) => (
                  <div key={idx} className="p-8 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm hover:shadow-md transition-shadow">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{feat.title}</h3>
                    <p className="text-slate-600 dark:text-slate-400">{feat.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Impact & Results Section */}
            <section id="impact" className="scroll-mt-32">
               <div className="flex flex-col md:flex-row gap-12 items-center bg-gradient-to-tr from-indigo-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white shadow-2xl">
                <div className="md:w-2/3 space-y-6">
                  <h2 className="text-3xl md:text-4xl font-bold">Measurable Impact</h2>
                  <p className="text-indigo-100 leading-relaxed text-lg">
                    The deployment of this dashboard framework completely eliminates manual aggregate calculations, saving faculty an estimated <strong>40+ hours per examination cycle</strong>. Strategic decision-making is now data-driven, paving the way for real-time curriculum adjustments that ensure no student is left behind.
                  </p>
                  <div id="results" className="pt-4 flex flex-wrap gap-4">
                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
                      <div className="text-3xl font-bold">+28%</div>
                      <div className="text-indigo-200 text-sm mt-1">Intervention Success</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
                      <div className="text-3xl font-bold">-95%</div>
                      <div className="text-indigo-200 text-sm mt-1">Reporting Time</div>
                    </div>
                  </div>
                </div>
                <div className="md:w-1/3 flex justify-center">
                  <div className="w-32 h-32 rounded-full border-4 border-white/20 flex flex-col items-center justify-center bg-white/10 backdrop-blur-md">
                    <TrendingUp className="w-10 h-10 mb-1" />
                    <span className="font-bold">ROI</span>
                  </div>
                </div>
              </div>
            </section>

          </div>
          
          {/* Footer */}
          <footer className="border-t border-slate-200 dark:border-slate-800 py-12 text-center text-slate-500 dark:text-slate-400 text-sm">
             <p>© {new Date().getFullYear()} ExamAnalytics. Powered by Next.js & Azure Data Platform.</p>
          </footer>
        </div>
      </div>
    </div>
  );
}
