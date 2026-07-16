"use client";

import NextLink from "next/link";
import { Box, Container, Grid, Link, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import { usePathname } from "next/navigation";

const pages = [
  { label: "About", href: "/about" },
  { label: "Ethics", href: "/ethics" },
  { label: "Our Leadership", href: "/leadership" },
  { label: "Mission", href: "/about" },
  { label: "Vision", href: "/about" },
  { label: "Impact Approach", href: "/model" },
  { label: "Resilience 360+", href: "/model" },
  { label: "Insights", href: "/resources" },
];

const socials = [
  { label: "Facebook", href: "/" },
  { label: "Instagram", href: "/" },
  { label: "Twitter", href: "/" },
  { label: "LinkedIn", href: "/" },
];

const legal = [
  { label: "Privacy Policy", href: "/legal" },
  { label: "Terms of Service", href: "/legal" },
  { label: "Cookie Policy", href: "/legal" },
];

const getInvolved = [
  { label: "Corporate Volunteer", href: "/volunteer" },
  { label: "Individual Volunteer", href: "/volunteer" },
  { label: "Careers", href: "/careers" },
  { label: "Donate", href: "/donate" },
  { label: "Partnerships", href: "/partnerships" },
];

function FooterColumn({
  title,
  items,
}: {
  title: string;
  items: { label: string; href: string }[];
}) {
  return (
    <Stack gap="3">
      <Text color="white" fontWeight="500" fontSize={{ base: "14px", md: "15px" }} lineHeight="1.2">
        {title}
      </Text>
      {items.map((item) => (
        <Link
          key={`${title}-${item.label}`}
          as={NextLink}
          href={item.href}
          color="white"
          fontSize={{ base: "12px", md: "13px" }}
          fontWeight="400"
          _hover={{ color: "whiteAlpha.800" }}
        >
          {item.label}
        </Link>
      ))}
    </Stack>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();
  const pathname = usePathname();

  if (pathname === "/goodnexusai") return null;

  return (
    <Box as="footer" bg="#1E3A8A" pt={{ base: 14, md: 18 }} pb={{ base: 10, md: 12 }} overflow="hidden" position="relative">
      <Box position="absolute" inset={0} bg="rgba(8,16,40,0.52)" />
      <Container maxW="7xl" px={{ base: 5, md: 10 }}>
        <Box
          position="relative"
          bg="transparent"
          borderRadius={{ base: "20px", md: "24px" }}
          px={{ base: 6, md: 10 }}
          pt={{ base: 8, md: 10 }}
          pb={{ base: 16, md: 24 }}
          overflow="hidden"
        >
          <Box borderTop="1px solid rgba(255,255,255,0.18)" mb={{ base: 8, md: 10 }} />

          <Grid templateColumns={{ base: "1fr", sm: "repeat(2, 1fr)", lg: "1.2fr 1fr 1fr 1fr 1fr" }} gap={{ base: 8, md: 10 }} position="relative" zIndex={2}>
            <Stack gap="4">
              <Box>
                <Image src="/hng-orbit-logo.png" alt="HNGlobal Logo" width={56} height={56} style={{ objectFit: "contain" }} />
              </Box>
              <Text color="white" fontSize={{ base: "12px", md: "13px" }} maxW="320px" lineHeight="1.8" fontWeight="400">
                Transforming health and development outcomes through data-driven integrated systems.
              </Text>
              <Text color="white" fontSize={{ base: "11px", md: "12px" }} fontWeight="400">
                © copyright HNGlobal {year}. All rights reserved.
              </Text>
            </Stack>

            <FooterColumn title="Pages" items={pages} />
            <FooterColumn title="Socials" items={socials} />
            <FooterColumn title="Legal" items={legal} />
            <FooterColumn title="Get Involved" items={getInvolved} />
          </Grid>

          <Text
            position="absolute"
            left={{ base: "0", md: "0" }}
            right={{ base: "0", md: "0" }}
            textAlign="center"
            bottom={{ base: "-4px", md: "-18px" }}
            fontSize={{ base: "72px", sm: "110px", md: "210px" }}
            lineHeight="0.85"
            fontWeight="600"
            color="rgba(12, 32, 72, 0.55)"
            letterSpacing="-0.015em"
            userSelect="none"
            pointerEvents="none"
            zIndex={1}
            whiteSpace="nowrap"
            filter="blur(1.8px)"
            WebkitMaskImage="linear-gradient(to top, rgba(0,0,0,1) 38%, rgba(0,0,0,0.16) 72%, transparent 100%)"
            maskImage="linear-gradient(to top, rgba(0,0,0,1) 38%, rgba(0,0,0,0.16) 72%, transparent 100%)"
          >
            HNGLOBAL
          </Text>
        </Box>
      </Container>
    </Box>
  );
}
