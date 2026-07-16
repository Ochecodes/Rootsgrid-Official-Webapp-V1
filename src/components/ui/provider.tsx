"use client";

import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import { ColorModeProvider } from "./color-mode";
import { EmotionRegistry } from "./registry";
import type { ReactNode } from "react";

export function Provider({ children }: { children: ReactNode }) {
  return (
    <EmotionRegistry>
      <ChakraProvider value={defaultSystem}>
        <ColorModeProvider>{children}</ColorModeProvider>
      </ChakraProvider>
    </EmotionRegistry>
  );
}