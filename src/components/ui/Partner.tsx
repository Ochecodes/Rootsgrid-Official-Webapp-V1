"use client";

import React, { useRef } from "react";
import { Box, Container, Grid, Heading, Text, Button, Link } from "@chakra-ui/react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

const brandTeal = "#019fab";
const brandNavy = "#1E2E5D";
const textColorDark = "#1F2A44";
const IMG_PADDING = 12;

export default function PartnerParallax() {
  return (
    <Box 
      bg="white" 
      w="100%"
      px={{ base: "4", sm: "6", md: "12", lg: "20" }} 
    >
      <TextParallaxContent
        imgUrl="/stocksnap-5.jpg"
        subheading="Join Our Global Network"
        heading="Amplifying Systemic Impact Through Collective Power."
      >
        <ExampleContent 
          title="Unifying tech, finance, and health delivery assets into one core machine."
          p1="True systemic sustainability cannot happen in an absolute vacuum. Our partnership network bridges public healthcare institutions, private enterprise tools, and micro-livelihood workflows seamlessly."
          p2="Together, we build predictive dashboards and activate field-level referral pathways that systematically uplift marginalized and vulnerable communities. Join us to transition fragmented programs into long-term infrastructure."
          btnText="Become a Partner"
          btnHref="https://forms.google.com" 
        />
      </TextParallaxContent>
    </Box>
  );
}

interface TextParallaxContentProps {
  imgUrl: string;
  subheading: string;
  heading: string;
  children: React.ReactNode;
}

const TextParallaxContent = ({ imgUrl, subheading, heading, children }: TextParallaxContentProps) => {
  return (
    <Box pl={{ base: 0, md: `${IMG_PADDING}px` }} pr={{ base: 0, md: `${IMG_PADDING}px` }}>
      {/* Explicitly restored 110vh height context for md+ screen sizes to resolve scroll timelines */}
      <Box position="relative" h={{ base: "auto", md: "110vh" }}>
        <StickyImage imgUrl={imgUrl} />
        <OverlayCopy heading={heading} subheading={subheading} />
      </Box>
      {children}
    </Box>
  );
};

const StickyImage = ({ imgUrl }: { imgUrl: string }) => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <Box
      as={motion.div}
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      ref={targetRef}
      position={{ base: "relative", md: "sticky" }}
      top={{ base: "0", md: `${IMG_PADDING}px` }}
      h={{ base: "35vh", md: `calc(70vh - ${IMG_PADDING * 2}px)` }}
      w="100%"
      overflow="hidden"
      borderRadius="3xl"
      backgroundColor={brandTeal}
      css={{
        '@media (min-width: 48em)': {
          transform: `scale(var(--scroll-scale)) !important`,
        },
        '@media (max-width: 47.99em)': {
          transform: 'none !important',
          scale: '1 !important',
        }
      }}
    >
      {/* Dynamic tracking bridge variables injected into the custom CSS pipeline */}
      <motion.div style={{ display: "none" }} /> 
      <Box as={motion.div} style={{ scale }} className="scroll-scale-tracker" display="none" />

      {/* Brand Teal Multiply Layer */}
      <Box
        position="absolute"
        inset={0}
        bg="rgba(1, 159, 171, 0.40)"
        style={{ mixBlendMode: "multiply" }}
        zIndex={1}
      />
      {/* Dynamic Fading Shadow Layer */}
      <Box
        as={motion.div}
        position="absolute"
        inset={0}
        bg="blackAlpha.700"
        style={{ opacity }}
        zIndex={2}
        display={{ base: "none", md: "block" }}
      />
    </Box>
  );
};

interface OverlayCopyProps {
  subheading: string;
  heading: string;
}

const OverlayCopy = ({ subheading, heading }: OverlayCopyProps) => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [200, -200]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

  return (
    <Box
      as={motion.div}
      style={{
        // Re-inject smooth animation maps safely into standard system execution tracks
        y: typeof window !== "undefined" && window.innerWidth >= 768 ? y : 0,
        opacity: typeof window !== "undefined" && window.innerWidth >= 768 ? opacity : 1,
      }}
      ref={targetRef}
      position="absolute"
      left={0}
      top={0}
      display="flex"
      h={{ base: "35vh", md: "70vh" }}
      w="100%"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      color="white"
      px={6}
      zIndex={3}
      css={{
        '@media (max-width: 47.99em)': {
          transform: 'none !important',
          opacity: '1 !important',
        }
      }}
    >
      <Text
        mb={{ base: 2, md: 4 }}
        textAlign="center"
        fontSize={{ base: "sm", md: "xl" }} 
        fontWeight="700"
        color={brandTeal}
        letterSpacing="0.08em"
        textTransform="uppercase"
      >
        {subheading}
      </Text>
      <Heading
        as="h2"
        textAlign="center"
        fontFamily="'Montserrat', sans-serif"
        fontSize={{ base: "lg", sm: "2xl", md: "4xl", lg: "5xl" }} 
        fontWeight="800"
        lineHeight="1.2"
        letterSpacing="-0.02em"
        maxW="820px"
        px={2}
      >
        {heading}
      </Heading>
    </Box>
  );
};

interface ExampleContentProps {
  title: string;
  p1: string;
  p2: string;
  btnText: string;
  btnHref: string;
}

const ExampleContent = ({ title, p1, p2, btnText, btnHref }: ExampleContentProps) => (
  <Container maxW="5xl" px={4} pt={{ base: 6, md: 12 }} pb={8}>
    <Grid templateColumns={{ base: "1fr", md: "repeat(12, 1fr)" }} gap={{ base: 4, md: 8 }}>
      <Heading
        as="h3"
        gridColumn={{ base: "auto", md: "span 4" }}
        fontSize="2xl"
        fontWeight="700"
        color={textColorDark}
        lineHeight="1.2"
        textAlign={{ base: "justify", md: "left" }} 
      >
        {title}
      </Heading>
      <Box gridColumn={{ base: "auto", md: "span 8" }}>
        <Text 
          mb={4} 
          fontSize={{ base: "md", md: "xl" }} 
          color="gray.600" 
          lineHeight="1.75"
          textAlign={{ base: "justify", md: "left" }} 
        >
          {p1}
        </Text>
        <Text 
          mb={8} 
          fontSize={{ base: "md", md: "xl" }} 
          color="gray.600" 
          lineHeight="1.75"
          textAlign={{ base: "justify", md: "left" }} 
        >
          {p2}
        </Text>
        <Button
          as={Link}
          href={btnHref}
          isExternal
          bg={brandTeal}
          color="white"
          size="lg"
          rounded="xl"
          px={8}
          py={6}
          fontWeight="600"
          w={{ base: "100%", md: "auto" }}
          _hover={{
            bg: "#00818c",
            transform: "translateY(-2px)",
            textDecoration: "none",
          }}
          transition="all 0.2s ease-in-out"
          rightIcon={<FiArrowUpRight />}
        >
          {btnText}
        </Button>
      </Box>
    </Grid>
  </Container>
);