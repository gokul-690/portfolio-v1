import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import profilePhoto from '../assets/1.jpeg';
import project2 from '../assets/pj1.png';
import project3 from '../assets/pj2.jpg';
import project4 from '../assets/pj3.png';
import portfolioV1 from '../assets/11.png';
// Using the same TimelineDot as Experience for consistency
function TimelineDot({ isActive }: { isActive?: boolean }) {
  const gradient = 'from-cyan-500 to-sky-500';
  const glowColor = 'rgba(6,182,212,0.35)';
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

const projects = [
  {
    title: 'Crowd Density & Movement Monitoring',
    description:
      'Built a real-time crowd monitoring system combining object detection and multi-object tracking to identify congestion zones from live video feeds.',
    tech: ['Python', 'YOLO', 'OpenCV', 'DeepSORT'],
    image: project2,
    link: 'https://github.com/gokul-690',
    highlights: [
      'Enhances public safety by instantly identifying bottlenecks and preventing dangerous overcrowding.',
      'Leverages state-of-the-art YOLO object detection for high accuracy under diverse lighting and environmental conditions.',
      'Provides continuous actionable insights for event management, security teams, and smart city infrastructure.',
    ],
  },
  {
    title: 'E-Commerce Sales Dashboard',
    description:
      'Developed a Power BI dashboard analyzing 10,000+ sales records with dynamic filters to track revenue, profit, and regional performance.',
    tech: ['Power BI', 'Data Analysis'],
    image: project3,
    link: 'https://github.com/gokul-690',
    highlights: [
      'Empowers business stakeholders with data-driven decision making and deep, granular market visibility.',
      'Consolidates massive raw datasets into an interactive, intuitive visual interface with zero latency.',
      'Tracks critical KPIs, uncovers seasonal buying trends, and pinpoints highly profitable regional markets.',
    ],
  },
  {
    title: 'Buck-Boost DC-DC Converter for EV',
    description:
      'Designed and simulated a buck-boost converter for EV power applications, optimizing voltage stability and reducing output ripple.',
    tech: ['Proteus', 'Electronics', 'EV'],
    image: project4,
    link: 'https://github.com/gokul-690',
    highlights: [
      'Extends battery life and ensures optimal, consistent power delivery for Electric Vehicles under rapidly varying loads.',
      'Engineered specifically for high-efficiency power conversion to minimize energy loss.',
      'Features advanced simulation models to drastically reduce voltage ripple and heat dissipation, paving the way for sustainable EV architectures.',
    ],
  },
  {
    title: 'Personal Portfolio (Version 1)',
    description:
      'The initial version of my personal portfolio website built to showcase my early projects, skills, and resume.',
    tech: ['React', 'Tailwind CSS', 'Framer Motion'],
    image: portfolioV1,
    link: 'https://github.com/gokul-690',
    highlights: [
      'Built a fully responsive personal website from scratch to establish an online presence.',
      'Implemented smooth scrolling and basic animations for a better user experience.',
      'Served as a foundational project to learn and master frontend web development.',
    ],
  },
];

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const isEven = index % 2 === 0;

  const CardContent = (
    <motion.div
      ref={ref}
      className="relative rounded-3xl overflow-hidden bg-white/[0.02] border border-white/[0.05] hover:border-cyan-400/40 hover:bg-white/[0.04] transition-all duration-500 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)] flex flex-col group/card backdrop-blur-xl"
      initial={{ opacity: 0, x: isEven ? -40 : 40 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.65, delay: 0.18, ease: 'easeOut' }}
      whileHover={{ y: -10 }}
      style={{ willChange: 'transform' }}
    >
      {/* Decorative gradient blob inside card */}
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-cyan-500/20 rounded-full blur-3xl opacity-0 group-hover/card:opacity-100 transition-opacity duration-700 pointer-events-none" />

      {/* Image Container */}
      <div className="relative h-56 sm:h-64 overflow-hidden p-3">
        <div className="w-full h-full rounded-2xl overflow-hidden relative shadow-inner">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transform group-hover/card:scale-105 transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f]/80 via-transparent to-transparent" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 px-8 pb-8 pt-4 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent group-hover/card:from-cyan-300 group-hover/card:to-sky-300 transition-all duration-300 mb-3 tracking-wide">
          {project.title}
        </h3>
        <p className="text-slate-400/90 text-sm leading-relaxed mb-6 flex-grow font-light">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-2">
          {project.tech.map(t => (
            <span
              key={t}
              className="px-4 py-1.5 bg-black/40 rounded-lg text-xs font-medium text-cyan-200 border border-cyan-500/20 shadow-[0_0_10px_rgba(34,211,238,0.05)] group-hover/card:border-cyan-400/40 group-hover/card:shadow-[0_0_15px_rgba(34,211,238,0.15)] transition-all duration-300"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Button (Temporarily Hidden)
        <motion.button
          onClick={() => window.open(project.link, '_blank', 'noopener,noreferrer')}
          className="w-full px-4 py-3 bg-gradient-to-r from-cyan-600 to-sky-600 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-sky-500 transition-all duration-300 transform hover:shadow-lg hover:shadow-cyan-500/50 flex items-center justify-center gap-2 mt-4"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          View Project →
        </motion.button>
        */}
      </div>
    </motion.div>
  );

  const OppositeContent = (
    <motion.div
      className={`hidden md:flex flex-col justify-center h-full ${isEven ? 'text-left' : 'text-right'}`}
      initial={{ opacity: 0, x: isEven ? 40 : -40 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.65, delay: 0.3, ease: 'easeOut' }}
    >
      <h4
        className={`text-lg font-bold text-white mb-4 flex items-center gap-3 ${isEven ? 'justify-start' : 'justify-end'}`}
      >
        {!isEven && (
          <span className="w-12 h-px bg-cyan-500 hidden md:block"></span>
        )}
        <span className="bg-gradient-to-r from-cyan-400 to-sky-400 bg-clip-text text-transparent">
          Project Highlights
        </span>
        {isEven && (
          <span className="w-12 h-px bg-cyan-500 hidden md:block"></span>
        )}
      </h4>
      <ul
        className={`space-y-4 ${isEven ? 'text-left pr-8' : 'text-right pl-8'}`}
      >
        {project.highlights.map((highlight, i) => (
          <li
            key={i}
            className="text-slate-400 text-sm sm:text-base leading-relaxed"
          >
            {highlight}
          </li>
        ))}
      </ul>
    </motion.div>
  );

  return (
    <div className="relative w-full mb-12 flex flex-col md:flex-row items-center justify-between group">
      {/* Left Side (Card if Even, Info if Odd) */}
      <div
        className={`order-2 md:order-none w-full md:w-1/2 md:pr-12 lg:pr-16 md:pl-0 ${isEven ? 'pl-12 sm:pl-16' : 'hidden md:block'}`}
      >
        {isEven ? CardContent : OppositeContent}
      </div>

      {/* Right Side (Info if Even, Card if Odd) */}
      <div
        className={`order-3 md:order-none w-full md:w-1/2 md:pl-12 lg:pl-16 ${!isEven ? 'pl-12 sm:pl-16' : 'hidden md:block'}`}
      >
        {isEven ? OppositeContent : CardContent}
      </div>

      {/* Timeline Dot (Absolute center on desktop, left on mobile) */}
      <div className="absolute left-[25px] md:left-1/2 transform -translate-x-1/2 md:-translate-y-1/2 flex items-center justify-center z-10 top-12 md:top-1/2">
        <TimelineDot isActive={false} />
      </div>
    </div>
  );
}

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start center', 'end center'],
  });

  const photoY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  // Merge at the top (0 to 0.05) and Burst at the bottom (0.95 to 1.0)
  const photoOpacity = useTransform(
    scrollYProgress,
    [0, 0.05, 0.95, 1],
    [0, 1, 1, 0]
  );
  const photoScale = useTransform(
    scrollYProgress,
    [0, 0.05, 0.95, 1],
    [2.5, 1, 1, 2.5]
  );
  const photoFilter = useTransform(
    scrollYProgress,
    [0, 0.05, 0.95, 1],
    ['blur(8px)', 'blur(0px)', 'blur(0px)', 'blur(8px)']
  );

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-32 relative bg-black/20 text-white overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16 sm:mb-20"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text leading-tight">
            Featured Projects
          </h2>
          <div className="flex gap-2 justify-center mt-6">
            <div className="w-12 h-1 bg-gradient-to-r from-cyan-500 to-sky-500 rounded-full" />
            <div className="w-2 h-1 bg-slate-600 rounded-full" />
            <div className="w-2 h-1 bg-slate-600 rounded-full" />
          </div>
        </motion.div>

        {/* ── Timeline ── */}
        <div className="relative w-full mx-auto" ref={timelineRef}>
          {/* Animated vertical connector line */}
          <motion.div
            className="absolute left-[25px] md:left-1/2 top-3 bottom-12 w-px bg-gradient-to-b from-purple-500/50 via-cyan-500/70 to-transparent transform md:-translate-x-1/2"
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
                scale: photoScale,
                filter: photoFilter,
              }}
            >
              <img
                src={profilePhoto}
                alt="Traveling avatar"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

          <div className="relative z-0 pt-2 pb-12">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
