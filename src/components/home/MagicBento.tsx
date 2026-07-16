"use client";

import React, { useMemo, useRef, useState } from "react";
import { Box, Grid, Text } from "@chakra-ui/react";
import { Global, css } from "@emotion/react";
import NextLink from "next/link";

const animationStyles = css`
  @keyframes tw {
    from { opacity: 0.2; transform: translateY(0); }
    to { opacity: 0.9; transform: translateY(-2px); }
  }
  @keyframes rippleEffect {
    to { transform: translate(-50%, -50%) scale(1); opacity: 0; }
  }
`;

export interface BentoCardProps {
  color?: string;
  title?: string;
  description?: string;
  label?: string;
  textColor?: string;
  descColor?: string;
}

export interface BentoProps {
  cards?: BentoCardProps[];
  textAutoHide?: boolean;
  enableStars?: boolean;
  enableSpotlight?: boolean;
  enableBorderGlow?: boolean;
  disableAnimations?: boolean;
  spotlightRadius?: number;
  particleCount?: number;
  enableTilt?: boolean;
  glowColor?: string;
  clickEffect?: boolean;
  enableMagnetism?: boolean;
}

const defaultCards: BentoCardProps[] = [
  { 
    color: "#1E2E5D", 
    title: "Resilience 360", 
    description: "Strengthens health systems, integrates service delivery, and links facilities with community support.", 
    label: "Integrated System",
    textColor: "#F8FAFC",
    descColor: "rgba(248, 250, 252, 0.72)"
  },
  { 
    color: "#0F7A85", 
    title: "Pathways", 
    description: "Addresses economic barriers through livelihood support, financial inclusion, and market linkages.", 
    label: "Integrated System",
    textColor: "#F8FAFC",
    descColor: "rgba(248, 250, 252, 0.72)"
  },
  { 
    color: "#C29B12", 
    title: "Digi", 
    description: "Uses digital engagement tools, localized AI risk prediction models, and dynamic analytical dashboards to empower teams and support proactive, rapid decision-making frameworks.", 
    label: "Integrated System",
    textColor: "#F8FAFC",
    descColor: "rgba(248, 250, 252, 0.72)"
  },
  { 
    color: "#2C4A75", 
    title: "Identify + Engage", 
    description: "Locate vulnerable households through predictive analytics, assess field-level needs accurately, and seamlessly activate highly coordinated community referral pathways.", 
    label: "How It Works",
    textColor: "#F8FAFC",
    descColor: "rgba(248, 250, 252, 0.72)"
  },
  { 
    color: "#145D66", 
    title: "Support + Track", 
    description: "Deliver targeted multi-sector interventions directly to beneficiaries while tracking systemic programmatic progress in real time across healthcare facilities and local communities.", 
    label: "How It Works",
    textColor: "#F8FAFC",
    descColor: "rgba(248, 250, 252, 0.72)"
  },
  { 
    color: "#3B4E63", 
    title: "Improve", 
    description: "Evaluate operational performance metrics, refine core programmatic interventions dynamically, and scale optimization processes continuously to lock in long-term, sustained impact.", 
    label: "How It Works",
    textColor: "#F8FAFC",
    descColor: "rgba(248, 250, 252, 0.72)"
  },
];

export default function MagicBento({
  cards = defaultCards,
  textAutoHide = true,
  enableStars = true,
  enableSpotlight = true,
  enableBorderGlow = true,
  disableAnimations = false,
  spotlightRadius = 300,
  particleCount = 12,
  enableTilt = true,
  glowColor = "53, 240, 208", 
  clickEffect = true,
  enableMagnetism = true,
}: BentoProps) {
  const gridRef = useRef<HTMLDivElement>(null);
  const [spot, setSpot] = useState({ x: 0, y: 0, show: false });

  const shouldDisable = useMemo(() => {
    if (disableAnimations) return true;
    if (typeof window === "undefined") return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, [disableAnimations]);

  return (
    <Box position="relative" w="100%">
      <Global styles={animationStyles} />
      
      {/* Dynamic Global Spotlight Layer */}
      {enableSpotlight && spot.show && !shouldDisable && (
        <Box
          position="fixed"
          borderRadius="full"
          transform="translate(-50%, -50%)"
          pointerEvents="none"
          zIndex={200}
          mixBlendMode="screen"
          left={`${spot.x}px`}
          top={`${spot.y}px`}
          w={`${spotlightRadius * 2.2}px`}
          h={`${spotlightRadius * 2.2}px`}
          background={`radial-gradient(circle, rgba(${glowColor}, 0.14) 0%, rgba(${glowColor}, 0.06) 35%, transparent 70%)`}
        />
      )}

      {/* Grid Layout Container */}
      <Grid
        ref={gridRef}
        templateColumns={{ base: "1fr", sm: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" }}
        gap="0.5em"
        p="0.75em"
        maxW="54em"
        mx="auto"
        w="100%"
        fontSize="clamp(1rem, 0.9rem + 0.5vw, 1.5rem)"
        onMouseMove={(e) => setSpot({ x: e.clientX, y: e.clientY, show: true })}
        onMouseLeave={() => setSpot((s) => ({ ...s, show: false }))}
      >
        {cards.map((card, i) => {
          const gridPositions = {
            base: { gridColumn: "auto", gridRow: "auto" },
            lg: [
              { gridColumn: "1", gridRow: "1" },
              { gridColumn: "2", gridRow: "1" },
              { gridColumn: "1 / span 2", gridRow: "2 / span 2" },
              { gridColumn: "3 / span 2", gridRow: "1 / span 2" },
              { gridColumn: "3", gridRow: "3" },
              { gridColumn: "4", gridRow: "3" },
            ][i] || { gridColumn: "auto", gridRow: "auto" }
          };

          return (
            <Box
              key={`${card.title}-${i}`}
              as={NextLink}
              href="/model"
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
              position="relative"
              aspectRatio={{ base: "4/3", lg: "auto" }} // Allow span boxes to expand vertically naturally
              minH={{ base: "180px", sm: "200px" }}
              w="100%"
              p="1.25em"
              borderRadius="14px"
              border="none"
              backgroundColor={card.color || "#120F17"}
              overflow="hidden"
              isolation="isolate"
              transition={shouldDisable ? "none" : "transform 0.2s ease, box-shadow 0.2s ease"}
              gridColumn={{ base: gridPositions.base.gridColumn, lg: gridPositions.lg.gridColumn }}
              gridRow={{ base: gridPositions.base.gridRow, lg: gridPositions.lg.gridRow }}
              _hover={shouldDisable ? {} : {
                transform: "translateY(-2px)",
                boxShadow: enableBorderGlow ? "0 4px 20px rgba(1, 159, 171, 0.28)" : "none"
              }}
              onMouseMove={(e) => {
                if (shouldDisable) return;
                const el = e.currentTarget;
                const r = el.getBoundingClientRect();
                const x = ((e.clientX - r.left) / r.width) * 100;
                const y = ((e.clientY - r.top) / r.height) * 100;
                el.style.setProperty("--glow-x", `${x}%`);
                el.style.setProperty("--glow-y", `${y}%`);
                el.style.setProperty("--glow-intensity", "1");

                if (enableTilt) {
                  const rx = ((e.clientY - (r.top + r.height / 2)) / r.height) * -8;
                  const ry = ((e.clientX - (r.left + r.width / 2)) / r.width) * 8;
                  el.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg)`;
                }
                if (enableMagnetism) {
                  const mx = (e.clientX - (r.left + r.width / 2)) * 0.02;
                  const my = (e.clientY - (r.top + r.height / 2)) * 0.02;
                  el.style.translate = `${mx}px ${my}px`;
                }
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.setProperty("--glow-intensity", "0");
                el.style.transform = "";
                el.style.translate = "0 0";
              }}
              onClick={(e) => {
                if (!clickEffect || shouldDisable) return;
                const el = e.currentTarget;
                const r = el.getBoundingClientRect();
                const ripple = document.createElement("span");
                ripple.style.position = "absolute";
                ripple.style.width = "220px";
                ripple.style.height = "220px";
                ripple.style.borderRadius = "999px";
                ripple.style.pointerEvents = "none";
                ripple.style.left = `${e.clientX - r.left}px`;
                ripple.style.top = `${e.clientY - r.top}px`;
                ripple.style.background = `radial-gradient(circle, rgba(${glowColor},0.35), transparent 70%)`;
                ripple.style.transform = "translate(-50%, -50%) scale(0)";
                ripple.style.animation = "rippleEffect 0.7s ease-out forwards";
                el.appendChild(ripple);
                setTimeout(() => ripple.remove(), 700);
              }}
              _after={enableBorderGlow ? {
                content: '""',
                position: "absolute",
                inset: "0",
                padding: "1px",
                background: `radial-gradient(220px circle at var(--glow-x, 50%) var(--glow-y, 50%), rgba(${glowColor}, calc(var(--glow-intensity, 0) * 0.85)) 0%, transparent 58%)`,
                borderRadius: "inherit",
                WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                WebkitMaskComposite: "xor",
                pointerEvents: "none",
                zIndex: 2
              } : undefined}
            >
              {/* Header Elements */}
              <Box display="flex" position="relative" zIndex={3} justifyContent="space-between" alignItems="center">
                {enableStars && !shouldDisable ? (
                  <Box display="flex" gap="4px" alignItems="center">
                    {Array.from({ length: Math.min(particleCount, 8) }).map((_, n) => (
                      <Box 
                        key={n} 
                        as="i" 
                        w="3px" 
                        h="3px" 
                        borderRadius="full" 
                        bg="rgba(255,255,255,0.6)" 
                        animation={`tw 1.4s ease-in-out infinite alternate ${n % 2 === 0 ? "0.2s" : "0s"}`}
                      />
                    ))}
                  </Box>
                ) : <Box />}
              </Box>

              {/* Text Layout Wrapper — Flex alignment forces midway starting position evenly across all blocks */}
              <Box 
                display="flex" 
                flexDirection="column" 
                position="relative" 
                zIndex={3} 
                flex="1" 
                justifyContent="flex-end"
              >
                <Text
                  as="h2"
                  fontWeight="600"
                  fontSize="16px"
                  mb="0.35em"
                  color={card.textColor || "#F8FAFC"}
                  noOfLines={textAutoHide ? 1 : undefined}
                >
                  {card.title}
                </Text>
                <Text
                  fontSize="12px"
                  lineHeight="1.4"
                  color={card.descColor || "rgba(248, 250, 252, 0.72)"}
                  noOfLines={undefined} 
                >
                  {card.description}
                </Text>
              </Box>
            </Box>
          );
        })}
      </Grid>
    </Box>
  );
}