import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { projects } from "@/data/portfolio";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function ProjectsSection() {
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
    <section id="projects" className="py-24">
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
            data-testid="text-projects-heading"
          >
            Featured Projects
          </motion.h2>
          <motion.p
            className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto"
            variants={cardVariants}
          >
            A selection of my recent work showcasing various technologies and
            problem-solving approaches
          </motion.p>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <motion.div key={project.id} variants={cardVariants}>
                <Card
                  className="overflow-hidden hover-elevate transition-all duration-300 h-full flex flex-col"
                  data-testid={`card-project-${project.id}`}
                >
                  <div className="relative overflow-hidden aspect-video">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      data-testid={`img-project-${project.id}`}
                    />
                  </div>
                  <CardContent className="flex-1 p-6">
                    <h3
                      className="text-2xl font-poppins font-semibold mb-3"
                      data-testid={`text-project-title-${project.id}`}
                    >
                      {project.title}
                    </h3>
                    <p
                      className="text-muted-foreground mb-4"
                      data-testid={`text-project-description-${project.id}`}
                    >
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, index) => (
                        <Badge
                          key={index}
                          variant="secondary"
                          className="text-xs"
                          data-testid={`badge-tech-${project.id}-${index}`}
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="p-6 pt-0 gap-3">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1"
                      onClick={() => window.open(project.githubUrl, "_blank")}
                      data-testid={`button-github-${project.id}`}
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Button>
                    <Button
                      size="sm"
                      className="flex-1"
                      onClick={() => window.open(project.demoUrl, "_blank")}
                      data-testid={`button-demo-${project.id}`}
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
