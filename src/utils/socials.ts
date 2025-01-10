export const socials = [
  {
    name: "GitHub",
    url: "https://github.com/leungsekyu",
    icon: "i-grommet-icons-github",
  },
  {
    name: "X",
    url: "https://x.com/leungsekyu",
    icon: "i-grommet-icons-x",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/leungsekyu/",
    icon: "i-grommet-icons-linkedin",
  },
  {
    name: "小红书",
    url: "https://www.xiaohongshu.com/user/profile/64b3094b000000000b015d2b",
    icon: "i-simple-icons-xiaohongshu",
  },
  { name: "RSS", url: "/rss.xml", icon: "i-grommet-icons-rss" },
];

export const desktopSocials = socials.filter(
  (social) =>
    social.name === "GitHub" ||
    social.name === "小红书" ||
    social.name === "RSS",
);

export const mobileSocials = socials.filter(
  (social) =>
    social.name === "GitHub" || social.name === "X" || social.name === "小红书",
);
