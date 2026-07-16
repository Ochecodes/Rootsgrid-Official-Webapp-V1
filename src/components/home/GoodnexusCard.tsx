"use client";

import NextLink from "next/link";
import { Box, Button, Container, Flex, Heading, Text } from "@chakra-ui/react";

export default function GoodnexusCard() {
  return (
    <Box 
      as="section" 
      bg="white" 
      pt={0} // Completely removed top padding to close the gap with the previous section
      pb={{ base: 14, md: 20 }} // Kept the bottom spacing clean
    >
      <Container maxW="7xl" px={{ base: 5, md: 10 }}>
        <Box
          position="relative"
          borderRadius={{ base: "20px", md: "24px" }}
          overflow="hidden"
          bg="#019fab"
          border="1px solid rgba(0,0,0,0.10)"
          px={{ base: 6, md: 10 }}
          py={{ base: 8, md: 11 }}
        >
          <Box
            position="absolute"
            inset="0"
            opacity="0.36"
            bgImage={`
              linear-gradient(to right, rgba(255,255,255,0.36) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.36) 1px, transparent 1px)
            `}
            bgSize="64px 64px"
          />
          <Box
            position="absolute"
            inset="0"
            opacity="0.3"
            bgImage={`
              linear-gradient(to right, rgba(255,255,255,0.22) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.22) 1px, transparent 1px)
            `}
            bgSize="132px 132px"
          />
          <Box
            position="absolute"
            inset="0"
            bgGradient="linear(120deg, rgba(255,255,255,0.04) 0%, rgba(1,159,171,0.08) 45%, rgba(255,255,255,0.03) 100%)"
          />

          <Flex
            position="relative"
            zIndex={2}
            align="center"
            justify="center"
            direction="column"
            gap={{ base: 4, md: 5 }}
            textAlign="center"
          >
            <Box maxW="900px">
              <Heading
                color="white"
                lineHeight="1.1"
                fontWeight="500"
                fontSize={{ base: "24px", md: "34px", lg: "40px" }}
                maxW="860px"
                mb="3"
              >
                GoodNexus AI
              </Heading>
              <Text color="whiteAlpha.900" fontSize={{ base: "15px", md: "19px" }} lineHeight="1.85" maxW="860px" mx="auto">
                GoodNexus AI is an artificial Intelligence powered platform that transforms how giving decisions are
                made by matching donors with real-time, high-impact opportunities based on data.
              </Text>
            </Box>

            <NextLink href="/goodnexusai">
              <Button
                variant="outline"
                borderColor="#1E3A8A"
                color="white"
                rounded="xl"
                px="8"
                h="50px"
                fontWeight="600"
                _hover={{ bg: "#1E3A8A", color: "white", borderColor: "#1E3A8A" }}
              >
                Get in touch
              </Button>
            </NextLink>
          </Flex>
        </Box>
      </Container>
    </Box>
  );
}
