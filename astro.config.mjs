/*
 * @Author: 王昶
 * @Date: 2023-09-13 02:29:39
 * @LastEditors: 王昶
 * @LastEditTime: 2023-09-13 17:12:59
 * @FilePath: /astro-blog/astro.config.mjs
 * @Description: 
 * 
 * 
 */
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  integrations: [
    mdx()
  ],
  markdown: {
    shikiConfig: {
      theme: 'dracula',
      langs: [],
      wrap: true
    }
  },
});
