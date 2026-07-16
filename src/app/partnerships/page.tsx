import { Box } from "@chakra-ui/react"
import FaqAccordion from "@/components/home/FaqAccordion"
import GoodnexusCard from "@/components/home/GoodnexusCard"
import { HeroSection } from "@/components/ui/hero-section-2"
import PartnerParallax from "@/components/ui/Partner"

export default function PartnershipsPage() {
  return (
    <Box>
      <HeroSection
        title={
          <>
            <span style={{ color: "#019fab" }}>Partner</span> <br />
            <span style={{ color: "white" }}>With Us</span>
          </>
        }
        subtitle="Collaborate with HNGlobal to design, fund, and scale integrated systems that strengthen communities, improve outcomes, and compound long-term impact."
        backgroundImage="/hncontactbg.svg"
      />

      {/* Styled top gap here to cleanly distance it from the hero above */}
      <Box mt={{ base: 12, md: 20 }} mb={0}>
        <PartnerParallax />
      </Box>

      {/* Margins below are tight so this links directly up to the descriptive sections */}
      <FaqAccordion />
      <GoodnexusCard />
    </Box>
  )
}