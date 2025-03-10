// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

// https://github.com/FormidableLabs/prism-react-renderer?tab=readme-ov-file#upgrade
const lightCodeTheme = require('prism-react-renderer').themes.github;
const darkCodeTheme = require('prism-react-renderer').themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ks6088ts',
  tagline: 'A portal site for my own blog and documentation',
  favicon: 'https://github.com/ks6088ts.png',

  // Set the production url of your site here
  url: 'https://ks6088ts.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'ks6088ts',
  projectName: 'ks6088ts.github.io',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'ja',
    locales: ['ja', 'en'],
    localeConfigs: {
      ja: {
        label: 'Japanese',
        direction: 'ltr',
        htmlLang: 'ja-JP',
        calendar: 'gregory',
        path: 'ja',
      },
      en: {
        label: 'English',
        direction: 'ltr',
        htmlLang: 'en-US',
        calendar: 'gregory',
        path: 'en',
      },
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingID: "G-0ZTKFXVQ5K",
          anonymizeIP: true,
        }
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'https://github.com/ks6088ts.png',
      navbar: {
        title: 'Home',
        logo: {
          alt: 'My Site Logo',
          src: 'https://github.com/ks6088ts.png',
        },
        items: [
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/ks6088ts/ks6088ts.github.io',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'Projects',
                to: '/docs/category/projects',
              },
              {
                label: 'Privacy Policy',
                to: '/docs/privacy-policy',
              },
            ],
          },
          {
            title: 'Social',
            items: [
              {
                label: 'Twitter',
                href: 'https://twitter.com/ks6088ts',
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/in/ks6088ts',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/ks6088ts',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} ks6088ts. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        // https://docusaurus.io/docs/markdown-features/code-blocks#supported-languages
        additionalLanguages: [
          'hcl',
          'bicep'
        ],
      },
    }),
};

module.exports = config;
