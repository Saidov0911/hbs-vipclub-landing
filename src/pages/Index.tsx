import { I18nProvider } from "@/i18n/I18nProvider";
import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { WhatIs } from "@/components/landing/WhatIs";
import { Inside } from "@/components/landing/Inside";
import { Results } from "@/components/landing/Results";
import { Feedbacks } from "@/components/landing/Feedbacks";
import { WhoFor } from "@/components/landing/WhoFor";
import { Requirements } from "@/components/landing/Requirements";
import { HowToJoin } from "@/components/landing/HowToJoin";
import { Pricing } from "@/components/landing/Pricing";
import { Mentors } from "@/components/landing/Mentors";
import { Founder } from "@/components/landing/Founder";
import { FAQ } from "@/components/landing/FAQ";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { Footer } from "@/components/landing/Footer";

const Index = () => {
  return (
    <I18nProvider>
      <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        <Header />
        <main>
          <Hero />
          <WhatIs />
          <Inside />
          <Results />
          <Feedbacks />
          <WhoFor />
          <Requirements />
          <HowToJoin />
          <Pricing />
          <Mentors />
          <Founder />
          <FAQ />
          <FinalCTA />
        </main>
        <Footer />
      </div>
    </I18nProvider>
  );
};

export default Index;
