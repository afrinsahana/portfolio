import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Palette, Figma, Briefcase } from "lucide-react";

const skills = [
  {
    icon: Code,
    name: "HTML",
    description: "Creating clean, responsive web pages",
    level: 85,
    color: "coral",
  },
  {
    icon: Palette,
    name: "UI/UX Design",
    description: "Wireframes, prototypes, basic design principles",
    level: 75,
    color: "teal",
  },
  {
    icon: Figma,
    name: "Figma",
    description: "Basic design workflow",
    level: 70,
    color: "coral",
  },
  {
    icon: Briefcase,
    name: "Freelancing",
    description: "Small project handling",
    level: 65,
    color: "teal",
  },
];

export const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/2 -translate-y-1/2 -right-32 w-96 h-96 bg-coral/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 md:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-coral/10 text-coral font-medium text-sm mb-4">
            🛠️ My Skills
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            What I Can Do
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group perspective-1000"
            >
              <div className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-medium transition-all duration-300 border border-border/50 hover:border-coral/30 transform-3d">
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className={`w-14 h-14 rounded-xl flex items-center justify-center ${
                      skill.color === "coral"
                        ? "bg-coral/10 group-hover:bg-coral/20"
                        : "bg-teal/10 group-hover:bg-teal/20"
                    } transition-colors`}
                  >
                    <skill.icon
                      size={28}
                      className={skill.color === "coral" ? "text-coral" : "text-teal"}
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-xl font-semibold text-foreground mb-1">
                      {skill.name}
                    </h3>
                    <p className="text-muted-foreground text-sm">{skill.description}</p>
                  </div>
                </div>

                {/* Skill bar */}
                <div className="relative h-2 bg-muted rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.level}%` } : {}}
                    transition={{ duration: 1, delay: 0.5 + index * 0.1, ease: "easeOut" }}
                    className={`absolute left-0 top-0 h-full rounded-full ${
                      skill.color === "coral" ? "bg-gradient-coral" : "bg-gradient-teal"
                    }`}
                  />
                </div>
                <div className="flex justify-end mt-2">
                  <span
                    className={`text-sm font-semibold ${
                      skill.color === "coral" ? "text-coral" : "text-teal"
                    }`}
                  >
                    {skill.level}%
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
