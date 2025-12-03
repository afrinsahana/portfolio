import { motion } from "framer-motion";
import { ArrowRight, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";

export const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen relative overflow-hidden bg-gradient-hero flex items-center"
    >
      {/* 3D Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large coral blob */}
        <motion.div
          animate={{
            y: [0, -30, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-20 -right-20 w-96 h-96 bg-coral/20 rounded-full blur-3xl animate-blob"
        />
        
        {/* Teal accent blob */}
        <motion.div
          animate={{
            y: [0, 20, 0],
            x: [0, -15, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-20 -left-20 w-80 h-80 bg-teal/15 rounded-full blur-3xl animate-blob"
        />

        {/* Floating 3D cards */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotateX: [0, 5, 0],
            rotateY: [0, -5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 right-[15%] w-32 h-32 bg-card rounded-2xl shadow-3d transform-3d hidden lg:block"
          style={{ transform: "perspective(1000px) rotateX(10deg) rotateY(-10deg)" }}
        >
          <div className="w-full h-full bg-gradient-coral rounded-2xl opacity-80" />
        </motion.div>

        <motion.div
          animate={{
            y: [0, 15, 0],
            rotateX: [0, -5, 0],
            rotateY: [0, 10, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
          className="absolute bottom-1/3 right-[10%] w-20 h-20 bg-card rounded-xl shadow-medium transform-3d hidden lg:block"
          style={{ transform: "perspective(1000px) rotateX(-5deg) rotateY(15deg)" }}
        >
          <div className="w-full h-full bg-gradient-teal rounded-xl opacity-70" />
        </motion.div>

        <motion.div
          animate={{
            y: [0, -10, 0],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute top-1/3 left-[10%] w-16 h-16 bg-accent/50 rounded-full shadow-soft hidden lg:block"
        />
      </div>

      <div className="container mx-auto px-4 md:px-8 pt-24 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-coral/10 text-coral font-medium text-sm mb-6">
              👋 Welcome to my portfolio
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-6"
          >
            Hi, I'm{" "}
            <span className="text-gradient-coral">I. Afrin Sahana</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl font-display font-semibold text-muted-foreground mb-6"
          >
            A Web Designer & UI/UX Beginner
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-muted-foreground text-lg max-w-xl mb-10 leading-relaxed"
          >
            I'm a college student at Vaigai College of Engineering and a
            freelancer passionate about creating clean, simple, and user-friendly
            designs. I specialize in HTML and UI/UX design and love building
            portfolio and business websites.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-4 mb-10"
          >
            <Button variant="hero" size="lg" asChild>
              <a href="#projects">
                View My Work <ArrowRight className="ml-2" />
              </a>
            </Button>
            <Button variant="hero-outline" size="lg" asChild>
              <a href="#contact">Contact Me</a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
          >
            <div className="flex items-center gap-4">
              <span className="text-muted-foreground text-sm">Connect:</span>
              <a
                href="https://www.linkedin.com/in/afrin-sahana-i-6210ab307"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full glass border border-border/50 flex items-center justify-center text-muted-foreground hover:text-coral hover:border-coral transition-all duration-300"
              >
                <Linkedin size={18} />
              </a>
            </div>
            <a
              href="mailto:afrinsahana9@gmail.com"
              className="flex items-center gap-3 px-4 py-2 rounded-full glass border border-border/50 text-muted-foreground hover:text-coral hover:border-coral transition-all duration-300 group"
            >
              <Mail size={18} />
              <span className="font-medium text-sm">afrinsahana9@gmail.com</span>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-coral"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};
