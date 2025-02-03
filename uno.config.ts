import { defineConfig, presetWind, presetTypography, presetIcons } from 'unocss'

export default defineConfig({
  presets: [
    presetWind(),
    presetTypography(),
    presetIcons({
      collections: {
        grommet: async () => {
          const icons = await import('@iconify-json/grommet-icons/icons.json')
          return icons.default
        },
        simple: async () => {
          const icons = await import('@iconify-json/simple-icons/icons.json')
          return icons.default
        },
        logos: async () => {
          const icons = await import('@iconify-json/logos/icons.json')
          return icons.default
        },
      },
    }),
  ],
})
