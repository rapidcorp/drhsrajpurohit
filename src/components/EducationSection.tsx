import { GraduationCap, Trophy, Users, Mic } from "lucide-react";

const credentials = [
  { icon: Trophy, title: "P.G. Diploma in Yoga — Gold Medalist", detail: "Mohanlal Sukhadia University (MLSU), Udaipur" },
  { icon: GraduationCap, title: "Certified National Yoga Judge", detail: "Qualified to evaluate national-level yoga competitions" },
  { icon: Users, title: "Guest Faculty — RPA, Jaipur", detail: "Training police recruits and senior officers since 2001" },
  { icon: Mic, title: "National & International Speaker", detail: "Presenter at seminars on yoga, wellness, and holistic policing" },
];

const EducationSection = () => {
  return (
    <section id="education" className="py-24 bg-muted">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm font-body font-semibold tracking-widest uppercase text-accent">Academics</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3 mb-4">
              Education & Credentials
            </h2>
            <div className="divider-gold w-24 mx-auto mb-8" />
            <p className="text-base font-body text-muted-foreground max-w-2xl mx-auto">
              The prefix 'Dr.' reflects distinguished academic achievement in Yoga and Wellness Sciences — 
              a specialization unique among serving Rajasthan Police officers of his rank. Over 32 years of yoga practice.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {credentials.map((c) => (
              <div key={c.title} className="flex items-start gap-4 p-6 rounded-lg bg-card border border-border">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                  <c.icon className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-display text-base font-semibold text-foreground mb-1">{c.title}</h3>
                  <p className="text-sm font-body text-muted-foreground">{c.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
