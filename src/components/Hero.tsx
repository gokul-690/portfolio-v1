import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaFileAlt,
  FaArrowDown,
} from 'react-icons/fa';
import profilePng from '../assets/11.png';
import profilePng2 from '../assets/1.jpeg';
import profilePng3 from '../assets/3.jpeg';

// ─── Animation Variants ──────────────────────────────────────────────────────

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const quoteVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.8 },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.98, y: 15 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 1, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.3 },
  },
};

// ─── Social Links ─────────────────────────────────────────────────────────────

const socials = [
  {
    icon: <FaGithub />,
    url: 'https://github.com/gokul-690',
    label: 'GitHub',
  },
  {
    icon: <FaLinkedin />,
    url: 'https://www.linkedin.com/in/gokul-raj-chandran',
    label: 'LinkedIn',
  },
  {
    icon: <FaEnvelope />,
    url: 'mailto:chandrangokul816@gmail.com',
    label: 'Email',
  },
];

// ─── Component ───────────────────────────────────────────────────────────────

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  // Subtle parallax: image drifts up slightly as user scrolls into About
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);
  const imageOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '8%']);
  const textOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black/20 text-white"
    >
      {/* ── Background blobs ────────────────────────────────────────────── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-1/3 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-1/3 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-600/5 rounded-full blur-3xl" />
      </div>

      {/* ── Hero grid ────────────────────────────────────────────────────── */}
      <div className="relative z-10 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center">
        {/* ── LEFT: Text ───────────────────────────────────────────────── */}
        <motion.div
          className="lg:col-span-7 flex flex-col gap-7 order-2 lg:order-1"
          style={{ y: textY, opacity: textOpacity }}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Eyebrow pill */}
          <motion.div variants={fadeUpVariants}>
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full glass-effect-strong border border-cyan-400/30">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-xs font-semibold text-cyan-300 tracking-[0.2em] uppercase">
                Hello, I'm
              </span>
            </div>
          </motion.div>

          {/* Name */}
          <motion.div variants={fadeUpVariants} className="space-y-2">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white leading-[1.1] tracking-[-0.02em]">
              Gokul Raj C
            </h1>

            {/* Role line */}
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2 pt-1">
              <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-cyan-400 to-sky-400 bg-clip-text text-transparent tracking-tight">
                Junior Python Developer
              </span>
              <span className="text-slate-600 select-none text-xl">·</span>
              <span className="text-xl sm:text-2xl font-semibold text-slate-300 tracking-tight"></span>
            </div>
          </motion.div>

          {/* Decorative rule */}
          <motion.div
            className="flex gap-2 items-center"
            variants={fadeUpVariants}
          >
            <div className="w-12 h-px bg-gradient-to-r from-cyan-500 to-sky-500 rounded-full" />
            <div className="w-2 h-px bg-slate-600 rounded-full" />
            <div className="w-2 h-px bg-slate-600 rounded-full" />
          </motion.div>

          {/* Bio & Quote Wrapper */}
          <div className="space-y-6 max-w-xl">
            {/* Bio */}
            <motion.p
              className="text-slate-300/90 text-lg sm:text-xl leading-relaxed font-medium"
              variants={fadeUpVariants}
            >
              Full Stack Developer with experience in building scalable web
              applications across frontend, backend, APIs, and databases using
              React.js, Node.js, FastAPI, and PostgreSQL. Focused on creating
              functional, responsive, and secure applications.
            </motion.p>

            {/* Hero Quote */}
            <motion.div
              variants={quoteVariants}
              className="pl-4 border-l-2 border-cyan-500/30"
            >
              <p className="text-base sm:text-lg text-slate-400/90 italic font-medium leading-relaxed tracking-wide">
                "Even if fate fails you; <br className="hidden sm:block" /> hard
                work will give its own rewards."
              </p>
              <p className="mt-2 text-xs font-semibold text-cyan-400/80 tracking-widest uppercase">
                —kural 619
              </p>
            </motion.div>
          </div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-wrap items-center gap-4 pt-4"
            variants={fadeUpVariants}
          >
            <a
              href="/Gokul-Raj-Resume.pdf"
              download="Gokul-Raj-Resume.pdf"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3 bg-gradient-to-r from-cyan-600 to-sky-600 text-white font-semibold rounded-xl hover:from-cyan-500 hover:to-sky-500 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25 text-sm sm:text-base"
            >
              <FaFileAlt className="text-sm opacity-90" />
              Download Resume
            </a>

            <a
              href="https://github.com/gokul-690"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3 glass-effect-strong border border-white/10 hover:border-cyan-400/40 text-slate-300 hover:text-white font-semibold rounded-xl transition-all duration-300 text-sm sm:text-base"
            >
              <FaGithub className="text-lg opacity-90" />
              GitHub
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3 glass-effect-strong border border-white/10 hover:border-cyan-400/40 text-slate-300 hover:text-white font-semibold rounded-xl transition-all duration-300 text-sm sm:text-base"
            >
              Contact
            </a>
          </motion.div>

          {/* Social icon row */}
          <motion.div
            className="flex items-center gap-5 pt-6 mt-2 border-t border-white/[0.06] max-w-md"
            variants={fadeUpVariants}
          >
            {socials.map(social => (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-10 h-10 flex items-center justify-center rounded-xl glass-effect-strong border border-white/10 hover:border-cyan-400/50 text-slate-400 hover:text-cyan-300 transition-all duration-300 hover:-translate-y-1 text-lg shadow-sm hover:shadow-cyan-500/20"
              >
                {social.icon}
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* ── RIGHT: Profile Photo Collage ──────────────────────────────────────── */}
        <motion.div
          className="lg:col-span-5 relative flex justify-center lg:justify-end order-1 lg:order-2 w-full h-[400px] sm:h-[500px]"
          style={{ y: imageY, opacity: imageOpacity }}
          variants={imageVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="relative w-full max-w-[450px]">
            {/* Secondary Photo 1 (Back Left) */}
            <motion.div
              className="absolute z-10 bottom-4 left-0 sm:left-4 w-[180px] sm:w-[220px] rounded-[1.5rem] glass-effect-strong border border-white/10 overflow-hidden shadow-xl"
              initial={{ rotate: -15, x: -20, opacity: 0 }}
              animate={{ rotate: -8, x: 0, opacity: 1 }}
              whileHover={{ rotate: -5, scale: 1.05, zIndex: 40 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.5 }}
            >
              <div className="relative aspect-[4/5] bg-slate-800">
                <img
                  src={profilePng2}
                  alt="Gokul Raj Secondary"
                  className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            </motion.div>

            {/* Secondary Photo 2 (Top Left) */}
            <motion.div
              className="absolute z-30 top-0 left-12 sm:left-16 w-[150px] sm:w-[180px] rounded-[1.5rem] glass-effect-strong border border-white/10 overflow-hidden shadow-xl"
              initial={{ rotate: 15, y: -20, opacity: 0 }}
              animate={{ rotate: 6, y: 0, opacity: 1 }}
              whileHover={{ rotate: 2, scale: 1.08, zIndex: 40 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.7 }}
            >
              <div className="relative aspect-square bg-slate-800">
                <img
                  src={profilePng3}
                  alt="Gokul Raj Additional"
                  className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            </motion.div>

            {/* Main Premium Profile Frame (Center Right) */}
            <motion.div
              className="absolute z-20 top-12 right-0 sm:right-4 w-[240px] sm:w-[280px] rounded-[2rem] glass-effect-strong border border-white/10 hover:border-cyan-400/50 overflow-hidden shadow-2xl transition-all duration-500"
              initial={{ rotate: 0, scale: 0.9, opacity: 0 }}
              animate={{ rotate: 3, scale: 1, opacity: 1 }}
              whileHover={{ y: -8, rotate: 0, scale: 1.02 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-sky-500 opacity-80 group-hover:opacity-100 transition-opacity duration-500 z-10" />
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-sky-500/0 group-hover:from-cyan-500/10 group-hover:to-sky-500/10 transition-all duration-500 z-10 pointer-events-none" />

              <div className="relative aspect-[4/5] overflow-hidden bg-gradient-to-br from-cyan-900/20 to-slate-900/50">
                <img
                  src={profilePng}
                  alt="Gokul Raj C"
                  className="w-full h-full object-cover object-top transform scale-100 group-hover:scale-105 transition-transform duration-1000 ease-[0.25,0.46,0.45,0.94]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-white font-extrabold text-xl leading-tight tracking-tight shadow-black/50 drop-shadow-md">
                    Gokul Raj C
                  </p>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                    <span className="text-emerald-300 text-sm font-semibold tracking-wide">
                      Open to opportunities
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-4 flex flex-wrap gap-2 bg-black/40 backdrop-blur-md">
                {['Full Stack', 'React.js', 'Node.js'].map(tag => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-sky-500/20 rounded-full text-[10px] font-semibold text-cyan-300 border border-cyan-400/30 backdrop-blur-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* ── Soft gradient fade into About section ─────────────────────────── */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none z-20"
        style={{
          background:
            'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.4) 60%, rgba(0,0,0,0.7) 100%)',
        }}
      />

      {/* ── Scroll indicator ──────────────────────────────────────────────── */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 hidden md:flex flex-col items-center gap-3"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.8 }}
      >
        <span className="text-[10px] font-bold text-slate-500 tracking-[0.25em] uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          className="text-slate-500 hover:text-cyan-400 transition-colors duration-300"
        >
          <FaArrowDown className="text-sm" />
        </motion.div>
      </motion.div>
    </section>
  );
}
