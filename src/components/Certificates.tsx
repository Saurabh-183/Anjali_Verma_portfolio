"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { BadgeCheck, ExternalLink } from 'lucide-react';
import { resumeData } from '../data/resumeData';
import { fadeInUp, staggerContainer } from '../utils/animations';

export default function Certificates() {
  return (
    <motion.section 
      id="certificates"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
    >
      <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-6 md:mb-8">
        <div className="p-2.5 rounded-xl bg-teal-500/10 border border-teal-500/20">
          <BadgeCheck className="w-5 h-5 text-teal-400" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">Certificates</h2>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {resumeData.certificates.map((cert, idx) => (
          <motion.div 
            key={idx} 
            variants={fadeInUp}
            className="flex flex-col gap-4 p-4 md:p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-white/10 hover:-translate-y-1 transition-all duration-300 relative group"
          >
            <div>
              <h3 className="text-gray-200 font-semibold mb-1 pr-8 leading-snug">{cert.name}</h3>
              <p className="text-[11px] md:text-xs text-teal-400 font-medium uppercase tracking-wider">{cert.issuer}</p>
            </div>
            <div className="mt-auto pt-4 flex items-center justify-between border-t border-white/5">
              <span className="text-xs text-gray-500 group-hover:text-gray-400 transition-colors">View Certificate</span>
              <a href={cert.link} target="_blank" rel="noopener noreferrer" className="p-2 -mr-2 -mb-2 rounded-lg text-gray-400 hover:text-teal-400 hover:bg-teal-500/10 transition-all">
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
