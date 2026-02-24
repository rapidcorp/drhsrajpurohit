import { BookOpen, Newspaper } from "lucide-react";

const themes = [
  "Holistic leadership — excellence supported by mental and physical wellness",
  "Institutional reform — embedding yoga and mindfulness into police training",
  "Community policing — bridging the gap between the force and community",
  "Academic discipline — modeling the 'scholar-officer' archetype",
];

const media = [
  { name: "Yogavani Magazine", detail: "February 2025 — Featured profile" },
  { name: "Navbharat Times", detail: "Himalayan Yoga feat coverage (2024)" },
  { name: "ETV Bharat", detail: "Republic Day honors coverage (2025)" },
  { name: "Times of India", detail: "Medal announcement (January 2025)" },
  { name: "UdaipurTimes", detail: "Runaway Bride investigation (2024)" },
];

const PhilosophySection = () => {
  return (
    <section id="philosophy" className="py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm font-body font-semibold tracking-widest uppercase text-accent">Philosophy</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-3 mb-4">
              The Sadhaka-Officer
            </h2>
            <div className="divider-gold w-24 mx-auto mb-8" />
            <p className="text-lg font-body text-primary-foreground/70 max-w-2xl mx-auto italic font-display">
              "A practitioner-police officer who uses the ancient wisdom of yoga to manage the modern stresses of law enforcement."
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Themes */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <BookOpen className="w-5 h-5 text-accent" />
                <h3 className="font-display text-xl font-semibold">Core Themes</h3>
              </div>
              <ul className="space-y-4">
                {themes.map((t) => (
                  <li key={t} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                    <span className="font-body text-primary-foreground/80">{t}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Media */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Newspaper className="w-5 h-5 text-accent" />
                <h3 className="font-display text-xl font-semibold">Media Presence</h3>
              </div>
              <ul className="space-y-4">
                {media.map((m) => (
                  <li key={m.name} className="border-l-2 border-accent/30 pl-4">
                    <p className="font-body font-semibold text-primary-foreground/90">{m.name}</p>
                    <p className="text-sm font-body text-primary-foreground/50">{m.detail}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
