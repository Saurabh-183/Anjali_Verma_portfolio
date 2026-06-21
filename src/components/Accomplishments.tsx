"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Award, CheckCircle2 } from 'lucide-react';
import { resumeData } from '../data/resumeData';
import { fadeInUp, staggerContainer } from '../utils/animations';

export default function Accomplishments() {
  return (
    <motion.section 
      id="awards"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
    >
      <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-6 md:mb-8">
        <div className="p-2.5 rounded-xl bg-indigo-500/10 border border-indigo-500/20">
          <Award className="w-5 h-5 text-indigo-400" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">Accomplishments</h2>
      </motion.div>

      <div className="grid gap-4">
        {resumeData.accomplishments.map((award, idx) => (
          <motion.div 
            key={idx} 
            variants={fadeInUp}
            className="flex items-start gap-4 p-4 md:p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-white/10 hover:-translate-y-1 transition-all duration-300"
          >
            <div className="mt-0.5 p-2 rounded-lg bg-indigo-500/10 shrink-0">
              <CheckCircle2 className="w-4 h-4 text-indigo-400" />
            </div>
            <p className="text-gray-300 leading-relaxed text-sm md:text-base">{award}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
