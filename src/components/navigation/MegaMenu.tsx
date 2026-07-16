'use client';

import { 
  Box, Flex, Text, SimpleGrid, Image, Stack, IconButton, useDisclosure, Button
} from '@chakra-ui/react';
import { HiChevronDown, HiChevronUp, HiMenu } from 'react-icons/hi';
import { useState } from 'react';
import Link from 'next/link';

// Local UI snippet imports matching your file structure exactly
import { 
  DrawerRoot, DrawerBackdrop, DrawerContent, DrawerCloseTrigger, DrawerHeader, DrawerBody 
} from '@/components/ui/drawer';
import { 
  MenuRoot, MenuTrigger, MenuContent 
} from '@/components/ui/menu';
import {
  AccordionRoot, AccordionItem, AccordionItemTrigger, AccordionItemContent
} from '@/components/ui/accordion';

export default function PerfectedNavLayout() {
  const { open: mobileOpen, onOpen: onMobileOpen, onClose: onMobileClose } = useDisclosure();
  
  const [openMenus, setOpenMenus] = useState<{ [key: string]: boolean }>({
    corporate: false,
    ethics: false,
    insights: false,
  });

  const setMenuState = (menuKey: string, isOpen: boolean) => {
    setOpenMenus(prev => ({ ...prev, [menuKey]: isOpen }));
  };

  const brandTeal = "#019fab";
  const heroAndOuterBg = "#0D1B4A";
  const defaultTextHex = "#fffcfc";
  const hoverTextHex = "#ffffff";
  const dropDownBg = "#FFFFFF";
  const lineDemarcation = "1px solid rgba(0, 0, 0, 0.08)";

  return (
    <Box position="sticky" top="0" zIndex="sticky" w="full" bg={heroAndOuterBg} fontFamily='"Montserrat", sans-serif'>
      <Box px={{ base: 4, md: 8 }} py={3}>
        <Flex as="header" maxW="7xl" mx="auto" alignItems="center" justifyContent="space-between" relative="true">
          
          {/* LOGO AREA - Routes to root app landing page */}
          <Link href="/" passHref>
            <Flex align="center" cursor="pointer" flexShrink={0} pl={2}>
              <Image src="/favicon.ico" h="11" w="auto" alt="Corporate Logo" />
            </Flex>
          </Link>

          {/* DESKTOP FLOATING NAVBAR CAPSULE */}
          <Flex 
            as="nav" bg={brandTeal} borderRadius="10px" p="10px" boxShadow="0 10px 25px -5px rgba(0, 0, 0, 0.2)"
            display={{ base: 'none', lg: 'flex' }} alignItems="center" justifyContent="center" gap="10px" mx="auto"
          >
            {/* 1. CORPORATE MEGA MENU */}
            <MenuRoot open={openMenus.corporate} onOpenChange={(e) => setMenuState('corporate', e.open)} positioning={{ placement: "bottom", offset: { mainAxis: 15 } }}>
              <Box onMouseEnter={() => setMenuState('corporate', true)} onMouseLeave={() => setMenuState('corporate', false)}>
                <MenuTrigger asChild>
                  <Button 
                    variant="ghost" color={defaultTextHex} fontWeight={500} fontSize="15px" px="8px" py="4px" height="auto"
                    _hover={{ color: hoverTextHex, bg: brandTeal }} _focus={{ bg: brandTeal, color: defaultTextHex }} _focusVisible={{ bg: brandTeal }} _active={{ bg: brandTeal }}
                  >
                    Corporate
                    <Box as="span" display="inline-flex" alignItems="center" ml="2px">
                      {openMenus.corporate ? <HiChevronUp size="13" /> : <HiChevronDown size="13" />}
                    </Box>
                  </Button>
                </MenuTrigger>
                <MenuContent bg={dropDownBg} minW="2xl" p={6} borderRadius="lg" boxShadow="2xl">
                  <SimpleGrid columns={2} spacing={0}>
                    <Stack spacing={2} pr={4} borderRight={lineDemarcation}>
                      <Text fontSize="xs" color="gray.400" textTransform="capitalize" pb={2}>Hnglobal universe</Text>
                      <Link href="/about" passHref><Text color="black" fontWeight="normal" p={2} _hover={{ color: brandTeal }} cursor="pointer">About</Text></Link>
                      <Link href="/ethics" passHref><Text color="black" fontWeight="normal" p={2} _hover={{ color: brandTeal }} cursor="pointer">Ethics</Text></Link>
                      <Link href="/leadership" passHref><Text color="black" fontWeight="normal" p={2} _hover={{ color: brandTeal }} cursor="pointer">Our Leadership</Text></Link>
                      <Link href="/about" passHref><Text color="black" fontWeight="normal" p={2} _hover={{ color: brandTeal }} cursor="pointer">Mission</Text></Link>
                      <Link href="/about" passHref><Text color="black" fontWeight="normal" p={2} _hover={{ color: brandTeal }} cursor="pointer">Vision</Text></Link>
                      <Link href="/model" passHref><Text color="black" fontWeight="normal" p={2} _hover={{ color: brandTeal }} cursor="pointer">Impact Approach</Text></Link>
                      <Link href="/model" passHref><Text color="black" fontWeight="normal" p={2} _hover={{ color: brandTeal }} cursor="pointer">Resilience 360+</Text></Link>
                      <Link href="/resources" passHref><Text color="black" fontWeight="normal" p={2} _hover={{ color: brandTeal }} cursor="pointer">Insights</Text></Link>
                    </Stack>
                    <Stack spacing={2} pl={6}>
                      <Text fontSize="xs" color="gray.400" textTransform="capitalize" pb={2}>Get involved</Text>
                      <Link href="/volunteer" passHref><Text color="black" fontWeight="normal" p={2} _hover={{ color: brandTeal }} cursor="pointer">Corporate Volunteer</Text></Link>
                      <Link href="/volunteer" passHref><Text color="black" fontWeight="normal" p={2} _hover={{ color: brandTeal }} cursor="pointer">Individual Volunteer</Text></Link>
                      <Link href="/careers" passHref><Text color="black" fontWeight="normal" p={2} _hover={{ color: brandTeal }} cursor="pointer">Careers</Text></Link>
                      <Link href="/donate" passHref><Text color="black" fontWeight="normal" p={2} _hover={{ color: brandTeal }} cursor="pointer">Donate</Text></Link>
                      <Link href="/partnerships" passHref><Text color="black" fontWeight="normal" p={2} _hover={{ color: brandTeal }} cursor="pointer">Partnerships</Text></Link>
                    </Stack>
                  </SimpleGrid>
                </MenuContent>
              </Box>
            </MenuRoot>

            {/* 2. ETHICS MEGA MENU */}
            <MenuRoot open={openMenus.ethics} onOpenChange={(e) => setMenuState('ethics', e.open)} positioning={{ placement: "bottom", offset: { mainAxis: 15 } }}>
              <Box onMouseEnter={() => setMenuState('ethics', true)} onMouseLeave={() => setMenuState('ethics', false)}>
                <MenuTrigger asChild>
                  <Button 
                    variant="ghost" color={defaultTextHex} fontWeight={500} fontSize="15px" px="8px" py="4px" height="auto"
                    _hover={{ color: hoverTextHex, bg: brandTeal }} _focus={{ bg: brandTeal }} _focusVisible={{ bg: brandTeal }} _active={{ bg: brandTeal }}
                  >
                    Ethics
                    <Box as="span" display="inline-flex" alignItems="center" ml="2px">
                      {openMenus.ethics ? <HiChevronUp size="13" /> : <HiChevronDown size="13" />}
                    </Box>
                  </Button>
                </MenuTrigger>
                <MenuContent bg={dropDownBg} minW="2xl" p={6} borderRadius="lg" boxShadow="2xl">
                  <SimpleGrid columns={2} spacing={0}>
                    <Stack spacing={2} pr={4} borderRight={lineDemarcation}>
                      <Text fontSize="xs" color="gray.400" textTransform="capitalize" pb={2}>Our core values</Text>
                      {["Impact driven", "Integrity & Accountability", "Innovation with Purpose"].map((item) => (
                        <Link key={item} href="/ethics" passHref>
                          <Text color="black" fontWeight="normal" p={2} _hover={{ color: brandTeal }} cursor="pointer">{item}</Text>
                        </Link>
                      ))}
                    </Stack>
                    <Stack spacing={2} pl={6} pt={6}> 
                      {["Community centered", "Collaboration", "Equity & Inclusion"].map((item) => (
                        <Link key={item} href="/ethics" passHref>
                          <Text color="black" fontWeight="normal" p={2} _hover={{ color: brandTeal }} cursor="pointer">{item}</Text>
                        </Link>
                      ))}
                    </Stack>
                  </SimpleGrid>
                </MenuContent>
              </Box>
            </MenuRoot>

            {/* 3. INSIGHTS MEGA MENU */}
            <MenuRoot open={openMenus.insights} onOpenChange={(e) => setMenuState('insights', e.open)} positioning={{ placement: "bottom", offset: { mainAxis: 15 } }}>
              <Box onMouseEnter={() => setMenuState('insights', true)} onMouseLeave={() => setMenuState('insights', false)}>
                <MenuTrigger asChild>
                  <Button 
                    variant="ghost" color={defaultTextHex} fontWeight={500} fontSize="15px" px="8px" py="4px" height="auto"
                    _hover={{ color: hoverTextHex, bg: brandTeal }} _focus={{ bg: brandTeal }} _focusVisible={{ bg: brandTeal }} _active={{ bg: brandTeal }}
                  >
                    Insights
                    <Box as="span" display="inline-flex" alignItems="center" ml="2px">
                      {openMenus.insights ? <HiChevronUp size="13" /> : <HiChevronDown size="13" />}
                    </Box>
                  </Button>
                </MenuTrigger>
                <MenuContent bg={dropDownBg} minW="3xl" p={6} borderRadius="lg" boxShadow="2xl">
                  <SimpleGrid columns={2} spacing={0}>
                    <Stack spacing={2} pr={4} borderRight={lineDemarcation}>
                      <Link href="/model" passHref>
                        <Text fontSize="xs" color="gray.400" textTransform="capitalize" pb={2} _hover={{ color: brandTeal }} cursor="pointer">Hng ecosystem</Text>
                      </Link>
                      {["Resilience 360+", "Pathways", "Digital Intelligence", "Program Implementation", "Health systems", "Community engagement", "Economic empowerment"].map((item) => (
                        <Link key={item} href="/model" passHref>
                          <Text color="black" fontWeight="normal" p={2} _hover={{ color: brandTeal }} cursor="pointer">{item}</Text>
                        </Link>
                      ))}
                    </Stack>
                    <Stack spacing={2} pl={6}>
                      <Link href="/resources" passHref>
                        <Text fontSize="xs" color="gray.400" textTransform="capitalize" pb={2} _hover={{ color: brandTeal }} cursor="pointer">Resources</Text>
                      </Link>
                      {[
                        "Systems Transformation In Global Health", 
                        "Linking Economic Resilience To Health Outcomes", 
                        "Data-driven Decision-making In Development"
                      ].map((item) => (
                        <Link key={item} href="/resources" passHref>
                          <Text color="black" fontWeight="normal" p={2} whiteSpace="normal" fontSize="xs" _hover={{ color: brandTeal }} cursor="pointer">{item}</Text>
                        </Link>
                      ))}
                    </Stack>
                  </SimpleGrid>
                </MenuContent>
              </Box>
            </MenuRoot>

            {/* STANDALONE PAGES */}
            <Link href="/goodnexusai" passHref>
              <Button variant="ghost" color={defaultTextHex} fontWeight={500} fontSize="15px" px="8px" py="4px" height="auto" _hover={{ color: hoverTextHex, bg: brandTeal }} _focus={{ bg: brandTeal }}>GoodNexusAI</Button>
            </Link>
            <Link href="/contact" passHref>
              <Button variant="ghost" color={defaultTextHex} fontWeight={500} fontSize="15px" px="8px" py="4px" height="auto" _hover={{ color: hoverTextHex, bg: brandTeal }} _focus={{ bg: brandTeal }}>Contact</Button>
            </Link>
          </Flex>

          {/* RIGHT END PARTNER CTA BUTTON */}
          <Flex align="center" justify="flex-end" flexShrink={0} display={{ base: 'none', lg: 'inline-flex' }}>
            <Link href="/partnerships" passHref>
              <Button 
                backgroundColor="#FFFFFF" color="#019fab" fontFamily='"Montserrat", sans-serif' fontSize="14px" fontWeight={600} borderRadius="10px" px="20px" py="10px" height="44px"          
                _hover={{ backgroundColor: "#F8FAFC" }} _focus={{ bg: "#FFFFFF" }}
              >
                Partner
              </Button>
            </Link>
          </Flex>

          {/* MOBILE TOGGLE ICON BUTTON */}
          <IconButton
            display={{ base: 'flex', lg: 'none' }} onClick={onMobileOpen} aria-label="Open Mobile Menu" variant="solid" bg={brandTeal} color="white" borderRadius="10px" p="10px" _hover={{ bg: "#0D9488" }}
          >
            <HiMenu size="22px" />
          </IconButton>
        </Flex>
      </Box>

      {/* MOBILE RESPONSIVE SIDE PANEL (DRAWER) */}
      <DrawerRoot open={mobileOpen} onOpenChange={(e) => !e.open && onMobileClose()} placement="end">
        <DrawerBackdrop />
        <DrawerContent borderLeftRadius="xl" bg="white" color="black" maxWidth="sm">
          <DrawerCloseTrigger color="black" top="4" right="4" /> 
          <DrawerHeader borderBottomWidth="1px" borderColor="gray.100" pt={6} pb={4}>
            <Link href="/" onClick={onMobileClose} passHref>
              <Image src="/favicon.ico" h="8" w="auto" alt="Corporate Brand Logo" cursor="pointer" />
            </Link>
          </DrawerHeader>
          
          <DrawerBody py={6} px={4}>
            <Stack spacing={4}>
              <AccordionRoot collapsible type="single" variant="plain">
                
                <AccordionItem value="corporate" borderBottomWidth="1px" borderColor="gray.100" py={1}>
                  <AccordionItemTrigger px={0} py={3} color="black" fontSize="15px" fontWeight={500} _hover={{ color: brandTeal, bg: "transparent" }}>
                    Corporate
                  </AccordionItemTrigger>
                  <AccordionItemContent pb={4}>
                    <Stack spacing={4} pl={3} borderLeft={`2px solid ${brandTeal}`}>
                      <Box>
                        <Text fontSize="xs" fontWeight="bold" color="gray.400" textTransform="capitalize" mb={1}>Hnglobal universe</Text>
                        <Link href="/about" onClick={onMobileClose} passHref><Text py={1} fontSize="sm" color="gray.700" _hover={{ color: brandTeal }}>About</Text></Link>
                        <Link href="/ethics" onClick={onMobileClose} passHref><Text py={1} fontSize="sm" color="gray.700" _hover={{ color: brandTeal }}>Ethics</Text></Link>
                        <Link href="/leadership" onClick={onMobileClose} passHref><Text py={1} fontSize="sm" color="gray.700" _hover={{ color: brandTeal }}>Our Leadership</Text></Link>
                        <Link href="/about" onClick={onMobileClose} passHref><Text py={1} fontSize="sm" color="gray.700" _hover={{ color: brandTeal }}>Mission</Text></Link>
                        <Link href="/about" onClick={onMobileClose} passHref><Text py={1} fontSize="sm" color="gray.700" _hover={{ color: brandTeal }}>Vision</Text></Link>
                        <Link href="/model" onClick={onMobileClose} passHref><Text py={1} fontSize="sm" color="gray.700" _hover={{ color: brandTeal }}>Impact Approach</Text></Link>
                        <Link href="/model" onClick={onMobileClose} passHref><Text py={1} fontSize="sm" color="gray.700" _hover={{ color: brandTeal }}>Resilience 360+</Text></Link>
                        <Link href="/resources" onClick={onMobileClose} passHref><Text py={1} fontSize="sm" color="gray.700" _hover={{ color: brandTeal }}>Insights</Text></Link>
                      </Box>
                      <Box>
                        <Text fontSize="xs" fontWeight="bold" color="gray.400" textTransform="capitalize" mb={1}>Get involved</Text>
                        <Link href="/volunteer" onClick={onMobileClose} passHref><Text py={1} fontSize="sm" color="gray.700" _hover={{ color: brandTeal }}>Corporate Volunteer</Text></Link>
                        <Link href="/volunteer" onClick={onMobileClose} passHref><Text py={1} fontSize="sm" color="gray.700" _hover={{ color: brandTeal }}>Individual Volunteer</Text></Link>
                        <Link href="/careers" onClick={onMobileClose} passHref><Text py={1} fontSize="sm" color="gray.700" _hover={{ color: brandTeal }}>Careers</Text></Link>
                        <Link href="/donate" onClick={onMobileClose} passHref><Text py={1} fontSize="sm" color="gray.700" _hover={{ color: brandTeal }}>Donate</Text></Link>
                        <Link href="/partnerships" onClick={onMobileClose} passHref><Text py={1} fontSize="sm" color="gray.700" _hover={{ color: brandTeal }}>Partnerships</Text></Link>
                      </Box>
                    </Stack>
                  </AccordionItemContent>
                </AccordionItem>

                <AccordionItem value="ethics" borderBottomWidth="1px" borderColor="gray.100" py={1}>
                  <AccordionItemTrigger px={0} py={3} color="black" fontSize="15px" fontWeight={500} _hover={{ color: brandTeal, bg: "transparent" }}>
                    Ethics
                  </AccordionItemTrigger>
                  <AccordionItemContent pb={4}>
                    <Stack spacing={1} pl={3} borderLeft={`2px solid ${brandTeal}`}>
                      {["Impact driven", "Integrity & Accountability", "Innovation with Purpose", "Community centered", "Collaboration", "Equity & Inclusion"].map(item => (
                        <Link key={item} href="/ethics" onClick={onMobileClose} passHref>
                          <Text py={1} fontSize="sm" color="gray.700" _hover={{ color: brandTeal }}>{item}</Text>
                        </Link>
                      ))}
                    </Stack>
                  </AccordionItemContent>
                </AccordionItem>

                <AccordionItem value="insights" borderBottomWidth="1px" borderColor="gray.100" py={1}>
                  <AccordionItemTrigger px={0} py={3} color="black" fontSize="15px" fontWeight={500} _hover={{ color: brandTeal, bg: "transparent" }}>
                    Insights
                  </AccordionItemTrigger>
                  <AccordionItemContent pb={4}>
                    <Stack spacing={3} pl={3} borderLeft={`2px solid ${brandTeal}`}>
                      <Box>
                        <Link href="/model" onClick={onMobileClose} passHref>
                          <Text fontSize="xs" fontWeight="bold" color="gray.400" textTransform="capitalize" mb={2} _hover={{ color: brandTeal }}>Hng ecosystem</Text>
                        </Link>
                        {["Resilience 360+", "Pathways", "Digital Intelligence", "Program Implementation", "Health systems", "Community engagement", "Economic empowerment"].map(item => (
                          <Link key={item} href="/model" onClick={onMobileClose} passHref>
                            <Text py={1} fontSize="sm" color="gray.700" _hover={{ color: brandTeal }}>{item}</Text>
                          </Link>
                        ))}
                      </Box>
                      <Box pt={2}>
                        <Link href="/resources" onClick={onMobileClose} passHref>
                          <Text fontSize="xs" fontWeight="bold" color="gray.400" textTransform="capitalize" mb={2} _hover={{ color: brandTeal }}>Resources</Text>
                        </Link>
                        {[
                          "Systems transformation in global health", 
                          "Linking economic resilience to health outcomes", 
                          "Data-driven decision-making in development"
                        ].map(item => (
                          <Link key={item} href="/resources" onClick={onMobileClose} passHref>
                            <Text py={1} fontSize="sm" color="gray.700" _hover={{ color: brandTeal }}>{item}</Text>
                          </Link>
                        ))}
                      </Box>
                    </Stack>
                  </AccordionItemContent>
                </AccordionItem>

              </AccordionRoot>

              <Link href="/goodnexusai" onClick={onMobileClose} passHref>
                <Text py={2} fontSize="15px" fontWeight={500} color="black" _hover={{ color: brandTeal }}>GoodNexusAI</Text>
              </Link>
              <Link href="/contact" onClick={onMobileClose} passHref>
                <Text py={2} fontSize="15px" fontWeight={500} color="black" _hover={{ color: brandTeal }}>Contact</Text>
              </Link>

              <Link href="/partnerships" onClick={onMobileClose} passHref>
                <Button backgroundColor="#2B2B2B" color="white" fontSize="14px" fontWeight={600} w="full" borderRadius="10px" py="12px" height="46px" mt={2} _hover={{ backgroundColor: "#1C1C1C" }}>
                  Partner
                </Button>
              </Link>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </DrawerRoot>

    </Box>
  );
}
