import { presetUno, presetAttributify, presetIcons } from "unocss";
import Unocss from "unocss/vite";
import { IColor, IICons } from "./types";
const colors:Array<IColor> = [
  "white",
  "black",
  "gray",
  "red",
  "yellow",
  "green",
  "blue",
  "indigo",
  "purple",
  "pink",
];
const icons:Array<IICons> = [
  "search",
  "edit",
  "check",
  "message",
  "star-off",
  "delete",
  "add",
  "share",
];
const safelist = [
  ...colors.map((v) => `bg-${v}-500`),
  ...colors.map((v) => `hover:bg-${v}-700`),
  ...icons.map((v) => `i-ic-baseline-${v}`),
];
export default () =>
  Unocss({
    safelist,
    presets: [presetUno(), presetAttributify(), presetIcons({
        collections:{
        }
    })],
  });
