"use client";

import { Box } from "@chakra-ui/react";
import FaqAccordion from "@/components/home/FaqAccordion";
import GoodnexusCard from "@/components/home/GoodnexusCard";
import { HeroSection } from "@/components/ui/hero-section-2";
import { ContactFormSection } from "@/components/ui/contact-form";

export default function ContactPage() {
  return (
    <Box pt="0" pb={{ base: 16, md: 20 }}>
      {/* 1. Brand Header Banner layout block */}
      <HeroSection 
        title={
          <>
            <span style={{ color: "#019fab" }}>Get in Touch </span> <br />
            <span style={{ color: "white" }}>With Our Team</span>
          </>
        }
        subtitle="Have questions about our Heart for Nation initiative? Reach out today, and our support team will respond to you swiftly."
        backgroundImage="/hncontactbg.svg"
      />

      {/* 2. Form & Location Map Section side-by-side */}
      <Box id="contact-form">
        <ContactFormSection />
      </Box>

      {/* 3. Base Accordion & Card Widgets */}
      <FaqAccordion />
      <GoodnexusCard />
    </Box>
  );
}
