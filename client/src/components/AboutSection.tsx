import { motion } from "framer-motion";
import { about, personalInfo, skills } from "@/data/portfolio";
import { Badge } from "@/components/ui/badge";

export default function AboutSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.h2
            className="text-4xl sm:text-5xl font-poppins font-semibold mb-16 text-center"
            variants={itemVariants}
            data-testid="text-about-heading"
          >
            About Me
          </motion.h2>

          <div className="grid md:grid-cols-5 gap-12 items-start">
            <motion.div
              className="md:col-span-2 flex justify-center"
              variants={itemVariants}
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-chart-2/20 rounded-2xl blur-2xl" />
                <img
                  src={personalInfo.profilePhoto}
                  alt="Profile"
                  className="relative w-full max-w-sm rounded-2xl shadow-lg"
                  data-testid="img-profile"
                />
              </div>
            </motion.div>

            <motion.div
              className="md:col-span-3 space-y-6"
              variants={itemVariants}
            >
              <p
                className="text-lg text-foreground/90 leading-relaxed"
                data-testid="text-about-intro"
              >
                {about.introduction}
              </p>

              <div>
                <h3
                  className="text-xl font-poppins font-semibold mb-3"
                  data-testid="text-education-heading"
                >
                  Education
                </h3>
                <p className="text-muted-foreground" data-testid="text-education">
                  {about.education}
                </p>
              </div>

              <div>
                <h3
                  className="text-xl font-poppins font-semibold mb-3"
                  data-testid="text-interests-heading"
                >
                  Interests
                </h3>
                <div className="flex flex-wrap gap-2">
                  {about.interests.map((interest, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      data-testid={`badge-interest-${index}`}
                    >
                      {interest}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h3
                  className="text-xl font-poppins font-semibold mb-3"
                  data-testid="text-skills-heading"
                >
                  Skills
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <Badge key={index} data-testid={`badge-skill-${index}`}>
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
