"use client"

import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  SimpleGrid,
  Grid,
  Icon,
} from "@chakra-ui/react"
import {
  StarIcon,
  ViewIcon,
  CheckCircleIcon,
  RepeatIcon,
  AddIcon,
  LockIcon,
  ChatIcon,
  ExternalLinkIcon,
  SearchIcon,
  LinkIcon,
  SunIcon,
  TriangleUpIcon,
} from "@chakra-ui/icons"
import Image from "next/image"
import { motion, type Variants } from "framer-motion"
import FaqAccordion from "@/components/home/FaqAccordion"
import GoodnexusCard from "@/components/home/GoodnexusCard"
import { HeroSection } from "@/components/ui/hero-section-2"

const TEAL = "#019fab"
const NAVY = "#1E3A8A"
const WHITE = "#ffffff"
const SOFT_BG = "#F7FBFC"
const BORDER = "rgba(1,159,171,0.18)"

/* ── Animation Variants ── */
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
}

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

/* ── Reusable icon box ── */
function CardIcon({
  icon,
  dark = false,
}: {
  icon: React.ElementType
  dark?: boolean
}) {
  return (
      <Box
        w="38px"
        h="38px"
        bg={dark ? "rgba(1,159,171,0.18)" : "rgba(1,159,171,0.12)"}
        borderRadius="10px"
      border="1px solid"
      borderColor={dark ? "rgba(1,159,171,0.4)" : "rgba(1,159,171,0.28)"}
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexShrink={0}
      transition="all 0.3s ease"
      _groupHover={{
        bg: TEAL,
        color: WHITE,
        transform: "scale(1.1)",
      }}
    >
      <Icon
        as={icon}
        color={dark ? TEAL : TEAL}
        _groupHover={{ color: WHITE }}
        boxSize="16px"
        transition="all 0.3s ease"
      />
    </Box>
  )
}

function BrandPill({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <Box
      display="inline-flex"
      w="fit-content"
      maxW="100%"
      px="4"
      py="1.5"
      borderRadius="10px"
      bg={dark ? "rgba(1,159,171,0.16)" : "rgba(1,159,171,0.10)"}
      border="1px solid"
      borderColor={dark ? "rgba(1,159,171,0.42)" : "rgba(1,159,171,0.26)"}
    >
      <Text
        color={TEAL}
        fontSize="11px"
        fontWeight="700"
        letterSpacing="0.08em"
        textTransform="uppercase"
      >
        {children}
      </Text>
    </Box>
  )
}

/* ── Data ── */
const frameworkCards = [
  {
    label: "Our goal",
    icon: StarIcon,
    text: "To coordinate and drive systems transformation initiatives for scalable global impact.",
  },
  {
    label: "Our vision",
    icon: ViewIcon,
    text: "A world where resilient communities thrive in health, safety, and opportunity.",
  },
  {
    label: "Our mission",
    icon: CheckCircleIcon,
    text: "To transform health and development outcomes by designing and scaling data-driven, integrated systems that strengthen communities, improve access to care, and expand economic opportunity.",
  },
]

const mandateItems = [
  {
    icon: RepeatIcon,
    title: "Systems transformation and coordination",
    desc: "Solve fragmentation by coordinating systems to drive scalable, sustainable impact across global development sectors.",
  },
  {
    icon: AddIcon,
    title: "Integrated health systems expansion",
    desc: "Design data-driven, integrated systems to strengthen community health infrastructure and improve universal access to care.",
  },
  {
    icon: SunIcon,
    title: "Economic empowerment growth",
    desc: "Strengthen individual and community resilience by expanding equitable access to training, resources, and opportunity.",
  },
  {
    icon: ChatIcon,
    title: "Community engagement promotion",
    desc: "Foster resilient, safe communities by co-creating localized solutions with the people we serve.",
  },
  {
    icon: ExternalLinkIcon,
    title: "Market-driven development",
    desc: "Build the institutional platforms and pathways that connect communities to robust, sustainable economic ecosystems.",
  },
  {
    icon: SearchIcon,
    title: "Data and innovation support",
    desc: "Deploy digital innovation and purpose-driven technology to build smarter, data-driven systems that deliver results.",
  },
]

const whatWeDoItems = [
  {
    icon: AddIcon,
    title: "Build resilient community economies",
    desc: "We drive programs that combine health and economic empowerment to catalyze scalable impact, ensuring communities build the foundational resilience for long-term prosperity.",
  },
  {
    icon: TriangleUpIcon,
    title: "Scale systems and unlock opportunity",
    desc: "We support the expansion of integrated care systems and mobilize partnerships to improve community access, strengthening delivery mechanisms at a global scale.",
  },
  {
    icon: LockIcon,
    title: "Execute policy, strengthen trust, and protect local value",
    desc: "We maintain high integrity and compliance standards, promoting interoperable development and positioning communities to compete to globally competitive standards.",
  },
  {
    icon: SearchIcon,
    title: "Build with data and insight",
    desc: "We comprehensively assess the ecosystem through reliable research and data, deploying digital dashboards and globally applicable systems at every stage.",
  },
  {
    icon: ExternalLinkIcon,
    title: "Open the gateway to the world",
    desc: "We create strategic cross-sector partnerships and connections that enable communities and enterprises to reach a broad market and accelerate collaborations.",
  },
  {
    icon: LinkIcon,
    title: "Mobilize partnerships that compound impact",
    desc: "We collaborate with government, private sector, academia, and development partners to co-design interventions with scale, speed, and accessibility.",
  },
]

/* ── Page ── */
export default function AboutPage() {
  return (
    <Box fontFamily="'Montserrat', sans-serif" overflow="hidden">
      {/* 1. HERO */}
      <HeroSection
        title={
          <>
            <span style={{ color: TEAL }}>Heart for the Nation</span> <br />
            <span style={{ color: WHITE }}>Initiative</span>
          </>
        }
        subtitle="Heart for the Nation Initiative (HNGlobal) coordinates and drives systems transformation through innovation, collaboration, and strategic ecosystem support to deliver scalable, sustainable global impact."
        backgroundImage="/hncontactbg.svg"
      />

      {/* 2. EXEC DIRECTOR CARD */}
      <Box
        py={{ base: 12, md: 20 }}
        position="relative"
        overflow="hidden"
        bgImage="url('/texturedbg.jpg')"
        bgSize="cover"
        bgPos="center"
      >
        <Box
          position="absolute"
          inset={0}
          pointerEvents="none"
          bg="rgba(247,251,252,0.86)"
        />
        <Container maxW="1200px" px={{ base: 5, md: 10 }} position="relative" zIndex={1}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <Grid
              templateColumns={{ base: "1fr", md: "5fr 7fr" }}
              borderRadius={{ base: "20px", md: "24px" }}
              overflow="hidden"
              boxShadow="0 24px 70px rgba(30,58,138,0.14)"
              minH={{ base: "auto", md: "420px" }}
              border="1px solid"
              borderColor={BORDER}
            >
              {/* LEFT */}
              <Box
                bg={WHITE}
                position="relative"
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                p={{ base: "10", md: "12" }}
                minH={{ base: "280px", md: "auto" }}
              >
                <Box
                  w="full"
                  maxW={{ base: "200px", md: "240px" }}
                  h={{ base: "180px", md: "240px" }}
                  position="relative"
                  transition="transform 0.4s ease"
                  _hover={{ transform: "scale(1.05)" }}
                >
                  <Image
                    src="/Bitrus.jpg"
                    alt="Executive Director"
                    fill
                    style={{ objectFit: "cover", borderRadius: "18px" }}
                    priority
                  />
                </Box>

                <Box
                  position="absolute"
                  bottom="0"
                  left="0"
                  right="0"
                  px="8"
                  py="5"
                  borderTop="1px solid"
                  borderColor={BORDER}
                  bg="rgba(255,255,255,0.9)"
                  backdropFilter="blur(10px)"
                >
                  <Text color={NAVY} fontWeight="700" fontSize="sm" lineHeight="1.3">
                    Executive Director
                  </Text>
                  <Text color={TEAL} fontSize="xs" mt="1" fontWeight="600">
                    Heart for the Nation Initiative (HFTN)
                  </Text>
                </Box>
              </Box>

              {/* RIGHT */}
              <Box
  bgImage="url('/texturedbg.jpg')"
  bgSize="cover"
  backgroundPosition="center"
  bgColor="#019fab"
  bgBlendMode="multiply" // Blends the blue/teal overlay into the image texture seamlessly
  p={{ base: "8", md: "12" }}
  display="flex"
  flexDirection="column"
  justifyContent="center"
              >
                <Stack gap="5">
                  <Text color={NAVY} fontSize="sm" fontWeight="800">
                    Message from the executive director
                  </Text>

                  <Heading
                    as="h2"
                    fontSize={{ base: "2xl", md: "3xl" }}
                    color={WHITE}
                    fontWeight="800"
                    lineHeight="1.3"
                  >
                    Driving Innovation for National Development
                  </Heading>

                  <Text color="rgba(255,255,255,0.85)" lineHeight="1.8" fontSize="sm" textAlign={{ base: "justify", md: "left" }}>
                    &quot;At Heart for the Nation Initiative (HFTN), we believe innovation is
                    central to Nigeria&apos;s digital and economic future. Our mandate is to
                    enable systems strategy and innovation to access the support,
                    partnerships, and platforms needed to build and scale globally
                    competitive solutions. We integrate across government, industry,
                    academia, and global partners to align policy with the realities of
                    systems thinking.&quot;
                  </Text>

                  <Text color="rgba(255,255,255,0.85)" lineHeight="1.8" fontSize="sm" textAlign={{ base: "justify", md: "left" }}>
                    &quot;Beyond individual strategy, HFTN focuses on strengthening community
                    health and economic systems as a whole through public-private
                    collaboration, institutional partnerships, and deployment of
                    data-driven innovation. We are institutionalising transformation as a
                    driver of inclusive growth, pioneering a mission of innovation and
                    positioning communities for long-term prosperity.&quot;
                  </Text>
                </Stack>
              </Box>
            </Grid>
          </motion.div>
        </Container>
      </Box>

      {/* 3. GOAL / VISION / MISSION */}
      <Box id="framework" bg={WHITE} py={{ base: 16, md: 24 }}>
        <Container maxW="1200px" px={{ base: 5, md: 10 }}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            <SimpleGrid columns={{ base: 1, md: 3 }} gap="8">
              {frameworkCards.map((item, i) => (
                <motion.div key={i} variants={fadeInUp} style={{ height: "100%" }}>
                  <Box
                    role="group"
                    border="1px solid"
                    borderColor={TEAL}
                    borderRadius="10px"
                    p="8"
                    bg={WHITE}
                    h="100%"
                    minH={{ base: "auto", md: "260px" }}
                    display="flex"
                    flexDirection="column"
                    transform="translateY(-8px)"
                    boxShadow="0 22px 50px rgba(30,58,138,0.12)"
                    transition="all 0.3s ease"
                    _hover={{
                      transform: "translateY(0)",
                      boxShadow: "none",
                      borderColor: BORDER,
                    }}
                  >
                    <Stack gap="5" h="100%">
                      <BrandPill>{item.label}</BrandPill>
                      <Text color="#374151" fontSize="md" lineHeight="1.8" flex="1" textAlign={{ base: "justify", md: "left" }}>
                        {item.text}
                      </Text>
                    </Stack>
                  </Box>
                </motion.div>
              ))}
            </SimpleGrid>
          </motion.div>
        </Container>
      </Box>

      {/* 4. MANDATE */}
      <Box
        bg={SOFT_BG}
        py={{ base: 16, md: 24 }}
        borderTop="1px solid"
        borderColor={BORDER}
        position="relative"
        overflow="hidden"
      >
        <Box
          position="absolute"
          inset={0}
          pointerEvents="none"
          opacity={0.45}
          bg="linear-gradient(90deg, rgba(1,159,171,0.07) 1px, transparent 1px), linear-gradient(0deg, rgba(30,58,138,0.05) 1px, transparent 1px)"
          bgSize="78px 78px"
        />
        <Container maxW="1200px" px={{ base: 5, md: 10 }} position="relative" zIndex={1}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            <Stack gap="12">
              <motion.div variants={fadeInUp}>
                <Stack gap="3" align="center" textAlign="center">
                  <BrandPill>Our Mandate</BrandPill>
                  <Heading
                    as="h2"
                    fontSize={{ base: "3xl", md: "4xl" }}
                    color="#111827"
                    fontWeight="800"
                    lineHeight="1.3"
                    maxW="700px"
                  >
                    Building a resilient, inclusive ecosystem for{" "}
                    <Box as="span" color={TEAL}>
                      global development
                    </Box>
                  </Heading>
                </Stack>
              </motion.div>

              <SimpleGrid columns={{ base: 1, md: 2 }} gap="6">
                {mandateItems.map((item, i) => (
                  <motion.div key={i} variants={fadeInUp}>
                    <Box
                      role="group"
                      bg={WHITE}
                      border="1px solid"
                      borderColor={TEAL}
                      borderRadius="10px"
                      p="8"
                      boxShadow="lg"
                      transition="all 0.3s ease"
                      _hover={{
                        boxShadow: "none",
                        borderColor: BORDER,
                      }}
                    >
                      <Stack gap="4">
                        <CardIcon icon={item.icon} />
                        <Text
                          color={TEAL}
                          fontWeight="700"
                          fontSize="lg"
                          lineHeight="1.5"
                          _groupHover={{ color: "#111827" }}
                          transition="color 0.3s ease"
                        >
                          {item.title}
                        </Text>
                        <Text color="#6B7280" fontSize="md" lineHeight="1.8" textAlign={{ base: "justify", md: "left" }}>
                          {item.desc}
                        </Text>
                      </Stack>
                    </Box>
                  </motion.div>
                ))}
              </SimpleGrid>
            </Stack>
          </motion.div>
        </Container>
      </Box>

      {/* 5. WHAT WE DO */}
      <Box
        bg={NAVY}
        py={{ base: 16, md: 24 }}
        position="relative"
        overflow="hidden"
        bgImage="url('/hncontactbg.svg')"
        bgSize="cover"
        backgroundPosition="center"
      >
        <Box
          position="absolute"
          inset={0}
          pointerEvents="none"
          bg="rgba(30,58,138,0.92)"
        />
        <Box
          position="absolute"
          inset={0}
          opacity={0.14}
          pointerEvents="none"
          bg="radial-gradient(60% 60% at 100% 0%, rgba(1,159,171,0.45) 0%, transparent 58%)"
        />
        <Container maxW="1200px" px={{ base: 5, md: 10 }} position="relative" zIndex={1}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            <Stack gap="12">
              <motion.div variants={fadeInUp}>
                <Stack gap="4" align="center" textAlign="center">
                  <BrandPill dark>What We Do</BrandPill>
                  <Heading
  as="h2"
  fontSize={{ base: "3xl", md: "5xl" }}
  color={WHITE}
  fontWeight="800"
  lineHeight="1.2"
>
  End-to-End{" "}
  <Box as="span" color="#019fab">
    Ecosystem
  </Box>{" "}
  Support
</Heading>
                  <Text
                    color="rgba(255,255,255,0.7)"
                    maxW="650px"
                    lineHeight="1.8"
                    fontSize={{ base: "md", md: "lg" }}
                    textAlign={{ base: "justify", md: "center" }}
                  >
                    HFTN strengthens the innovation ecosystem end-to-end from policy,
                    access to capital, research to scale, and local value creation to
                    global competitiveness.
                  </Text>
                </Stack>
              </motion.div>

              <SimpleGrid columns={{ base: 1, md: 3 }} gap="6">
                {whatWeDoItems.map((item, i) => (
                  <motion.div key={i} variants={fadeInUp} style={{ height: "100%" }}>
                    <Box
                      role="group"
                      bg="rgba(255,255,255,0.08)"
                      borderRadius="10px"
                      p="8"
                      border="1px solid"
                      borderColor={TEAL}
                      h="100%"
                      minH={{ base: "auto", md: "285px" }}
                      display="flex"
                      flexDirection="column"
                      transform="translateY(-5px)"
                      transition="all 0.3s ease"
                      _hover={{
                        bg: "rgba(255,255,255,0.03)",
                        transform: "translateY(0)",
                        borderColor: "rgba(255,255,255,0.08)",
                      }}
                    >
                      <Stack gap="5" h="100%">
                        <Text
                          color={TEAL}
                          fontWeight="800"
                          fontSize="md"
                          lineHeight="1.5"
                        >
                          {item.title}
                        </Text>
                        <Text
                          color="rgba(255,255,255,0.65)"
                          fontSize="sm"
                          lineHeight="1.85"
                          flex="1"
                          textAlign={{ base: "justify", md: "left" }}
                        >
                          {item.desc}
                        </Text>
                      </Stack>
                    </Box>
                  </motion.div>
                ))}
              </SimpleGrid>
            </Stack>
          </motion.div>
        </Container>
      </Box>

      {/* 6. FAQ + GOODNEXUS */}
      <Box>
        <FaqAccordion />
        <GoodnexusCard />
      </Box>
    </Box>
  )
}
