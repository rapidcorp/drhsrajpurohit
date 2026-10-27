import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, BookOpen } from "lucide-react";
import pdfAsset from "@/assets/saras-yoga.pdf.asset.json";

const bookJsonLd = {
  "@context": "https://schema.org",
  "@type": "Book",
  name: "सरस योग",
  alternateName: "Saras Yoga",
  author: {
    "@type": "Person",
    name: "Dr. Hanvant Singh Rajpurohit",
    alternateName: "डॉ. हनवन्तसिंह राजपुरोहित",
  },
  isbn: "978-93-94954-62-5",
  datePublished: "2025",
  inLanguage: "hi",
  numberOfPages: 86,
  publisher: { "@type": "Organization", name: "हिमांशु पब्लिकेशन्स" },
};

const BookPage = () => {
  useEffect(() => {
    document.title = "सरस योग — Read Online | Dr. H.S. Rajpurohit";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Read Saras Yoga (सरस योग), a Hindi book on yoga by Dr. Hanvant Singh Rajpurohit — yoga for police, defence and busy public-service personnel.");
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(bookJsonLd);
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 py-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm font-body text-primary-foreground/70 hover:text-accent transition-colors mb-2"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Profile
            </Link>
            <h1 lang="hi" className="font-display text-3xl md:text-4xl font-bold">
              सरस योग <span className="text-gold-gradient">Read Online</span>
            </h1>
            <p className="text-sm font-body text-primary-foreground/60 mt-1">
              डॉ. हनवन्तसिंह राजपुरोहित · हिमांशु पब्लिकेशन्स · 2025 · ISBN 978-93-94954-62-5
            </p>
          </div>
          <a
            href={pdfAsset.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-accent/40 text-accent font-body font-semibold px-5 py-2.5 rounded-lg hover:bg-accent/10 transition-colors"
          >
            Open in New Tab <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Viewer */}
      <div className="container mx-auto px-6 py-8">
        <div className="rounded-lg overflow-hidden border border-border bg-card shadow-xl">
          <iframe
            src={pdfAsset.url}
            title="Saras Yoga (सरस योग) — full book PDF reader"
            className="w-full"
            style={{ height: "80vh" }}
          />
        </div>
        <p className="text-xs font-body text-muted-foreground mt-3 flex items-center gap-2">
          <BookOpen className="w-3.5 h-3.5 text-accent" />
          Use the viewer's controls to page through and zoom. If the viewer does not load, use
          “Open in New Tab” above.
        </p>
      </div>
    </div>
  );
};

export default BookPage;
