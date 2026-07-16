"use client";

import React, { useState } from 'react';
import { Box, Flex, Heading, Text, Button, Input, Textarea, SimpleGrid } from "@chakra-ui/react";
import { motion, Variants } from 'framer-motion';
import { OfficeMap } from "./office-map";

// Wrap Chakra structural containers with Framer Motion
const MotionSimpleGrid = motion.create(SimpleGrid);
const MotionFlex = motion.create(Flex);

export function ContactFormSection() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    const formData = new FormData();
    formData.append("name", `${firstName} ${lastName}`);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("message", message);
    formData.append("_subject", "New Website Contact Request - HN Global");
    formData.append("_captcha", "false"); 

    try {
      const response = await fetch("https://formsubmit.co", {
        method: "POST",
        body: formData 
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFirstName("");
        setLastName("");
        setEmail("");
        setPhone("");
        setMessage("");
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("FormSubmit Client Error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Master Orchestration Container Animation Variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Triggers sub-components one after another
      }
    }
  };

  // Left Card: Slide In From Left Variant
  const leftSlideVariants: Variants = {
    hidden: { x: -60, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  // Right Card: Slide In From Right Variant
  const rightSlideVariants: Variants = {
    hidden: { x: 60, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <Box 
      as="main" 
      py="14"
      overflow="hidden" // Prevents horizontal scrollbars during side-slide animations
      style={{
        backgroundImage: "url('/texturedbg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      <Box maxW="6xl" mx="auto" px={{ base: 4, md: 8 }}>
        <MotionSimpleGrid 
          columns={{ base: 1, lg: 2 }} 
          gap="12" 
          alignItems="stretch"
          initial="hidden"
          whileInView="visible" // Starts animation gracefully when scrolled into viewport view
          viewport={{ once: true, margin: "-100px" }} // Triggers once and buffers layout trigger line
          variants={containerVariants}
        >
          
          {/* Left Column: Form Controls (Slides in from Left) */}
          <MotionFlex 
            as="form" 
            onSubmit={handleSubmit} 
            direction="column" 
            justify="space-between"
            bg="rgba(255, 255, 255, 0.92)" 
            p={{ base: 6, md: 8 }}
            borderRadius="xl"
            boxShadow="lg"
            style={{ backdropFilter: "blur(4px)" }}
            variants={leftSlideVariants}
          >
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

              <Box mb="4">
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

            {/* Status Notifications */}
            {submitStatus === "success" && (
              <Text color="green.600" fontSize="sm" fontWeight="bold" mb="4">
                ✓ Message sent successfully! We will get back to you soon.
              </Text>
            )}
            {submitStatus === "error" && (
              <Text color="red.500" fontSize="sm" fontWeight="bold" mb="4">
                ✕ Submission failed. Please try again.
              </Text>
            )}

            <Button
              type="submit"
              bg="#019fab"
              color="white"
              fontWeight="bold"
              w="full"
              isLoading={isSubmitting}
              loadingText="Sending..."
              _hover={{ bg: "teal.600" }}
              _active={{ bg: "teal.700" }}
            >
              Submit Message
            </Button>
          </MotionFlex>

          {/* Right Column: Office Location Component (Slides in from Right) */}
          <MotionFlex 
            direction="column" 
            justify="space-between" 
            h="full"
            bg="rgba(255, 255, 255, 0.92)" 
            p={{ base: 6, md: 8 }}
            borderRadius="xl"
            boxShadow="lg"
            style={{ backdropFilter: "blur(4px)" }}
            variants={rightSlideVariants}
          >
            <Box mb="5">
              <Text color="#019fab" fontWeight="semibold" mb="1">
                Location
              </Text>
              <Heading as="h3" color="gray.800" fontSize={{ base: "2xl", sm: "3xl" }} fontWeight="semibold" mb="2">
                Our Office
              </Heading>
              <Text opacity="0" fontSize="sm" pointerEvents="none" userSelect="none">
                Alignment Spacer Line
              </Text>
            </Box>

            <Box flex="1" w="full" minH={{ base: 350, lg: "auto" }}>
              <OfficeMap />
            </Box>
          </MotionFlex>
          
        </MotionSimpleGrid>
      </Box>
    </Box>
  );
}
