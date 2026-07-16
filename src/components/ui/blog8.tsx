"use client";

import { Box, Container, Heading, Text, SimpleGrid, VStack, HStack, Image, Link } from "@chakra-ui/react";
import { ArrowRight } from "lucide-react";
import NextLink from "next/link";

interface Post {
  id: string;
  title: string;
  summary: string;
  label: string;
  author: string;
  published: string;
  url: string;
  image: string;
  tags: string[];
}

interface Blog8Props {
  heading: React.ReactNode; // Changed to support custom JSX color elements perfectly
  description: string;
  posts: Post[];
}

export function Blog8({ heading, description, posts }: Blog8Props) {
  return (
    // Changed bg to transparent and stripped heavy py parameters to fit layout cleanly
    <Box as="section" pt={{ base: 12, md: 16 }} pb={0} color="foreground" w="full">
      <Container maxW="6xl" px={4}>
        
        {/* Section Header */}
        <Box maxW="3xl" mb={12}>
          <Heading 
            as="h2" 
            size="xl" 
            letterSpacing="tight" 
            mb={4} 
            fontFamily="var(--font-montserrat), sans-serif"
          >
            {heading}
          </Heading>
          <Text color="gray.600" fontSize={{ base: "md", md: "lg" }}>
            {description}
          </Text>
        </Box>

        {/* Offset Row Layout List */}
        <VStack gap={{ base: 12, md: 16 }} align="stretch">
          {posts.map((post) => (
            <SimpleGrid
              key={post.id}
              as="article"
              columns={{ base: 1, md: 12 }}
              gap={8}
              alignItems="center"
              borderBottom="1px solid"
              borderColor="rgba(0, 0, 0, 0.1)"
              pb={12}
              _last={{ borderBottom: "none", pb: 4 }} // Ensures zero clipping on final item
            >
              {/* Thumbnail Container */}
              <Box 
                gridColumn={{ base: "span 1", md: "span 5" }}
                overflow="hidden" 
                borderRadius="xl" 
                border="1px solid"
                borderColor="rgba(0, 0, 0, 0.1)" 
                bg="muted" 
                aspectRatio={16 / 10} 
                position="relative"
                role="group"
              >
                <Link as={NextLink} href={post.url} w="full" h="full" display="block">
                  <Image
                    src={post.image}
                    alt={post.title}
                    w="full"
                    h="full"
                    objectFit="cover"
                    transition="transform 0.5s"
                    _groupHover={{ transform: "scale(1.05)" }}
                  />
                </Link>
                <Box
                  position="absolute"
                  top={4}
                  left={4}
                  bg="#019fab"
                  color="white"
                  fontSize="xs"
                  px={2.5}
                  py={1}
                  borderRadius="full"
                  fontWeight="medium"
                  pointerEvents="none"
                >
                  {post.label}
                </Box>
              </Box>

              {/* Text Description Block */}
              <VStack 
                gridColumn={{ base: "span 1", md: "span 7" }}
                align="flex-start" 
                justify="center"
                gap={0}
              >
                <HStack gap={3} fontSize="xs" color="gray.500" mb={3}>
                  <Text as="span">{post.author}</Text>
                  <Text as="span">•</Text>
                  <Text as="span">{post.published}</Text>
                </HStack>

                <Link 
                  as={NextLink} 
                  href={post.url} 
                  role="group" 
                  textDecoration="none" 
                  _hover={{ textDecoration: "none" }} 
                  w="full"
                >
                  <Heading
                    as="h3"
                    fontSize={{ base: "xl", md: "2xl" }}
                    fontWeight="semibold"
                    mb={3}
                    lineClamp={2}
                    _groupHover={{ color: "#019fab" }}
                    transition="color 0.2s"
                    fontFamily="var(--font-montserrat), sans-serif"
                  >
                    {post.title}
                  </Heading>
                </Link>

                <Text color="gray.600" fontSize={{ base: "sm", md: "md" }} mb={6} lineClamp={3} lineHeight="relaxed">
                  {post.summary}
                </Text>

                {/* Tags and CTA Actions */}
                <HStack w="full" justify="space-between" align="center" wrap="wrap" gap={4} mt="auto">
                  <HStack gap={2} wrap="wrap">
                    {post.tags.map((tag) => (
                      <Box
                        key={tag}
                        bg="rgba(1, 159, 171, 0.1)"
                        color="#019fab"
                        fontSize="xs"
                        px={2.5}
                        py={1}
                        borderRadius="md"
                        fontWeight="medium"
                      >
                        {tag}
                      </Box>
                    ))}
                  </HStack>

                  <Link
                    as={NextLink}
                    href={post.url}
                    display="inline-flex"
                    alignItems="center"
                    gap={1.5}
                    fontSize="sm"
                    fontWeight="medium"
                    color="#1E3A8A"
                    _hover={{ color: "#019fab", textDecoration: "none" }}
                    transition="color 0.2s"
                  >
                    Read article
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </HStack>
              </VStack>
            </SimpleGrid>
          ))}
        </VStack>
      </Container>
    </Box>
  );
}