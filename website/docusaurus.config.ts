import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import Link from '@docusaurus/Link'

const config: Config = {
  title: 'vmcentral',
  tagline: 'vmcentral are cool',
  favicon: 'logo/favicon.ico',

  // Set the production url of your site here
  url: 'https://vmcentral.org',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'vmcentral', // Usually your GitHub org/user name.
  projectName: 'vmcentral', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],
  plugins: ['@docusaurus/theme-live-codeblock'],
  themeConfig: {
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    liveCodeBlock: {
      playgroundPosition: 'bottom',
    },
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    announcementBar: {
      id: 'support_us',
      content:
        'We are looking our docs, please fill <a target="_blank" rel="noopener noreferrer" href="#">this survey</a>',
      backgroundColor: '#F5F5F5',
      textColor: '#212121',
      isCloseable: false,
    },
    navbar: {
      hideOnScroll: true,
      title: 'vmcentral',
      logo: {
        alt: 'vmcentral logo',
        src: 'logo/vm.svg',
        href: '/',
        className: 'logo',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {to: '/blog', label: 'Articles', position: 'left'},
        {
          href: 'https://github.com/facebook/docusaurus',
          label: 'GitHub',
          position: 'right',
          className: 'github-link',
        },
      ],
    },
    footer: {
      logo: {
        alt: 'Meta Open Source Logo',
        src: 'logo/vm.svg',
        className: 'logo',
      },
      style: 'light',
      links: [
        {
          title: 'Resources',
          items: [
            {
              label: 'Documentation',
              to: '/docs/intro',
            },
            {
              label: 'Articles',
              to: '/blog'
            }
          ],
        },
        {
          title: 'Social Media',
          items: [
            {
              label: 'Medium',
              href: 'https://medium.com/',
            },
            {
              label: 'Github',
              href: 'https://github.com/',
            },
            {
              label: 'Discord',
              href: 'https://discord.com/',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Sitemap',
              to: '/blog',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} vmcentral`,
      },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      },
    } satisfies Preset.ThemeConfig,
};

export default config;