"use client";

import { Box } from "@chakra-ui/react";
import FaqAccordion from "@/components/home/FaqAccordion";
import GoodnexusCard from "@/components/home/GoodnexusCard";
import { HeroSection } from "@/components/ui/hero-section-2";
import { Careers4 } from "@/components/ui/careers-4";

export default function CareersPage() {
  return (
    <Box bg="white">
      {/* 1. Hero Section */}
      <HeroSection
        title={
          <>
            <span style={{ color: "#019fab" }}>Careers</span> <br />
            <span style={{ color: "white" }}>at HNGlobal</span>
          </>
        }
        subtitle="Join a mission-driven team building integrated systems for stronger communities, better health outcomes, and lasting economic resilience."
        backgroundImage="/hncontactbg.svg"
      />

      {/* 2. Interactive Job Openings Component */}
      <Careers4 
        heading={
          <>
            Job{" "}
            <Box as="span" color="#019fab">
              Openings
            </Box>
          </>
        }
        description={
          <>
            Explore open professional roles across our{" "}
            <Box as="span" color="#019fab" fontWeight="semibold">
              Engineering
            </Box>{" "}
            and{" "}
            <Box as="span" color="#019fab" fontWeight="semibold">
              Operations
            </Box>{" "}
            lines and help drive global development transformation.
          </>
        }
      />

      {/* 3. Global Information Sections - Layout gaps cleared naturally without clipping */}
      <Box 
        mt={0}
        pt={0} 
        position="relative" 
        zIndex={10} 
        bg="white"
      >
        <FaqAccordion />
        <GoodnexusCard />
      </Box>
    </Box>
  );
}