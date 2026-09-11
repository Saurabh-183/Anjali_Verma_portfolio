"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Server } from 'lucide-react';
import { resumeData } from '../data/resumeData';
import { fadeInUp, staggerContainer } from '../utils/animations';

export default function Skills() {
  return (
    <>
      {/* Core Competencies */}
      <motion.section
        id="skills"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="bg-white shadow-sm dark:bg-white/2 dark:shadow-none border border-black/10 dark:border-white/10 rounded-2xl md:rounded-3xl p-5 md:p-8"
      >
        <motion.h3 variants={fadeInUp} className="text-lg font-bold text-gray-900 dark:text-white mb-5 md:mb-6 flex items-center gap-2">
          <Terminal className="w-5 h-5 text-blue-400" />
          Core Competencies
        </motion.h3>
        <div className="space-y-2 md:space-y-3">
          {resumeData.skills.map((skill, idx) => (
            <motion.div 
              key={idx} 
              variants={fadeInUp}
              className="group flex items-center gap-3 p-2.5 md:p-3 rounded-xl bg-white shadow-sm dark:bg-white/2 dark:shadow-none hover:bg-white/6 transition-colors border border-transparent hover:border-black/5 dark:border-white/5"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-blue-500/50 group-hover:bg-blue-400 transition-colors shrink-0" />
              <span className="text-sm text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:text-white transition-colors">{skill}</span>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Technologies */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="bg-white/[0.02] border border-black/10 dark:border-white/10 rounded-2xl md:rounded-3xl p-5 md:p-8"
      >
        <motion.h3 variants={fadeInUp} className="text-lg font-bold text-gray-900 dark:text-white mb-5 md:mb-6 flex items-center gap-2">
          <Server className="w-5 h-5 text-indigo-400" />
          Technologies
        </motion.h3>
        <div className="flex flex-wrap gap-2">
          {resumeData.technologies.map((tech, idx) => (
            <motion.span 
              key={idx} 
              variants={fadeInUp}
              className="px-2.5 py-1 md:px-3 md:py-1.5 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-[11px] md:text-xs font-medium text-indigo-300"
            >
              {tech}
            </motion.span>
          ))}
        </div>
        
        <motion.div variants={fadeInUp} className="mt-6 md:mt-8 pt-6 md:pt-8 border-t border-black/10 dark:border-white/10">
          <h4 className="text-xs md:text-sm font-medium text-gray-600 dark:text-gray-400 mb-3 md:mb-4">Tools Ecosystem</h4>
          <div className="flex flex-wrap gap-1.5 md:gap-2">
            {resumeData.tools.map((tool, idx) => (
              <span key={idx} className="px-2 py-1 md:px-2.5 md:py-1 rounded-md bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-[10px] md:text-xs text-gray-600 dark:text-gray-400 hover:bg-black/10 dark:bg-white/10 transition-colors">
                {tool}
              </span>
            ))}
          </div>
        </motion.div>
      </motion.section>
    </>
  );
}
