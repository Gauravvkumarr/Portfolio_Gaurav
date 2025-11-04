import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { socialLinks } from "@/data/portfolio";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialIcons = [
    { icon: Github, url: socialLinks.github, label: "GitHub" },
    { icon: Linkedin, url: socialLinks.linkedin, label: "LinkedIn" },
    { icon: Twitter, url: socialLinks.twitter, label: "Twitter" },
    { icon: Mail, url: `mailto:${socialLinks.email}`, label: "Email" },
  ];

  return (
    <footer className="border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center gap-6">
          <div className="flex gap-6">
            {socialIcons.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors p-2 rounded-md hover-elevate"
                  aria-label={social.label}
                  data-testid={`link-footer-${social.label.toLowerCase()}`}
                >
                  <Icon className="h-5 w-5" />
                </a>
              );
            })}
          </div>

          <p
            className="text-sm text-muted-foreground text-center"
            data-testid="text-copyright"
          >
            © {currentYear} Alex Rivera. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
