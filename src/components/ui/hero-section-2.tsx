"use client";

import React from 'react';
import { Box, Flex, Heading, Text, Link, SimpleGrid, Image } from "@chakra-ui/react";
import { motion, Variants } from 'framer-motion';

// Wrap Chakra components with Framer Motion
const MotionFlex = motion.create(Flex);
const MotionBox = motion.create(Box);
const MotionHeading = motion.create(Heading);
const MotionText = motion.create(Text);
const MotionLink = motion.create(Link);

// Re-colored SVG icons to hex token #019fab
const InfoIcon = ({ type }: { type: 'website' | 'phone' | 'address' }) => {
  const icons = {
    website: (
      <svg xmlns="http://w3.org" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ height: '20px', width: '20px', color: '#019fab' }}>
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="2" x2="22" y1="12" y2="12"></line>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
      </svg>
    ),
    phone: (
      <svg xmlns="http://w3.org" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ height: '20px', width: '20px', color: '#019fab' }}>
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
      </svg>
    ),
    address: (
      <svg xmlns="http://w3.org" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ height: '20px', width: '20px', color: '#019fab' }}>
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
        <circle cx="12" cy="10" r="3"></circle>
      </svg>
    ),
  };
  return <Box mr="2" flexShrink="0" display="flex" alignItems="center">{icons[type]}</Box>;
};

interface HeroSectionProps {
  logo?: {
    url: string;
    alt: string;
    text?: string;
  };
  slogan?: string;
  title: React.ReactNode;
  subtitle: string;
  callToAction?: {
    text: string;
    href: string;
  };
  backgroundImage: string;
  contactInfo?: Partial<Record<'website' | 'phone' | 'address', string>>;
}

export const HeroSection = ({ logo, slogan, title, subtitle, callToAction, backgroundImage, contactInfo }: HeroSectionProps) => {
  
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <MotionFlex
      as="section"
      w="full"
      direction={{ base: "column", md: "row" }}
      overflow="hidden"
      style={{
        backgroundImage: "url('/hngsectionbg.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Left Content Column */}
      <Flex 
        w={{ base: "full", md: "50%", lg: "60%" }} 
        direction="column" 
        justify="between" 
        p={{ base: 8, md: 12, lg: 16 }}
      >
        <Box>
          {/* Header/Logo */}
          {logo || slogan ? (
          <MotionBox as="header" mb="12" variants={itemVariants}>
            {logo && (
              <Flex align="center">
                <Image src={logo.url} alt={logo.alt} mr="3" h="8" />
                <Box>
                  {logo.text && <Text fontSize="lg" fontWeight="bold" color="white">{logo.text}</Text>}
                  {slogan && <Text fontSize="xs" letterSpacing="wider" color="whiteAlpha.800">{slogan}</Text>}
                </Box>
              </Flex>
            )}
          </MotionBox>
          ) : null}

          {/* Main Content Body */}
          <motion.main variants={containerVariants}>
            <MotionHeading 
              as="h1" 
              fontSize={{ base: "4xl", md: "5xl" }} 
              fontWeight="bold" 
              lineHeight="1.3" 
              variants={itemVariants}
            >
              {title}
            </MotionHeading>
            
            {/* Colored horizontal rule updated to match theme token */}
            <MotionBox my="6" h="1px" w="20" bg="#019fab" variants={itemVariants} />
            
            <MotionText
              mb={callToAction ? "8" : "0"}
              maxW="md"
              fontSize="base"
              color="white"
              textAlign={{ base: "justify", md: "left" }}
              variants={itemVariants}
            >
              {subtitle}
            </MotionText>
            
            {callToAction ? (
            <MotionLink 
              href={callToAction.href} 
              display="inline-flex"
              alignItems="center"
              justifyContent="center"
              fontSize="sm" 
              fontWeight="bold" 
              letterSpacing="widest" 
              color="white" 
              bg="#019fab"
              border="1px solid"
              borderColor="white"
              borderRadius="md"
              px="6"
              py="3"
              _hover={{ bg: "#00818c", transform: "translateY(-1px)" }}
              _active={{ transform: "translateY(0)" }}
              transition="all 0.2s ease"
              variants={itemVariants}
            >
              {callToAction.text}
            </MotionLink>
            ) : null}
          </motion.main>
        </Box>

        {/* Footer Info Row */}
        {contactInfo ? (
        <MotionBox as="footer" mt="12" w="full" variants={itemVariants}>
          <SimpleGrid columns={{ base: 1, sm: 3 }} gap="6" fontSize="xs" color="white" fontWeight="medium">
            {contactInfo.website ? (
            <Flex align="center">
              <InfoIcon type="website" />
              <Text>{contactInfo.website}</Text>
            </Flex>
            ) : null}
            {contactInfo.phone ? (
            <Flex align="center">
              <InfoIcon type="phone" />
              <Text>{contactInfo.phone}</Text>
            </Flex>
            ) : null}
            {contactInfo.address ? (
            <Flex align="center">
              <InfoIcon type="address" />
              <Text>{contactInfo.address}</Text>
            </Flex>
            ) : null}
          </SimpleGrid>
        </MotionBox>
        ) : null}
      </Flex>

      {/* Right Animated Image Column */}
      <MotionBox
        w={{ base: "full", md: "50%", lg: "40%" }}
        minH={{ base: "300px", md: "auto" }}
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        initial={{ clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)' }}
        animate={{ clipPath: 'polygon(25% 0, 100% 0, 100% 100%, 0% 100%)' }}
        transition={{ duration: 1.2, ease: "circOut" }}
      />
    </MotionFlex>
  );
};

HeroSection.displayName = "HeroSection";
