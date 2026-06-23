import { motion } from 'framer-motion';
import { content } from '../data/content';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.6,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, ease: 'easeOut' as const },
  },
};

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url(/assets/images/hero-bg.jpg)',
        }}
      />

      {/* Vignette overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.5) 70%, rgba(0,0,0,0.7) 100%)',
        }}
      />

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col items-center text-center text-white px-6"
      >
        <motion.p
          variants={itemVariants}
          className="font-sans text-xs md:text-sm tracking-[0.3em] uppercase mb-8"
        >
          {content.hero.subtitle}
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-col items-center mb-6">
          <span className="font-script text-6xl md:text-8xl leading-none">
            {content.hero.name1}
          </span>
          <span className="font-script text-4xl md:text-5xl leading-none my-1">&</span>
          <span className="font-script text-6xl md:text-8xl leading-none">
            {content.hero.name2}
          </span>
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="font-sans text-sm md:text-base tracking-widest"
        >
          {content.hero.date}
        </motion.p>
      </motion.div>
    </section>
  );
}
