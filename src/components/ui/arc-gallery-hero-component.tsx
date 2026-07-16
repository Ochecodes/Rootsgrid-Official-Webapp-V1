"use client";

import React, { useMemo, useState } from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  HStack,
  Dialog,
  VStack,
  Input,
} from "@chakra-ui/react";
import Image from "next/image";

interface ArcGalleryHeroProps {
  images: string[];
}

export function ArcGalleryHero({ images = [] }: ArcGalleryHeroProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [formType, setFormType] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleOpenForm = (type: string) => {
    setFormType(type);
    setIsSubmitted(false);
    setIsOpen(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsOpen(false);
    }, 3000);
  };

  const cardLayouts = useMemo(() => {
    const total = images.length;
    if (total === 0) return [];

    return images.map((src, i) => {
      const progress = total > 1 ? (i / (total - 1)) * 2 - 1 : 0;
      const xPercent = 50 + progress * 26; 
      const yPercent = 5 + Math.pow(progress, 2) * 65; 
      const rotationDeg = progress * 28; 

      return {
        src,
        left: `${xPercent}%`,
        top: `${yPercent}px`,
        transform: `translate(-50%, 0) rotate(${rotationDeg}deg)`,
      };
    });
  }, [images]);

  return (
    <Box 
      as="section" 
      bg="white" 
      color="black" 
      pt={{ base: 14, md: 24 }} 
      pb={{ base: 6, md: 8 }}   
      overflow="hidden"
      position="relative"
    >
      {/* 1. Cascading Overlapping Curved Image Arc Section */}
      <Box 
        position="relative" 
        w="full" 
        h={{ base: "150px", sm: "200px", md: "240px" }} 
        mb={2}
      >
        {cardLayouts.map((card, idx) => (
          <Box
            key={idx}
            position="absolute"
            left={card.left}
            top={card.top}
            transform={card.transform}
            w={{ base: "75px", sm: "110px", md: "135px" }}
            h={{ base: "75px", sm: "110px", md: "135px" }}
            borderRadius={{ base: "xl", md: "2xl" }}
            overflow="hidden"
            bg="white"
            boxShadow="-4px 8px 24px rgba(0,0,0,0.08)"
            transition="all 0.3s ease"
            zIndex={idx + 1} 
            _hover={{
              transform: `${card.transform} translateY(-10px) scale(1.05)`,
              boxShadow: "0 20px 40px rgba(1, 159, 171, 0.15)",
              zIndex: 50,
            }}
          >
            <Image
              src={card.src}
              alt={`Gallery unit ${idx + 1}`}
              fill
              sizes="(max-width: 768px) 110px, 135px"
              style={{ objectFit: "cover" }}
              priority
            />
          </Box>
        ))}
      </Box>

      {/* 2. Text Content & Actions Block */}
      <Container maxW="3xl" px={{ base: 6, md: 8 }} textAlign="center" mt={{ base: 4, md: 2 }}>
        <Heading
          as="h2"
          fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
          fontWeight="normal"
          color="#019fab" // Updated header color token to Teal
          lineHeight="1.25"
          letterSpacing="-0.01em"
          mb={3}
          fontFamily="'Montserrat', sans-serif"
        >
          Volunteer
        </Heading>

        <Text
          fontSize={{ base: "sm", md: "md" }}
          color="gray.600"
          lineHeight="1.6"
          maxW="2xl"
          mx="auto"
          fontWeight="normal"
          mb={6}
          fontFamily="'Montserrat', sans-serif"
        >
          Empower localized ecosystems and accelerate systemic change. Partner with us to lend your programmatic insights, technical talents, or hands-on field experience directly to initiatives designed to uplift communities worldwide.
        </Text>

        <HStack gap={4} justify="center">
          <Button
            onClick={() => handleOpenForm("Corporate")}
            bg="#019fab"
            color="white"
            px={5}
            py={4}
            borderRadius="md" // Synchronized structural corner radius
            fontWeight="normal"
            fontSize="sm"
            fontFamily="'Montserrat', sans-serif"
            _hover={{ bg: "#00818c" }}
          >
            Corporate Volunteer
          </Button>
          
          <Button
            onClick={() => handleOpenForm("Individual")}
            variant="outline"
            borderColor="gray.300"
            color="gray.700"
            px={5}
            py={4}
            borderRadius="md" // Synchronized structural corner radius
            fontWeight="normal"
            fontSize="sm"
            fontFamily="'Montserrat', sans-serif"
            bg="transparent"
            _hover={{ bg: "gray.50" }}
          >
            Individual Volunteer
          </Button>
        </HStack>
      </Container>

      {/* 3. Popup Form Implementation */}
      <Dialog.Root open={isOpen} onOpenChange={(e) => setIsOpen(e.open)} size="xs" motionPreset="slide-in-bottom">
        <Dialog.Backdrop bg="blackAlpha.400" backdropFilter="blur(3px)" />
        <Dialog.Positioner>
          <Dialog.Content borderRadius="xl" p={4} bg="white" color="black" boxShadow="xl">
            <Box position="relative">
              <Dialog.Title fontSize="md" fontWeight="normal" color="#1E3A8A" fontFamily="'Montserrat', sans-serif" mb={3}>
                {formType} Volunteer Sign Up
              </Dialog.Title>
              <Dialog.CloseTrigger position="absolute" top={0} right={0} p={1} cursor="pointer" _hover={{ color: "gray.500" }} />
            </Box>

            <Dialog.Body p={0}>
              {!isSubmitted ? (
                <form onSubmit={handleSubmit}>
                  <VStack gap={3}>
                    <Input placeholder="Full Name" size="sm" borderRadius="md" isRequired variant="subtle" bg="gray.50" color="black" />
                    <Input placeholder="Email Address" type="email" size="sm" borderRadius="md" isRequired variant="subtle" bg="gray.50" color="black" />
                    <Input placeholder="Phone Number" type="tel" size="sm" borderRadius="md" isRequired variant="subtle" bg="gray.50" color="black" />
                    <Input placeholder="Location" size="sm" borderRadius="md" isRequired variant="subtle" bg="gray.50" color="black" />
                    <Input placeholder="Organization Name (Optional)" size="sm" borderRadius="md" variant="subtle" bg="gray.50" color="black" />
                    
                    <Button type="submit" bg="#019fab" color="white" w="full" size="sm" borderRadius="md" fontWeight="normal" mt={2} _hover={{ bg: "#00818c" }}>
                      Submit Application
                    </Button>
                  </VStack>
                </form>
              ) : (
                <Box py={4} textAlign="center">
                  <Text fontSize="sm" color="#019fab" fontFamily="'Montserrat', sans-serif">
                    Thanks for volunteering, we will get back to you.
                  </Text>
                </Box>
              )}
            </Dialog.Body>
          </Dialog.Content>
        </Dialog.Positioner>
      </Dialog.Root>
    </Box>
  );
}