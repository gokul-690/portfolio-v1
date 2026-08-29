import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import profilePhoto from '../assets/1.jpeg';
import { useRef } from 'react';
import {
  FaBriefcase,
  FaCalendarAlt,
  FaBuilding,
  FaFlask,
  FaRobot,
  FaChartBar,
} from 'react-icons/fa';
import {
  SiPython,
  SiPandas,
  SiScikitlearn,
  SiTensorflow,
  SiPytorch,
  SiOpencv,
  SiReact,
  SiNodedotjs,
  SiFastapi,
  SiFlutter,
  SiPostgresql,
  SiTableau,
  SiMysql,
  SiDart,
} from 'react-icons/si';
import { GiArtificialIntelligence } from 'react-icons/gi';
import { MdHealthAndSafety } from 'react-icons/md';

// ─── Types ──────────────────────────────────────────────────────────────────

interface Badge {
  label: string;
  gradient: string;
}

interface ExperienceItem {
  company: string;
  role: string;
  duration: string;
  type: string;
  icon: React.ReactNode;
  logoGradient: string;
  accentFrom: string;
  accentTo: string;
  glowColor: string;
  description: string;
  responsibilities: string[];
  badges: Badge[];
}

// ─── Data ────────────────────────────────────────────────────────────────────

const experiences: ExperienceItem[] = [
  {
    company: 'Kanavu Startup Village',
    role: 'Full Stack Developer',
    duration: 'May 2026 – Present',
    type: 'Professional',
    icon: <FaRobot />,
    logoGradient: 'from-purple-500 to-pink-600',
    accentFrom: 'from-purple-500',
    accentTo: 'to-pink-500',
    glowColor: 'rgba(168,85,247,0.35)',
    description:
      'Developing cross-platform mobile and web applications with a focus on responsive interfaces, scalable backend services, and secure authentication. Collaborating closely with the team via Git and GitHub to manage changes and deliver a polished user experience.',
    responsibilities: [
      'Built mobile apps in Flutter & Dart',
      'Created REST APIs with FastAPI & Python',
      'Responsive UIs with React.js & TypeScript',
      'Backend services in Node.js & Express',
      'Designed PostgreSQL schemas',
      'JWT & Firebase Auth implementation',
    ],
    badges: [
      {
        label: 'Flutter',
        gradient: 'from-sky-500/30 to-blue-500/30 border-sky-400/40 text-sky-300',
      },
      {
        label: 'React',
        gradient: 'from-cyan-500/30 to-sky-500/30 border-cyan-400/40 text-cyan-300',
      },
      {
        label: 'Node.js',
        gradient: 'from-green-500/30 to-emerald-500/30 border-green-400/40 text-green-300',
      },
      {
        label: 'FastAPI',
        gradient: 'from-teal-500/30 to-emerald-500/30 border-teal-400/40 text-teal-300',
      },
      {
        label: 'Python',
        gradient: 'from-yellow-500/30 to-amber-500/30 border-yellow-400/40 text-yellow-300',
      },
      {
        label: 'PostgreSQL',
        gradient: 'from-blue-500/30 to-indigo-500/30 border-blue-400/40 text-blue-300',
      },
    ],
  },
  {
    company: 'Novitech R&D',
    role: 'Data Analytics Intern',
    duration: 'Dec 2025 – Jan 2026',
    type: 'Internship',
    icon: <FaFlask />,
    logoGradient: 'from-cyan-500 to-sky-600',
    accentFrom: 'from-cyan-500',
    accentTo: 'to-sky-500',
    glowColor: 'rgba(6,182,212,0.35)',
    description:
      'Built interactive data visualization dashboards and transformed datasets to support stakeholder decision-making. Cleaned over 5,000 records to ensure accuracy and readiness for reporting.',
    responsibilities: [
      'Power BI & Tableau Dashboards',
      'Data Cleaning with Excel & Python',
      'Transformed 5,000+ records',
      'Executed SQL Queries in MySQL',
      'Data Analysis & Reporting',
    ],
    badges: [
      {
        label: 'Power BI',
        gradient: 'from-yellow-500/30 to-amber-500/30 border-yellow-400/40 text-yellow-300',
      },
      {
        label: 'Tableau',
        gradient: 'from-blue-500/30 to-indigo-500/30 border-blue-400/40 text-blue-300',
      },
      {
        label: 'Python',
        gradient: 'from-yellow-500/30 to-amber-500/30 border-yellow-400/40 text-yellow-300',
      },
      {
        label: 'MySQL',
        gradient: 'from-orange-500/30 to-red-500/30 border-orange-400/40 text-orange-300',
      },
      {
        label: 'SQL',
        gradient: 'from-cyan-500/30 to-sky-500/30 border-cyan-400/40 text-cyan-300',
      },
    ],
  },
];

// ─── Skill Icon Map ──────────────────────────────────────────────────────────

const skillIcons: Record<string, React.ReactNode> = {
  Python: <SiPython />,
  React: <SiReact />,
  'Node.js': <SiNodedotjs />,
  FastAPI: <SiFastapi />,
  Flutter: <SiFlutter />,
  PostgreSQL: <SiPostgresql />,
  'Power BI': <FaChartBar />,
  Tableau: <SiTableau />,
  MySQL: <SiMysql />,
  Dart: <SiDart />,
};

// ─── Timeline Dot ────────────────────────────────────────────────────────────

interface TimelineDotProps {
  gradient: string;
  glowColor: string;
  isActive: boolean;
}

function TimelineDot({ gradient, glowColor, isActive }: TimelineDotProps) {
  return (
    <div className="relative flex-shrink-0 flex items-center justify-center">
      {isActive && (
        <motion.div
          className={`absolute w-10 h-10 rounded-full bg-gradient-to-br ${gradient} opacity-30`}
          animate={{ scale: [1, 1.6, 1], opacity: [0.4, 0, 0.4] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
        />
      )}
      <motion.div
        className={`relative z-10 w-7 h-7 rounded-full bg-gradient-to-br ${gradient} flex items-center justify-center shadow-lg`}
        style={{ boxShadow: `0 0 18px ${glowColor}` }}
        whileHover={{ scale: 1.15 }}
      >
        <div className="w-2.5 h-2.5 rounded-full bg-white/80" />
      </motion.div>
    </div>
  );
}

// ─── Experience Card ─────────────────────────────────────────────────────────

interface ExperienceCardProps {
  exp: ExperienceItem;
  index: number;
}

function ExperienceCard({ exp, index }: ExperienceCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const isEven = index % 2 === 0;

  return (
    <div className="relative w-full mb-12 flex flex-col md:flex-row items-center md:justify-between group">
      {/* 
        On desktop, the card is wrapped in a container that takes exactly half width.
        If it's even, it goes on the left. If it's odd, it goes on the right.
      */}
      <div className={`order-2 md:order-none w-full md:w-1/2 ${isEven ? 'md:pr-12 lg:pr-16' : 'md:pl-12 lg:pl-16 md:ml-auto'} pl-12 sm:pl-16 md:pl-0`}>
        <motion.div
          ref={ref}
          className="relative rounded-2xl overflow-hidden glass-effect-strong border border-white/10 hover:border-white/25 transition-all duration-500"
          initial={{ opacity: 0, x: isEven ? -40 : 40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.65, delay: 0.18, ease: 'easeOut' }}
          whileHover={{ y: -6, scale: 1.01 }}
          style={{ willChange: 'transform' }}
        >
          {/* Top accent bar */}
          <div
            className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${exp.accentFrom} ${exp.accentTo} opacity-80 group-hover:opacity-100 transition-opacity duration-300`}
          />

          {/* Hover wash */}
          <div
            className={`absolute inset-0 bg-gradient-to-br ${exp.accentFrom} ${exp.accentTo} opacity-0 group-hover:opacity-[0.04] transition-opacity duration-500 pointer-events-none`}
          />

          {/* Corner glow */}
          <div
            className={`absolute -top-16 -right-16 w-48 h-48 rounded-full bg-gradient-to-br ${exp.accentFrom} ${exp.accentTo} blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none`}
          />

          <div className="relative z-10 p-6 sm:p-8 text-left">
            {/* Header */}
            <div className="flex flex-wrap items-start gap-4 mb-5">
              {/* Logo placeholder */}
              <div
                className={`flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br ${exp.logoGradient} flex items-center justify-center text-white text-2xl shadow-lg transition-transform duration-300 group-hover:scale-105`}
                style={{ boxShadow: `0 0 22px ${exp.glowColor}` }}
              >
                {exp.icon}
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-100 transition-colors leading-tight">
                    {exp.role}
                  </h3>
                  {exp.duration.includes('Present') && (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/20 border border-emerald-400/40 text-emerald-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Live
                    </span>
                  )}
                </div>

                <div className="flex flex-wrap items-center gap-3 text-sm text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <FaBuilding className="text-xs opacity-70" />
                    <span className="font-semibold text-slate-300">
                      {exp.company}
                    </span>
                  </span>
                  <span className="w-px h-3 bg-slate-600" />
                  <span className="flex items-center gap-1.5 text-cyan-400/80">
                    <FaCalendarAlt className="text-xs opacity-70" />
                    {exp.duration}
                  </span>
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-5">
              {exp.description}
            </p>

            {/* Responsibilities */}
            <div className="mb-6">
              <h4 className={`text-xs font-semibold uppercase tracking-widest bg-gradient-to-r ${exp.accentFrom} ${exp.accentTo} bg-clip-text text-transparent mb-3`}>
                Key Responsibilities
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-1.5 gap-x-4">
                {exp.responsibilities.map((item, i) => (
                  <motion.li
                    key={i}
                    className="flex items-center gap-2 text-sm text-slate-300"
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.35 + i * 0.05, duration: 0.35 }}
                  >
                    <span className={`flex-shrink-0 w-1.5 h-1.5 rounded-full bg-gradient-to-br ${exp.accentFrom} ${exp.accentTo}`} />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Tech Badges */}
            <div>
              <h4 className={`text-xs font-semibold uppercase tracking-widest bg-gradient-to-r ${exp.accentFrom} ${exp.accentTo} bg-clip-text text-transparent mb-3`}>
                Technologies
              </h4>
              <div className="flex flex-wrap gap-2">
                {exp.badges.map((badge, i) => (
                  <motion.span
                    key={badge.label}
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${badge.gradient} border backdrop-blur-sm transition-all duration-300 hover:scale-105 cursor-default`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.5 + i * 0.05, duration: 0.3 }}
                  >
                    {skillIcons[badge.label] && (
                      <span className="text-[11px] opacity-80">{skillIcons[badge.label]}</span>
                    )}
                    {badge.label}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Timeline Dot (Absolute center on desktop, left on mobile) */}
      <div className="absolute left-[25px] md:left-1/2 transform -translate-x-1/2 md:-translate-y-1/2 flex items-center justify-center z-10 top-12 md:top-1/2">
        <TimelineDot
          gradient={`${exp.accentFrom} ${exp.accentTo}`}
          glowColor={exp.glowColor}
          isActive={exp.duration.includes('Present')}
        />
      </div>
    </div>
  );
}

// ─── Main Section ────────────────────────────────────────────────────────────

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start center', 'end center'],
  });

  const photoY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const photoOpacity = useTransform(scrollYProgress, [0, 0.9, 1], [1, 1, 0]);
  const photoScale = useTransform(scrollYProgress, [0, 0.95, 1], [1, 0.5, 0]);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative py-32 bg-black/20 text-white overflow-hidden"
    >
      {/* Background blobs – mirrors the About / Skills pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-1/3 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-1/3 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-sky-600/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Section Header ── */}
        <motion.div
          className="text-center mb-16 sm:mb-20"
          initial={{ opacity: 0, y: -24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Eyebrow label */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-effect-strong border border-cyan-400/30 mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <FaBriefcase className="text-cyan-400 text-xs" />
            <span className="text-xs font-semibold text-cyan-300 tracking-widest uppercase">
              Career Journey
            </span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl font-black mb-4 leading-tight">
            <span className="block text-white mb-1">Professional</span>
            <span className="block bg-gradient-to-r from-cyan-400 via-sky-400 to-cyan-400 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>

          {/* Decorative rule – identical to About section */}
          <div className="flex gap-2 justify-center mt-6">
            <div className="w-12 h-1 bg-gradient-to-r from-cyan-500 to-sky-500 rounded-full" />
            <div className="w-2 h-1 bg-slate-600 rounded-full" />
            <div className="w-2 h-1 bg-slate-600 rounded-full" />
          </div>

          <p className="mt-6 text-slate-400 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            Building real-world impact through modern full-stack development and data analytics.
          </p>
        </motion.div>

        {/* ── Timeline ── */}
        <div className="relative w-full mx-auto" ref={timelineRef}>
          {/* Animated vertical connector line */}
          <motion.div
            className="absolute left-[25px] md:left-1/2 top-3 bottom-12 w-px bg-gradient-to-b from-cyan-500/70 via-purple-500/50 to-transparent transform md:-translate-x-1/2"
            initial={{ scaleY: 0, originY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            viewport={{ once: true }}
          />

          {/* Traveling Profile Photo Track */}
          <div className="absolute left-[7px] md:left-1/2 transform md:-translate-x-1/2 top-3 bottom-12 w-9 pointer-events-none z-20">
            <motion.div
              className="absolute w-9 h-9 rounded-full overflow-hidden border-[1.5px] border-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.5)] -mt-[18px]"
              style={{ 
                top: photoY, 
                opacity: photoOpacity,
                scale: photoScale
              }}
            >
              <img src={profilePhoto} alt="Traveling avatar" className="w-full h-full object-cover" />
            </motion.div>
          </div>

          <div className="relative z-0 pt-2 pb-12">
            {experiences.map((exp, index) => (
              <ExperienceCard key={exp.company} exp={exp} index={index} />
            ))}
          </div>
        </div>

        {/* ── Bottom CTA ── */}
        <motion.div
          className="mt-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-slate-400 text-sm mb-4">
            Open to new opportunities in AI, ML &amp; Full-Stack development
          </p>
          <motion.a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-cyan-600 to-sky-600 rounded-lg font-semibold text-white hover:shadow-lg hover:shadow-cyan-500/40 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Let&apos;s Work Together →
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
