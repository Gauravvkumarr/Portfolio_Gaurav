import { motion } from "framer-motion";
import { Award, Code2, Users } from "lucide-react";
import { achievements } from "@/data/portfolio";
import { Card, CardContent } from "@/components/ui/card";

const iconMap = [Award, Code2, Users];

export default function AchievementsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.h2
            className="text-4xl sm:text-5xl font-poppins font-semibold mb-4 text-center"
            variants={cardVariants}
            data-testid="text-achievements-heading"
          >
            Achievements
          </motion.h2>
          <motion.p
            className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto"
            variants={cardVariants}
          >
            Certifications and milestones that reflect my commitment to continuous
            learning
          </motion.p>

          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => {
              const Icon = iconMap[index % iconMap.length];
              return (
                <motion.div key={achievement.id} variants={cardVariants}>
                  <Card
                    className="text-center hover-elevate transition-all duration-300 h-full"
                    data-testid={`card-achievement-${achievement.id}`}
                  >
                    <CardContent className="p-8">
                      <div className="mb-6 inline-flex p-4 rounded-full bg-gradient-to-br from-primary/20 to-chart-2/20">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                      <h3
                        className="text-xl font-poppins font-semibold mb-2"
                        data-testid={`text-achievement-title-${achievement.id}`}
                      >
                        {achievement.title}
                      </h3>
                      <p
                        className="text-sm text-primary font-medium mb-3"
                        data-testid={`text-achievement-date-${achievement.id}`}
                      >
                        {achievement.date}
                      </p>
                      <p
                        className="text-muted-foreground"
                        data-testid={`text-achievement-description-${achievement.id}`}
                      >
                        {achievement.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
