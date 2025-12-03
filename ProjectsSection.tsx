import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Figma } from "lucide-react";
import { Button } from "./ui/button";

export const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute -top-20 left-1/4 w-72 h-72 bg-teal/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 right-1/4 w-64 h-64 bg-coral/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 md:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-coral/10 text-coral font-medium text-sm mb-4">
            📂 My Projects
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            Featured Work
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="perspective-1000">
            <motion.div
              whileHover={{ rotateY: 2, rotateX: -2 }}
              transition={{ duration: 0.3 }}
              className="bg-card rounded-3xl overflow-hidden shadow-3d transform-3d border border-border/50"
            >
              {/* Project Image/Header */}
              <div className="relative h-64 md:h-80 bg-gradient-coral overflow-hidden">
                <div className="absolute inset-0 bg-midnight/20" />
                
                {/* Floating elements */}
                <motion.div
                  animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
                  transition={{ duration: 5, repeat: Infinity }}
                  className="absolute top-8 right-8 w-20 h-20 bg-card/20 rounded-xl backdrop-blur-sm"
                />
                <motion.div
                  animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
                  transition={{ duration: 6, repeat: Infinity, delay: 0.5 }}
                  className="absolute bottom-12 left-12 w-16 h-16 bg-teal/30 rounded-lg backdrop-blur-sm"
                />
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-primary-foreground">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : {}}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      className="w-20 h-20 rounded-full bg-card/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-4"
                    >
                      <span className="text-4xl">⭐</span>
                    </motion.div>
                    <h3 className="font-display text-3xl md:text-4xl font-bold mb-2">
                      Business Website
                    </h3>
                    <p className="text-primary-foreground/80">Web Design / UI/UX</p>
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <div className="p-8">
                <p className="text-muted-foreground leading-relaxed mb-6">
                  A simple and clean business website designed using UI/UX principles and 
                  built with HTML. It includes a homepage, service section, contact form, 
                  and responsive layout.
                </p>

                <div className="flex flex-wrap gap-3 mb-8">
                  <span className="px-4 py-2 rounded-full bg-coral/10 text-coral text-sm font-medium">
                    HTML
                  </span>
                  <span className="px-4 py-2 rounded-full bg-teal/10 text-teal text-sm font-medium">
                    CSS
                  </span>
                  <span className="px-4 py-2 rounded-full bg-accent/50 text-foreground text-sm font-medium">
                    Figma
                  </span>
                </div>

                <div className="flex flex-wrap gap-4">
                  <Button variant="hero" asChild>
                    <a
                      href="https://www.figma.com/design/rXtki4Sgq2kVxZnKumHJEn/firends-computer2?node-id=627-9&t=QNBZk71i2lYevNDL-1"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Figma size={18} className="mr-2" />
                      View on Figma
                    </a>
                  </Button>
                  <Button variant="hero-outline" asChild>
                    <a
                      href="https://www.figma.com/design/rXtki4Sgq2kVxZnKumHJEn/firends-computer2?node-id=627-9&t=QNBZk71i2lYevNDL-1"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={18} className="mr-2" />
                      Project Details
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
