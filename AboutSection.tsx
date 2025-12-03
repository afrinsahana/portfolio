import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Palette, Code, Lightbulb, Users } from "lucide-react";

const focusItems = [
  { icon: Palette, text: "Creating clean website layouts" },
  { icon: Code, text: "Designing user-friendly interfaces" },
  { icon: Lightbulb, text: "Making simple HTML websites" },
  { icon: Users, text: "Working on freelance mini-projects" },
];

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-coral/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-teal/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 md:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-coral/10 text-coral font-medium text-sm mb-4">
            👩‍🎓 About Me
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            Get to Know Me
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* 3D Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="perspective-1000"
          >
            <motion.div
              whileHover={{ rotateY: 5, rotateX: -5 }}
              transition={{ duration: 0.3 }}
              className="relative bg-card rounded-3xl p-8 shadow-3d transform-3d"
            >
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-coral rounded-2xl rotate-12 opacity-80" />
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-teal rounded-xl -rotate-12 opacity-70" />
              
              <div className="relative z-10">
                <div className="w-32 h-32 rounded-full bg-gradient-coral mx-auto mb-6 flex items-center justify-center shadow-coral">
                  <span className="font-display text-4xl font-bold text-primary-foreground">AS</span>
                </div>
                
                <h3 className="font-display text-2xl font-bold text-foreground text-center mb-2">
                  I. Afrin Sahana
                </h3>
                <p className="text-coral text-center font-medium mb-4">
                  UI/UX Designer & Web Developer
                </p>
                <p className="text-muted-foreground text-center text-sm">
                  Vaigai College of Engineering
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              I'm <span className="text-foreground font-semibold">I. Afrin Sahana</span>, 
              a passionate designer and web developer with a strong interest in UI/UX 
              and front-end development. Currently studying at Vaigai College of Engineering, 
              I enjoy turning ideas into interactive digital experiences.
            </p>

            <h4 className="font-display text-xl font-semibold text-foreground mb-6">
              I focus on:
            </h4>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {focusItems.map((item, index) => (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-3 p-4 rounded-xl glass border border-border/50 hover:border-coral/50 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-coral/10 flex items-center justify-center">
                    <item.icon size={20} className="text-coral" />
                  </div>
                  <span className="text-foreground text-sm font-medium">{item.text}</span>
                </motion.div>
              ))}
            </div>

            <p className="text-muted-foreground leading-relaxed">
              My goal is to grow as a UI/UX designer and continue improving my 
              web development skills, creating beautiful and functional digital experiences.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
