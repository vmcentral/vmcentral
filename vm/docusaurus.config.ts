import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'vmcentral',
  staticDirectories: ['public', 'static'],
  tagline: 'vmcentral web',
  favicon: 'img/favicon.ico',
  url: 'https://github.com',
  baseUrl: '/',
  organizationName: 'vm',
  projectName: 'vm',
  trailingSlash: false,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          admonitions: {
            keywords: [
                'info',
                'success',
                'danger',
                'note',
                'tip',
                'warning',
                'important',
                'caution',
            ],
        },
          sidebarPath: 'sidebars.ts',
        },
        blog: {
          admonitions: {
            keywords: [
                'info',
                'success',
                'danger',
                'note',
                'tip',
                'warning',
                'important',
                'caution',
            ],
        },
          blogTitle: 'Articles',
          blogDescription: 'Articles vmcentral',
          postsPerPage: 'ALL',
          blogSidebarTitle: 'All posts',
          blogSidebarCount: 'ALL',
          showReadingTime: true,
          readingTime: ({content, defaultReadingTime}) =>
            defaultReadingTime({content, options: {wordsPerMinute: 300}}),
          feedOptions: {
            type: 'all',
            copyright: `Copyright © ${new Date().getFullYear()} vmcentral.`,
            createFeedItems: async (params) => {
              const {blogPosts, defaultCreateFeedItems, ...rest} = params;
              return defaultCreateFeedItems({
                // keep only the 10 most recent blog posts in the feed
                blogPosts: blogPosts.filter((_, index) => index < 10),
                ...rest,
              });
            },
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
  themeConfig: {
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: true,
      },
    },
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'vmcentral',
      logo: {
        alt: 'vm logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          label: 'Documentation',
          position: 'left',
          to: 'docs',
        },
        { to: 'blog', label: 'Articles', position: 'left' },
        {
          type: 'dropdown',
          label: 'Resources',
          position: 'left',
          items: [
            {
              label: 'About',
              to: '/resources/about',
            },
            {
              label: 'Services',
              to: '/resources/services',
            },
            {
              label: 'Community',
              to: '/resources/community',
            },
          ],
        },
        {
          label: 'GitHub',
          position: 'right',
          to: 'https://github.com/facebook/docusaurus',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Document & Articles',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              to: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              to: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'X',
              to: 'https://x.com/docusaurus',
            },
          ],
        },
        {
          title: 'Resources',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              to: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      logo: {
        alt: 'Meta Open Source Logo',
        src: 'img/logo.svg',
        href: 'https://opensource.fb.com',
        width: 160,
        height: 51,
      },
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
