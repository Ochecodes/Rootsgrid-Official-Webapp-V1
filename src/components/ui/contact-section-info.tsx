"use client";

import React, { useState } from 'react';
import { Box, Flex, Heading, Text, Button, Input, Textarea, SimpleGrid } from "@chakra-ui/react";
import { OfficeMap } from "./office-map";

export function ContactFormSection() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ firstName, lastName, email, phone, message });
  };

  return (
    <Box 
      as="main" 
      py="14"
      // Added your public texture image as the background for the entire grid layout row
      style={{
        backgroundImage: "url('/texturedbg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      {/* Container locks content into a 6xl grid with balanced margins on both sides */}
      <Box maxW="6xl" mx="auto" px={{ base: 4, md: 8 }}>
        <SimpleGrid columns={{ base: 1, lg: 2 }} gap="12" alignItems="stretch">
          
          {/* Left Column: Form Controls with high-contrast container backing */}
          <Flex 
            as="form" 
            onSubmit={handleSubmit} 
            direction="column" 
            justify="space-between"
            bg="rgba(255, 255, 255, 0.92)" // Adds a crisp glass panel backing over the texture for data readability
            p={{ base: 6, md: 8 }}
            borderRadius="xl"
            boxShadow="lg"
            style={{ backdropFilter: "blur(4px)" }}
          >
            {/* Form Header Group */}
            <Box mb="5">
              <Text color="#019fab" fontWeight="semibold" mb="1">
                Contact
              </Text>
              <Heading as="h3" color="gray.800" fontSize={{ base: "2xl", sm: "3xl" }} fontWeight="semibold" mb="2">
                Get in touch
              </Heading>
              <Text color="gray.600" fontSize="sm">
                We’d love to hear from you! Please fill out the form below.
              </Text>
            </Box>

            {/* Input Wrapper Group */}
            <Flex direction="column" gap="5" flex="1">
              <Flex direction={{ base: "column", sm: "row" }} gap="5">
                <Box flex="1">
                  <Text as="label" fontSize="sm" fontWeight="medium" color="gray.700" display="block" mb="2">
                    First name <Text as="span" color="red.500">*</Text>
                  </Text>
                  <Input
                    type="text"
                    required
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    bg="white"
                    borderColor="gray.200"
                    outline="none"
                  />
                </Box>
                <Box flex="1">
                  <Text as="label" fontSize="sm" fontWeight="medium" color="gray.700" display="block" mb="2">
                    Last name <Text as="span" color="red.500">*</Text>
                  </Text>
                  <Input
                    type="text"
                    required
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    bg="white"
                    borderColor="gray.200"
                    outline="none"
                  />
                </Box>
              </Flex>

              <Box>
                <Text as="label" fontSize="sm" fontWeight="medium" color="gray.700" display="block" mb="2">
                  Email <Text as="span" color="red.500">*</Text>
                </Text>
                <Input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  bg="white"
                  borderColor="gray.200"
                  outline="none"
                />
              </Box>

              <Box>
                <Text as="label" fontSize="sm" fontWeight="medium" color="gray.700" display="block" mb="2">
                  Phone number <Text as="span" color="red.500">*</Text>
                </Text>
                <Input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  bg="white"
                  borderColor="gray.200"
                  outline="none"
                />
              </Box>

              <Box mb="2">
                <Text as="label" fontSize="sm" fontWeight="medium" color="gray.700" display="block" mb="2">
                  Message <Text as="span" color="red.500">*</Text>
                </Text>
                <Textarea
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  bg="white"
                  borderColor="gray.200"
                  rows={4}
                  outline="none"
                  resize="vertical"
                />
              </Box>
            </Flex>

            {/* Form Submit Button */}
            <Button
              type="submit"
              bg="#019fab"
              color="white"
              fontWeight="bold"
              w="full"
              _hover={{ bg: "teal.600" }}
              _active={{ bg: "teal.700" }}
            >
              Submit Message
            </Button>
          </Flex>

          {/* Right Column: Office Location Header & Aligned Map Component */}
          <Flex 
            direction="column" 
            justify="space-between" 
            h="full"
            bg="rgba(255, 255, 255, 0.92)" // Balanced glass card matching left column depth
            p={{ base: 6, md: 8 }}
            borderRadius="xl"
            boxShadow="lg"
            style={{ backdropFilter: "blur(4px)" }}
          >
            {/* Section Header aligned horizontally with "Get in Touch" */}
            <Box mb="5">
              <Text color="#019fab" fontWeight="semibold" mb="1">
                Location
              </Text>
              <Heading as="h3" color="gray.800" fontSize={{ base: "2xl", sm: "3xl" }} fontWeight="semibold" mb="2">
                Our Office
              </Heading>
              {/* Invisible spacer text matches line height of form subtext for perfect dynamic alignment */}
              <Text opacity="0" fontSize="sm" pointerEvents="none" userSelect="none">
                Alignment Spacer Line
              </Text>
            </Box>

            {/* Map wrapper takes up remaining space, aligning precisely from subtitle down to the submit button */}
            <Box flex="1" w="full" minH={{ base: 350, lg: "auto" }}>
              <OfficeMap />
            </Box>
          </Flex>
          
        </SimpleGrid>
      </Box>
    </Box>
  );
}
