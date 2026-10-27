import NavigationBar from "@/components/NavigationBar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import EducationSection from "@/components/EducationSection";
import BookSection from "@/components/BookSection";
import TimelineSection from "@/components/TimelineSection";
import AwardsSection from "@/components/AwardsSection";
import NotableWorkSection from "@/components/NotableWorkSection";
import PhilosophySection from "@/components/PhilosophySection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <NavigationBar />
      <HeroSection />
      <AboutSection />
      <EducationSection />
      <BookSection />
      <TimelineSection />
      <AwardsSection />
      <NotableWorkSection />
      <PhilosophySection />
      <FooterSection />
    </div>
  );
};

export default Index;
