import { motion } from "framer-motion";
import { useState } from "react";
import { Github, Linkedin, Twitter, Mail, Send } from "lucide-react";
import { socialLinks } from "@/data/portfolio";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent } from "@/components/ui/card";

export default function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    console.log("Form submitted:", formData);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });

    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const socialIcons = [
    { icon: Github, url: socialLinks.github, label: "GitHub" },
    { icon: Linkedin, url: socialLinks.linkedin, label: "LinkedIn" },
    { icon: Twitter, url: socialLinks.twitter, label: "Twitter" },
    { icon: Mail, url: `mailto:${socialLinks.email}`, label: "Email" },
  ];

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
    <section id="contact" className="py-24 bg-muted/30">
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
            data-testid="text-contact-heading"
          >
            Get In Touch
          </motion.h2>
          <motion.p
            className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Have a project in mind or just want to chat? Feel free to reach out!
          </motion.p>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div variants={itemVariants}>
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-poppins font-semibold mb-6">
                    Send a Message
                  </h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        data-testid="input-name"
                      />
                    </div>
                    <div>
                      <Input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        data-testid="input-email"
                      />
                    </div>
                    <div>
                      <Textarea
                        name="message"
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        data-testid="input-message"
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full"
                      disabled={isSubmitting}
                      data-testid="button-submit"
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-col justify-center"
            >
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-poppins font-semibold mb-4">
                    Connect With Me
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Find me on these platforms or send me an email directly
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    {socialIcons.map((social, index) => {
                      const Icon = social.icon;
                      return (
                        <Button
                          key={index}
                          variant="outline"
                          className="justify-start"
                          onClick={() => window.open(social.url, "_blank")}
                          data-testid={`button-social-${social.label.toLowerCase()}`}
                        >
                          <Icon className="mr-2 h-5 w-5" />
                          {social.label}
                        </Button>
                      );
                    })}
                  </div>
                </div>

                <div className="p-6 rounded-lg bg-gradient-to-br from-primary/10 to-chart-2/10 border border-primary/20">
                  <p className="text-sm text-muted-foreground mb-2">Email me at</p>
                  <a
                    href={`mailto:${socialLinks.email}`}
                    className="text-lg font-medium text-primary hover:underline"
                    data-testid="link-email"
                  >
                    {socialLinks.email}
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
