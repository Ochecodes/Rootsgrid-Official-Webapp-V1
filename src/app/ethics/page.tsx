"use client";

import React from "react";
import { Box } from "@chakra-ui/react";
import {
  TrendingUp,
  ShieldCheck,
  Lightbulb,
  Heart,
  Share2,
  Users
} from "lucide-react";
import FaqAccordion from "@/components/home/FaqAccordion";
import GoodnexusCard from "@/components/home/GoodnexusCard";
import { HeroSection } from "@/components/ui/hero-section-2";
import { FeatureGrid } from "@/components/ui/feature-section";

const ethicsCategories = [
  {
    icon: <TrendingUp size={20} />,
    title: "Impact Driven",
    items: [
      { text: "Measurable social outcomes" },
      { text: "Scalable community metrics" },
      { text: "Sustainable development" },
    ],
  },
  {
    icon: <ShieldCheck size={20} />,
    title: "Integrity & Accountability",
    items: [
      { text: "Transparent open access" },
      { text: "Public performance audits" },
      { text: "Rigorous system validation" },
    ],
  },
  {
    icon: <Lightbulb size={20} />,
    title: "Innovation with Purpose",
    items: [
      { text: "Responsible engineering" },
      { text: "Privacy-first architecture" },
      { text: "Empowerment-led technology" },
    ],
  },
  {
    icon: <Heart size={20} />,
    title: "Community Centred",
    items: [
      { text: "Localization-first design" },
      { text: "Equitable system delivery" },
      { text: "Direct feedback channels" },
    ],
  },
  {
    icon: <Share2 size={20} />,
    title: "Collaboration",
    items: [
      { text: "Cross-functional insights" },
      { text: "Strategic global alliances" },
      { text: "Co-designed workflows" },
    ],
  },
  {
    icon: <Users size={20} />,
    title: "Equity & Inclusion",
    items: [
      { text: "Inclusive access channels" },
      { text: "Bias-free data models" },
      { text: "Representative oversight" },
    ],
  },
];

export default function EthicsPage() {
  return (
    <Box bg="white">
      {/* 1. Page Header Block */}
      <HeroSection
        title={
          <>
            <span style={{ color: "#019fab" }}>Ethics and</span> <br />
            <span style={{ color: "white" }}>Accountability</span>
          </>
        }
        subtitle="Our work is guided by integrity, community dignity, transparency, and responsible innovation across every system we design and support."
        backgroundImage="/hncontactbg.svg"
      />

      {/* 2. Structured Ethics Grid Section */}
      <FeatureGrid
        title={
          <>
  <Box as="span" color="#000000">
    Designed
  </Box>{" "}
  <Box as="span" position="relative" display="inline-block">
    for impact
    <svg
      viewBox="0 0 120 6"
      style={{
        position: "absolute",
        left: 0,
        bottom: 0,
        marginBottom: "-4px",
        width: "100%",
      }}
      aria-hidden="true"
    >
      <path
        d="M1 4.5C25.46 1.63 78.43 1.39 119 4.5"
        stroke="#EAB308" // Updated underline indicator to Deep Yellow
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  </Box>
</>
        }
        subtitle="We build structural models that hold themselves to high performance metrics, protecting local datasets and validating every development outcome."
        illustrationSrc="/hng-orbit-logo.png"
        categories={ethicsCategories}
        buttonText="Review our charter"
        buttonHref="/legal" // Routed to your local legal page path
      />

      {/* 3. Global Information Sections (With tightened margin controls) */}
      <Box mt={0} pt={0}>
        <FaqAccordion />
        <GoodnexusCard />
      </Box>
    </Box>
  );
}