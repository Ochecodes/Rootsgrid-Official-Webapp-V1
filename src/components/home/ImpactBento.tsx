"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import NextLink from "next/link";
import { Box, Container, Grid, Heading, Stack, Text, useBreakpointValue } from "@chakra-ui/react";
import Threads from "./Threads";

// Optimized high-speed rolling counter loop that ticks until it hits the target value
function CountUp({ end, suffix = "", start = false }: { end: number; suffix?: string; start?: boolean }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return;
    
    // Calculate a dynamic quick step interval based on value size
    const increment = Math.max(1, Math.floor(end / 15));
    
    const timer = setInterval(() => {
      setValue((prev) => {
        if (prev >= end) {
          clearInterval(timer);
          return end;
        }
        return Math.min(prev + increment, end);
      });
    }, 25); // Fast execution speed matching UI animation targets

    return () => clearInterval(timer);
  }, [end, start]);

  return (
    <Text fontSize={{ base: "36px", md: "50px" }} lineHeight="1" fontWeight="600" color="#019fab">
      {value}
      {suffix}
    </Text>
  );
}

export default function ImpactBento() {
  const enableThreadsMouse = useBreakpointValue({ base: false, md: true }) ?? false;
  const showThreads = useBreakpointValue({ base: false, md: true }) ?? false;
  const isMobile = useBreakpointValue({ base: true, md: false }) ?? false;
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);
  const startCounters = isMobile || visible;

  useEffect(() => {
    if (isMobile) return;
    const target = sectionRef.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -4% 0px", threshold: 0.05 }
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, [isMobile]);

  const stats = useMemo(
    () => [
      { end: 95, suffix: "%+", label: "Retention ambition" },
      { end: 95, suffix: "%+", label: "Viral suppression ambition" },
      { end: 3, suffix: "", label: "Integrated system layers" },
      { end: 1, suffix: "", label: "Closed-loop model" },
    ],
    []
  );

  return (
    <Box 
      ref={sectionRef} 
      as="section" 
      position="relative" 
      overflow="hidden" 
      py={{ base: 16, md: 22 }}
      backgroundImage="linear-gradient(rgba(248, 250, 252, 0.88), rgba(248, 250, 252, 0.88)), url('/texturedbg.jpg')"
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundAttachment="fixed"
    >
      {/* Decorative Ellipse Pattern Overlays */}
      <Box
        position="absolute"
        right={{ base: "-30%", md: "-8%" }}
        top={{ base: "-6%", md: "-2%" }}
        w={{ base: "132%", md: "68%" }}
        h="100%"
        opacity={{ base: 0.24, md: 0.14 }}
        pointerEvents="none"
      >
        <svg viewBox="0 0 560 420" width="100%" height="100%">
          {Array.from({ length: 24 }).map((_, i) => (
            <ellipse
              key={i}
              cx="390"
              cy="160"
              rx={90 + i * 14}
              ry={70 + i * 14}
              fill="none"
              stroke={i % 2 === 0 ? "#019fab" : "#1E3A8A"}
              strokeOpacity="0.42"
              strokeWidth="1"
            />
          ))}
        </svg>
      </Box>

      <Container maxW="7xl" position="relative" zIndex={2} px={{ base: 5, md: 10 }}>
        <Stack gap="4" mb={{ base: 9, md: 11 }} align="center">
          <Box px="4" py="1.5" rounded="lg" bg="rgba(1,159,171,0.10)" border="1px solid rgba(1,159,171,0.26)">
            <Text fontSize="11px" fontWeight="700" color="#019fab" letterSpacing="0.08em" textTransform="uppercase">
              Impact Promise
            </Text>
          </Box>

          <Heading
            textAlign="center"
            color="#1F2A44"
            lineHeight="1.05"
            fontWeight="700"
            fontSize={{ base: "27px", sm: "31px", md: "42px", lg: "52px" }}
            maxW="1200px"
          >
            We measure success through{" "}
            <Box as="span" color="#019fab">
              outcomes.
            </Box>
          </Heading>

          <Text color="gray.600" lineHeight="1.9" fontSize={{ base: "14px", md: "19px" }} maxW="760px" textAlign="center">
            We track durable progress using clear outcome metrics across retention, suppression, integrated delivery,
            and closed-loop performance.
          </Text>
        </Stack>

        <Box
          position="relative"
          borderRadius={{ base: "20px", md: "24px" }}
          overflow="hidden"
          bg="transparent"
        >
          {showThreads && visible ? (
            <Box position="absolute" inset={0} opacity={{ base: 0.08, md: 0.13 }}>
              <Threads color={[0.06, 0.63, 0.67]} amplitude={0.62} distance={0.04} enableMouseInteraction={enableThreadsMouse} />
            </Box>
          ) : null}
          <Box position="absolute" inset={0} bg="rgba(245,253,252,0.32)" pointerEvents="none" />

          <Grid
            position="relative"
            zIndex={2}
            templateColumns={{ base: "1fr", sm: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" }}
            gap="0"
            borderRadius={{ base: "14px", md: "16px" }}
            overflow="hidden"
          >
            {stats.map((s, i) => (
              <Box
                key={s.label}
                as={NextLink}
                href="/model"
                px={{ base: 4, md: 5 }}
                py={{ base: 7, md: 8 }}
                bg="#ffffff73"
                // Significantly increased visibility of dividing borders across both desktop grid and responsive mobile variants
                borderRight={{ base: "none", lg: i === stats.length - 1 ? "none" : "1px solid rgba(1,159,171,0.32)" }}
                borderBottom={{ 
                  base: i < 3 ? "1px solid rgba(1,159,171,0.32)" : "none", 
                  sm: i < 2 ? "1px solid rgba(1,159,171,0.32)" : "none", 
                  lg: "none" 
                }}
                textAlign="center"
                _hover={{ bg: "#ffffff99" }}
                transition="background 0.2s ease"
              >
                <CountUp end={s.end} suffix={s.suffix} start={startCounters} />
                <Text mt="3" color="#1E3A8A" fontSize={{ base: "17px", md: "23px" }} fontWeight="400" lineHeight="1.2">
                  {s.label}
                </Text>
              </Box>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}