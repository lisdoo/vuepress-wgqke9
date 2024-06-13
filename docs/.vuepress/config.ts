import { viteBundler } from '@vuepress/bundler-vite';
import { defaultTheme } from '@vuepress/theme-default';
import { defineUserConfig } from 'vuepress';

export default defineUserConfig({
  base: '/',
  title: 'Excel 使用介绍',
  description: 'Excel AI',

  bundler: viteBundler({
    // vite bundler options here
  }),
  theme: defaultTheme({
    // default theme options here
    navbar: [
      {
        text: '首页',
        link: '/',
      },
      {
        text: 'Excel 介绍',
        link: '/guide/',
      },
    ],
    sidebar: [
      {
        text: '开始',
        collapsible: true,
        children: [
          '/',
          {
            text: '目录一',
            collapsible: true,
            children: [
              '/category1/',
              {
                text: '目录一-1',
                collapsible: true,
                children: [
                  '/category1/subcategory1-1/',
                  {
                    text: '目录一-1-1',
                    collapsible: true,
                    children: [
                      '/category1/subcategory1-1/subcategory1-1-1/',
                      '/category1/subcategory1-1/subcategory1-1-2/',
                    ],
                  },
                  {
                    text: '目录一-1-2',
                    children: [
                      '/category1/subcategory1-1/subcategory1-2-1/',
                      '/category1/subcategory1-1/subcategory1-2-2/',
                    ],
                  },
                ],
              },
              {
                text: '目录一-2',
                children: [
                  '/category1/subcategory1-2/page1.md',
                  '/category1/subcategory1-2/page2.md',
                ],
              },
            ],
          },
          {
            text: '目录二',
            children: ['/category2/page1.md', '/category2/page2.md'],
          },
        ],
      },
    ],
  }),
});
