module.exports = {
  base: "/vuedoc/", // 网站用来部署的基准 URL
  title: "问题搜集",
  description: "搜集问题",
  head: [
    // 注入到当前页面的 HTML <head> 中的标签
    [
      "meta",
      {
        name: "theme-color",
        content: "#3eaf7c",
      },
    ],
    [
      "meta",
      {
        name: "apple-mobile-web-app-capable",
        content: "yes",
      },
    ],
    [
      "meta",
      {
        name: "apple-mobile-web-app-status-bar-style",
        content: "black",
      },
    ],
    [
      "meta",
      {
        name: "msapplication-TileColor",
        content: "#000000",
      },
    ],
    [
      "meta",
      {
        name: "viewport",
        content:
          "width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no",
      },
    ],
  ],
  markdown: {
    lineNumbers: true, // 代码块显示行号
  },
  plugins: [
    "@vuepress/active-header-links",
    "@vuepress/back-to-top",
    [
      "@vuepress/last-updated",
      {
        transformer: (timestamp, lang) => {
          // 不要忘了安装 moment
          const moment = require("moment");
          moment.locale(lang);
          return moment(timestamp).format("lll");
        },
      },
    ],
    "@vuepress/nprogress",
  ],
};
