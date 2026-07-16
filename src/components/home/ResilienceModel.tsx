"use client";

import { Box, Container, Heading, Stack, Text } from "@chakra-ui/react";
import MagicBento from "./MagicBento";

export default function ResilienceModel() {
  return (
    <Box 
      as="section" 
      bg="white" 
      pt={{ base: 4, md: 6 }} // Dramatically reduced top padding to remove excessive gap
      pb={{ base: 16, md: 24 }} // Retained clean bottom breathing room
      position="relative" 
      overflow="hidden"
    >
      <Box
        position="absolute"
        bottom="-15%"
        left="-10%"
        w="45%"
        aspectRatio="1"
        rounded="full"
        bg="#019fab"
        opacity="0.06"
        filter="blur(100px)"
        pointerEvents="none"
      />
      <Container maxW="7xl" px={{ base: 5, md: 10 }}>
        <Stack gap="4" mb={{ base: 8, md: 10 }} align="center">
          <Box
            px="4"
            py="1.5"
            rounded="lg"
            bg="rgba(1,159,171,0.10)"
            border="1px solid rgba(1,159,171,0.26)"
          >
            <Text fontSize="11px" fontWeight="700" color="#019fab" letterSpacing="0.08em" textTransform="uppercase">
              Our Model
            </Text>
          </Box>
          <Heading
            as="h2"
            mb="1"
            fontFamily="'Montserrat', sans-serif"
            fontWeight="700"
            letterSpacing="-0.02em"
            color="#1F2A44"
            textAlign="center"
            fontSize={{ base: "27px", sm: "31px", md: "42px", lg: "52px" }}
            lineHeight="1.1"
            maxW="980px"
          >
            Resilience 360+<br />
            <Box as="span" color="#019fab">
              Integrated System
            </Box>
          </Heading>
          <Text
            mb="2"
            color="gray.600"
            textAlign="center"
            fontSize={{ base: "14px", md: "16px" }}
            fontWeight="400"
            maxW="760px"
            lineHeight="1.8"
          >
            A unified framework that combines system strengthening, economic resilience,<br />
            and digital intelligence into one coordinated model.
          </Text>
        </Stack>

        <Box position="relative">
          <Box
            display="block"
            position="absolute"
            left={{ base: "-8px", md: "-18px", lg: "-52px" }}
            top={{ base: "54%", md: "58%", lg: "63%" }}
            transform="translateY(-50%) rotate(180deg)"
            writingMode="vertical-rl"
            color="#64748b"
            fontSize={{ base: "10px", md: "11px", lg: "12px" }}
            fontWeight="800"
            letterSpacing={{ base: "0.16em", md: "0.2em", lg: "0.25em" }}
            opacity={{ base: 0.8, md: 0.95 }}
            zIndex={3}
          >
            MODEL
          </Box>
          <Box
            display="block"
            position="absolute"
            right={{ base: "-12px", md: "-22px", lg: "-64px" }}
            top={{ base: "79%", md: "42%", lg: "36%" }}
            transform="translateY(-50%) rotate(180deg)"
            writingMode="vertical-rl"
            color="#64748b"
            fontSize={{ base: "10px", md: "11px", lg: "12px" }}
            fontWeight="800"
            letterSpacing={{ base: "0.13em", md: "0.16em", lg: "0.2em" }}
            opacity={{ base: 0.8, md: 0.95 }}
            zIndex={3}
          >
            HOW IT WORKS
          </Box>

          <MagicBento
            textAutoHide={true}
            enableStars={true}
            enableSpotlight={true}
            enableBorderGlow={true}
            enableTilt={true}
            enableMagnetism={true}
            clickEffect={true}
            spotlightRadius={300}
            particleCount={12}
            glowColor="53, 240, 208"
          />
        </Box>
      </Container>
    </Box>
  );
}