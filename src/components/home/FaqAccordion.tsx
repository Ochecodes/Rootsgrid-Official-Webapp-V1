"use client";

import { Accordion, Box, Container, Heading, Stack, Text } from "@chakra-ui/react";

const faqs = [
  {
    id: "q1",
    q: "What is RESILIENCE 360+ and how does it work?",
    a: "RESILIENCE 360+ is our integrated framework that connects health delivery, economic resilience, and digital intelligence into one coordinated model.",
  },
  {
    id: "q2",
    q: "Who can partner with Heart for the Nation Initiative?",
    a: "We partner with governments, donors, NGOs, health facilities, and community organizations focused on measurable and sustainable outcomes.",
  },
  {
    id: "q3",
    q: "How does PATHWAYS reduce economic barriers?",
    a: "PATHWAYS combines livelihood support, financial inclusion, and market linkages to strengthen household stability and improve continuity of care.",
  },
  {
    id: "q4",
    q: "What does DIGI contribute to implementation?",
    a: "DIGI provides digital engagement, AI-enabled risk prediction, and practical dashboards for faster, evidence-driven decisions.",
  },
  {
    id: "q5",
    q: "How is impact measured in your model?",
    a: "We measure outcomes rather than activity counts, tracking retention, suppression ambitions, delivery quality, and closed-loop improvement performance.",
  },
  {
    id: "q6",
    q: "Can the framework be adapted for local context?",
    a: "Yes. The model is modular and context-aware, so local teams can adapt implementation while preserving shared standards and accountability.",
  },
];

export default function FaqAccordion() {
  return (
    <Box as="section" position="relative" bg="white" py={{ base: 20, md: 28 }} overflow="hidden">
      <Box
        position="absolute"
        left="-120px"
        top="22%"
        w="220px"
        h="220px"
        border="18px solid rgba(1,159,171,0.16)"
        transform="rotate(35deg)"
      />
      <Box
        position="absolute"
        right="-100px"
        bottom="12%"
        w="180px"
        h="180px"
        border="14px solid rgba(30,58,138,0.14)"
        transform="rotate(35deg)"
      />

      <Container maxW="7xl" px={{ base: 5, md: 10 }} position="relative" zIndex={2}>
        <Stack gap="4" mb={{ base: 8, md: 10 }} align="center">
          <Heading color="#1F2A44" textAlign="center" lineHeight="1.05" fontWeight="700" fontSize={{ base: "30px", md: "50px" }}>
            Frequently Asked <Box as="span" color="#019fab">Questions</Box>
          </Heading>
          <Text color="gray.600" textAlign="center" maxW="760px" fontSize={{ base: "14px", md: "16px" }} lineHeight="1.8">
            Have questions about our integrated model? We have got you covered. Browse quick, clear answers about our
            platform, process, and partnership approach.
          </Text>
        </Stack>

        <Box maxW="820px" mx="auto">
          <Accordion.Root collapsible variant="plain" multiple>
            {faqs.map((item) => (
              <Accordion.Item
                key={item.id}
                value={item.id}
                mb="2.5"
                border="1px solid rgba(1,159,171,0.10)"
                borderRadius="8px"
                bg="transparent"
                overflow="hidden"
              >
                <Accordion.ItemTrigger px={{ base: 4, md: 5 }} py={{ base: 3.5, md: 4 }}>
                  <Text flex="1" textAlign="left" color="#019fab" fontWeight="400" fontSize={{ base: "14px", md: "16px" }}>
                    {item.q}
                  </Text>
                  <Accordion.ItemIndicator color="#019fab" />
                </Accordion.ItemTrigger>
                <Accordion.ItemContent px={{ base: 4, md: 5 }} pb={{ base: 3.5, md: 4 }}>
                  <Text color="gray.600" fontSize={{ base: "13px", md: "14px" }} lineHeight="1.7" fontWeight="400">
                    {item.a}
                  </Text>
                </Accordion.ItemContent>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </Box>
      </Container>
    </Box>
  );
}
