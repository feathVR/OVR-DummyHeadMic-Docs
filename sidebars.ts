import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docs: [
    'intro',
    {
      type: 'category',
      label: 'はじめに',
      items: ['getting-started/requirements', 'getting-started/install-update', 'getting-started/first-sound'],
    },
    {
      type: 'category',
      label: '音声設定',
      items: ['audio/routes', 'audio/devices', 'audio/vst-bridge', 'audio/obs'],
    },
    {
      type: 'category',
      label: '基本操作',
      items: ['operation/dummy-head', 'operation/controllers', 'operation/sound', 'operation/settings'],
    },
    {
      type: 'category',
      label: 'VRChatカメラ同期',
      items: ['vrchat-camera/overview', 'vrchat-camera/calibration', 'vrchat-camera/status', 'vrchat-camera/limitations'],
    },
    {
      type: 'category',
      label: '困ったとき',
      items: ['troubleshooting/common-issues', 'troubleshooting/report'],
    },
    'faq',
  ],
};

export default sidebars;
