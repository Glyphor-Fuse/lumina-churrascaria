import Hero from "@/components/Hero";
import GauchoGuide from "@/components/GauchoGuide";
import ExperienceSteps from "@/components/ExperienceSteps";
import Footer from "@/components/Footer";

export default function Index() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <ExperienceSteps />
      <GauchoGuide />
      <Footer />
    </main>
  );
}