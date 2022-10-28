import theme from "vitepress/theme";
import SmartUI from "../../../src/entry";
import './code.css'
import './layout.css'
import './var.css'
import './custom.css'
// @ts-ignore
import Demo from "vitepress-theme-demoblock/components/Demo.vue";
// @ts-ignore
import DemoBlock from "vitepress-theme-demoblock/components/DemoBlock.vue";
export default {
  ...theme,
  enhanceApp({ app }) {
    app.use(SmartUI);
    app.component("Demo", Demo);
    app.component("DemoBlock", DemoBlock);
  },
};
