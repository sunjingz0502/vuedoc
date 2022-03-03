export default ({ router }) => {
  if (typeof process === "undefined" || process.env.VUE_ENV !== "server") {
    // 解决刷新URL，或者打开新的带有锚点的链接不能跳到相应的地方的问题
    router.onReady(() => {
      const { app } = router;
      app.$once("hook:mounted", () => {
        setTimeout(() => {
          const { hash } = document.location;
          if (hash.length > 1) {
            const id = decodeURIComponent(hash.substring(1));
            const element = document.getElementById(id);
            if (element) element.scrollIntoView();
          }
        }, 500);
      });
    });
  }
};
