import { defineConfig, presetWind, presetIcons, presetTypography } from 'unocss'

export default defineConfig({
  presets: [
    presetWind(),
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
    presetTypography(),
  ],
})
