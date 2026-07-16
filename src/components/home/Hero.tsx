'use client';

import { useEffect, useRef } from 'react';
import { Box, Container, Heading, Text, Stack, Button } from '@chakra-ui/react';
import Link from 'next/link';
import Image from 'next/image';
import { useMotionTemplate, useMotionValue, motion, animate } from 'framer-motion';

const NAV_BLEND_COLOR = "#0D1B4A";
const brandTeal = "#019fab";

// All deep navies — shift is atmospheric, not jarring
const AURORA_COLORS = ["#0D1B4A", "#0B2362", "#0E2D72", "#091852", "#0A1F4E"];

// ─────────────────────────────────────────
// Shooting stars via native Canvas
// ─────────────────────────────────────────
function ShootingStars() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let rafId: number;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    type Star = {
      x: number; y: number;
      trailLen: number; speed: number;
      size: number; opacity: number;
      alive: boolean;
    };

    const spawn = (): Star => ({
      x: Math.random() * canvas.width * 0.75,
      y: Math.random() * canvas.height * 0.55,
      trailLen: 90 + Math.random() * 120,
      speed: 7 + Math.random() * 7,
      size: 1.2 + Math.random() * 0.9,
      opacity: 0,
      alive: true,
    });

    const pool: Star[] = Array.from({ length: 7 }, (_, i) => {
      const s = spawn();
      s.alive = i < 3; // stagger initial burst
      return s;
    });

    const tick = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const s of pool) {
        if (!s.alive) {
          if (Math.random() < 0.003) Object.assign(s, spawn());
          continue;
        }

        s.x += s.speed;
        s.y += s.speed * 0.45;
        s.opacity = Math.min(1, s.opacity + 0.045);

        // Teal gradient trail
        const grad = ctx.createLinearGradient(
          s.x - s.trailLen, s.y - s.trailLen * 0.45,
          s.x, s.y
        );
        grad.addColorStop(0, `rgba(1,159,171,0)`);
        grad.addColorStop(1, `rgba(1,210,220,${s.opacity * 0.75})`);

        ctx.beginPath();
        ctx.moveTo(s.x - s.trailLen, s.y - s.trailLen * 0.45);
        ctx.lineTo(s.x, s.y);
        ctx.strokeStyle = grad;
        ctx.lineWidth = s.size;
        ctx.lineCap = 'round';
        ctx.stroke();

        // Bright teal head
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size * 1.8, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(180,245,248,${s.opacity * 0.95})`;
        ctx.fill();

        // Soft glow halo
        const halo = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, s.size * 6);
        halo.addColorStop(0, `rgba(1,210,220,${s.opacity * 0.3})`);
        halo.addColorStop(1, `rgba(1,210,220,0)`);
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size * 6, 0, Math.PI * 2);
        ctx.fillStyle = halo;
        ctx.fill();

        if (s.x > canvas.width + 150 || s.y > canvas.height + 150) {
          s.alive = false;
        }
      }

      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        zIndex: 1,
        pointerEvents: 'none',
      }}
    />
  );
}

// ─────────────────────────────────────────
// Hero
// ─────────────────────────────────────────
export default function Hero() {
  const color = useMotionValue(AURORA_COLORS[0]);

  useEffect(() => {
    const controls = animate(color, AURORA_COLORS, {
      ease: 'easeInOut',
      duration: 14,
      repeat: Infinity,
      repeatType: 'mirror',
    });
    return () => controls.stop();
  }, [color]);

  // Overlay: top aurora color bleeds into transparent mid, then back to nav color at bottom
  const overlayBg = useMotionTemplate`linear-gradient(
    to bottom,
    ${color} 0%,
    rgba(10,20,60,0.50) 38%,
    rgba(10,22,65,0.62) 72%,
    ${NAV_BLEND_COLOR} 100%
  )`;

  return (
    <Box
      as="section"
      position="relative"
      minH={{ base: "auto", md: "92vh" }}
      py={{ base: "4rem", md: "0" }} // Added more comfortable, proportional mobile spacing
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      overflow="hidden"
      borderBottomLeftRadius={{ base: "2xl", md: "40px" }}
      borderBottomRightRadius={{ base: "2xl", md: "40px" }}
    >
      {/* Layer 0 — background image */}
      <Image
        src="/hero-planet.jpg"
        alt="Globe background"
        fill
        priority
        sizes="100vw"
        style={{ objectFit: "cover", objectPosition: "center center", zIndex: 0 }}
      />

      {/* Layer 1 — animated aurora overlay */}
      <motion.div
        style={{
          position: 'absolute',
          inset: 0,
          background: overlayBg,
          zIndex: 1,
        }}
      />

      {/* Layer 1 — shooting stars */}
      <ShootingStars />

      {/* Layer 1 — teal atmosphere glow */}
      <Box
        position="absolute"
        top="-5%"
        left="-5%"
        w="40%"
        aspectRatio="1"
        rounded="full"
        bg={brandTeal}
        opacity="0.10"
        filter="blur(90px)"
        zIndex="1"
        pointerEvents="none"
      />

      {/* Layer 2 — content */}
      <Container
        maxW="6xl"
        position="relative"
        zIndex="2"
        textAlign="center"
        px={{ base: 6, md: 10 }}
      >
        <Box display="flex" flexDirection="column" alignItems="center" gap={{ base: "5", md: "7" }}>

          <Heading as="h1" color="white">
            <Box
              as="span"
              display="block"
              whiteSpace="nowrap"
              style={{
                fontSize: 'clamp(30px, 6.5vw, 90px)',
                fontWeight: 1000,
                lineHeight: '0.9em',
                letterSpacing: '-3px',
              }}
            >
              Transforming Systems.
            </Box>
            <Box
              as="span"
              display="block"
              whiteSpace="nowrap"
              style={{
                color: brandTeal,
                fontSize: 'clamp(30px, 6.5vw, 90px)',
                fontWeight: 1000,
                lineHeight: '1.05em',
                letterSpacing: '-3px',
                marginTop: '0.1em',
              }}
            >
              Changing Lives.
            </Box>
          </Heading>

          <Text
            color="whiteAlpha.800"
            maxW="2xl"
            style={{
              fontSize: 'clamp(15px, 1.4vw, 18px)',
              fontWeight: 500,
              lineHeight: '1.65em',
              letterSpacing: '-0.3px',
            }}
          >
            We design and scale integrated systems that connect health services,
            communities, economic resilience, and data, delivering sustainable
            outcomes at scale.
          </Text>

          <Stack direction={{ base: "column", sm: "row" }} gap="4" pt={{ base: "0.5rem", md: "2" }}>
            <Link href="/partnerships" passHref>
              <Button
                bg={brandTeal}
                color="white"
                fontSize="14px"
                fontWeight={600}
                borderRadius="10px"
                px="28px"
                py="22px"
                height="auto"
                boxShadow="0 4px 20px rgba(1,159,171,0.45)"
                _hover={{
                  bg: "#00818c",
                  transform: "translateY(-2px)",
                  boxShadow: "0 8px 25px rgba(1,159,171,0.5)",
                }}
                _active={{ bg: "#006d75" }}
                transition="all 0.2s ease-in-out"
              >
                Partner With Us
              </Button>
            </Link>

            <Link href="/model" passHref>
              <Button
                bg="transparent"
                color="white"
                fontSize="14px"
                fontWeight={600}
                borderRadius="10px"
                px="28px"
                py="22px"
                height="auto"
                border="1.5px solid rgba(255,255,255,0.40)"
                _hover={{
                  bg: "rgba(255,255,255,0.08)",
                  borderColor: "white",
                  transform: "translateY(-2px)",
                }}
                _active={{ bg: "rgba(255,255,255,0.12)" }}
                transition="all 0.2s ease-in-out"
              >
                Explore Our Model
              </Button>
            </Link>
          </Stack>

        </Box>
      </Container>

      {/* Layer 2 — bottom fade into next section */}
      <Box
        position="absolute"
        bottom="0"
        left="0"
        right="0"
        h="110px"
        style={{ background: `linear-gradient(to top, ${NAV_BLEND_COLOR}, transparent)` }}
        zIndex="2"
        pointerEvents="none"
      />
    </Box>
  );
}