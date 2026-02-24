const timelineData = [
  { year: "1999", role: "Sub-Inspector", posting: "Entry into Rajasthan Police", highlight: "Joined the 1999 batch" },
  { year: "2001", role: "Sub-Inspector", posting: "Guest Faculty — RPA, Jaipur", highlight: "Commenced yoga training for police officers" },
  { year: "2017", role: "Inspector", posting: "Personnel Branch, PHQ Jaipur", highlight: "Confirmed as Inspector (Seniority No. 823)" },
  { year: "2018", role: "Inspector", posting: "Pratap Nagar PS, Udaipur", highlight: "Launched 'Parindas' community initiative" },
  { year: "2020", role: "SHO", posting: "Hiran Magri PS, Udaipur", highlight: "Led high-profile gang rape case investigation" },
  { year: "2021", role: "SHO", posting: "Rajsamand District", highlight: "Executed major anti-crime operations" },
  { year: "2024", role: "SHO", posting: "Hiran Magri PS, Udaipur", highlight: "Himalayan Hatha Yoga — national attention" },
  { year: "2025", role: "Circle Inspector", posting: "Jaipur Commissionerate", highlight: "President's Police Medal for Meritorious Service" },
];

const TimelineSection = () => {
  return (
    <section id="career" className="py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-sm font-body font-semibold tracking-widest uppercase text-accent">Career</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-3 mb-4">
              26+ Years of Service
            </h2>
            <div className="divider-gold w-24 mx-auto" />
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Center line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-accent/30 md:-translate-x-px" />

            {timelineData.map((item, i) => (
              <div
                key={item.year + item.posting}
                className={`relative flex flex-col md:flex-row items-start mb-12 last:mb-0 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-accent -translate-x-1.5 mt-2 z-10 ring-4 ring-primary" />

                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                  <span className="inline-block text-sm font-body font-bold text-accent mb-1">{item.year}</span>
                  <h3 className="font-display text-xl font-semibold mb-1">{item.role}</h3>
                  <p className="text-sm font-body text-primary-foreground/70 mb-1">{item.posting}</p>
                  <p className="text-sm font-body text-primary-foreground/50 italic">{item.highlight}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
