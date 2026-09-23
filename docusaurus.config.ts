import type {Config} from '@docusaurus/types';

const config: Config = {
  title: process.env.DOCUSAURUS_CURRENT_LOCALE === 'en'
    ? 'OVR-DummyHeadMic User Guide'
    : 'OVR-DummyHeadMic 操作ガイド',
  tagline: process.env.DOCUSAURUS_CURRENT_LOCALE === 'en'
    ? 'Binaural audio for VR streaming and recording'
    : 'VR配信・収録のためのバイノーラル音響ガイド',
  favicon: 'img/favicon.svg',
  url: 'https://feathvr.github.io',
  baseUrl: '/OVR-DummyHeadMic-Docs/',
  organizationName: 'feathVR',
  projectName: 'OVR-DummyHeadMic-Docs',
  onBrokenLinks: 'throw',
  i18n: {
    defaultLocale: 'ja',
    locales: ['ja', 'en'],
    localeConfigs: {
      ja: {label: '日本語', htmlLang: 'ja-JP'},
      en: {label: 'English', htmlLang: 'en-US'},
    },
  },
  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          showLastUpdateTime: true,
          editUrl: 'https://github.com/feathVR/OVR-DummyHeadMic-Docs/edit/main/',
        },
        blog: false,
        theme: {customCss: './src/css/custom.css'},
      },
    ],
  ],
  themeConfig: {
    navbar: {
      title: 'OVR-DummyHeadMic',
      logo: {alt: 'OVR-DummyHeadMic', src: 'img/favicon.svg'},
      items: [
        {to: '/intro', label: '操作ガイド', position: 'left'},
        {to: '/vrchat-camera/overview', label: 'VRChatカメラ同期', position: 'left'},
        {to: '/troubleshooting/common-issues', label: '困ったとき', position: 'left'},
        {type: 'localeDropdown', position: 'right'},
        {href: 'https://github.com/feathVR/OVR-DummyHeadMic-Docs', label: 'GitHub', position: 'right'},
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'ガイド',
          items: [
            {label: 'はじめに', to: '/intro'},
            {label: '最初の音を出す', to: '/getting-started/first-sound'},
            {label: 'トラブルシューティング', to: '/troubleshooting/common-issues'},
          ],
        },
        {
          title: 'このサイトについて',
          items: [
            {label: 'GitHub', href: 'https://github.com/feathVR/OVR-DummyHeadMic-Docs'},
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} feathVR`,
    },
  },
};

export default config;
