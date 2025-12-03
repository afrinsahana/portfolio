import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Download, GraduationCap, Calendar } from "lucide-react";
import { Button } from "./ui/button";

export const ResumeSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="resume" className="py-24 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-coral/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 md:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-coral/10 text-coral font-medium text-sm mb-4">
            📄 Resume
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            My Background
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Education Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="perspective-1000"
          >
            <motion.div
              whileHover={{ rotateY: 3, rotateX: -3 }}
              transition={{ duration: 0.3 }}
              className="bg-card rounded-2xl p-8 shadow-medium transform-3d border border-border/50 h-full"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-teal/10 flex items-center justify-center">
                  <GraduationCap size={28} className="text-teal" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-foreground">Education</h3>
                  <p className="text-muted-foreground text-sm">Academic Background</p>
                </div>
              </div>

              <div className="relative pl-6 border-l-2 border-teal/30">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-teal" />
                
                <div className="mb-2">
                  <h4 className="font-display text-lg font-semibold text-foreground">
                    Vaigai College of Engineering
                  </h4>
                  <p className="text-coral font-medium">B.E (CSE)</p>
                </div>
                
                <div className="flex items-center gap-2 text-muted-foreground text-sm">
                  <Calendar size={14} />
                  <span>3rd Year</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Resume Download Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="perspective-1000"
          >
            <motion.div
              whileHover={{ rotateY: -3, rotateX: -3 }}
              transition={{ duration: 0.3 }}
              className="bg-gradient-coral rounded-2xl p-8 shadow-coral transform-3d h-full relative overflow-hidden"
            >
              {/* Decorative elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-10 -right-10 w-32 h-32 border-4 border-primary-foreground/20 rounded-full"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-8 -left-8 w-24 h-24 border-4 border-primary-foreground/10 rounded-full"
              />

              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-2xl font-bold text-primary-foreground mb-4">
                    Download My Resume
                  </h3>
                  <p className="text-primary-foreground/80 mb-6">
                    Get a comprehensive overview of my skills, experience, and educational background.
                  </p>
                </div>

                <Button
                  variant="glass"
                  size="lg"
                  className="w-full sm:w-auto bg-card/90 text-coral hover:bg-card border-0"
                  asChild
                >
                  <a
                    href="https://app.luminpdf.com/viewer/692fbc91d735178e96889c1e"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Download size={20} className="mr-2" />
                    View Resume
                  </a>
                </Button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
