"use client";

import React from "react";
import { Box, Container, SimpleGrid, GridItem, Heading, Text, Button, VStack, HStack } from "@chakra-ui/react";
import Image from "next/image";

interface FeatureItem {
  text: string;
  href?: string;
}

interface FeatureCategory {
  icon: React.ReactNode;
  title: string;
  items: FeatureItem[];
}

interface FeatureGridProps {
  title: React.ReactNode;
  subtitle: string;
  illustrationSrc: string;
  categories: FeatureCategory[];
  buttonText: string;
  buttonHref?: string;
}

export function FeatureGrid({
  title,
  subtitle,
  illustrationSrc,
  categories = [],
  buttonText,
  buttonHref = "#",
}: FeatureGridProps) {
  return (
    <Box as="section" bg="white" color="black" pt={{ base: 16, md: 24 }} pb={0}>
      <Container maxW="6xl" px={{ base: 6, md: 8 }}>
        
        {/* Header Block */}
        <VStack gap={3} align="center" textAlign="center" mb={{ base: 12, md: 16 }}>
          <Heading
            as="h2"
            fontSize={{ base: "3xl", sm: "4xl" }}
            fontWeight="normal"
            color="#019fab" // Updated Navy to Teal
            fontFamily="'Montserrat', sans-serif"
            lineHeight="1.2"
          >
            {title}
          </Heading>
          <Text
            fontSize={{ base: "sm", md: "md" }}
            color="gray.600"
            maxW="2xl"
            fontWeight="normal"
            fontFamily="'Montserrat', sans-serif"
          >
            {subtitle}
          </Text>
        </VStack>

        {/* Core Showcase Grid Layout */}
        <SimpleGrid columns={{ base: 1, lg: 12 }} gap={{ base: 12, lg: 16 }} alignItems="start">
          
          {/* Left Column: Categories Grid */}
          <GridItem colSpan={{ base: 1, lg: 7 }}>
            <SimpleGrid columns={{ base: 1, sm: 2 }} gap={8}>
              {categories.map((category, idx) => (
                <VStack key={idx} align="flex-start" gap={3}>
                  <HStack gap={3} color="#019fab">
                    <Box flexShrink={0}>{category.icon}</Box>
                    <Text
                      fontSize="md"
                      fontWeight="medium"
                      color="#019fab" // Updated Navy to Teal
                      fontFamily="'Montserrat', sans-serif"
                    >
                      {category.title}
                    </Text>
                  </HStack>
                  
                  <VStack align="flex-start" gap={1.5} w="full" pl={9}>
                    {category.items.map((item, itemIdx) => (
                      <Text
                        key={itemIdx}
                        fontSize="sm"
                        color="gray.600"
                        fontWeight="normal"
                        fontFamily="'Montserrat', sans-serif"
                        cursor={item.href ? "pointer" : "default"}
                        _hover={item.href ? { color: "#00818c" } : {}}
                        transition="color 0.2s"
                      >
                        {item.text}
                      </Text>
                    ))}
                  </VStack>
                </VStack>
              ))}
            </SimpleGrid>

            {/* Bottom Call-To-Action Button */}
            <Box mt={10} pl={9}>
              <a href={buttonHref}>
                <Button
                  bg="#019fab"
                  color="white"
                  size="md"
                  px={6}
                  borderRadius="md"
                  fontWeight="normal"
                  fontFamily="'Montserrat', sans-serif"
                  _hover={{ bg: "#00818c" }}
                  transition="all 0.2s"
                >
                  {buttonText}
                </Button>
              </a>
            </Box>
          </GridItem>

          {/* Right Column: Transparent Illustration Container */}
          <GridItem colSpan={{ base: 1, lg: 5 }} display="flex" justifyContent="center">
            <Box
              position="relative"
              w="full"
              maxW="400px"
              h="320px"
              overflow="hidden"
              bg="transparent" // Removed gray backdrop fill
            >
              <Image
                src={illustrationSrc}
                alt="Feature illustration mockup"
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                style={{ objectFit: "contain" }}
              />
            </Box>
          </GridItem>

        </SimpleGrid>
      </Container>
    </Box>
  );
}