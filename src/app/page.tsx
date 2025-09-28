"use client";

import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { AboutSection } from "@/components/AboutSection";
import { SpeakerSection } from "@/components/SpeakerSection";
import { ProgramSection } from "@/components/ProgramSection";
import { RegistrationForm } from "@/components/RegistrationForm";
import { ContactsSection } from "@/components/ContactsSection";
import { Footer } from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner";

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <AboutSection />
        <SpeakerSection />
        <ProgramSection />
        <RegistrationForm />
        <ContactsSection />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}