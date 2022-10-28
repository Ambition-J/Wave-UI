const sidebar = {
  "/": [
    {
      text: "介绍",
      items: [{ text: "什么是 Smart-UI?", link: "/" }],
    },
    {
      text: "通用",
      items: [{ text: "Button 按钮", link: "/components/button/" }],
    },
  ],
};
const nav = [
  { text: "Guide", link: "/guide" },
  {
    text: "Dropdown Menu",
    items: [
      { text: "Item A", link: "/item-1" },
      { text: "Item B", link: "/item-2" },
      { text: "Item C", link: "/item-3" },
    ],
  },
];
const config = {
  title: "🔨  Wave Ui",
  description: "Just playing around.",
  lang: "zh-CN",
  themeConfig: {
    siteTitle: "Wave ui",
    sidebar,
    nav,
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2019-present Evan You",
    },
  },
  markdown: {
    config: (md) => {
      // 添加DemoBlock插槽
      const { demoBlockPlugin } = require("vitepress-theme-demoblock");
      md.use(demoBlockPlugin);
    },
  },
  demoblock: {
    "/zh": {
      "hide-text": "隐藏代码",
      "show-text": "显示代码",
      "copy-button-text": "复制代码片段",
      "copy-success-text": "复制成功",
    },
  },
};
export default config;


