import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Experience from '../components/Experience';
import Accomplishments from '../components/Accomplishments';
import Certificates from '../components/Certificates';
import Skills from '../components/Skills';
import Education from '../components/Education';

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#030712] text-gray-100 selection:bg-blue-500/30 selection:text-blue-200">
      {/* Background Effects */}
      <div className="pointer-events-none fixed inset-0 z-0 flex justify-center overflow-hidden">
        <div className="absolute top-[-20%] w-[800px] h-[600px] rounded-full bg-blue-900/20 blur-[150px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[500px] rounded-full bg-indigo-900/10 blur-[150px]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
      </div>

      <Navbar />

      {/* Main Content */}
      <main className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 md:pt-32 pb-16 md:pb-24 space-y-24 md:space-y-32">
        
        <Hero />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Left Column */}
          <div className="lg:col-span-8 space-y-20 md:space-y-32">
            <Experience />
            <Accomplishments />
            <Certificates />
          </div>

          {/* Right Column */}
          <div className="lg:col-span-4 space-y-8 md:space-y-12">
            <Skills />
            <Education />
          </div>
          
        </div>
      </main>
    </div>
  );
}