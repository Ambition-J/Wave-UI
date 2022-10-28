/// <reference types="vitest" />
import { defineConfig } from "vite";
// 支持vue sfc 语法
import vue from "@vitejs/plugin-vue";
// 支持 vue jsx 语法
import vueJsx from "@vitejs/plugin-vue-jsx";
// 封装 unocss 主要是封装safelist
import Unocss from './config/unocss'
export default defineConfig({
  test:{
    globals:true,
    environment:'happy-dom',
    transformMode:{
      web:[/.[tj]sx$/]
    }
  },
  plugins: [vue(), vueJsx(), Unocss()],
  build: {
    rollupOptions: {
      external: ["vue", "vue-router"],
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
    cssCodeSplit:true,
    minify: false,
    lib: {
      entry: './src/entry.ts',
      name: 'Wave-UI',
      fileName: 'Wave-ui',
      formats: ["es",'umd','iife']
    }
  },
});
