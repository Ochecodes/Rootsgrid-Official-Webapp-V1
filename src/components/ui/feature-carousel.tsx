"use client";

import React, { useState, useEffect } from "react";
import { Box, Container, Heading, Text, VStack, SimpleGrid, GridItem, Flex } from "@chakra-ui/react";
import Image from "next/image";

const modelData = [
  { 
    id: 0,
    title: "RESILIENCE 360", 
    description: "Strengthens health systems, integrates service delivery, and links facilities with community support.", 
    image: "/stocksnap-1.jpg"
  },
  { 
    id: 1,
    title: "PATHWAYS", 
    description: "Addresses economic barriers through livelihood support, financial inclusion, and market linkages.", 
    image: "/stocksnap-2.jpg"
  },
  { 
    id: 2,
    title: "DIGI", 
    description: "Uses digital engagement, AI risk prediction, and dashboards to support proactive decision-making.", 
    image: "/stocksnap-3.jpg"
  },
];

export default function FeatureCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % modelData.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <Box as="section" bg="white" color="black" pt={{ base: 16, md: 24 }} pb={0} w="full">
      <Container maxW="6xl" px={{ base: 6, md: 8 }}>
        
        {/* Header Block */}
        <VStack gap={3} align="flex-start" textAlign="left" mb={{ base: 10, md: 14 }}>
          <Heading
            as="h2"
            fontSize={{ base: "3xl", sm: "4xl" }}
            fontWeight="normal"
            color="#000000"
            fontFamily="'Montserrat', sans-serif"
            lineHeight="1.2"
          >
            Integrated Systems and{" "}
            <Box as="span" color="#019fab">
              Model
            </Box>
          </Heading>
          {/* <Text
            fontSize={{ base: "sm", md: "md" }}
            color="black"
            maxW="2xl"
            fontWeight="normal"
            fontFamily="'Montserrat', sans-serif"
            lineHeight="1.6"
          >
            Strengthens health systems, integrates service delivery, and links facilities with community support.
          </Text> */}
        </VStack>

        {/* Core Stage Container */}
        <Box 
          borderRadius="3xl" 
          bg="#E2E8F0" // Darker, more visible grey card area background
          overflow="hidden"
          minH="540px"
          boxShadow="inner"
        >
          <SimpleGrid columns={{ base: 1, lg: 12 }} minH="540px">
            
            {/* Left Panel Menu Track (Jean Texture Blended Layer) */}
            <GridItem 
              colSpan={{ base: 1, lg: 5 }} 
              bgImage="url('/texturedbg.jpg')"
              bgSize="cover"
              backgroundPosition="center"
              bgColor="#019fab"
              bgBlendMode="multiply" // Blends the blue color overlay into the image texture
              p={{ base: 8, md: 12 }}
              display="flex"
              flexDirection="column"
              justifyContent="center"
            >
              <VStack gap={3} align="flex-start" w="full" maxW="240px" mx="auto">
                {modelData.map((item, idx) => {
                  const isSelected = activeIndex === idx;
                  return (
                    <Box
                      key={item.id}
                      onClick={() => setActiveIndex(idx)}
                      cursor="pointer"
                      py={2.5}
                      px={5}
                      w="full"
                      borderRadius="full"
                      bg={isSelected ? "white" : "transparent"}
                      border="1px solid"
                      borderColor={isSelected ? "white" : "rgba(255,255,255,0.35)"}
                      color={isSelected ? "#019fab" : "white"}
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      transition="all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
                      _hover={{
                        bg: isSelected ? "white" : "rgba(255, 255, 255, 0.15)"
                      }}
                    >
                      <Text 
                        fontSize="11px" 
                        fontWeight="semibold" 
                        letterSpacing="widest"
                        fontFamily="'Montserrat', sans-serif"
                        textTransform="uppercase"
                        textAlign="center"
                      >
                        {item.title}
                      </Text>
                    </Box>
                  );
                })}
              </VStack>
            </GridItem>

            {/* Right Panel: 3D Horizontal Stage Arena */}
            <GridItem 
              colSpan={{ base: 1, lg: 7 }} 
              display="flex"
              alignItems="center"
              justifyContent="center"
              position="relative"
              overflow="hidden"
              p={6}
              style={{ perspective: "1000px" }} // Enables 3D perspective depth field
            >
              <Flex 
                position="relative" 
                w="full" 
                h="400px" 
                alignItems="center" 
                justifyContent="center"
                style={{ transformStyle: "preserve-3d" }}
              >
                {modelData.map((item, idx) => {
                  let diff = idx - activeIndex;
                  
                  if (diff < -1) diff += modelData.length;
                  if (diff > 1) diff -= modelData.length;

                  const isActive = diff === 0;
                  const isLeft = diff === -1;
                  const isRight = diff === 1;
                  const isHidden = !isActive && !isLeft && !isRight;

                  // Transform matrix configs to match reference video animations
                  let translateX = "0%";
                  let rotateY = "0deg";
                  let scale = 1;
                  let opacity = 1;
                  let blurAmount = "0px";

                  if (isLeft) {
                    translateX = "-60%";
                    rotateY = "35deg"; // Slanted inwards edge positioning
                    scale = 0.8;
                    opacity = 0.5;
                    blurAmount = "3px";
                  } else if (isRight) {
                    translateX = "60%";
                    rotateY = "-35deg"; // Slanted inwards edge positioning
                    scale = 0.8;
                    opacity = 0.5;
                    blurAmount = "3px";
                  } else if (isHidden) {
                    opacity = 0;
                    scale = 0.6;
                  }

                  return (
                    <Box 
                      key={item.id}
                      position="absolute"
                      w="280px"
                      h="380px"
                      borderRadius="2xl" 
                      overflow="hidden"
                      boxShadow={isActive ? "2xl" : "md"}
                      transition="all 0.6s cubic-bezier(0.4, 0, 0.2, 1)"
                      pointerEvents={isActive ? "auto" : "none"}
                      style={{
                        zIndex: isActive ? 10 : 5,
                        transform: `translate3d(${translateX}, 0, 0) scale(${scale}) rotateY(${rotateY})`,
                        opacity: opacity,
                        filter: `blur(${blurAmount})`
                      }}
                    >
                      <Flex direction="column" w="full" h="full">
                        
                        {/* Top Half: Visual Asset */}
                        <Box position="relative" w="full" h="50%">
                          <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            sizes="280px"
                            style={{ objectFit: "cover" }}
                            priority={idx === 0}
                          />
                        </Box>

                        {/* Bottom Half: Solid Black Background Area */}
                        <Box 
                          w="full" 
                          h="50%" 
                          bg="black" 
                          p={5} 
                          color="white"
                          display="flex"
                          flexDirection="column"
                          justifyContent="center"
                        >
                          <Heading 
                            as="h4" 
                            fontSize="xs" 
                            fontWeight="bold" 
                            fontFamily="'Montserrat', sans-serif"
                            mb={1.5}
                            letterSpacing="wider"
                            color="#019fab" // Kept card headers aligned to brand color accent
                          >
                            {item.title}
                          </Heading>
                          <Text 
                            fontSize="10px" 
                            color="gray.300" 
                            lineHeight="relaxed"
                            fontFamily="'Montserrat', sans-serif"
                          >
                            {item.description}
                          </Text>
                        </Box>

                      </Flex>
                    </Box>
                  );
                })}
              </Flex>
            </GridItem>

          </SimpleGrid>
        </Box>

      </Container>
    </Box>
  );
}
