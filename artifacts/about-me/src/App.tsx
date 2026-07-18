import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Mail, 
  Github, 
  Linkedin, 
  Code2, 
  TerminalSquare, 
  Dumbbell, 
  Gamepad2, 
  Music, 
  Trophy, 
  GraduationCap, 
  Globe2, 
  HeartHandshake,
  Cpu,
  ArrowUpRight
} from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const Interests = [
  { name: 'Volleyball', icon: Trophy, color: 'text-blue-400', bg: 'bg-blue-400/10' },
  { name: 'Calisthenics', icon: Dumbbell, color: 'text-emerald-400', bg: 'bg-emerald-400/10' },
  { name: 'Gaming', icon: Gamepad2, color: 'text-purple-400', bg: 'bg-purple-400/10' },
  { name: 'Music', icon: Music, color: 'text-rose-400', bg: 'bg-rose-400/10' }
];

const Goals = [
  {
    title: 'University in China',
    description: 'Study computer science and experience a new culture.',
    icon: GraduationCap,
    delay: 0.1
  },
  {
    title: 'Master Mandarin',
    description: 'Learn the language to prepare for life and study abroad.',
    icon: Globe2,
    delay: 0.2
  },
  {
    title: 'Programming Foundation',
    description: 'Build robust problem-solving skills before university begins.',
    icon: TerminalSquare,
    delay: 0.3
  },
  {
    title: 'Positive Impact',
    description: 'Use technology to create meaningful, real-world solutions.',
    icon: HeartHandshake,
    delay: 0.4
  }
];

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-hidden selection:bg-primary/30 selection:text-primary" ref={containerRef}>
      <div className="noise-bg"></div>

      {/* Glow Orbs */}
      <div className="glow-orb w-[500px] h-[500px] bg-primary/10 top-[-200px] left-[-100px]"></div>
      <div className="glow-orb w-[400px] h-[400px] bg-blue-500/10 bottom-[20%] right-[-100px]"></div>

      <main className="relative z-10 container mx-auto px-6 py-24 md:py-32 max-w-5xl">
        
        {/* HERO SECTION */}
        <section className="min-h-[80vh] flex flex-col justify-center relative">
          <motion.div 
            style={{ y: y1, opacity }}
            className="absolute top-10 right-10 md:top-20 md:right-20 text-primary/20 pointer-events-none hidden md:block"
          >
            <Cpu size={240} strokeWidth={1} />
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-3xl"
          >
            <motion.div variants={fadeInUp} className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-mono uppercase tracking-wider backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              Initializing Portfolio
            </motion.div>
            
            <motion.h1 
              variants={fadeInUp}
              className="text-6xl md:text-8xl font-bold tracking-tighter mb-6 text-transparent bg-clip-text bg-gradient-to-br from-white to-white/40"
            >
              Tyrel Munya
            </motion.h1>
            
            <motion.p 
              variants={fadeInUp}
              className="text-xl md:text-3xl text-muted-foreground font-light tracking-wide mb-10 max-w-2xl"
            >
              High School Student <span className="text-primary/50 mx-2">·</span> Tech Enthusiast <span className="text-primary/50 mx-2">·</span> Future CS Major
            </motion.p>
          </motion.div>
        </section>

        {/* BIO SECTION */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="mb-32 relative"
        >
          <div className="absolute -left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-primary/50 to-transparent"></div>
          <h2 className="text-3xl font-display font-semibold mb-6 flex items-center gap-4">
            <span className="text-primary font-mono text-lg">01.</span> About Me
          </h2>
          <div className="prose prose-invert prose-lg max-w-3xl text-muted-foreground leading-relaxed">
            <p>
              Hi, I'm Tyrel — a high school student with a real passion for technology. I love learning how things work, from building websites to understanding the systems and hardware that power them.
            </p>
            <p>
              I'm always looking to grow my skills and explore new ideas, inside and outside the classroom. The digital world is my sandbox, and I'm just getting started.
            </p>
          </div>
        </motion.section>

        {/* INTERESTS & LEARNING */}
        <div className="grid md:grid-cols-2 gap-12 mb-32">
          {/* INTERESTS */}
          <motion.section 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp} className="text-3xl font-display font-semibold mb-8 flex items-center gap-4">
              <span className="text-primary font-mono text-lg">02.</span> Interests
            </motion.h2>
            <div className="grid grid-cols-2 gap-4">
              {Interests.map((interest, idx) => {
                const Icon = interest.icon;
                return (
                  <motion.div 
                    key={interest.name}
                    variants={fadeInUp}
                    whileHover={{ scale: 1.05, translateY: -5 }}
                    className={`p-6 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-sm flex flex-col gap-4 group transition-colors hover:border-white/10`}
                  >
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${interest.bg} ${interest.color}`}>
                      <Icon size={24} />
                    </div>
                    <span className="font-medium text-lg tracking-tight group-hover:text-white transition-colors">{interest.name}</span>
                  </motion.div>
                )
              })}
            </div>
          </motion.section>

          {/* CURRENTLY LEARNING */}
          <motion.section 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="flex flex-col"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl font-display font-semibold mb-8 flex items-center gap-4">
              <span className="text-primary font-mono text-lg">03.</span> Status
            </motion.h2>
            
            <motion.div 
              variants={fadeInUp}
              className="flex-1 relative p-8 rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/10 to-transparent overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <Code2 size={120} />
              </div>
              
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <div className="inline-flex items-center gap-2 text-primary font-mono text-sm mb-6 uppercase tracking-widest">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                    </span>
                    Currently Learning
                  </div>
                  
                  <h3 className="text-3xl font-bold mb-2">HTML & CSS</h3>
                  <p className="text-muted-foreground text-lg mb-8">Building the structural foundation of the web.</p>
                </div>

                <div>
                  <div className="flex justify-between text-sm font-mono mb-3 text-muted-foreground">
                    <span>Current Stack</span>
                    <span className="text-primary">Next: JavaScript</span>
                  </div>
                  <div className="h-2 w-full bg-black/40 rounded-full overflow-hidden border border-white/5">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: '65%' }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-primary to-blue-400 relative"
                    >
                      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.2)_50%,transparent_75%)] bg-[length:250%_250%] animate-[shimmer_2s_linear_infinite]"></div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.section>
        </div>

        {/* GOALS */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mb-32"
        >
          <motion.h2 variants={fadeInUp} className="text-3xl font-display font-semibold mb-12 flex items-center gap-4">
            <span className="text-primary font-mono text-lg">04.</span> Milestones & Goals
          </motion.h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-[27px] top-4 bottom-4 w-px bg-gradient-to-b from-primary via-primary/20 to-transparent hidden md:block"></div>
            
            <div className="flex flex-col gap-8">
              {Goals.map((goal, idx) => {
                const Icon = goal.icon;
                return (
                  <motion.div 
                    key={goal.title}
                    variants={fadeInUp}
                    className="relative flex gap-6 md:gap-10 items-start group"
                  >
                    <div className="hidden md:flex relative z-10 w-14 h-14 rounded-full bg-background border border-primary/30 items-center justify-center text-primary group-hover:bg-primary group-hover:text-background transition-colors duration-300 shrink-0">
                      <Icon size={24} />
                    </div>
                    
                    <div className="flex-1 p-8 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-sm group-hover:border-primary/30 transition-colors">
                      <div className="md:hidden w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-6">
                        <Icon size={24} />
                      </div>
                      <div className="text-primary font-mono text-sm mb-2 opacity-70">Goal 0{idx + 1}</div>
                      <h3 className="text-2xl font-bold mb-3">{goal.title}</h3>
                      <p className="text-muted-foreground text-lg">{goal.description}</p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </motion.section>

        {/* CONTACT */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div 
            variants={fadeInUp}
            className="p-12 md:p-16 rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-transparent relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px]"></div>
            
            <div className="relative z-10 max-w-2xl mx-auto text-center flex flex-col items-center">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Let's Connect</h2>
              <p className="text-xl text-muted-foreground mb-12">
                Whether you want to discuss tech, share resources, or just say hi, I'm always open to connecting with like-minded people.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
                <a 
                  href="mailto:nixxxxelfy@gmail.com" 
                  className="group flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold text-lg hover:bg-primary/90 transition-all hover:scale-105 active:scale-95"
                >
                  <Mail size={20} />
                  <span>Email Me</span>
                </a>
                
                <a 
                  href="https://github.com/nixxxxelfy" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-foreground font-semibold text-lg transition-all hover:scale-105 active:scale-95"
                >
                  <Github size={20} />
                  <span>GitHub</span>
                  <ArrowUpRight size={16} className="opacity-50 group-hover:opacity-100 transition-opacity" />
                </a>

                <a 
                  href="https://www.linkedin.com/in/tyrel-munya-1328123b5?utm_source=share_via&utm_content=profile&utm_medium=member_android" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-foreground font-semibold text-lg transition-all hover:scale-105 active:scale-95"
                >
                  <Linkedin size={20} />
                  <span>LinkedIn</span>
                  <ArrowUpRight size={16} className="opacity-50 group-hover:opacity-100 transition-opacity" />
                </a>
              </div>
            </div>
          </motion.div>
        </motion.section>

      </main>

      <footer className="relative z-10 border-t border-white/10 mt-20 py-10 text-center text-muted-foreground font-mono text-sm">
        <p>Built with React & Framer Motion <span className="text-primary mx-2">·</span> Tyrel Munya © {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}
