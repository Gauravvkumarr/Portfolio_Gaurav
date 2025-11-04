import { motion } from "framer-motion";
import { about } from "@/data/portfolio";
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
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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

          <motion.div className="space-y-8" variants={itemVariants}>
            <p
              className="text-lg text-foreground/90 leading-relaxed text-center"
              data-testid="text-about-intro"
            >
              {about.introduction}
            </p>

            <div className="text-center">
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

            <div className="text-center">
              <h3
                className="text-xl font-poppins font-semibold mb-4"
                data-testid="text-interests-heading"
              >
                Interests
              </h3>
              <div className="flex flex-wrap gap-2 justify-center">
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
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
