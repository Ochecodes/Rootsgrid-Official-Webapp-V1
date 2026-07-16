"use client";

import React from "react";
import { Box, Container, SimpleGrid, GridItem, Heading, Text, Button, VStack, HStack } from "@chakra-ui/react";
import { ArrowUpRight, Search, Users, ShieldAlert, BarChart3, RefreshCw } from "lucide-react";

interface ProcessItem {
  icon: React.ElementType;
  title: string;
  description: string;
}

interface ProcessSectionProps {
  subtitle: string;
  title: React.ReactNode;
  description: string;
  buttonText: string;
  buttonHref?: string;
}

const defaultProcessItems: ProcessItem[] = [
  { 
    icon: Search, 
    title: "Identify", 
    description: "Find vulnerable households and activate coordinated community pathways." 
  },
  { 
    icon: Users, 
    title: "Engage", 
    description: "Build deep local trust and connect community structures into our foundational system." 
  },
  { 
    icon: ShieldAlert, 
    title: "Support", 
    description: "Deliver support and track progress in real time across facilities and communities." 
  },
  { 
    icon: BarChart3, 
    title: "Track", 
    description: "Monitor deployment benchmarks continuously with robust, automated visual dashboards." 
  },
  { 
    icon: RefreshCw, 
    title: "Improve", 
    description: "Refine interventions continuously for sustained impact." 
  }
];

export function ProcessSection({
  subtitle,
  title,
  description,
  buttonText,
  buttonHref = "#",
}: ProcessSectionProps) {
  return (
    // Forced inner section bottom padding and margins to 0 to snap seamlessly to the next component
    <Box as="section" bg="white" color="black" pt={{ base: 16, md: 24 }} pb={0} mb={0} w="full">
      <Container maxW="6xl" px={{ base: 6, md: 8 }}>
        <SimpleGrid columns={{ base: 1, md: 12 }} gap={{ base: 12, md: 8, lg: 16 }} alignItems="center">
          
          {/* Left Block Side Column Panel */}
          <GridItem colSpan={{ base: 1, md: 4 }}>
            <VStack gap={4} align="flex-start" textAlign="left">
              <Text
                fontSize="xs"
                fontWeight="semibold"
                textTransform="uppercase"
                letterSpacing="widest"
                color="#019fab"
                fontFamily="'Montserrat', sans-serif"
              >
                {subtitle}
              </Text>
              <Heading
                as="h2"
                fontSize={{ base: "3xl", md: "4xl" }}
                fontWeight="normal"
                color="#000000"
                fontFamily="'Montserrat', sans-serif"
                lineHeight="1.2"
              >
                {title}
              </Heading>
              <Text
                fontSize="sm"
                color="gray.600"
                lineHeight="relaxed"
                fontFamily="'Montserrat', sans-serif"
              >
                {description}
              </Text>
              <Box pt={2}>
                <a href={buttonHref}>
                  <Button
                    bg="#019fab"
                    color="white"
                    size="md"
                    px={6}
                    borderRadius="md"
                    fontWeight="normal"
                    fontFamily="'Montserrat', sans-serif"
                    _hover={{ bg: "#00818c", transform: "translateY(-2px)" }}
                    transition="all 0.2s cubic-bezier(0.4, 0, 0.2, 1)"
                  >
                    <HStack gap={2}>
                      <Text>{buttonText}</Text>
                      <ArrowUpRight size={16} />
                    </HStack>
                  </Button>
                </a>
              </Box>
            </VStack>
          </GridItem>

          {/* Right Block Side Grid Arena Layout */}
          <GridItem colSpan={{ base: 1, md: 8 }}>
            <SimpleGrid columns={{ base: 1, sm: 2 }} gap={6}>
              {defaultProcessItems.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <Box
                    key={index}
                    p={6}
                    bg="#F8FAFC"
                    borderRadius="xl"
                    border="1px solid"
                    borderColor="gray.100"
                    position="relative"
                    cursor="pointer"
                    transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
                    _hover={{
                      borderColor: "#019fab",
                      bg: "white",
                      boxShadow: "lg",
                      transform: "translateY(-4px)"
                    }}
                  >
                    <Box
                      position="absolute"
                      left={0}
                      top="25%"
                      h="50%"
                      w="2px"
                      bg="transparent"
                      _groupHover={{ bg: "#019fab" }}
                    />
                    
                    <Box
                      w={10}
                      h={10}
                      borderRadius="md"
                      bg="white"
                      border="1px solid"
                      borderColor="gray.200"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      color="#019fab"
                      mb={4}
                    >
                      <IconComponent size={20} />
                    </Box>

                    <VStack align="flex-start" gap={1}>
                      <Text
                        fontSize="md"
                        fontWeight="semibold"
                        color="#000000"
                        fontFamily="'Montserrat', sans-serif"
                      >
                        {item.title}
                      </Text>
                      <Text
                        fontSize="xs"
                        color="gray.600"
                        lineHeight="relaxed"
                        fontFamily="'Montserrat', sans-serif"
                      >
                        {item.description}
                      </Text>
                    </VStack>
                  </Box>
                );
              })}
            </SimpleGrid>
          </GridItem>

        </SimpleGrid>
      </Container>
    </Box>
  );
}