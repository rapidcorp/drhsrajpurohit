import { Shield, Mountain, Bird, Search, Sprout, School, HandHeart, Flower2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const cases = [
  {
    icon: Shield,
    title: "Udaipur Gang Rape & Sex Racket Investigation",
    year: "2020",
    desc: "Led investigation at Hiran Magri PS resulting in arrest of 7 accused. Demonstrated capacity to handle sensitive, high-pressure cases requiring investigative precision.",
  },
  {
    icon: Search,
    title: "'Runaway Bride' Investigation",
    year: "2024",
    desc: "Led a multi-station police team across 4 police stations to investigate a complex missing persons case involving personal liberty and social justice.",
  },
  {
    icon: Mountain,
    title: "Himalayan Hatha Yoga Campaign",
    year: "2024",
    desc: "Performed advanced Hatha Yoga in sub-zero Himalayan temperatures to promote fitness awareness. Featured in Navbharat Times and ETV Bharat.",
  },
  {
    icon: Bird,
    title: "'Parindas' Community Initiative",
    year: "2018",
    desc: "Installed 30 clay water pots for birds during extreme summer heatwaves at Pratap Nagar PS — policing as community care.",
  },
];

const communityService = [
  {
    icon: Flower2,
    title: "Yoga Camps",
    hindi: "योग शिविर",
    desc: "Has organised yoga camps for the public during his postings.",
  },
  {
    icon: Sprout,
    title: "Tree Planting & Environment",
    hindi: "वृक्षारोपण एवं प्रकृति-संरक्षण",
    desc: "Tree-planting drives and work towards conservation and protection of nature.",
  },
  {
    icon: School,
    title: "Support for School Children",
    hindi: "विद्यार्थियों का उत्थान",
    desc: "At the time of writing, supporting the education and welfare of children from around 21 government schools, alongside care for destitute children.",
  },
  {
    icon: HandHeart,
    title: "COVID-19 Relief, 2020–21",
    hindi: "कोरोना आपदा राहत",
    desc: "With Hiran Magri Police Station, Pink Pearl Society (Badgaon) and community partners, helped distribute approx. 2,39,000 meal packages and approx. 1,000 dry-ration packs, plus slippers, soap, nail cutters and water bottles, to people in need. Figures are self-reported in the book and have not been independently verified.",
  },
];

const NotableWorkSection = () => {
  return (
    <section id="work" className="py-24 bg-muted">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm font-body font-semibold tracking-widest uppercase text-accent">Impact</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3 mb-4">
              Notable Work
            </h2>
            <div className="divider-gold w-24 mx-auto" />
          </div>

          <div className="space-y-8">
            {cases.map((item, i) => (
              <div
                key={item.title}
                className="flex gap-6 p-8 rounded-lg bg-card border border-border hover:border-accent/40 transition-colors"
              >
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center">
                  <item.icon className="w-7 h-7 text-accent" />
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3 className="font-display text-xl font-semibold text-foreground">{item.title}</h3>
                    <span className="text-xs font-body font-bold tracking-wider uppercase text-accent bg-accent/10 px-3 py-1 rounded-full">
                      {item.year}
                    </span>
                  </div>
                  <p className="text-base font-body text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Community Service — sourced from Saras Yoga (2025) */}
          <div className="mt-20" aria-labelledby="community-heading">
            <div className="text-center mb-10">
              <h3 id="community-heading" className="font-display text-3xl md:text-4xl font-bold text-foreground">
                Community Service <span lang="hi" className="text-gold-gradient">समाज सेवा</span>
              </h3>
              <div className="divider-gold w-16 mx-auto mt-4 mb-4" />
              <p className="text-sm font-body text-muted-foreground max-w-2xl mx-auto">
                As described in his 2025 book Saras Yoga, these initiatives were undertaken wherever he was
                posted during his service.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {communityService.map((item) => (
                <div
                  key={item.title}
                  className="flex flex-col p-6 rounded-lg bg-card border border-border hover:border-accent/40 transition-colors"
                >
                  <div className="flex items-center gap-4 mb-3">
                    <div className="flex-shrink-0 w-11 h-11 rounded-full bg-accent/10 flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-accent" aria-hidden="true" />
                    </div>
                    <div>
                      <h4 className="font-display text-lg font-semibold text-foreground leading-tight">{item.title}</h4>
                      <p lang="hi" className="text-sm font-body text-accent">{item.hindi}</p>
                    </div>
                  </div>
                  <p className="text-sm font-body text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-xs font-body text-muted-foreground mt-6 text-center">
              Source: author biography in{" "}
              <Link to="/books/saras-yoga" className="text-accent underline-offset-4 hover:underline inline-flex items-center gap-1">
                Saras Yoga (सरस योग), 2025 <ArrowRight className="w-3 h-3" aria-hidden="true" />
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotableWorkSection;
