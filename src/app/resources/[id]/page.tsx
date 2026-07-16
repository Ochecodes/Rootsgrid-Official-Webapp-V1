"use client";

import React from "react";
import { useParams } from "next/navigation";
import { Box, Container, Heading, Stack, Text } from "@chakra-ui/react";
import { HeroSection } from "@/components/ui/hero-section-2";

// Unified registry of generated blog content
const BLOG_REGISTRY: Record<
  string,
  {
    titleFirstWord: string;
    titleRemainder: string;
    subtitle: string;
    author: string;
    published: string;
    sections: { heading: string; body: string; subpoints?: string[] }[];
  }
> = {
  "systems-transformation-global-health": {
    titleFirstWord: "Systems ",
    titleRemainder: "Transformation",
    subtitle: "Exploring the core paradigms of the GoodNexus approach to transforming structural health outcomes and sustainable delivery frameworks.",
    author: "Oche Akor",
    published: "June 29, 2026",
    sections: [
      {
        heading: "1. Defining the Fragmentation Problem",
        body: "Traditional healthcare models frequently function in organizational silos, isolating essential local medical services from the operational digital platforms and financial resources that keep them scalable. This division reduces local efficacy and leads to resource exhaustion. The GoodNexus Approach solves this structural vulnerability by identifying structural dependencies early and connecting fragmented nodes into unified networks.",
      },
      {
        heading: "2. The Three Pillars of GoodNexus Transformation",
        body: "Achieving a resilient and transformative global health model relies on three interconnected priorities managed with accountability and clear visibility:",
        subpoints: [
          "Digital Intelligence Integration: Migrating manual field observations into automated data analytics architectures to allow localized teams to adapt rapidly to changing environments.",
          "Localized Capacity Strengthening: Equipping regional personnel with direct ownership of data monitoring assets rather than relying permanently on centralized structural dependencies.",
          "Outcome-Driven Mechanics: Structuring investment criteria around definitive long-term sustainability metrics instead of short-term delivery outputs.",
        ],
      },
      {
        heading: "3. Implementing Scalable Systems Mechanics",
        body: "The final phase of our approach emphasizes deployment adaptability. By aligning public policy guidelines with localized community engagement vectors, our systems transformation strategy ensures that modern health infrastructure stands ready to support long-term regional development pipelines securely and reliably.",
      },
    ],
  },
  "linking-economic-resilience-health-outcomes": {
    titleFirstWord: "Economic",
    titleRemainder: "Resilience",
    subtitle: "Understanding how structural localized financial stability frameworks directly influence regional health progression timelines under the Resilience 360+ Model.",
    author: "Oche Akor",
    published: "June 22, 2026",
    sections: [
      {
        heading: "1. Breaking Down Health-Wealth Interdependencies",
        body: "True community transformation cannot exist without evaluating the economic baseline of the community. When families experience financial vulnerability, healthcare consistently becomes a secondary priority, resulting in preventable chronic burdens. The Resilience 360+ Model actively builds synchronized loops where economic security directly balances healthcare delivery parameters.",
      },
      {
        heading: "2. Operational Aspects of the Resilience 360+ Framework",
        body: "The implementation framework utilizes a multi-dimensional strategy designed to shield vulnerable networks from external localized market volatility:",
        subpoints: [
          "Micro-Investment Safety Nets: Developing community-managed micro-resource accounts specifically earmarked for local therapeutic validation resources.",
          "Agile Skill Capitalization: Creating structured operational knowledge transfer lines that enhance micro-enterprise yields alongside regional diagnostic access points.",
          "Localized Institutional Partnerships: Linking independent operational cooperatives with healthcare provider supply lines to reduce out-of-pocket access costs.",
        ],
      },
      {
        heading: "3. Measuring the Aggregate Long-Term Outcomes",
        body: "By applying automated data instrumentation to localized community cohorts, early data streams show that linking active financial empowerment programs with neighborhood clinics results in a significant increase in early preventive screenings and reduced household medical debts.",
      },
    ],
  },
  "data-driven-decision-making-development": {
    titleFirstWord: "Data-Driven",
    titleRemainder: "Decision Making",
    subtitle: "How statistical monitoring systems and precise predictive analytics frameworks transform charitable funding into maximum social impact infrastructure.",
    author: "Oche Akor",
    published: "June 15, 2026",
    sections: [
      {
        heading: "1. The Inefficiency of Distributed Giving Models",
        body: "Traditional charitable distributions frequently fail to maintain baseline operational milestones because of speculative resource allocation. Without comprehensive field metadata, funding is regularly deployed into misaligned initiatives. Transforming this approach requires a structural shift away from assumptions and toward data-driven reality.",
      },
      {
        heading: "2. Strategic Optimization for Target Pipelines",
        body: "Data-driven targeting operates beyond basic tracking spreadsheets, leveraging a structured framework to map distribution directly to real-time field configurations:",
        subpoints: [
          "Granular Geolocation Assessment: Mapping resource scarcity down to specific municipal facility requirements to remove redundant middle-tier pipelines.",
          "Real-Time Pipeline Analytics: Creating visibility streams so institutional partners can witness supply status checkpoints immediately from any node.",
          "Predictive Resource Deployment: Utilizing historical baseline trends to pre-position health supplies before localized seasonal demands stress vulnerable infrastructure.",
        ],
      },
      {
        heading: "3. Establishing Accountability Standards",
        body: "Transitioning to target-optimized structures establishes deep accountability profiles for global philanthropic networks. When giving is structured via measurable milestones, donors can see exactly how each investment directly strengthens regional social security architectures.",
      },
    ],
  },
};

export default function BlogPostDynamicPage() {
  const params = useParams();
  const id = params?.id as string;

  // Fallback to Topic 1 configuration if route id is unmatched
  const post = BLOG_REGISTRY[id] || BLOG_REGISTRY["systems-transformation-global-health"];

  return (
    <Box bg="white">
      <HeroSection
        title={
          <>
            <span style={{ color: "#019fab" }}>{post.titleFirstWord}</span> <br />
            <span style={{ color: "white" }}>{post.titleRemainder}</span>
          </>
        }
        subtitle={post.subtitle}
        backgroundImage="/hncontactbg.svg"
      />

      <Box bg="white" color="black" py={{ base: 10, md: 16 }}>
        <Container maxW="4xl" px={{ base: 5, md: 8 }}>
          <Stack gap="7" fontFamily="Times New Roman, serif">
            
            {/* Meta Info Header Block */}
            <Text fontSize="sm" color="gray.500" fontStyle="italic" mb="-2">
              Published on {post.published} • By {post.author}
            </Text>

            {post.sections.map((section, idx) => (
              <Box key={idx}>
                <Heading 
                  as="h2" 
                  fontSize={{ base: "20px", md: "24px" }} 
                  color="black" 
                  mb="3" 
                  fontFamily="Times New Roman, serif"
                >
                  {section.heading}
                </Heading>
                <Text fontSize={{ base: "15px", md: "17px" }} lineHeight="1.8" textAlign="justify">
                  {section.body}
                </Text>
                
                {section.subpoints && (
                  <Stack mt="3" pl="4" gap="2">
                    {section.subpoints.map((point, subIdx) => (
                      <Text 
                        key={subIdx} 
                        fontSize={{ base: "15px", md: "17px" }} 
                        lineHeight="1.8" 
                        textAlign="justify"
                      >
                        • <strong>{point.split(":")[0]}:</strong>{point.split(":")[1]}
                      </Text>
                    ))}
                  </Stack>
                )}
              </Box>
            ))}

          </Stack>
        </Container>
      </Box>
    </Box>
  );
}