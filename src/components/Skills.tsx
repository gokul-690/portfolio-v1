import { motion } from 'framer-motion';
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaGithub,
  FaChartBar,
} from 'react-icons/fa';
import {
  SiTailwindcss,
  SiTypescript,
  SiJavascript,
  SiFastapi,
  SiExpress,
  SiPostgresql,
  SiMysql,
  SiFlutter,
  SiDart,
  SiTableau,
} from 'react-icons/si';

const skills = [
  { name: 'React', icon: <FaReact />, color: 'text-cyan-400' },
  { name: 'TypeScript', icon: <SiTypescript />, color: 'text-blue-500' },
  { name: 'JavaScript', icon: <SiJavascript />, color: 'text-yellow-400' },
  { name: 'Node.js', icon: <FaNodeJs />, color: 'text-green-500' },
  { name: 'Express.js', icon: <SiExpress />, color: 'text-gray-300' },
  { name: 'Python', icon: <FaPython />, color: 'text-yellow-400' },
  { name: 'FastAPI', icon: <SiFastapi />, color: 'text-teal-500' },
  { name: 'PostgreSQL', icon: <SiPostgresql />, color: 'text-cyan-600' },
  { name: 'MySQL', icon: <SiMysql />, color: 'text-blue-400' },
  { name: 'Flutter', icon: <SiFlutter />, color: 'text-sky-400' },
  { name: 'Dart', icon: <SiDart />, color: 'text-blue-500' },
  { name: 'Power BI', icon: <FaChartBar />, color: 'text-yellow-500' },
  { name: 'Tableau', icon: <SiTableau />, color: 'text-blue-700' },
  { name: 'HTML5', icon: <FaHtml5 />, color: 'text-orange-500' },
  { name: 'CSS3', icon: <FaCss3Alt />, color: 'text-blue-500' },
  { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: 'text-sky-400' },
  { name: 'Git', icon: <FaGitAlt />, color: 'text-orange-500' },
  { name: 'GitHub', icon: <FaGithub />, color: 'text-white' },
];


const row1 = skills.slice(0, 9);
const row2 = skills.slice(9, 18);

const MarqueeRow = ({
  items,
  direction,
}: {
  items: typeof skills;
  direction: 'left' | 'right';
}) => {
  // Duplicate items 3 times for a seamless infinite loop
  const duplicatedItems = [...items, ...items, ...items];

  return (
    <div 
      className="flex overflow-hidden relative w-full py-6"
      style={{
        maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
        WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)'
      }}
    >
      <motion.div
        className="flex gap-6 sm:gap-8 md:gap-10 min-w-max pr-6 sm:pr-8 md:pr-10"
        animate={{
          x: direction === 'left' ? ['0%', '-33.333333%'] : ['-33.333333%', '0%'],
        }}
        transition={{
          repeat: Infinity,
          ease: 'linear',
          duration: 25,
        }}
      >
        {duplicatedItems.map((skill, index) => (
          <div key={`${skill.name}-${index}`} className="flex flex-col items-center group">
            {/* Icon Container */}
            <div
              className="w-20 h-20 md:w-24 md:h-24 glass-effect-strong rounded-2xl flex items-center justify-center mb-4 group-hover:border-cyan-400/80 transition-all duration-300 cursor-pointer hover:scale-110"
              style={{ boxShadow: '0 0 15px rgba(0,0,0,0.2)' }}
            >
              <div className={`text-4xl md:text-5xl ${skill.color} transform group-hover:scale-110 transition-transform duration-300`}>
                {skill.icon}
              </div>
            </div>

            {/* Skill Name Tooltip */}
            <div className="text-center">
              <p className="text-sm font-semibold text-slate-300 group-hover:text-cyan-300 transition-colors">
                {skill.name}
              </p>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-32 relative bg-black/20 text-white overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 w-full mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Technical Skills
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-sky-500 mx-auto mb-6"></div>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            A comprehensive toolkit for building modern applications and intelligent systems
          </p>
        </motion.div>

        {/* Marquee Container */}
        <div className="max-w-6xl mx-auto glass-effect-strong border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          {/* Inner ambient glow for the container */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 pointer-events-none" />
          
          <div className="flex flex-col gap-4 sm:gap-8 overflow-hidden">
            <MarqueeRow items={row1} direction="left" />
            <MarqueeRow items={row2} direction="right" />
          </div>
        </div>
      </div>
    </section>
  );
}
