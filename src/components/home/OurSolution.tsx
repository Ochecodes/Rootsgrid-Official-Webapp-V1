'use client';

import { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  Box,
  Container,
  Flex,
  Heading,
  Icon,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';
import {
  Activity,
  Building2,
  Database,
  HeartHandshake,
  Home,
} from 'lucide-react';

const nodes = [
  { id: 'facility', label: 'Facility', icon: Building2, color: '#2B6CB0' },
  { id: 'community', label: 'Community', icon: HeartHandshake, color: '#0FA5B5' },
  { id: 'household', label: 'Household', icon: Home, color: '#1D4E89' },
  { id: 'data', label: 'Data', icon: Database, color: '#0F766E' },
  { id: 'outcomes', label: 'Outcomes', icon: Activity, color: '#14B8A6' },
];

export default function OurSolution() {
  const [activeIndex, setActiveIndex] = useState(0);
  const orbitRadius = useBreakpointValue({ base: 96, sm: 118, md: 156, lg: 182 }) ?? 156;
  const nodeSize = useBreakpointValue({ base: 48, sm: 54, md: 58, lg: 60 }) ?? 58;
  const showHeavyBg = useBreakpointValue({ base: false, md: true }) ?? false;
  const orbitSize = orbitRadius * 2 + 110;
  const stepAngle = 360 / nodes.length;

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % nodes.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const getRotation = useCallback((index: number) => (index - activeIndex) * stepAngle, [activeIndex, stepAngle]);

  const activeNode = nodes[activeIndex];

  return (
    <Box
      as="section"
      position="relative"
      overflow="hidden"
      py={{ base: 16, md: 24 }}
      bg="white"
    >
      {showHeavyBg ? (
        <Box
          position="absolute"
          right={{ base: '-30%', md: '-8%' }}
          top={{ base: '-6%', md: '-2%' }}
          w={{ base: '132%', md: '68%' }}
          h="100%"
          opacity={{ base: 0.24, md: 0.14 }}
          pointerEvents="none"
        >
          <svg viewBox="0 0 560 420" width="100%" height="100%">
            {Array.from({ length: 14 }).map((_, i) => (
              <ellipse
                key={i}
                cx="390"
                cy="160"
                rx={90 + i * 20}
                ry={70 + i * 20}
                fill="none"
                stroke={i % 2 === 0 ? '#019fab' : '#1E3A8A'}
                strokeOpacity="0.34"
                strokeWidth="1"
              />
            ))}
          </svg>
        </Box>
      ) : (
        <>
          <Box
            position="absolute"
            inset={0}
            pointerEvents="none"
            bg="radial-gradient(90% 78% at 92% 8%, rgba(1,159,171,0.2) 0%, rgba(1,159,171,0.12) 32%, rgba(30,58,138,0.07) 52%, transparent 76%)"
          />
          <Box
            position="absolute"
            right="-40%"
            top="-10%"
            w="150%"
            h="100%"
            opacity={0.28}
            pointerEvents="none"
          >
            <svg viewBox="0 0 560 420" width="100%" height="100%">
              {Array.from({ length: 8 }).map((_, i) => (
                <ellipse
                  key={i}
                  cx="390"
                  cy="160"
                  rx={100 + i * 24}
                  ry={80 + i * 24}
                  fill="none"
                  stroke={i % 2 === 0 ? '#019fab' : '#1E3A8A'}
                  strokeOpacity="0.28"
                  strokeWidth="1"
                />
              ))}
            </svg>
          </Box>
        </>
      )}

      <Container maxW="7xl" position="relative" zIndex={2} px={{ base: 5, md: 10 }}>
        <Flex direction={{ base: 'column', lg: 'row' }} align="center" gap={{ base: 10, md: 12, lg: 14 }}>
          <Box w={{ base: '100%', lg: '44%' }}>
            <Heading
              color="#1F2A44"
              lineHeight="1.05"
              fontWeight="700"
              fontSize={{ base: '30px', sm: '34px', md: '46px', lg: '58px' }}
              maxW="580px"
              textAlign={{ base: 'center', lg: 'left' }}
            >
              We connect systems to deliver{' '}
              <Box as="span" color="#019fab">
                outcomes.
              </Box>
            </Heading>

            <Text
              color="gray.600"
              mt="6"
              lineHeight="1.9"
              fontSize={{ base: '15px', md: '19px' }}
              maxW="600px"
              textAlign={{ base: 'center', lg: 'left' }}
            >
              Heart for the Nation Initiative designs integrated systems that ensure interventions work together across
              facilities, communities, households, and data platforms.
            </Text>
          </Box>

          <Box w={{ base: '100%', lg: '56%' }} display="flex" justifyContent="center" overflow="visible">
            <Box
              position="relative"
              w={`${orbitSize}px`}
              h={`${orbitSize}px`}
              transform={{ base: 'translateX(0px)', md: 'translateX(10px)', lg: 'translateX(20px)' }}
            >
              <Box
                position="absolute"
                top="50%"
                left="50%"
                transform="translate(-50%, -50%)"
                w={`${orbitRadius * 2}px`}
                h={`${orbitRadius * 2}px`}
                rounded="full"
                border="1px solid rgba(148,163,184,0.42)"
              />

              {nodes.map((node, index) => {
                const isActive = index === activeIndex;
                const rotation = getRotation(index);
                return (
                  <motion.div
                    key={node.id}
                    animate={{
                      transform: `rotate(${rotation}deg) translateY(-${orbitRadius}px)`,
                      scale: isActive ? 1.08 : 1,
                      opacity: isActive ? 1 : 0.9,
                    }}
                    transition={{ duration: 0.85, ease: [0.34, 1.56, 0.64, 1] }}
                    style={{
                      width: `${nodeSize}px`,
                      height: `${nodeSize}px`,
                      position: 'absolute',
                      top: `calc(50% - ${nodeSize / 2}px)`,
                      left: `calc(50% - ${nodeSize / 2}px)`,
                    }}
                  >
                    <motion.div
                      animate={{ rotate: -rotation }}
                      transition={{ duration: 0.85, ease: [0.34, 1.56, 0.64, 1] }}
                      style={{ width: '100%', height: '100%' }}
                    >
                      <Box
                        role="button"
                        onClick={() => setActiveIndex(index)}
                        cursor="pointer"
                        w="100%"
                        h="100%"
                        rounded="full"
                        bg={isActive ? node.color : '#e2e8f0'}
                        border={isActive ? '2px solid #1E3A8A' : '1px solid #cbd5e1'}
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        transition="all 0.25s"
                        _hover={{ transform: 'scale(1.06)' }}
                      >
                        <Icon as={node.icon} boxSize={{ base: 5, md: 6 }} color="white" />
                      </Box>
                    </motion.div>
                  </motion.div>
                );
              })}

              <Box
                position="absolute"
                top="50%"
                left="50%"
                transform="translate(-50%, -50%)"
                w={{ base: '126px', md: '148px' }}
                h={{ base: '126px', md: '148px' }}
                rounded="full"
                bg="white"
                border="1px solid #cbd5e1"
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                p={{ base: '3', md: '4' }}
                textAlign="center"
              >
                <Image src="/hng-orbit-logo.png" alt="HNG logo" width={80} height={80} style={{ objectFit: 'contain' }} />
                <Text mt="1.5" fontSize={{ base: '11px', md: '12px' }} fontWeight="700" color="#334155" lineHeight="1.1">
                  {activeNode.label}
                </Text>
              </Box>
            </Box>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}
