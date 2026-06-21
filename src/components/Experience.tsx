"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Server, ChevronRight } from 'lucide-react';
import { resumeData } from '../data/resumeData';
import { fadeInUp, staggerContainer } from '../utils/animations';

export default function Experience() {
  return (
    <motion.section 
      id="experience"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
    >
      <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-6 md:mb-8">
        <div className="p-2.5 rounded-xl bg-blue-500/10 border border-blue-500/20">
          <Briefcase className="w-5 h-5 text-blue-400" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">Work Experience</h2>
      </motion.div>

      <motion.div variants={fadeInUp} className="group relative">
        {/* Timeline line */}
        <div className="absolute left-6.75 top-10 bottom-0 w-px bg-linear-to-b from-blue-500/50 to-transparent hidden sm:block" />
        
        <div className="relative sm:pl-16">
          {/* Timeline dot */}
          <div className="absolute left-5.75 top-2 w-2 h-2 rounded-full bg-blue-400 shadow-[0_0_10px_rgba(96,165,250,0.5)] hidden sm:block" />
          
          <div className="bg-white/2 border border-white/10 rounded-2xl md:rounded-3xl p-5 md:p-8 hover:bg-white/4 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(59,130,246,0.1)] transition-all duration-300">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
              <div>
                <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-blue-400 transition-colors">{resumeData.experience.role}</h3>
                <div className="flex flex-wrap items-center gap-2 mt-1 md:mt-2 text-sm text-gray-400">
                  <span className="font-medium text-gray-300">{resumeData.experience.company}</span>
                  <span className="hidden md:inline">•</span>
                  <span>{resumeData.experience.location}</span>
                </div>
              </div>
              <div className="text-left md:text-right">
                <span className="inline-block px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-medium text-gray-300">
                  {resumeData.experience.duration}
                </span>
                <div className="mt-2 text-xs text-blue-400 font-medium flex items-center gap-1.5 md:justify-end">
                  <Server className="w-3 h-3" />
                  Client: {resumeData.experience.client}
                </div>
              </div>
            </div>
            
            <ul className="space-y-3 md:space-y-4">
              {resumeData.experience.bullets.map((bullet, idx) => (
                <li key={idx} className="flex items-start gap-3 text-gray-400 group/item">
                  <ChevronRight className="w-4 h-4 mt-0.5 md:mt-1 text-blue-500/50 shrink-0 group-hover/item:text-blue-400 transition-colors" />
                  <span className="leading-relaxed text-sm md:text-base">{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}
