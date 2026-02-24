import { Shield } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="py-12 bg-primary border-t border-accent/10">
      <div className="container mx-auto px-6 text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Shield className="w-5 h-5 text-accent" />
          <span className="font-display font-bold text-primary-foreground">Dr. Hanwant Singh Rajpurohit</span>
        </div>
        <p className="text-sm font-body text-primary-foreground/50 mb-2">
          Circle Inspector — Jaipur Commissionerate, Rajasthan Police
        </p>
        <p className="text-xs font-body text-primary-foreground/30">
          © {new Date().getFullYear()} — All information compiled from verified public sources
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
