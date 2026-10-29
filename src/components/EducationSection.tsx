import { GraduationCap, Trophy, Users, Mic, BookOpen, ScrollText, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const degrees = [
  {
    icon: GraduationCap,
    year: "Undergraduate & Postgraduate",
    title: "B.A. & M.A. — Economics (अर्थशास्त्र)",
    institution: "Jai Narain Vyas University, Jodhpur",
    note: null as string | null,
    lang: undefined as string | undefined,
  },
  {
    icon: ScrollText,
    year: "2013",
    title: "Vidyavachaspati (विद्यावाचस्पति)",
    institution: "Janardan Rai Nagar Rajasthan Vidyapeeth, Udaipur",
    note: "Research topic: “योग उद्योग के रूप में” (Yoga as an Industry)",
    lang: undefined as string | undefined,
  },
];

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

          {/* Academic degrees (from the author biography in Saras Yoga) */}
          <div className="mb-12">
            <h3 className="font-display text-2xl font-semibold text-foreground mb-6 flex items-center gap-3">
              <BookOpen className="w-5 h-5 text-accent" aria-hidden="true" />
              Academic Degrees <span lang="hi" className="text-accent text-xl">शैक्षणिक उपाधियाँ</span>
            </h3>
            <ol className="relative border-l-2 border-accent/30 ml-3 space-y-6">
              {degrees.map((d) => (
                <li key={d.title} className="pl-8 relative">
                  <span
                    className="absolute -left-[13px] top-5 w-6 h-6 rounded-full bg-accent/15 border-2 border-accent flex items-center justify-center"
                    aria-hidden="true"
                  >
                    <d.icon className="w-3 h-3 text-accent" />
                  </span>
                  <div className="p-6 rounded-lg bg-card border border-border hover:border-accent/40 transition-colors">
                    <span className="text-xs font-body font-bold tracking-wider uppercase text-accent bg-accent/10 px-3 py-1 rounded-full">
                      {d.year}
                    </span>
                    <h4 className="font-display text-lg font-semibold text-foreground mt-3 mb-1">{d.title}</h4>
                    <p className="text-sm font-body text-muted-foreground">{d.institution}</p>
                    {d.note && (
                      <p className="text-sm font-body text-foreground/80 mt-2">{d.note}</p>
                    )}
                  </div>
                </li>
              ))}
            </ol>
            <p className="text-xs font-body text-muted-foreground mt-4 ml-3">
              Vidyavachaspati is an academic research degree awarded by the Vidyapeeth; it is not a medical
              qualification. As described in his 2025 book{" "}
              <Link to="/books/saras-yoga" className="text-accent underline-offset-4 hover:underline inline-flex items-center gap-1">
                Saras Yoga (सरस योग) <ArrowRight className="w-3 h-3" aria-hidden="true" />
              </Link>
              .
            </p>
          </div>

          <h3 className="font-display text-2xl font-semibold text-foreground mb-6 flex items-center gap-3">
            <Trophy className="w-5 h-5 text-accent" aria-hidden="true" />
            Credentials & Roles
          </h3>
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
