import { Award, Medal, Star, Heart, Users, BookOpen } from "lucide-react";

const awards = [
  { icon: Medal, title: "President's Police Medal", year: "2025", desc: "Highest national honor for Meritorious Service — Government of India" },
  { icon: Award, title: "State Meritorious Service Medal", year: "2025", desc: "Named among top 17 officers alongside IPS-rank officers" },
  { icon: Star, title: "27 Years Spotless Service", year: "2025", desc: "Recognition of unblemished record with zero disciplinary action" },
  { icon: BookOpen, title: "Gold Medal — P.G. Diploma in Yoga", year: "MLSU", desc: "Highest academic honor from Mohanlal Sukhadia University" },
  { icon: Users, title: "Vice-President — IYA Rajasthan", year: "2025", desc: "Appointed Vice-President of Indian Yoga Association, Rajasthan Chapter" },
  { icon: Heart, title: "Yoga Excellence Citation", year: "Ongoing", desc: "Institutional recognition for integrating yoga into police training since 2001" },
];

const AwardsSection = () => {
  return (
    <section id="awards" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm font-body font-semibold tracking-widest uppercase text-accent">Recognition</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3 mb-4">
              Awards & Honors
            </h2>
            <div className="divider-gold w-24 mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {awards.map((award) => (
              <div
                key={award.title}
                className="group p-8 rounded-lg bg-card border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/5"
              >
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
                  <award.icon className="w-6 h-6 text-accent" />
                </div>
                <span className="text-xs font-body font-bold tracking-wider uppercase text-accent">{award.year}</span>
                <h3 className="font-display text-lg font-semibold text-foreground mt-1 mb-2">{award.title}</h3>
                <p className="text-sm font-body text-muted-foreground leading-relaxed">{award.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;
