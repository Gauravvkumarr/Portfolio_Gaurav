import { motion } from "framer-motion";
import { skillsData } from "@/data/skills";
import { Card, CardContent } from "@/components/ui/card";

export default function SkillsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const categoryVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <section id="skills" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.h2
            className="text-4xl sm:text-5xl font-poppins font-semibold mb-4 text-center"
            variants={categoryVariants}
            data-testid="text-skills-heading"
          >
            Technical Skills
          </motion.h2>
          <motion.p
            className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto"
            variants={categoryVariants}
          >
            Technologies and tools I use to bring ideas to life
          </motion.p>

          <div className="grid md:grid-cols-2 gap-8">
            {skillsData.map((category, categoryIndex) => (
              <motion.div key={categoryIndex} variants={categoryVariants}>
                <Card className="h-full">
                  <CardContent className="p-8">
                    <h3
                      className="text-2xl font-poppins font-semibold mb-6 text-center bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent"
                      data-testid={`text-category-${category.title.toLowerCase()}`}
                    >
                      {category.title}
                    </h3>
                    <motion.div
                      className="grid grid-cols-3 sm:grid-cols-4 gap-6"
                      variants={containerVariants}
                    >
                      {category.skills.map((skill, skillIndex) => {
                        const IconComponent = skill.icon;
                        return (
                          <motion.div
                            key={skillIndex}
                            variants={skillVariants}
                            whileHover={{ scale: 1.1 }}
                            className="flex flex-col items-center gap-3 p-4 rounded-lg hover-elevate transition-all duration-300 group"
                            data-testid={`skill-${category.title.toLowerCase()}-${skillIndex}`}
                          >
                            <div className="relative">
                              <div
                                className="absolute inset-0 rounded-lg blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300"
                                style={{ backgroundColor: skill.color }}
                              />
                              <IconComponent
                                className="relative h-12 w-12 transition-transform duration-300"
                                style={{ color: skill.color }}
                              />
                            </div>
                            <span
                              className="text-xs font-medium text-center text-muted-foreground group-hover:text-foreground transition-colors"
                              data-testid={`text-skill-name-${category.title.toLowerCase()}-${skillIndex}`}
                            >
                              {skill.name}
                            </span>
                          </motion.div>
                        );
                      })}
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
