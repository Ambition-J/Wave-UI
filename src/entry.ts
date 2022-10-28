import { App } from "vue";

import JSXButton from "./button";

export { JSXButton };

export default {
  install(app: App) {
    app.component(JSXButton.name, JSXButton);
  },
};
