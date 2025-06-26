import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "OP Handbook",
  tagline: "The Wonderland Onboarding to Optimism",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://handbook-monorepo-test-wonderland.vercel.app",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/optimism/",

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          editUrl: undefined,
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,
        },
        blog: false,
        theme: {
          customCss: [
            "./static/common/styles/global.css",
            "./src/css/local.css",
          ],
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: "img/op-handbook-social.png",
    navbar: {
      title: "",
      logo: {
        alt: "OP Handbook",
        src: "img/logo.svg",
        srcDark: "img/logo.svg",
        className: "navbar-logo-center",
      },
      items: [],
      hideOnScroll: false,
    },
    footer: {
      style: "dark",
      copyright: `Copyright © ${new Date().getFullYear()} Wonderland`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ["solidity", "rust"],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
