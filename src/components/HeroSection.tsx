import { Shield, Award, Star } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      {/* Overlay */}
      <div className="absolute inset-0" style={{ background: "var(--hero-overlay)" }} />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-accent/20 border border-accent/30 rounded-full px-5 py-2 mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <Shield className="w-4 h-4 text-accent" />
          <span className="text-sm font-body font-semibold tracking-widest uppercase text-accent">
            Rajasthan Police
          </span>
        </div>

        {/* Name */}
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground mb-4 animate-fade-in-up opacity-0" style={{ animationDelay: "0.4s" }}>
          Dr. Hanwant Singh
          <span className="block text-gold-gradient">Rajpurohit</span>
        </h1>

        {/* Title */}
        <p className="font-display text-xl md:text-2xl text-primary-foreground/80 italic mb-8 animate-fade-in-up opacity-0" style={{ animationDelay: "0.6s" }}>
          Circle Inspector — Jaipur Commissionerate
        </p>

        {/* Accolades */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-12 animate-fade-in-up opacity-0" style={{ animationDelay: "0.8s" }}>
          {[
            { icon: Award, text: "President's Police Medal" },
            { icon: Star, text: "Gold Medalist in Yoga" },
            { icon: Shield, text: "27+ Years of Service" },
          ].map((item) => (
            <div key={item.text} className="flex items-center gap-2 text-primary-foreground/70">
              <item.icon className="w-5 h-5 text-accent" />
              <span className="text-sm md:text-base font-body font-medium">{item.text}</span>
            </div>
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="animate-fade-in opacity-0" style={{ animationDelay: "1.2s" }}>
          <a href="#about" className="inline-flex flex-col items-center gap-2 text-primary-foreground/50 hover:text-accent transition-colors">
            <span className="text-xs font-body tracking-widest uppercase">Explore Profile</span>
            <div className="w-px h-12 bg-accent/40 animate-pulse" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
