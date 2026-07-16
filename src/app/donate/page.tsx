"use client";

import { 
  Box, 
  Container, 
  Heading, 
  Text, 
  SimpleGrid, 
  VStack, 
  HStack,
  Input, 
  Button, 
  Field,
  List
} from "@chakra-ui/react";
import { useState, type ChangeEvent } from "react";
import FaqAccordion from "@/components/home/FaqAccordion";
import GoodnexusCard from "@/components/home/GoodnexusCard";
import { HeroSection } from "@/components/ui/hero-section-2";

export default function DonatePage() {
  const [customAmount, setCustomAmount] = useState("2000");
  const [selectedAmount, setSelectedAmount] = useState("2000");
  const [currency, setCurrency] = useState("USD");

  const handleAmountClick = (amount: string) => {
    setSelectedAmount(amount);
    if (amount !== "custom") {
      setCustomAmount(amount);
    }
  };

  // Handle Stripe payment redirect action window
  const handleStripePayment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customAmount || parseFloat(customAmount) <= 0) {
      alert("Please select or enter a valid donation amount.");
      return;
    }

    // Replace this placeholder string with your live production URL from the Stripe Dashboard
    window.location.href = `https://stripe.com/${customAmount}?currency=${currency}`;
  };

  return (
    <Box bg="#F8FAFC">
      {/* Hero Section */}
      <HeroSection 
        title={
          <>
            <span style={{ color: "#019fab" }}>Give with</span> <br />
            <span style={{ color: "white" }}>Purpose</span>
          </>
        } 
        subtitle="Support integrated interventions that strengthen health access, expand opportunity, and help communities move from urgent need to sustained resilience." 
        backgroundImage="/hncontactbg.svg" 
      />

      {/* Main Dynamic Feature Section Utilizing Your Map/Contact Background Asset */}
      <Box 
        py={{ base: 16, md: 24 }}
        px={4}
        backgroundImage="url('/hncontactbg.svg')"
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundAttachment="fixed"
        position="relative"
      >
        {/* White semi-transparent tint overlay to keep background visible but maintain clean brightness */}
        <Box 
          position="absolute" 
          top={0} 
          left={0} 
          right={0} 
          bottom={0} 
          bg="rgba(255, 255, 255, 0.88)" 
          zIndex={1} 
        />

        <Container maxW="5xl" position="relative" zIndex={2}>
          {/* Main Integrated Container Box utilizing Brand Teal background layered with texturedbg.jpg */}
          <SimpleGrid 
            columns={{ base: 1, md: 12 }} 
            gap={{ base: 8, md: 0 }} 
            bg="#019fab" // Changed from Navy to Brand Teal
            backgroundImage="linear-gradient(rgba(1, 159, 171, 0.85), rgba(1, 159, 171, 0.85)), url('/texturedbg.jpg')" // Jean texture layer blend
            backgroundSize="cover"
            backgroundPosition="center"
            borderRadius="3xl" 
            boxShadow="2xl"
            overflow="hidden"
            p={{ base: 6, md: 12 }}
          >
            
            {/* Left Column Area: Content Text Blocks & Styling Feature Badges */}
            <Box gridColumn={{ base: "span 1", md: "span 7" }} pr={{ base: 0, md: 8 }}>
              <VStack align="stretch" gap={6}>
                <Heading as="h2" size="xl" color="white" fontWeight="600">
                  Empowering Systems Transformation
                </Heading>
                
                <Text color="gray.100" fontSize="md" lineHeight="tall">
                  By contributing to Heart for the Nation Initiative (HNGlobal), you are helping us coordinate and drive systems transformation to deliver scalable, sustainable global impact and resilient communities.
                </Text>

                <List.Root gap={4} listStyle="none" mt={4}>
                  {[
                    "Integrated health systems expansion",
                    "Economic empowerment and growth",
                    "Community engagement and promotion",
                    "Data and innovation support"
                  ].map((item, index) => (
                    <List.Item key={index} display="flex" alignItems="center" color="white" fontSize="sm">
                      <Box as="span" color="#1E3A8A" fontWeight="bold" mr={3} fontSize="lg">•</Box> {/* Changed dot color to Navy */}
                      {item}
                    </List.Item>
                  ))}
                </List.Root>
              </VStack>
            </Box>

            {/* Right Column Area: White Floating Modular Stripe & FormSubmit Card */}
            <Box gridColumn={{ base: "span 1", md: "span 5" }}>
              <VStack 
                align="stretch" 
                gap={6} 
                bg="white" 
                p={{ base: 6, md: 8 }} 
                borderRadius="2xl" 
                boxShadow="lg"
              >
                {/* Form Elements Mapping to Stripe Configuration Execution Framework */}
                <form onSubmit={handleStripePayment}>
                  <VStack gap={5} align="stretch">
                    
                    {/* Header Details Segment with Currency Dropdown */}
                    <HStack justify="space-between" align="center">
                      <Text color="gray.400" fontWeight="bold" fontSize="xs" letterSpacing="wider">
                        SELECT CURRENCY
                      </Text>
                      <select
                        value={currency}
                        onChange={(e: ChangeEvent<HTMLSelectElement>) => setCurrency(e.target.value)}
                        style={{
                          background: "transparent",
                          color: "#019fab",
                          fontWeight: 400,
                          fontSize: "0.875rem",
                          border: "none",
                          outline: "none",
                          cursor: "pointer",
                        }}
                      >
                        <option value="USD">USD ($)</option>
                        <option value="NGN">Naira (₦)</option>
                        <option value="GBP">Pound (£)</option>
                        <option value="EUR">Euro (€)</option>
                        <option value="JPY">Yen (¥)</option>
                        <option value="CNY">RMB (¥)</option>
                        <option value="LRK">Lark (L)</option>
                      </select>
                    </HStack>

                    {/* Styled Selection Pillars Block Row layout wrapper elements */}
                    <HStack gap={3}>
                      {["2000", "5000", "10000"].map((amt) => (
                        <Button
                          key={amt}
                          type="button"
                          flex={1}
                          size="md"
                          bg={selectedAmount === amt ? "#019fab" : "gray.50"} // Changed active background to Teal
                          color={selectedAmount === amt ? "white" : "gray.700"}
                          borderRadius="xl"
                          fontWeight="bold"
                          _hover={{ bg: selectedAmount === amt ? "#017f8a" : "gray.100" }}
                          onClick={() => handleAmountClick(amt)}
                        >
                          {parseInt(amt).toLocaleString()}
                        </Button>
                      ))}
                    </HStack>

                    {/* Live Tracking Tier Config Amount Area Label Element Row Block */}
                    <Field.Root required>
                      <Field.Label color="gray.400" fontWeight="bold" fontSize="xs" letterSpacing="wider" mb={1}>
                        CUSTOM AMOUNT
                      </Field.Label>
                      <HStack 
                        bg="gray.50" 
                        borderRadius="xl" 
                        px={4} 
                        py={3} 
                        border="1px solid" 
                        borderColor="gray.100"
                        _focusWithin={{ borderColor: "#1E3A8A", bg: "white" }} // Changed border focus to Navy
                      >
                        <Text color="#019fab" fontWeight="bold" fontSize="md">{currency}</Text> {/* Changed currency text to Teal */}
                        <Input 
                          type="number"
                          min="1"
                          bg="transparent"
                          border="none"
                          outline="none"
                          _focus={{ boxShadow: "none" }}
                          p={0}
                          fontSize="md"
                          fontWeight="bold"
                          color="gray.800"
                          value={customAmount} 
                          onChange={(e) => {
                            setCustomAmount(e.target.value);
                            setSelectedAmount("custom");
                          }}
                        />
                      </HStack>
                    </Field.Root>

                    {/* Integrated User Contact Email Field Reference Input Framework Box */}
                    <Field.Root required>
                      <Field.Label color="gray.400" fontWeight="bold" fontSize="xs" letterSpacing="wider" mb={1}>
                        EMAIL ADDRESS
                      </Field.Label>
                      <Input 
                        type="email" 
                        placeholder="johndoe@example.com" 
                        size="lg"
                        bg="gray.50"
                        borderColor="gray.100"
                        borderRadius="xl"
                        fontSize="sm"
                        _focus={{ borderColor: "#1E3A8A", bg: "white", outline: "none", boxShadow: "0 0 0 1px #1E3A8A" }} // Changed input focus to Navy
                      />
                    </Field.Root>

                    {/* Submission Core Navigation Button matching Brand Navy */}
                    <Button 
                      type="submit" 
                      bg="#1E3A8A" // Changed from Teal to Brand Navy
                      color="white" 
                      w="full" 
                      size="lg"
                      borderRadius="xl"
                      _hover={{ bg: "#152a66" }} // Darker navy hover state
                      fontWeight="bold"
                      fontSize="xs"
                      letterSpacing="widest"
                      textTransform="uppercase"
                      py={6}
                      mt={2}
                      transition="all 0.2s ease"
                    >
                      Contribute
                    </Button>
                  </VStack>
                </form>
              </VStack>
            </Box>

          </SimpleGrid>
        </Container>
      </Box>

      {/* Footer and Supplemental Blocks */}
      <Box>
        <FaqAccordion />
        <GoodnexusCard />
      </Box>
    </Box>
  );
}
