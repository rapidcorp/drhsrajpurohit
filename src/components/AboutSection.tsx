import { User, MapPin, Calendar, Briefcase } from "lucide-react";

const quickInfo = [
  { icon: User, label: "Father's Name", value: "Shri Onkar Singh" },
  { icon: Briefcase, label: "Current Rank", value: "Circle Inspector (CI)" },
  { icon: MapPin, label: "Current Posting", value: "Jaipur Commissionerate, Rajasthan" },
  { icon: Calendar, label: "Service Since", value: "December 1, 1999" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-sm font-body font-semibold tracking-widest uppercase text-accent">About</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3 mb-4">
              The Scholar-Officer
            </h2>
            <div className="divider-gold w-24 mx-auto" />
          </div>

          {/* Bio */}
          <p className="text-lg md:text-xl font-body leading-relaxed text-muted-foreground text-center mb-16">
            Dr. Hanwant Singh Rajpurohit is a Circle Inspector with the Rajasthan Police, a recipient of the
            President's Police Medal, and a Gold Medalist in Yoga. With over 27 years of unblemished service
            across Udaipur, Rajsamand, and the Jaipur Commissionerate, he embodies the ideal of the modern
            Indian police officer — investigatively sharp, academically distinguished, and deeply committed
            to the wellness of his force and his community.
          </p>

          {/* Quick Info Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {quickInfo.map((item) => (
              <div
                key={item.label}
                className="flex items-start gap-4 p-6 rounded-lg bg-card border border-border hover:border-accent/40 transition-colors"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm font-body font-medium text-muted-foreground">{item.label}</p>
                  <p className="text-base font-body font-semibold text-foreground">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
