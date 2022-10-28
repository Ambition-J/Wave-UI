import Button from "..";

import { shallowMount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";

describe("Button", () => {
  test("mount @vue/test-utils", () => {
    const wrapper = shallowMount(Button, {
      slots: {
        default: "JSXButton",
      },
    });
    expect(wrapper.text()).toBe("JSXButton");
  });
  test("default", () => {
    const wrapper = shallowMount(Button, {
      slots: {
        default: "JSXButton",
      },
    });
    expect(
      wrapper
        .classes()
        .map((v) => v.replace("\n", ""))
        .includes("bg-blue-500")
    ).toBe(true);
  });
  test("default", () => {
    const wrapper = shallowMount(Button, {
      slots: {
        default: "JSXButton",
      },
      props: {
        color: "red",
      },
    });
    expect(
      wrapper
        .classes()
        .map((v) => v.replace("\n", ""))
        .includes("bg-red-500")
    ).toBe(true);
  });
});
