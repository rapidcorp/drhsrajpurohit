import { BookOpen, Building2, Hash, Calendar, IndianRupee, FileText, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import coverAsset from "@/assets/saras-yoga-cover.png.asset.json";

const details = [
  { icon: BookOpen, label: "Title / शीर्षक", value: "सरस योग (Saras Yoga)" },
  { icon: Building2, label: "Publisher / प्रकाशक", value: "हिमांशु पब्लिकेशन्स, उदयपुर" },
  { icon: Calendar, label: "Edition / संस्करण", value: "2025 (First Edition)" },
  { icon: Hash, label: "ISBN", value: "978-93-94954-62-5" },
  { icon: IndianRupee, label: "Printed Price / मूल्य", value: "₹99 (as printed)" },
  { icon: FileText, label: "Pages / पृष्ठ", value: "86 pages" },
];

const BookSection = () => {
  return (
    <section id="book" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm font-body font-semibold tracking-widest uppercase text-accent">Author</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3 mb-4">
              My Book <span className="text-gold-gradient">पुस्तक</span>
            </h2>
            <div className="divider-gold w-24 mx-auto" />
          </div>

          <div className="grid md:grid-cols-[minmax(0,340px)_1fr] gap-10 items-start">
            {/* Cover */}
            <div className="mx-auto md:mx-0 w-full max-w-[340px]">
              <div className="rounded-lg overflow-hidden border border-border shadow-xl bg-card">
                <img
                  src={coverAsset.url}
                  alt="Front cover of the book Saras Yoga by Dr. Hanvant Singh Rajpurohit"
                  className="w-full h-auto block"
                  loading="lazy"
                  width={1024}
                  height={1276}
                />
              </div>
            </div>

            {/* Details */}
            <div>
              <h3 lang="hi" className="font-display text-2xl font-semibold text-foreground mb-2">
                “सरस योग” — डॉ. हनवन्तसिंह राजपुरोहित
              </h3>
              <p lang="hi" className="text-base font-body text-muted-foreground leading-relaxed mb-4">
                इस पुस्तक में योग की पृष्ठभूमि, पुलिस एवं सेना के कार्मिकों के जीवन में योग की भूमिका,
                सूक्ष्म व्यायाम, सूर्य नमस्कार, अष्टांग योग, आसन, प्राणायाम, षटकर्म, बन्ध, मुद्राएँ तथा
                नादानुसन्धान जैसे विषयों का परिचय दिया गया है — विशेष रूप से व्यस्त दिनचर्या में सरल
                योगाभ्यास की उपयोगिता के ध्यान से।
              </p>
              <p className="text-base font-body text-muted-foreground leading-relaxed mb-6">
                Saras Yoga is a Hindi-language introduction to yoga by Dr. Hanvant Singh Rajpurohit,
                written especially for police, defence and other busy public-service personnel. It covers
                preparatory exercises, Surya Namaskar, Ashtanga Yoga, selected asanas, pranayama,
                shatkarma, bandhas, mudras and nada-based meditation.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {details.map((d) => (
                  <div key={d.label} className="flex items-start gap-3 p-4 rounded-lg bg-card border border-border">
                    <d.icon className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-xs font-body font-medium text-muted-foreground">{d.label}</p>
                      <p className="text-sm font-body font-semibold text-foreground">{d.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Link
                to="/books/saras-yoga"
                className="inline-flex items-center gap-2 bg-accent text-accent-foreground font-body font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
              >
                Read Online <span lang="hi">ऑनलाइन पढ़ें</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookSection;
