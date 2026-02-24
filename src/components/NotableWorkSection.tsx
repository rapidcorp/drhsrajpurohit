import { Shield, Mountain, Bird, Search } from "lucide-react";

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
        </div>
      </div>
    </section>
  );
};

export default NotableWorkSection;
