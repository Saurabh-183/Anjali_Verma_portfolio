/* eslint-disable @next/next/no-img-element */
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, ExternalLink } from 'lucide-react';
import { resumeData } from '../data/resumeData';
import { fadeInUp, staggerContainer } from '../utils/animations';

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
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
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Hero() {
  return (
    <motion.section 
      id="about"
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      className="pt-10 flex flex-col-reverse lg:grid lg:grid-cols-12 gap-10 lg:gap-12 items-center"
    >
      <div className="lg:col-span-7 text-center lg:text-left">
        <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 text-blue-400 text-xs font-medium mb-6 lg:mb-8 border border-blue-500/20 backdrop-blur-md">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          Available for New Opportunities
        </motion.div>
        
        <motion.h1 
          variants={fadeInUp} 
          className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-4 text-white leading-[1.1] animated-gradient-text"
          style={{ fontFamily: 'var(--font-castoro)' }}
        >
          {resumeData.name}
        </motion.h1>
        
        <motion.h2 variants={fadeInUp} className="text-xl sm:text-2xl md:text-3xl font-medium text-blue-400 mb-6 lg:mb-8 text-glow">
          {resumeData.role}
        </motion.h2>
        
        <motion.p variants={fadeInUp} className="text-base sm:text-lg md:text-xl text-gray-400 leading-relaxed mb-8 lg:mb-10 max-w-2xl mx-auto lg:mx-0">
          {resumeData.overview}
        </motion.p>

        <motion.div variants={fadeInUp} className="flex flex-wrap gap-3 lg:gap-4 justify-center lg:justify-start">
          <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-xs sm:text-sm text-gray-300 backdrop-blur-md hover:bg-white/10 transition-colors">
            <MapPin className="w-4 h-4 text-blue-400" />
            {resumeData.location}
          </div>
          <a href={`mailto:${resumeData.email}`} className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-xs sm:text-sm text-gray-300 hover:bg-white/10 hover:border-white/20 transition-all backdrop-blur-md group hover:-translate-y-0.5">
            <Mail className="w-4 h-4 text-blue-400 group-hover:text-blue-300 transition-colors" />
            <span className="hidden sm:inline">{resumeData.email}</span>
            <span className="sm:hidden">Email Me</span>
          </a>
          <a href={resumeData.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600/10 border border-blue-500/20 text-xs sm:text-sm text-blue-300 hover:bg-blue-600/20 hover:border-blue-500/40 transition-all backdrop-blur-md group hover:-translate-y-0.5">
            <LinkedinIcon className="w-4 h-4 text-blue-400 group-hover:text-blue-300 transition-colors" />
            LinkedIn
            <ExternalLink className="w-3 h-3 ml-1 opacity-50 group-hover:opacity-100 transition-opacity" />
          </a>
        </motion.div>
      </div>
      
      <motion.div 
        variants={fadeInUp} 
        className="lg:col-span-5 flex justify-center lg:justify-end relative w-full"
      >
        {/* Decorative elements behind the image */}
        <div className="absolute inset-0 bg-linear-to-tr from-blue-500/20 to-indigo-500/20 rounded-full blur-3xl" />
        <div className="absolute inset-4 bg-linear-to-tr from-blue-500/10 to-indigo-500/10 rounded-[3rem] transform rotate-6 border border-white/5" />
        <div className="absolute inset-4 bg-linear-to-tr from-blue-500/10 to-indigo-500/10 rounded-[3rem] transform -rotate-3 border border-white/5" />
        
        {/* The Image */}
        <div className="relative w-64 h-80 sm:w-80 sm:h-104 md:w-80 md:h-112 rounded-[2.5rem] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm group shadow-2xl">
          <img 
            src="/Anjali_verma_profile.jpeg" 
            alt="Anjali Verma"
            className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-linear-to-tr from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
      </motion.div>
    </motion.section>
  );
}
