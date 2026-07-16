"use client";

import React from 'react';
import { Box, Image, Link, Flex, Text } from "@chakra-ui/react";

export function OfficeMap() {
  const staticMapImageUrl = "/Josmap.png";
  const interactiveMapUrl = "https://yandex.com/maps/geo/jos_plateau/4673736051/?ll=9.677171%2C9.824960&rl=8.583496%2C10.698457&source=serp_navig&z=8.97";

  return (
    <Box 
      h="full" 
      w="full" 
      position="relative"
      overflow="hidden"
      borderRadius="lg"
      border="1px solid"
      borderColor="gray.200"
      boxShadow="sm"
    >
      <Link href={interactiveMapUrl} isExternal style={{ textDecoration: 'none', width: '100%', height: '100%', display: 'block' }}>
        <Flex 
          direction="column" 
          h="full" 
          w="full" 
          position="relative"
          _hover={{ opacity: 0.95 }}
          transition="opacity 0.2s ease"
        >
          <Image
            src={staticMapImageUrl}
            alt="HNG HQ Office Location Map - Jos, Nigeria"
            w="full"
            h="full"
            objectFit="cover"
          />
          
          {/* Transparent ribbon overlay styled with #019fab color match */}
          <Flex
            position="absolute"
            bottom="0"
            left="0"
            right="0"
            bg="rgba(1, 159, 171, 0.85)" // Re-colored to matching transparent #019fab token
            p="3"
            justify="center"
            align="center"
          >
            <Text color="white" fontSize="xs" fontWeight="bold" letterSpacing="wider">
              CLICK TO OPEN INTERACTIVE DIRECTIONS ↗
            </Text>
          </Flex>
        </Flex>
      </Link>
    </Box>
  );
}
