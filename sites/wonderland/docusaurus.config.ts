import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import deepmerge from "deepmerge";
import commonConfig from "@common-config/preset/commonDocusaurusConfig";
import llmsTxtPlugin from "./plugins/llmsTxtPlugin";

const localConfig: Config = {
  title: "Wonderland Handbook",
  tagline:
    "A curated guide to our best practices, processes, and technical insights.",
  favicon: "img/favicon.ico",
  url: "https://handbook.defi.sucks/",
  baseUrl: "/wonderland/",
  organizationName: "defi-wonderland",
  projectName: "handbook",
  plugins: [llmsTxtPlugin],
  themeConfig: {
    image: "img/wonderland-social-card.png",
    navbar: {
      logo: {
        alt: "Wonderland Handbook",
        src: "img/logo.svg",
        style: { height: "100%", width: "auto" },
        className: "navbar-logo-center",
      },
      style: "dark",
      items: [],
    },
    footer: {
      style: "dark",
      links: [],
      copyright: `Copyright © ${new Date().getFullYear()} Wonderland.`,
    },
  },
  presets: [
    [
      "classic",
      {
        docs: {
          remarkPlugins: [require("remark-math")],
          rehypePlugins: [require("rehype-katex")],
          sidebarPath: "./sidebars.ts",
        },
        blog: false,
        theme: {
          customCss: [
            require.resolve("./static/common/styles/global.css"),
            require.resolve("./src/css/local.css"),
          ],
        },
      } satisfies Preset.Options,
    ],
  ],
};

export default deepmerge(commonConfig, localConfig) as Config;
