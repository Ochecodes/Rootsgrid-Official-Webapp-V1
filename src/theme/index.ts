import { createSystem, defineConfig } from "@chakra-ui/react"
import { colors } from "./colors"

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        // Map the brand colors to tokens
        brand: {
          primary: { value: colors.brand.primary },
          secondary: { value: colors.brand.secondary },
          accent1: { value: colors.brand.accent1 },
          accent2: { value: colors.brand.accent2 },
        },
      },
    },
    semanticTokens: {
      colors: {
        text: {
          main: { value: "{colors.slate.700}" },
          heading: { value: "{colors.brand.primary}" },
        },
      },
    },
  },
})

export const system = createSystem(config)
