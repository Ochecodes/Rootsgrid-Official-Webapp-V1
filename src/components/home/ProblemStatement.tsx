'use client';

import { useRef, useState, useCallback, useEffect, type MouseEvent, type ReactNode } from 'react';
import NextLink from 'next/link';
import { Box, Button, Container, Flex, Grid, Heading, Text, useBreakpointValue } from '@chakra-ui/react';
import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';

const brandTeal = '#019fab';
const brandBlue = '#1E3A8A';
const slateText = '#1F2A44';

const rightSteps = [
  {
    number: '01',
    title: 'Disconnected Health Services',
    body: 'Care delivery separated from community realities and household barriers.',
    side: 'left',
    top: '8%',
  },
  {
    number: '02',
    title: 'Economic Barriers',
    body: 'Financial instability undermines access, adherence, and continuity of care.',
    side: 'right',
    top: '30%',
  },
  {
    number: '03',
    title: 'Data Without Action',
    body: 'Collected routinely, but not converted into proactive decisions.',
    side: 'left',
    top: '52%',
  },
  {
    number: '04',
    title: 'Underused Communities',
    body: 'Community structures are available but not fully integrated into service delivery.',
    side: 'right',
    top: '74%',
  },
];

const cardSlots = [
  { top: '8%', left: '8%' },
  { top: '30%', left: '47%' },
  { top: '52%', left: '8%' },
  { top: '74%', left: '47%' },
];
const mobileCardSlots = [
  { top: '6%', left: '14%' },
  { top: '29%', left: '14%' },
  { top: '52%', left: '14%' },
  { top: '75%', left: '14%' },
];

const baseOrder = [0, 1, 2, 3];

function shuffle<T>(arr: T[]) {
  const next = [...arr];
  for (let i = next.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [next[i], next[j]] = [next[j], next[i]];
  }
  return next;
}

function SpotlightCard({ children }: { children: ReactNode }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [spotlight, setSpotlight] = useState({ x: 0, y: 0, opacity: 0 });

  const handleMouseMove = useCallback((e: MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    setSpotlight({ x: e.clientX - rect.left, y: e.clientY - rect.top, opacity: 1 });
  }, []);

  const handleMouseEnter = useCallback((e: MouseEvent<HTMLDivElement>) => {
    (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(1,159,171,0.45)';
    (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-2px)';
  }, []);

  const handleMouseLeave = useCallback((e: MouseEvent<HTMLDivElement>) => {
    (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(255,255,255,0.24)';
    (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
    setSpotlight((s) => ({ ...s, opacity: 0 }));
  }, []);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      style={{
        position: 'relative',
        borderRadius: '16px',
        border: '1px solid rgba(255,255,255,0.24)',
        overflow: 'hidden',
        transition: 'border-color 0.3s, transform 0.2s',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          opacity: spotlight.opacity,
          transition: 'opacity 0.3s',
          background: `radial-gradient(240px circle at ${spotlight.x}px ${spotlight.y}px,
            rgba(1,159,171,0.2) 0%,
            rgba(1,159,171,0.08) 38%,
            transparent 72%)`,
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />
      <div style={{ position: 'relative', zIndex: 1 }}>{children}</div>
    </div>
  );
}

function FloatingCard({ number, title, body }: { number: string; title: string; body: string }) {
  return (
    <Box bg="white" rounded="xl" p="4" shadow="2xl" maxW="260px" w="full" borderLeft="3px solid" borderColor={brandTeal}>
      <Flex align="center" gap="2" mb="2">
        <Box
          w="22px"
          h="22px"
          rounded="full"
          bg={brandTeal}
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexShrink={0}
        >
          <Text fontSize="9px" fontWeight="800" color="white">
            {number}
          </Text>
        </Box>
        <Text fontSize="11px" fontWeight="700" color={brandBlue} lineHeight="1.2">
          {title}
        </Text>
      </Flex>
      <Text fontSize="10px" color="gray.500" lineHeight="1.55">
        {body}
      </Text>
    </Box>
  );
}

export default function ProblemStatement() {
  const shuffleTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const drawTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [slotOrder, setSlotOrder] = useState(baseOrder);
  const isMobile = useBreakpointValue({ base: true, md: false }) ?? false;
  const drawControls = useAnimation();

  const runDrawAnimation = useCallback(() => {
    if (drawTimerRef.current) clearTimeout(drawTimerRef.current);
    drawControls.set({ pathLength: 0 });
    drawTimerRef.current = setTimeout(() => {
      drawControls.start({
        pathLength: 1,
        transition: { duration: 1.05, ease: 'easeInOut' },
      });
    }, 40);
  }, [drawControls]);

  const stopShuffle = useCallback(() => {
    if (shuffleTimerRef.current) {
      clearInterval(shuffleTimerRef.current);
      shuffleTimerRef.current = null;
    }
  }, []);

  const startShuffle = useCallback(() => {
    if (shuffleTimerRef.current) return;
    setSlotOrder((prev) => shuffle(prev));
    shuffleTimerRef.current = setInterval(() => {
      setSlotOrder((prev) => shuffle(prev));
    }, 1000);
  }, []);

  const resetCards = useCallback(() => {
    stopShuffle();
    setSlotOrder(baseOrder);
  }, [stopShuffle]);

  useEffect(() => () => stopShuffle(), [stopShuffle]);

  useEffect(() => {
    runDrawAnimation();
    const onScroll = () => runDrawAnimation();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (drawTimerRef.current) clearTimeout(drawTimerRef.current);
    };
  }, [runDrawAnimation]);

  return (
    <Box 
      as="section" 
      position="relative" 
      py={{ base: 16, md: 24 }} 
      overflow="hidden"
      backgroundImage="linear-gradient(rgba(248, 250, 252, 0.88), rgba(248, 250, 252, 0.88)), url('/texturedbg.jpg')"
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundAttachment="fixed"
    >
      <Box
        position="absolute"
        bottom="-15%"
        left="-10%"
        w="45%"
        aspectRatio="1"
        rounded="full"
        bg={brandTeal}
        opacity="0.06"
        filter="blur(100px)"
        pointerEvents="none"
      />

      <Container maxW="7xl" px={{ base: 5, md: 10 }}>
        <Grid templateColumns={{ base: '1fr', lg: '1fr 1fr' }} gap={{ base: 14, lg: 10 }} alignItems="stretch">
          <Flex direction="column" gap="7" justify="space-between">
            <Box>
              <Flex align="center" justify={{ base: 'center', md: 'flex-start' }} gap="3" mb="6">
                <Box
                  px="4"
                  py="2"
                  rounded="lg"
                  bg="rgba(1,159,171,0.10)"
                  border="1px solid rgba(1,159,171,0.26)"
                >
                  <Text fontSize="11px" fontWeight="700" color={brandTeal} letterSpacing="0.08em" textTransform="uppercase">
                    The Problem
                  </Text>
                </Box>
              </Flex>

              <Heading as="h2" color={slateText} fontWeight="700" lineHeight="1.1" fontSize={{ base: '2xl', md: '3xl', lg: '38px' }} maxW="520px" mb="5">
                The challenge is not a lack of solutions -{' '}
                <Box as="span" color={brandTeal}>
                  it is{' '}
                  <Box as="span" position="relative" display="inline-block" onMouseEnter={runDrawAnimation}>
                    <Box as="span" display="inline-block" px="1">
                      fragmentation
                    </Box>
                    <svg
                      viewBox="0 0 320 86"
                      fill="none"
                      width="calc(100% + 22px)"
                      height="1.65em"
                      style={{
                        position: 'absolute',
                        left: '-11px',
                        bottom: '-0.43em',
                        pointerEvents: 'none',
                        overflow: 'visible',
                      }}
                    >
                      <motion.path
                        initial={{ pathLength: 0 }}
                        animate={drawControls}
                        d="M13 43 C 16 8, 86 5, 158 8 C 236 10, 304 9, 307 41 C 310 76, 242 79, 160 77 C 82 75, 13 77, 13 43 Z"
                        stroke="#FACC15"
                        strokeWidth={4}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        vectorEffect="non-scaling-stroke"
                        fill="none"
                      />
                    </svg>
                  </Box>
                  .
                </Box>
              </Heading>

              <Text color="gray.600" fontSize={{ base: '15px', md: '16px' }} lineHeight="1.95" maxW="560px" mb="5" textAlign="justify">
                Across many settings, health and development investments fail to realize their full potential because critical systems
                operate in isolation - disconnected from one another, from community realities, and from the evidence that should guide
                formerly timely decisions.
              </Text>
              <Text color="gray.600" fontSize={{ base: '15px', md: '16px' }} lineHeight="1.95" maxW="560px" mb="5" textAlign="justify">
                Funding channels, delivery operations, and accountability structures often advance in parallel rather than in concert,
                creating avoidable frictions that slow implementation, dilute measurable outcomes, and undermine institutional confidence.
              </Text>
              <Text color="gray.600" fontSize={{ base: '15px', md: '16px' }} lineHeight="1.95" maxW="560px" textAlign="justify">
                When coordination is fragmented, even well-designed interventions lose momentum at the point of service. The consequence is
                not merely operational inefficiency; it is diminished trust, delayed impact, and fewer opportunities to convert insight
                into sustained community-level progress.
              </Text>
            </Box>

            <Button
              as={NextLink}
              href="/about"
              alignSelf={{ base: 'center', md: 'flex-start' }}
              variant="outline"
              borderColor={brandBlue}
              color={brandBlue}
              rounded="xl"
              px="8"
              h="50px"
              fontWeight="600"
              _hover={{ bg: brandBlue, color: 'white', borderColor: brandBlue }}
            >
              Our Mission
            </Button>
          </Flex>

          <Box
            position="relative"
            h={{ base: '620px', sm: '660px', md: '640px' }}
            rounded="2xl"
            overflow="hidden"
            flexShrink={0}
            bg="#F5FAFB"
            border="1px solid"
            borderColor="teal.100"
            onMouseEnter={isMobile ? undefined : startShuffle}
            onMouseLeave={isMobile ? undefined : resetCards}
          >
            <Image
              src="/desola-lanre-ologun-BVr3XaBiWLU-unsplash.jpg"
              alt="Team working on systems"
              fill
              priority
              sizes="(max-width: 992px) 100vw, 50vw"
              style={{ objectFit: 'cover', objectPosition: 'center center' }}
            />

            <Box
              position="absolute"
              inset="0"
              style={{
                background:
                  'linear-gradient(120deg, rgba(12,22,48,0.58) 0%, rgba(12,22,48,0.35) 45%, rgba(12,22,48,0.2) 100%)',
              }}
            />

            <Box
              as="svg"
              viewBox="0 0 100 100"
              position="absolute"
              inset="0"
              w="100%"
              h="100%"
              zIndex="2"
              display={{ base: 'none', md: 'block' }}
            >
              <path d="M 43 18 H 56" stroke="rgba(255,255,255,0.58)" strokeWidth="0.36" fill="none" strokeDasharray="1.2 1.8" />
              <path d="M 56 18 V 34" stroke="rgba(255,255,255,0.58)" strokeWidth="0.36" fill="none" strokeDasharray="1.2 1.8" />
              <path d="M 56 34 H 68" stroke="rgba(255,255,255,0.58)" strokeWidth="0.36" fill="none" strokeDasharray="1.2 1.8" />

              <path d="M 57 40 H 44" stroke="rgba(255,255,255,0.58)" strokeWidth="0.36" fill="none" strokeDasharray="1.2 1.8" />
              <path d="M 44 40 V 56" stroke="rgba(255,255,255,0.58)" strokeWidth="0.36" fill="none" strokeDasharray="1.2 1.8" />
              <path d="M 44 56 H 31" stroke="rgba(255,255,255,0.58)" strokeWidth="0.36" fill="none" strokeDasharray="1.2 1.8" />

              <path d="M 43 62 H 56" stroke="rgba(255,255,255,0.58)" strokeWidth="0.36" fill="none" strokeDasharray="1.2 1.8" />
              <path d="M 56 62 V 78" stroke="rgba(255,255,255,0.58)" strokeWidth="0.36" fill="none" strokeDasharray="1.2 1.8" />
              <path d="M 56 78 H 68" stroke="rgba(255,255,255,0.58)" strokeWidth="0.36" fill="none" strokeDasharray="1.2 1.8" />

              <circle cx="43" cy="18" r="0.45" fill="white" />
              <circle cx="68" cy="34" r="0.45" fill="white" />
              <circle cx="57" cy="40" r="0.45" fill="white" />
              <circle cx="31" cy="56" r="0.45" fill="white" />
              <circle cx="43" cy="62" r="0.45" fill="white" />
              <circle cx="68" cy="78" r="0.45" fill="white" />
            </Box>

            <Box
              position="absolute"
              top="24.6%"
              left="56%"
              transform="translateX(-50%)"
              zIndex="3"
              pointerEvents="none"
              display={{ base: 'none', md: 'block' }}
            >
              <Text
                bg="rgba(12,22,48,0.9)"
                color="#00e7c4"
                fontSize="11px"
                fontWeight="700"
                px="4"
                py="1.5"
                rounded="full"
                border="1px solid rgba(255,255,255,0.2)"
              >
                Verify
              </Text>
            </Box>
            <Box
              position="absolute"
              top="46.8%"
              left="44%"
              transform="translateX(-50%)"
              zIndex="3"
              pointerEvents="none"
              display={{ base: 'none', md: 'block' }}
            >
              <Text
                bg="rgba(12,22,48,0.9)"
                color="#00e7c4"
                fontSize="11px"
                fontWeight="700"
                px="4"
                py="1.5"
                rounded="full"
                border="1px solid rgba(255,255,255,0.2)"
              >
                Impact
              </Text>
            </Box>
            <Box
              position="absolute"
              top="68.8%"
              left="56%"
              transform="translateX(-50%)"
              zIndex="3"
              pointerEvents="none"
              display={{ base: 'none', md: 'block' }}
            >
              <Text
                bg="rgba(12,22,48,0.9)"
                color="#00e7c4"
                fontSize="11px"
                fontWeight="700"
                px="4"
                py="1.5"
                rounded="full"
                border="1px solid rgba(255,255,255,0.2)"
              >
                Trust
              </Text>
            </Box>

            <Box position="absolute" inset="0" p={{ base: 4, md: 6 }} zIndex="4">
              {rightSteps.map((step, stepIndex) => {
                const slotIndex = slotOrder.indexOf(stepIndex);
                const slot = (isMobile ? mobileCardSlots : cardSlots)[slotIndex];

                return (
                  <motion.div
                    key={step.number}
                    style={{
                      position: 'absolute',
                      width: isMobile ? '72%' : '45%',
                    }}
                    animate={{
                      top: slot.top,
                      left: slot.left,
                      y: isMobile ? [0, -4, 0] : 0,
                    }}
                    transition={
                      isMobile
                        ? {
                            duration: 2.8,
                            ease: 'easeInOut',
                            repeat: Infinity,
                            delay: stepIndex * 0.18,
                          }
                        : { duration: 0.9, type: 'spring', bounce: 0.28 }
                    }
                  >
                    <SpotlightCard>
                      <FloatingCard number={step.number} title={step.title} body={step.body} />
                    </SpotlightCard>
                  </motion.div>
                );
              })}
            </Box>
          </Box>
        </Grid>
      </Container>
    </Box>
  );
}