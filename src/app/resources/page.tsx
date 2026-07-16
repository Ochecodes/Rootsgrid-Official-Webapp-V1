"use client";

import { Box } from "@chakra-ui/react";
import FaqAccordion from "@/components/home/FaqAccordion";
import GoodnexusCard from "@/components/home/GoodnexusCard";
import { HeroSection } from "@/components/ui/hero-section-2";
import { Blog8 } from "@/components/ui/blog8";

const resourceData = {
  heading: (
    <>
      <span style={{ color: "#000000" }}>Latest Insights & </span>
      <span style={{ color: "#019fab" }}>Field Knowledge</span>
    </>
  ),
  description:
    "Discover the latest insights, field learnings, and practical resources on systems transformation, community resilience, and outcome-driven development.",
  posts: [
    {
      id: "systems-transformation-global-health",
      title: "Systems Transformation in Global Health: The GoodNexus Approach",
      summary:
        "An in-depth analysis of how integrated systems transformation methodologies reshape global health delivery frameworks, optimization mechanics, and strategic baseline structures.",
      label: "Global Health",
      author: "Oche Akor",
      published: "29 Jun 2026",
      url: "/resources/systems-transformation-global-health",
      image: "/stocksnap-1.jpg",
      tags: ["Systems Transformation", "GoodNexus"],
    },
    {
      id: "linking-economic-resilience-health-outcomes",
      title: "Linking Economic Resilience To Health Outcomes: Resilience 360+ Model",
      summary:
        "Exploring the multi-dimensional connections between sustainable localized financial stability models and structural long-term health progression metrics.",
      label: "Resilience",
      author: "Oche Akor",
      published: "22 Jun 2026",
      url: "/resources/linking-economic-resilience-health-outcomes",
      image: "/stocksnap-2.jpg",
      tags: ["Economic Resilience", "Resilience 360+"],
    },
    {
      id: "data-driven-decision-making-development",
      title: "Data-Driven Decision Making in Development: How Data can Help in Targeted Giving",
      summary:
        "How statistical monitoring solutions, precise analytics frameworks, and foundational field metrics transform random distribution into maximum localized social impact infrastructure.",
      label: "Data & Insights",
      author: "Oche Akor",
      published: "15 Jun 2026",
      url: "/resources/data-driven-decision-making-development",
      image: "/stocksnap-3.jpg",
      tags: ["Targeted Giving", "Data Systems"],
    },
  ],
};

export default function ResourcesPage() {
  return (
    <Box bg="#F8FAFC">
      {/* Hero Section */}
      <HeroSection
        title={
          <>
            <span style={{ color: "#019fab" }}>Insights</span> <br />
            <span style={{ color: "white" }}>and Resources</span>
          </>
        }
        subtitle="Explore ideas, field learning, and practical resources on systems transformation, resilience, digital intelligence, and outcome-driven development."
        backgroundImage="/hncontactbg.svg"
      />
      
      {/* Unified Layout Background Canvas Wrapper 
        Houses both components smoothly with zero spacing gaps or edge clipping.
      */}
      <Box 
        backgroundImage="linear-gradient(rgba(248, 250, 252, 0.88), rgba(248, 250, 252, 0.88)), url('/texturedbg.jpg')"
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundAttachment="fixed"
        w="full"
      >
        {/* Render Blog Posts directly onto the shared background canvas */}
        <Blog8 {...resourceData} />

        {/* FAQ sits seamlessly directly underneath the blog grid */}
        <Box pt={{ base: 12, md: 16 }} pb={{ base: 16, md: 24 }}>
          <FaqAccordion />
        </Box>
      </Box>

      {/* Global Card Panel Block Footer Section */}
      <Box bg="white">
        <GoodnexusCard />
      </Box>
    </Box>
  );
}