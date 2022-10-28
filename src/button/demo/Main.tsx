import { defineComponent } from "vue";
import JSXButton from "..";
export default defineComponent({
  name: "ButtonPage",
  setup() {
    return () => (
      <div>
        <JSXButton color="green" icon="edit">
          绿色按钮
        </JSXButton>
        <JSXButton color="gray" icon="check">
          灰色按钮
        </JSXButton>
        <JSXButton color="yellow" icon="message">
          黄色按钮
        </JSXButton>
        <JSXButton color="red" icon="delete">
          红色按钮
        </JSXButton>
      </div>
    );
  },
});
