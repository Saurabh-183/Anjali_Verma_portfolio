"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { resumeData } from '../data/resumeData';

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-black/5 dark:border-white/5 bg-slate-50/50 dark:bg-[#030712]/50 backdrop-blur-xl mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="flex flex-col items-center md:items-start">
            <span 
              className="text-2xl font-black tracking-tight bg-linear-to-r from-blue-500 to-indigo-500 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent"
              style={{ fontFamily: 'var(--font-castoro)' }}
            >
              Anjali <span className="text-gray-900 dark:text-white italic"> Verma</span>
            </span>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              {resumeData.role}
            </p>
          </div>

          <div className="flex items-center gap-4">
            <motion.a 
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href={`mailto:${resumeData.email}`}
              className="p-3 rounded-full bg-slate-200 dark:bg-white/5 text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 hover:bg-slate-300 dark:hover:bg-white/10 transition-all"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href={resumeData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-slate-200 dark:bg-white/5 text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 hover:bg-slate-300 dark:hover:bg-white/10 transition-all"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-5 h-5" />
            </motion.a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-black/5 dark:border-white/5 flex flex-col md:flex-row items-center justify-center gap-4 text-sm text-gray-500 dark:text-gray-400">
          <p>© {currentYear} {resumeData.name}. All rights reserved.</p>
          {/* <p className="flex items-center gap-1">
            Built with <Heart className="w-4 h-4 text-red-500" /> & Next.js
          </p> */}
        </div>
      </div>
    </footer>
  );
}

