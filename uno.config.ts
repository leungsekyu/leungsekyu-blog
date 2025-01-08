import {
  defineConfig,
  presetIcons,
  presetWind,
  presetTypography,
} from "unocss";

export default defineConfig({
  presets: [
    presetWind(),
    presetIcons({
      collections: {
        grommet: async () => {
          const icons = await import("@iconify-json/grommet-icons/icons.json");
          return icons.default;
        },
      },
    }),
    presetTypography(),
  ],
});
