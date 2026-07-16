"use client";

import React from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  Link,
  Badge,
  SimpleGrid,
  HStack,
} from "@chakra-ui/react";
import { ArrowUpRight } from "lucide-react";

interface JobOpening {
  id: string;
  title: string;
  location: string;
  type: string;
  url: string;
  isOpen: boolean;
}

interface JobCategory {
  category: string;
  openings: JobOpening[];
}

const DEFAULT_JOBS: JobCategory[] = [
  {
    category: "Engineering",
    openings: [
      {
        id: "eng-1",
        title: "Senior Frontend Developer",
        location: "Remote",
        type: "Full-time",
        url: "https://forms.google.com", // Updated to point directly to application links
        isOpen: false,
      },
      {
        id: "eng-2",
        title: "UI/UX Designer",
        location: "Remote",
        type: "Full-time",
        url: "https://forms.google.com",
        isOpen: false,
      },
      {
        id: "eng-3",
        title: "Project Manager",
        location: "Remote",
        type: "Full-time",
        url: "https://forms.google.com",
        isOpen: false,
      },
      {
        id: "eng-4",
        title: "Technical Lead",
        location: "Remote",
        type: "Full-time",
        url: "https://forms.google.com",
        isOpen: false,
      },
      {
        id: "eng-5",
        title: "Backend Engineer",
        location: "Remote",
        type: "Full-time",
        url: "https://forms.google.com",
        isOpen: false,
      },
      {
        id: "eng-6",
        title: "AI/ML Engineer",
        location: "Remote",
        type: "Full-time",
        url: "https://forms.google.com",
        isOpen: false,
      },
    ],
  },
  {
    category: "Operations",
    openings: [
      {
        id: "ops-1",
        title: "Administrative Assistant",
        location: "Remote",
        type: "Full-time",
        url: "https://forms.google.com", // Handled externally via target="_blank"
        isOpen: true,
      },
      {
        id: "ops-2",
        title: "Grant Writer",
        location: "Remote",
        type: "Full-time",
        url: "https://forms.google.com",
        isOpen: false,
      },
    ],
  },
];

interface Careers4Props {
  heading?: React.ReactNode;
  description?: React.ReactNode;
  categories?: JobCategory[];
}

export function Careers4({
  heading = "Job Openings",
  description,
  categories = DEFAULT_JOBS,
}: Careers4Props) {
  return (
    <Box as="section" pt={{ base: 12, md: 20 }} pb={0} mb={0} bg="white" color="black" w="full">
      <Container maxW="5xl" px={{ base: 5, md: 8 }}>
        
        {/* Header Block */}
        <Box maxW="3xl" mb={{ base: 10, md: 16 }}>
          <Heading
            as="h2"
            fontSize={{ base: "3xl", md: "4xl" }}
            fontWeight="normal"
            letterSpacing="-0.02em"
            mb={description ? 4 : 0}
            fontFamily="'Montserrat', sans-serif"
            color="#111827"
          >
            {heading}
          </Heading>
          {description && (
            <Text color="#6B7280" fontSize="md" lineHeight="1.6" fontFamily="'Montserrat', sans-serif" fontWeight="normal">
              {description}
            </Text>
          )}
        </Box>

        {/* Dynamic Category Lists */}
        <VStack gap={12} align="stretch" pb={{ base: 8, md: 12 }}>
          {categories.map((cat) => (
            <Box key={cat.category}>
              
              {/* Category Group Subheading */}
              <Heading
                as="h3"
                fontSize="lg"
                fontWeight="normal"
                mb={4}
                pb={2}
                color="#019fab" // Swapped Category to your clean theme brand teal
                borderBottom="2px solid"
                borderColor="rgba(1, 159, 171, 0.15)"
                fontFamily="'Montserrat', sans-serif"
              >
                {cat.category}
              </Heading>

              {/* Rows List */}
              <VStack gap={0} align="stretch">
                {cat.openings.map((job) => (
                  <SimpleGrid
                    key={job.id}
                    columns={{ base: 1, sm: 12 }}
                    alignItems="center"
                    gap={4}
                    py={5}
                    borderBottom="1px solid"
                    borderColor="#E5E7EB"
                    transition="all 0.2s ease"
                    opacity={job.isOpen ? 1 : 0.7}
                  >
                    {/* Job Title Column */}
                    <Box gridColumn={{ base: "span 1", sm: "span 6" }}>
                      <Text
                        fontWeight="normal"
                        fontSize={{ base: "md", md: "17px" }}
                        color="#111827"
                        fontFamily="'Montserrat', sans-serif"
                      >
                        {job.title}
                      </Text>
                    </Box>

                    {/* Location, Status & Metadata Actions Row Wrapper */}
                    <Box 
                      gridColumn={{ base: "span 1", sm: "span 6" }} 
                      display="flex" 
                      alignItems="center" 
                      justifyContent={{ base: "flex-start", sm: "flex-end" }}
                      gap={3}
                    >
                      {/* Brighter, High-Contrast Solid Brand Teal Location Pill */}
                      <Badge
                        px={3}
                        py={1}
                        borderRadius="full"
                        bg="#019fab"
                        color="white"
                        fontSize="xs"
                        fontWeight="semibold"
                        textTransform="none"
                        fontFamily="'Montserrat', sans-serif"
                        letterSpacing="wide"
                      >
                        {job.location}
                      </Badge>

                      {/* Brand Navy Subtle Status Pill */}
                      <Badge
                        px={3}
                        py={1}
                        borderRadius="full"
                        bg={job.isOpen ? "rgba(30, 58, 138, 0.08)" : "gray.100"}
                        color={job.isOpen ? "#1E3A8A" : "gray.500"}
                        border="1px solid"
                        borderColor={job.isOpen ? "rgba(30, 58, 138, 0.2)" : "gray.200"}
                        fontSize="xs"
                        fontWeight="normal"
                        textTransform="none"
                        fontFamily="'Montserrat', sans-serif"
                      >
                        {job.isOpen ? "Open" : "Closed"}
                      </Badge>
                      
                      {/* Interactive Apply Action Pill Component Layer */}
                      {job.isOpen ? (
                        <Link
                          href={job.url}
                          isExternal
                          _hover={{ textDecoration: "none" }}
                        >
                          <Badge
                            px={4}
                            py={1}
                            borderRadius="full"
                            fontSize="xs"
                            fontWeight="semibold"
                            fontFamily="'Montserrat', sans-serif"
                            bg="white"
                            color="#019fab"
                            border="1px solid"
                            borderColor="#019fab"
                            cursor="pointer"
                            display="flex"
                            alignItems="center"
                            gap={1}
                            transition="all 0.2s ease"
                            textTransform="none"
                            _hover={{ bg: "#019fab", color: "white" }}
                          >
                            Apply <ArrowUpRight size={12} />
                          </Badge>
                        </Link>
                      ) : (
                        <Badge
                          px={4}
                          py={1}
                          borderRadius="full"
                          fontSize="xs"
                          fontWeight="normal"
                          fontFamily="'Montserrat', sans-serif"
                          bg="gray.100"
                          color="gray.400"
                          border="1px solid"
                          borderColor="gray.200"
                          textTransform="none"
                          cursor="not-allowed"
                        >
                          Apply
                        </Badge>
                      )}
                    </Box>

                  </SimpleGrid>
                ))}
              </VStack>
            </Box>
          ))}
        </VStack>

      </Container>
    </Box>
  );
}