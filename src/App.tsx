import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center p-4">
      <div className="max-w-2xl w-full space-y-8 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium border border-blue-500/20">
          <Sparkles className="w-4 h-4" />
          <span>AI-Powered Generation</span>
        </div>
        
        <h1 className="text-5xl font-bold tracking-tight bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent sm:text-7xl">
          Build faster with FlowForge
        </h1>
        
        <p className="text-lg text-slate-400 leading-relaxed max-w-lg mx-auto">
          Describe your dream component, and watch it come to life instantly. 
          Edit visually, refine with code, and deploy in seconds.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
          <button className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all">
            Start Building
            <ArrowRight className="w-4 h-4" />
          </button>
          <button className="px-6 py-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-medium border border-slate-700 transition-all">
            View Documentation
          </button>
        </div>
      </div>
    </div>
  );
}