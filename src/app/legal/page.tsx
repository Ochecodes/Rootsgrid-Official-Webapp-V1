import { Box, Container, Heading, Stack, Text } from "@chakra-ui/react"
import { HeroSection } from "@/components/ui/hero-section-2"

export default function LegalPage() {
  return (
    <Box bg="white">
      <HeroSection
        title={
          <>
            <span style={{ color: "#019fab" }}>Legal</span> <br />
            <span style={{ color: "white" }}>Framework</span>
          </>
        }
        subtitle="Review the foundational website policies for privacy, data, cookies, terms of service, payments, donations, and legal disclaimers."
        backgroundImage="/hncontactbg.svg"
      />

      <Box bg="white" color="black" py={{ base: 10, md: 16 }}>
        <Container maxW="4xl" px={{ base: 5, md: 8 }}>
          <Stack gap="7" fontFamily="Times New Roman, serif">
            <Text fontSize={{ base: "15px", md: "17px" }} lineHeight="1.8" textAlign="justify">
              This document outlines the legal framework for the Heart for the Nation Initiative website. Please ensure you have this reviewed by a qualified legal professional to ensure it fully complies with the specific laws of your operating jurisdiction.
            </Text>

            <Box>
              <Heading as="h2" fontSize={{ base: "20px", md: "24px" }} color="black" mb="3" fontFamily="Times New Roman, serif">
                1. Privacy Policy
              </Heading>
              <Text fontSize={{ base: "15px", md: "17px" }} lineHeight="1.8" textAlign="justify">
                Heart for the Nation Initiative is committed to protecting your privacy. We collect information to better understand our partners and community members. This includes contact information provided through our website for collaboration or inquiries. We process this data to facilitate partnerships and communication regarding our mission to transform health and development outcomes. We adhere to the Nigeria Data Protection Regulation (NDPR) and the General Data Protection Regulation (GDPR) where applicable.
              </Text>
            </Box>

            <Box>
              <Heading as="h2" fontSize={{ base: "20px", md: "24px" }} color="black" mb="3" fontFamily="Times New Roman, serif">
                2. Data Policy
              </Heading>
              <Text fontSize={{ base: "15px", md: "17px" }} lineHeight="1.8" textAlign="justify">
                We treat data as a critical tool for driving action and improving outcomes. Our data practices prioritize integrity, transparency, and accountability.
              </Text>
              <Text mt="3" fontSize={{ base: "15px", md: "17px" }} lineHeight="1.8" textAlign="justify">
                <strong>Collection:</strong> We collect data necessary for system strengthening and community engagement.
              </Text>
              <Text mt="2" fontSize={{ base: "15px", md: "17px" }} lineHeight="1.8" textAlign="justify">
                <strong>Usage:</strong> Data is utilized to improve service efficiency and foster economic resilience.
              </Text>
              <Text mt="2" fontSize={{ base: "15px", md: "17px" }} lineHeight="1.8" textAlign="justify">
                <strong>Security:</strong> We implement measures to protect the information we hold, ensuring it is used only to advance our impact-driven mission.
              </Text>
            </Box>

            <Box>
              <Heading as="h2" fontSize={{ base: "20px", md: "24px" }} color="black" mb="3" fontFamily="Times New Roman, serif">
                3. Cookies Policy
              </Heading>
              <Text fontSize={{ base: "15px", md: "17px" }} lineHeight="1.8" textAlign="justify">
                Our website uses cookies to enhance user experience. Cookies allow us to understand how visitors interact with our content, such as our insights on systems transformation and our RESILIENCE 360+ model. By continuing to use this site, you consent to our use of cookies in accordance with this policy.
              </Text>
            </Box>

            <Box>
              <Heading as="h2" fontSize={{ base: "20px", md: "24px" }} color="black" mb="3" fontFamily="Times New Roman, serif">
                4. Terms of Service
              </Heading>
              <Text fontSize={{ base: "15px", md: "17px" }} lineHeight="1.8" textAlign="justify">
                By using the Heart for the Nation Initiative website, you agree to these terms.
              </Text>
              <Text mt="3" fontSize={{ base: "15px", md: "17px" }} lineHeight="1.8" textAlign="justify">
                <strong>Purpose:</strong> The website is provided to share information about our work in health systems, community engagement, and economic empowerment.
              </Text>
              <Text mt="2" fontSize={{ base: "15px", md: "17px" }} lineHeight="1.8" textAlign="justify">
                <strong>Intellectual Property:</strong> All content, including our models and mission statements, is the property of the Heart for the Nation Initiative.
              </Text>
              <Text mt="2" fontSize={{ base: "15px", md: "17px" }} lineHeight="1.8" textAlign="justify">
                <strong>Prohibited Use:</strong> You may not use this site for any unlawful purpose or in a way that disrupts our ability to deliver sustainable impact.
              </Text>
            </Box>

            <Box>
              <Heading as="h2" fontSize={{ base: "20px", md: "24px" }} color="black" mb="3" fontFamily="Times New Roman, serif">
                5. Payments and Donations
              </Heading>
              <Text fontSize={{ base: "15px", md: "17px" }} lineHeight="1.8" textAlign="justify">
                Heart for the Nation Initiative welcomes partnerships to help us scale our integrated systems.
              </Text>
              <Text mt="3" fontSize={{ base: "15px", md: "17px" }} lineHeight="1.8" textAlign="justify">
                <strong>Transparency:</strong> We act with transparency regarding all financial contributions.
              </Text>
              <Text mt="2" fontSize={{ base: "15px", md: "17px" }} lineHeight="1.8" textAlign="justify">
                <strong>Purpose:</strong> Donations and partnership funds are used to support our programs in systems strengthening, digital innovation, and economic empowerment.
              </Text>
              <Text mt="2" fontSize={{ base: "15px", md: "17px" }} lineHeight="1.8" textAlign="justify">
                <strong>Security:</strong> We utilize secure platforms for processing contributions to ensure the safety of our partners and donors.
              </Text>
            </Box>

            <Box>
              <Heading as="h2" fontSize={{ base: "20px", md: "24px" }} color="black" mb="3" fontFamily="Times New Roman, serif">
                Important Disclaimer
              </Heading>
              <Text fontSize={{ base: "15px", md: "17px" }} lineHeight="1.8" textAlign="justify">
                This document serves as a foundational template based on the information provided about the Heart for the Nation Initiative. Because laws regarding data privacy, digital commerce, and charitable contributions vary significantly by region, you must consult with a legal advisor to finalize these policies for your specific website and location.
              </Text>
            </Box>
          </Stack>
        </Container>
      </Box>
    </Box>
  )
}
