import {
  ArrowUp,
  Github,
  Instagram,
  Linkedin,
  Mail,
  Twitter,
} from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative pt-10 pb-4 overflow-hidden text-left">
      {/* Background with Glassmorphism */}
      <div className="absolute inset-0 bg-background/40 backdrop-blur-xl z-0 border-t border-white/10"></div>

      {/* Ambient Gradient Blobs */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-[100px] -z-10 animate-pulse-subtle"></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-[100px] -z-10 animate-pulse-subtle"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-1">
            <a
              href="#hero"
              className="text-xl font-bold flex items-center mb-2 group"
            >
              <span className="text-glow text-primary group-hover:text-primary/80 transition-colors">
                Om
              </span>
              <span className="ml-2 text-foreground group-hover:text-foreground/80 transition-colors">
                Portfolio
              </span>
            </a>
            <p className="text-sm leading-relaxed mb-4 text-muted-foreground">
              Building digital experiences that are pixel-perfect,
              performance-driven, and user-centric.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-foreground font-semibold mb-4 text-lg relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-gradient-to-r from-primary to-transparent rounded-full"></span>
            </h3>
            <ul className="space-y-2 text-sm">
              {["Home", "About", "Skills", "Projects", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="text-muted-foreground hover:text-primary transition-all duration-300 flex items-center group"
                    >
                      <span className="w-0 group-hover:w-2 h-0.5 bg-primary mr-0 group-hover:mr-2 transition-all duration-300 rounded-full"></span>
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Connect */}
          <div className="col-span-1">
            <h3 className="text-foreground font-semibold mb-4 text-lg relative inline-block">
              Connect
              <span className="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-gradient-to-r from-primary to-transparent rounded-full"></span>
            </h3>
            <div className="flex space-x-3 mb-4">
              {[
                {
                  Icon: Github,
                  href: "https://github.com/Singh-OmDev",
                  label: "Github",
                },
                {
                  Icon: Linkedin,
                  href: "https://www.linkedin.com/in/om-singh-476402179/",
                  label: "LinkedIn",
                },
                {
                  Icon: Twitter,
                  href: "https://x.com/omsingh8400",
                  label: "Twitter",
                },
                {
                  Icon: Instagram,
                  href: "https://www.instagram.com/om.__.singh/",
                  label: "Instagram",
                },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 bg-secondary/50 backdrop-blur-sm rounded-full hover:bg-primary/20 hover:text-primary hover:scale-110 transition-all duration-300 border border-white/5 shadow-sm hover:shadow-primary/20"
                  aria-label={label}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
            <a
              href="mailto:omsingh8400@gmail.com"
              className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors group"
            >
              <div className="p-1.5 bg-primary/10 rounded-full mr-2 group-hover:bg-primary/20 transition-colors">
                <Mail size={14} />
              </div>
              omsingh8400@gmail.com
            </a>
          </div>

          {/* Say Hello */}
          <div className="col-span-1">
            <h3 className="text-foreground font-semibold mb-4 text-lg relative inline-block">
              Say Hello
              <span className="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-gradient-to-r from-primary to-transparent rounded-full"></span>
            </h3>
            <p className="text-xs leading-relaxed text-muted-foreground mb-4">
              Feel free to reach out for collaborations or just a friendly
              hello. I'm always open to discussing new projects and ideas.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-4 flex flex-col md:flex-row justify-between items-center text-xs relative">
          <p className="mb-2 md:mb-0 text-muted-foreground">
            &copy; {currentYear} <span className="text-primary">Om Singh</span>.
            All rights reserved.
          </p>
          <a
            href="#hero"
            className="p-2 rounded-full bg-primary hover:bg-primary/90 text-white transition-all duration-300 animate-bounce cursor-pointer shadow-lg hover:shadow-primary/40 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
            aria-label="Back to Top"
          >
            <ArrowUp size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
};
