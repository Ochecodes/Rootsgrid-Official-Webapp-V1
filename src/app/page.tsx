// src/app/page.tsx
"use client"

import { Box, Stack } from "@chakra-ui/react"
import Hero from "@/components/home/Hero"
import ProblemStatement from "@/components/home/ProblemStatement"
import OurSolution from "@/components/home/OurSolution"
import ResilienceModel from "@/components/home/ResilienceModel"
import ImpactBento from "@/components/home/ImpactBento"
import FaqAccordion from "@/components/home/FaqAccordion"
import GoodnexusCard from "@/components/home/GoodnexusCard"

export default function Home() {
  return (
    <Box bg="white">
      <Hero />
      <Stack gap="0">
        <Box position="relative">
          <Box position="relative" zIndex={0}>
            <ProblemStatement />
          </Box>
          <Box
            position={{ base: "relative", md: "sticky" }}
            top={{ base: "auto", md: "0" }}
            zIndex={2}
            borderTopRadius={{ base: "20px", md: "24px" }}
            overflow="hidden"
            bg="white"
          >
            <OurSolution />
          </Box>
          <Box
            position={{ base: "relative", md: "sticky" }}
            top={{ base: "auto", md: "0" }}
            zIndex={3}
            borderTopRadius={{ base: "20px", md: "24px" }}
            overflow="hidden"
            bg="white"
          >
            <ResilienceModel />
          </Box>
        </Box>
        <Box position="relative">
          <Box
            position={{ base: "relative", md: "sticky" }}
            top={{ base: "auto", md: "0" }}
            zIndex={4}
            borderTopRadius={{ base: "20px", md: "24px" }}
            overflow="hidden"
            bg="white"
          >
            <ImpactBento />
          </Box>
          <Box
            position="relative"
            zIndex={5}
            borderTopRadius={{ base: "20px", md: "24px" }}
            overflow="hidden"
            bg="white"
          >
            <FaqAccordion />
          </Box>
        </Box>
        <GoodnexusCard />
      </Stack>
    </Box>
  )
}
