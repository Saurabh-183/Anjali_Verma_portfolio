"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import { fadeInUp } from '../utils/animations';

export default function Education() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
      className="bg-linear-to-br from-blue-900/20 to-indigo-900/20 border border-blue-500/20 rounded-2xl md:rounded-3xl p-5 md:p-8 relative overflow-hidden group"
    >
      <div className="absolute top-0 right-0 p-4 md:p-6 opacity-10 group-hover:opacity-20 transition-opacity">
        <GraduationCap className="w-16 h-16 md:w-24 md:h-24 text-blue-400" />
      </div>
      <h3 className="relative text-lg font-bold text-white mb-3 md:mb-4 flex items-center gap-2">
        <GraduationCap className="w-5 h-5 text-blue-400" />
        Education
      </h3>
      <div className="relative">
        <h4 className="text-sm md:text-base font-semibold text-gray-200">Bachelor of Computer Application</h4>
        <p className="text-xs md:text-sm text-gray-400 mt-1">Dr. Virendra Swaroop Institute of Computer Studies, Kanpur</p>
        <p className="text-[10px] md:text-xs font-medium text-blue-400 mt-3 md:mt-4 inline-block px-2.5 py-1 md:px-3 md:py-1.5 rounded-lg bg-blue-500/10 border border-blue-500/20">
          Graduated: 2021 - 2024
        </p>
      </div>
    </motion.section>
  );
}
