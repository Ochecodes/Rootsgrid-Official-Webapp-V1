"use client"

import Image from "next/image"
import { Box, Container, Heading, Text, Stack } from "@chakra-ui/react"
import { motion } from "framer-motion"

const NAV_BLEND_COLOR = "#0D1B4A"
const TEAL = "#019fab"

export default function GoodNexusAIPage() {
  return (
    <Box
      as="section"
      position="relative"
      minH="calc(100dvh - 72px)"
      display="flex"
      alignItems="center"
      overflow="hidden"
    >
      <Image
        src="/hero-planet.jpg"
        alt="GoodNexus AI background"
        fill
        priority
        sizes="100vw"
        style={{ objectFit: "cover", objectPosition: "center center", zIndex: 0 }}
      />

      <Box
        position="absolute"
        inset={0}
        bg="linear-gradient(to bottom, rgba(13,27,74,0.94) 0%, rgba(10,22,65,0.72) 48%, #0D1B4A 100%)"
        zIndex={1}
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          background:
            "radial-gradient(48% 42% at 72% 24%, rgba(1,159,171,0.28) 0%, transparent 64%)",
          pointerEvents: "none",
        }}
      />

      <Container maxW="6xl" position="relative" zIndex={2} px={{ base: 6, md: 10 }}>
        <Stack gap="6" align="center" textAlign="center">
          <Text
            color={TEAL}
            fontSize="12px"
            fontWeight="800"
            letterSpacing="0.12em"
            textTransform="uppercase"
          >
            Coming soon
          </Text>

          <Heading as="h1" color="white">
            <Box
              as="span"
              display="block"
              style={{
                color: TEAL,
                fontSize: "clamp(38px, 7vw, 92px)",
                fontWeight: 1000,
                lineHeight: "0.95em",
                letterSpacing: "-3px",
              }}
            >
              GoodNexusAI
            </Box>
            <Box
              as="span"
              display="block"
              style={{
                fontSize: "clamp(30px, 5.5vw, 74px)",
                fontWeight: 1000,
                lineHeight: "1.05em",
                letterSpacing: "-2px",
                marginTop: "0.12em",
              }}
            >
              Giving, matched by intelligence.
            </Box>
          </Heading>

          <Text
            color="whiteAlpha.800"
            maxW="2xl"
            textAlign={{ base: "justify", md: "center" }}
            style={{
              fontSize: "clamp(15px, 1.4vw, 18px)",
              fontWeight: 500,
              lineHeight: "1.75em",
              letterSpacing: "-0.3px",
            }}
          >
            GoodNexus AI is an artificial intelligence powered platform that transforms how giving decisions are made by matching donors with real-time, high-impact opportunities based on data.
          </Text>
        </Stack>
      </Container>

      <Box
        position="absolute"
        bottom="0"
        left="0"
        right="0"
        h="110px"
        style={{ background: `linear-gradient(to top, ${NAV_BLEND_COLOR}, transparent)` }}
        zIndex={2}
        pointerEvents="none"
      />
    </Box>
  )
}
