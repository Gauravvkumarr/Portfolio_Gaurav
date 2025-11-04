import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { experience } from "@/data/portfolio";

export default function ExperienceSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section id="experience" className="py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.h2
            className="text-4xl sm:text-5xl font-poppins font-semibold mb-4 text-center"
            variants={itemVariants}
            data-testid="text-experience-heading"
          >
            Experience
          </motion.h2>
          <motion.p
            className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            My professional journey and the roles that shaped my expertise
          </motion.p>

          <div className="relative">
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-chart-2 to-transparent" />

            {experience.map((exp, index) => (
              <motion.div
                key={exp.id}
                className="relative mb-12 last:mb-0"
                variants={itemVariants}
                data-testid={`card-experience-${exp.id}`}
              >
                <div
                  className={`flex flex-col md:flex-row gap-8 items-start ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className="flex-1 md:text-right md:pr-8">
                    {index % 2 === 0 && (
                      <div className="hidden md:block">
                        <h3
                          className="text-2xl font-poppins font-semibold mb-1"
                          data-testid={`text-experience-company-${exp.id}`}
                        >
                          {exp.company}
                        </h3>
                        <p
                          className="text-lg text-foreground/80 font-medium mb-2"
                          data-testid={`text-experience-role-${exp.id}`}
                        >
                          {exp.role}
                        </p>
                        <p
                          className="text-sm text-muted-foreground mb-4"
                          data-testid={`text-experience-duration-${exp.id}`}
                        >
                          {exp.duration}
                        </p>
                        <ul className="space-y-2 text-muted-foreground">
                          {exp.description.map((item, i) => (
                            <li key={i} data-testid={`text-experience-desc-${exp.id}-${i}`}>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  <div className="relative flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-chart-2 flex items-center justify-center shadow-lg">
                      <Briefcase className="h-8 w-8 text-primary-foreground" />
                    </div>
                  </div>

                  <div className="flex-1 md:pl-8">
                    <div className="md:hidden">
                      <h3
                        className="text-2xl font-poppins font-semibold mb-1"
                        data-testid={`text-experience-company-mobile-${exp.id}`}
                      >
                        {exp.company}
                      </h3>
                      <p
                        className="text-lg text-foreground/80 font-medium mb-2"
                        data-testid={`text-experience-role-mobile-${exp.id}`}
                      >
                        {exp.role}
                      </p>
                      <p
                        className="text-sm text-muted-foreground mb-4"
                        data-testid={`text-experience-duration-mobile-${exp.id}`}
                      >
                        {exp.duration}
                      </p>
                      <ul className="space-y-2 text-muted-foreground">
                        {exp.description.map((item, i) => (
                          <li key={i} data-testid={`text-experience-desc-mobile-${exp.id}-${i}`}>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {index % 2 !== 0 && (
                      <div className="hidden md:block">
                        <h3
                          className="text-2xl font-poppins font-semibold mb-1"
                          data-testid={`text-experience-company-${exp.id}`}
                        >
                          {exp.company}
                        </h3>
                        <p
                          className="text-lg text-foreground/80 font-medium mb-2"
                          data-testid={`text-experience-role-${exp.id}`}
                        >
                          {exp.role}
                        </p>
                        <p
                          className="text-sm text-muted-foreground mb-4"
                          data-testid={`text-experience-duration-${exp.id}`}
                        >
                          {exp.duration}
                        </p>
                        <ul className="space-y-2 text-muted-foreground">
                          {exp.description.map((item, i) => (
                            <li key={i} data-testid={`text-experience-desc-${exp.id}-${i}`}>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
