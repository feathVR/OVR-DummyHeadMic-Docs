import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import {LineIcon, useFigureText} from '@site/src/components/figure/parts';
import {LINKS} from '@site/src/links';

// トップページ。Modular Avatar のトップにならい「ダウンロード／操作ガイド／Discord」の3つを前面に出す。
// ボタンの行き先は src/links.js（空なら「準備中」表示）。

const TEXT = {
  ja: {
    title: 'OVR-DummyHeadMic',
    tagline: 'VR空間にダミーヘッドマイクを置いて、声を立体音響に',
    download: 'ダウンロード（BOOTH）',
    guide: '操作ガイド',
    discord: 'Discord',
    soon: '準備中',
    features: [
      {icon: 'place', name: 'ダミーヘッドを手で置く', body: '右手で運んで、ボタンを離したところに置くだけ。VRの中で直感的にマイク位置を決められます。'},
      {icon: 'sound', name: '声がその位置から聞こえる', body: '置いたダミーヘッドと自分の位置関係が、そのままバイノーラル音響になります。OBSでそのまま配信・収録できます。'},
      {icon: 'camera', name: 'VRChatカメラに追従', body: 'User Cameraを置いた場所へ、マイクも自動で移動。映像と音の位置がそろいます。'},
    ],
  },
  en: {
    title: 'OVR-DummyHeadMic',
    tagline: 'Place a dummy head microphone in VR and turn your voice into spatial audio',
    download: 'Download (BOOTH)',
    guide: 'User Guide',
    discord: 'Discord',
    soon: 'Coming soon',
    features: [
      {icon: 'place', name: 'Place it by hand', body: 'Carry it with your right hand and release the buttons to place it. Set the mic position intuitively inside VR.'},
      {icon: 'sound', name: 'Hear your voice from there', body: 'Your position relative to the dummy head becomes binaural audio. Stream or record it directly in OBS.'},
      {icon: 'camera', name: 'Follows the VRChat camera', body: 'The mic moves to wherever you place the User Camera, so picture and sound stay aligned.'},
    ],
  },
};

const ICONS = {
  place: (
    <>
      <ellipse cx="26" cy="30" rx="15" ry="17" />
      <path d="M25 26a5 6 0 1 1 0 12" />
      <circle cx="38" cy="22" r="3" className="gfig__red" />
      <path d="M26 47v9M46 30h14M54 24l6 6-6 6" />
    </>
  ),
  sound: (
    <>
      <path d="M12 36v-6a20 20 0 0 1 40 0v6" />
      <rect x="8" y="34" width="10" height="18" rx="4" />
      <rect x="46" y="34" width="10" height="18" rx="4" />
      <path d="M27 40a7 7 0 0 1 10 0M23 34a13 13 0 0 1 18 0" />
    </>
  ),
  camera: (
    <>
      <rect x="6" y="20" width="52" height="32" rx="6" />
      <path d="M22 20l4-7h12l4 7" />
      <circle cx="32" cy="36" r="9" />
    </>
  ),
};

function HeroButton({href, to, label, soon, primary}) {
  const cls = `home__btn${primary ? ' home__btn--primary' : ''}`;
  if (to) return <Link className={cls} to={to}>{label}</Link>;
  if (!href) {
    return (
      <span className={`${cls} home__btn--disabled`} aria-disabled="true">
        {label}<small>{soon}</small>
      </span>
    );
  }
  return <Link className={cls} href={href}>{label}</Link>;
}

export default function Home() {
  const t = useFigureText(TEXT);
  const logo = useBaseUrl('/img/favicon.svg');

  return (
    <Layout title={t.title} description={t.tagline}>
      <header className="home__hero">
        <img className="home__logo" src={logo} alt="" width="96" height="96" />
        <h1 className="home__title">{t.title}</h1>
        <p className="home__tagline">{t.tagline}</p>
        <div className="home__buttons">
          <HeroButton href={LINKS.booth} label={t.download} soon={t.soon} primary />
          <HeroButton to="/intro" label={t.guide} />
          <HeroButton href={LINKS.discord} label={t.discord} soon={t.soon} />
        </div>
      </header>
      <main className="home__features gfig">
        {t.features.map((f) => (
          <section key={f.icon} className="home__feature">
            <LineIcon>{ICONS[f.icon]}</LineIcon>
            <h2>{f.name}</h2>
            <p>{f.body}</p>
          </section>
        ))}
      </main>
    </Layout>
  );
}
