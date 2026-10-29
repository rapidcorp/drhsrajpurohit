import { User, MapPin, Calendar, Briefcase, BookOpen, Home, Dumbbell, Scale, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const bioFacts = [
  { icon: Home, label: "Ancestral Village", value: "Pilowani (पिलोवणी), District Pali, Rajasthan" },
  {
    icon: Dumbbell,
    label: "Sports",
    value: "A lifelong sportsman — has taken part in boxing, volleyball, swimming and yoga at open and university level, including state and national-level events",
  },
  { icon: Scale, label: "Yoga Referee", value: "Has served as a national-level yoga referee (योग-निर्णायक)" },
];

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

          {/* From the Author's Biography — sourced from Saras Yoga (2025) */}
          <aside
            aria-labelledby="author-bio-heading"
            className="mt-12 p-8 rounded-lg bg-card border border-accent/30 border-l-4 border-l-accent"
          >
            <div className="flex items-center gap-3 mb-5">
              <BookOpen className="w-5 h-5 text-accent" aria-hidden="true" />
              <h3 id="author-bio-heading" className="font-display text-2xl font-semibold text-foreground">
                From the Author's Biography <span lang="hi" className="text-accent text-xl">लेखक परिचय</span>
              </h3>
            </div>
            <ul className="space-y-4">
              {bioFacts.map((f) => (
                <li key={f.label} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-9 h-9 rounded-full bg-accent/10 flex items-center justify-center">
                    <f.icon className="w-4 h-4 text-accent" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-sm font-body font-medium text-muted-foreground">{f.label}</p>
                    <p className="text-base font-body text-foreground">{f.value}</p>
                  </div>
                </li>
              ))}
            </ul>
            <p className="text-xs font-body text-muted-foreground mt-6">
              As described in his 2025 book{" "}
              <Link to="/books/saras-yoga" className="text-accent underline-offset-4 hover:underline inline-flex items-center gap-1">
                Saras Yoga (सरस योग) <ArrowRight className="w-3 h-3" aria-hidden="true" />
              </Link>
              .
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
