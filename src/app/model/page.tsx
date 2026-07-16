"use client";

import React from "react";
import { Box } from "@chakra-ui/react";
import FaqAccordion from "@/components/home/FaqAccordion";
import GoodnexusCard from "@/components/home/GoodnexusCard";
import { HeroSection } from "@/components/ui/hero-section-2";
import FeatureCarousel from "@/components/ui/feature-carousel";
import { ProcessSection } from "@/components/ui/process-section";

export default function ModelPage() {
  return (
    <Box bg="white">
      {/* 1. Page Header Block */}
      <HeroSection
        title={
          <>
            <span style={{ color: "#019fab" }}>Our Integrated</span> <br />
            <span style={{ color: "white" }}>Model</span>
          </>
        }
        subtitle="Explore the RESILIENCE 360+ framework that connects health systems, economic pathways, and digital intelligence into one coordinated model for sustained impact."
        backgroundImage="/hncontactbg.svg"
      />

      {/* 2. Model Showcase Deck */}
      <FeatureCarousel />

      {/* 3. Strategic Execution Track Section (Removed bottom spacing) */}
      <Box mb={0} pb={0}>
        <ProcessSection
          subtitle="Execution Track"
          title={
            <>
              How We Do It{" "}
              <Box as="span" color="#019fab">
                Process
              </Box>
            </>
          }
          description="Our standardized framework layers tactical data validation on top of community mobilization workflows to secure regional scalability."
          buttonText="View Framework Details"
          buttonHref="#"
        />
      </Box>

      {/* 4. Global Information Sections (Eliminated top margins to sit directly below the process grid) */}
      <Box mt={0} pt={0}>
        <FaqAccordion />
        <GoodnexusCard />
      </Box>
    </Box>
  );
}