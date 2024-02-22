import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: '前端面试',
  tagline: '前端面试题收集汇总并全面给出权威优质的答案，更欢迎👏大家issues投稿 ❤️ 💞 💖，一起维护一套优质权威的前端知识体系。',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://gavinbirkhoff.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/FE-interview',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'GavinBirkhoff', // Usually your GitHub org/user name.
  projectName: 'FE-interview', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/GavinBirkhoff/FE-interview/tree/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/GavinBirkhoff/FE-interview/tree/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: '前端面试',
      logo: {
        alt: '前端面试 Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: '面试八股文',
        },
        {to: '/docs/category/前端基础', label: '基础', position: 'left'},
        {to: '/docs/category/前端框架', label: '框架', position: 'left'},
        {to: '/docs/category/前端进阶', label: '进阶', position: 'left'},
        {to: '/docs/category/浏览器', label: '浏览器', position: 'left'},
        {to: '/docs/category/打包构建', label: '构建', position: 'left'},
        {to: '/blog', label: '实战案例', position: 'left'},
        {to: '/docs/category/计算机网络', label: '计算机网络', position: 'right'},
        {to: '/docs/category/服务端开发', label: '服务端', position: 'right'},
        {to: '/docs/category/devops开发运维', label: '运维', position: 'right'},
        {
          href: 'https://github.com/GavinBirkhoff/FE-interview',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '文档中心',
          items: [
            {
              label: '八股文提纲',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: '社区',
          items: [
            {
              label: 'Stack Overflow',
              href: '#',
            },
          ],
        },
        {
          title: '更多',
          items: [
            {
              label: '博客',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/GavinBirkhoff/FE-interview',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} FE-interview. Built with GavinBirkhoff's Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
