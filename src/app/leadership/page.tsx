"use client";

import { Box, Container, Text, VStack, HStack, Grid } from "@chakra-ui/react";
import Image from "next/image";
import { useState } from "react";
import FaqAccordion from "@/components/home/FaqAccordion";
import GoodnexusCard from "@/components/home/GoodnexusCard";
import { HeroSection } from "@/components/ui/hero-section-2";

const leadershipData = [
  { name: "Bitrus Moses", role: "Executive director", image: "/Bitrus.jpg" },
  { name: "Oche Akor", role: "Principal Software Engineer", image: "/Oche.png" },
  { name: "Amina Bello", role: "Programs and partnerships", image: "/Amina.jpg" },
  { name: "Ajayi Sunday", role: "Field Operations", image: "/Ajayi.jpg" },
  { name: "Mariam Sani", role: "Community resilience lead", image: "/Mariam.jpg" },
  { name: "Zion Bauchi", role: "Data and outcomes lead", image: "/Zion.jpg" },
];

export default function LeadershipPage() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const activeIndex = hoveredIndex ?? 0;

  const portraitLayout = [
    { left: "0%", top: "35%", w: "30%", h: "31%" },
    { left: "33%", top: "16%", w: "34%", h: "37%" },
    { left: "69%", top: "5%", w: "31%", h: "35%" },
    { left: "33%", top: "56%", w: "34%", h: "37%" },
    { left: "69%", top: "47%", w: "31%", h: "35%" },
    { left: "8%", top: "6%", w: "24%", h: "28%" },
  ];

  return (
    <Box bg="white">
      <HeroSection
        title={
          <>
            <span style={{ color: "#019fab" }}>Leadership</span> <br />
            <span style={{ color: "white" }}>and Governance</span>
          </>
        }
        subtitle="Meet the people guiding HNGlobal's systems transformation work across health, resilience, innovation, and community-centered development."
        backgroundImage="/hncontactbg.svg"
      />

      {/* Team Interactive Section - Spacing completely flattened */}
      <Box
        pt={{ base: 16, md: 24 }}
        pb={0}
        mb={0}
        overflow="hidden"
        position="relative"
        bgImage="url('/texturedbg.jpg')"
        bgSize="cover"
        backgroundPosition="center"
      >
        {/* Whitish background tint overlay */}
        <Box position="absolute" inset={0} bg="rgba(255, 255, 255, 0.96)" />
        
        <Container maxW="6xl" px={{ base: 6, md: 8 }}>
          <Grid
            templateColumns={{ base: "1fr", lg: "1.2fr 0.9fr" }}
            gap={{ base: 12, lg: 16 }}
            alignItems="center"
            position="relative"
            zIndex={1}
          >
            
            {/* Left Column: Portrait Showcase */}
            <Box>
              <Box
                position="relative"
                h={{ base: "560px", sm: "680px", md: "620px" }}
                maxW={{ base: "420px", md: "700px" }}
                mx={{ base: "auto", lg: "0" }}
              >
                {leadershipData.map((person, index) => (
                  <Box
                    key={person.name}
                    position="absolute"
                    display={{ base: "none", md: "block" }}
                    {...portraitLayout[index]}
                    borderRadius="16px"
                    overflow="hidden"
                    transition="all 0.45s ease"
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    cursor="pointer"
                    opacity={hoveredIndex !== null && hoveredIndex !== index ? 0.38 : 1}
                    transform={hoveredIndex === index ? "translateY(-6px) scale(1.02)" : "translateY(0) scale(1)"}
                    boxShadow={hoveredIndex === index ? "0 20px 48px rgba(1,159,171,0.12)" : "0 12px 36px rgba(0,0,0,0.15)"}
                    zIndex={hoveredIndex === index ? 5 : 1}
                  >
                    <Image
                      src={person.image}
                      alt={person.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 34vw"
                      style={{
                        objectFit: "cover",
                        filter: hoveredIndex === index ? "grayscale(0%) contrast(1.02)" : "grayscale(100%) contrast(1.02)",
                        transition: "filter 0.45s ease",
                      }}
                    />
                    <Box position="absolute" inset={0} bg="rgba(0,0,0,0.05)" />
                  </Box>
                ))}

                {/* Mobile Responsive Structural View */}
                <Grid display={{ base: "grid", md: "none" }} templateColumns="repeat(2, 1fr)" gap="4">
                  {leadershipData.slice(0, 4).map((person, index) => (
                    <Box
                      key={person.name}
                      position="relative"
                      h="210px"
                      borderRadius="xl"
                      overflow="hidden"
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                    >
                      <Image
                        src={person.image}
                        alt={person.name}
                        fill
                        style={{
                          objectFit: "cover",
                          filter: "grayscale(100%) contrast(1.02)",
                          transition: "filter 0.5s ease",
                        }}
                      />
                      <Box position="absolute" inset={0} bg="rgba(0,0,0,0.05)" />
                    </Box>
                  ))}
                </Grid>
              </Box>
            </Box>

            {/* Right Column: Name Selection Roster */}
            <Box pl={{ base: 0, lg: 6 }}>
              <VStack align="flex-start" gap={{ base: 5, md: 6 }} w="full">
                {leadershipData.map((person, index) => (
                  <HStack
                    key={index}
                    gap={4}
                    cursor="pointer"
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    transition="all 0.4s ease"
                    opacity={hoveredIndex !== null && hoveredIndex !== index ? 0.45 : 1}
                    w="full"
                    transform={hoveredIndex === index ? "translateX(6px)" : "translateX(0)"}
                  >
                    {/* Active Element Pill Indicator */}
                    <Box
                      w="16px"
                      h="12px"
                      borderRadius="4px"
                      bg={activeIndex === index ? "#019fab" : "rgba(0, 0, 0, 0.15)"}
                      transition="all 0.4s ease"
                      boxShadow={activeIndex === index ? "0 0 14px rgba(1,159,171,0.25)" : "none"}
                      flexShrink={0}
                    />
                    <Box>
                      <Text
                        fontSize={{ base: "lg", md: "xl" }}
                        fontWeight="normal"
                        color={activeIndex === index ? "#1E3A8A" : "#4B5563"}
                        transition="color 0.4s ease"
                        lineHeight="1.2"
                        fontFamily="'Montserrat', sans-serif"
                      >
                        {person.name}
                      </Text>
                      <Text
                        fontSize="10px"
                        letterSpacing="0.25em"
                        color={activeIndex === index ? "#019fab" : "#9CA3AF"}
                        textTransform="uppercase"
                        fontWeight="normal"
                        mt={1.5}
                        transition="color 0.4s ease"
                        fontFamily="'Montserrat', sans-serif"
                      >
                        {person.role}
                      </Text>
                    </Box>
                  </HStack>
                ))}
              </VStack>
            </Box>
          </Grid>
        </Container>
      </Box>

      {/* Lower Common Layout Components - Negative margins close the gap completely */}
      <Box 
        mt={{ base: "-32px", md: "-48px" }} 
        pt={0} 
        position="relative" 
        zIndex={2} 
        bg="white"
      >
        <FaqAccordion />
        <GoodnexusCard />
      </Box>
    </Box>
  );
}
