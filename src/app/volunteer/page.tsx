"use client";

import { Box } from "@chakra-ui/react";
import FaqAccordion from "@/components/home/FaqAccordion";
import GoodnexusCard from "@/components/home/GoodnexusCard";
import { HeroSection } from "@/components/ui/hero-section-2";
import { ArcGalleryHero } from "@/components/ui/arc-gallery-hero-component";

export default function VolunteerPage() {
  const volunteerMemories = [
    "/Bitrus.jpg",
    "/Oche.png",
    "/Amina.jpg",
    "/Ajayi.jpg",
    "/Mariam.jpg",
    "/Zion.jpg",
    "/hng-orbit-logo.png",
  ];

  return (
    <Box bg="white">
      <HeroSection
        title={
          <>
            <span style={{ color: "#019fab" }}>Volunteer</span> <br />
            <span style={{ color: "white" }}>For Impact</span>
          </>
        }
        subtitle="Bring your time, skills, and care into community-centered systems that improve access, strengthen resilience, and support measurable change."
        backgroundImage="/hncontactbg.svg"
      />

      <ArcGalleryHero images={volunteerMemories} />

      <FaqAccordion />
      <GoodnexusCard />
    </Box>
  );
}