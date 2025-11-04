import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { academics } from "@/data/portfolio";

export default function AcademicsSection() {
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
    <section id="academics" className="py-24 bg-muted/30">
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
            data-testid="text-academics-heading"
          >
            Academics
          </motion.h2>
          <motion.p
            className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            My educational background and academic achievements
          </motion.p>

          <div className="relative">
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-chart-2 to-transparent" />

            {academics.map((edu, index) => (
              <motion.div
                key={edu.id}
                className="relative mb-12 last:mb-0"
                variants={itemVariants}
                data-testid={`card-academics-${edu.id}`}
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
                          data-testid={`text-academics-institution-${edu.id}`}
                        >
                          {edu.institution}
                        </h3>
                        <p
                          className="text-lg text-foreground/80 font-medium mb-2"
                          data-testid={`text-academics-degree-${edu.id}`}
                        >
                          {edu.degree}
                        </p>
                        <p
                          className="text-sm text-muted-foreground mb-4"
                          data-testid={`text-academics-duration-${edu.id}`}
                        >
                          {edu.duration}
                        </p>
                        <ul className="space-y-2 text-muted-foreground">
                          {edu.description.map((item, i) => (
                            <li key={i} data-testid={`text-academics-desc-${edu.id}-${i}`}>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  <div className="relative flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-chart-2 flex items-center justify-center shadow-lg">
                      <GraduationCap className="h-8 w-8 text-primary-foreground" />
                    </div>
                  </div>

                  <div className="flex-1 md:pl-8">
                    <div className="md:hidden">
                      <h3
                        className="text-2xl font-poppins font-semibold mb-1"
                        data-testid={`text-academics-institution-mobile-${edu.id}`}
                      >
                        {edu.institution}
                      </h3>
                      <p
                        className="text-lg text-foreground/80 font-medium mb-2"
                        data-testid={`text-academics-degree-mobile-${edu.id}`}
                      >
                        {edu.degree}
                      </p>
                      <p
                        className="text-sm text-muted-foreground mb-4"
                        data-testid={`text-academics-duration-mobile-${edu.id}`}
                      >
                        {edu.duration}
                      </p>
                      <ul className="space-y-2 text-muted-foreground">
                        {edu.description.map((item, i) => (
                          <li key={i} data-testid={`text-academics-desc-mobile-${edu.id}-${i}`}>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {index % 2 !== 0 && (
                      <div className="hidden md:block">
                        <h3
                          className="text-2xl font-poppins font-semibold mb-1"
                          data-testid={`text-academics-institution-${edu.id}`}
                        >
                          {edu.institution}
                        </h3>
                        <p
                          className="text-lg text-foreground/80 font-medium mb-2"
                          data-testid={`text-academics-degree-${edu.id}`}
                        >
                          {edu.degree}
                        </p>
                        <p
                          className="text-sm text-muted-foreground mb-4"
                          data-testid={`text-academics-duration-${edu.id}`}
                        >
                          {edu.duration}
                        </p>
                        <ul className="space-y-2 text-muted-foreground">
                          {edu.description.map((item, i) => (
                            <li key={i} data-testid={`text-academics-desc-${edu.id}-${i}`}>
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
