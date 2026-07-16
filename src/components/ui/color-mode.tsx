"use client";

import * as React from "react";

// next-themes is not needed — it conflicts with Emotion/Chakra v3's SSR.
// Since this app uses light mode only, we stub the API out statically.

type ColorMode = "light" | "dark";

const ColorModeContext = React.createContext<{
  colorMode: ColorMode;
  toggleColorMode: () => void;
}>({ colorMode: "light", toggleColorMode: () => {} });

export function ColorModeProvider({ children }: { children: React.ReactNode }) {
  // Extend this to useState + localStorage if you add dark mode later.
  return (
    <ColorModeContext.Provider value={{ colorMode: "light", toggleColorMode: () => {} }}>
      {children}
    </ColorModeContext.Provider>
  );
}

export function useColorMode() {
  return React.useContext(ColorModeContext);
}

export function useColorModeValue<T>(light: T, _dark: T): T {
  void _dark;
  return light;
}
