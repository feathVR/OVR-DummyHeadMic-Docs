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
  'pt-BR': {
    title: 'OVR-DummyHeadMic',
    tagline: 'Coloque um microfone de cabeça binaural em VR e transforme sua voz em áudio espacial',
    download: 'Baixar (BOOTH)',
    guide: 'Guia do usuário',
    discord: 'Discord',
    soon: 'Em breve',
    features: [
      {icon: 'place', name: 'Posicione com a mão', body: 'Leve-o com a mão direita e solte os botões para posicioná-lo. Defina intuitivamente a posição do microfone dentro da VR.'},
      {icon: 'sound', name: 'Ouça sua voz a partir dali', body: 'Sua posição em relação à cabeça binaural se transforma em áudio binaural. Transmita ou grave diretamente no OBS.'},
      {icon: 'camera', name: 'Acompanha a câmera do VRChat', body: 'O microfone se move para onde você posiciona a User Camera, mantendo a imagem e o som alinhados.'},
    ],
  },
  es: {
    title: 'OVR-DummyHeadMic',
    tagline: 'Coloca un micrófono de cabeza binaural en VR y convierte tu voz en audio espacial',
    download: 'Descargar (BOOTH)',
    guide: 'Guía del usuario',
    discord: 'Discord',
    soon: 'Próximamente',
    features: [
      {icon: 'place', name: 'Colócala con la mano', body: 'Llévala con la mano derecha y suelta los botones para colocarla. Define intuitivamente la posición del micrófono dentro de VR.'},
      {icon: 'sound', name: 'Escucha tu voz desde allí', body: 'Tu posición con respecto a la cabeza binaural se convierte en audio binaural. Transmítelo o grábalo directamente en OBS.'},
      {icon: 'camera', name: 'Sigue la cámara de VRChat', body: 'El micrófono se mueve al lugar donde coloques la User Camera, para que la imagen y el sonido permanezcan alineados.'},
    ],
  },
  ru: {
    title: 'OVR-DummyHeadMic',
    tagline: 'Разместите макет головы с микрофонами в VR и превратите свой голос в пространственный звук',
    download: 'Скачать (BOOTH)',
    guide: 'Руководство пользователя',
    discord: 'Discord',
    soon: 'Скоро',
    features: [
      {icon: 'place', name: 'Размещайте макет головы вручную', body: 'Перенесите его правой рукой и отпустите кнопки, чтобы установить. Положение микрофона в VR задаётся интуитивно.'},
      {icon: 'sound', name: 'Голос звучит из выбранного места', body: 'Ваше положение относительно макета головы преобразуется в бинауральный звук. Его можно сразу транслировать или записывать в OBS.'},
      {icon: 'camera', name: 'Следует за камерой VRChat', body: 'Микрофон автоматически перемещается туда, где установлена User Camera, поэтому положение изображения и звука совпадает.'},
    ],
  },
  ko: {
    title: 'OVR-DummyHeadMic',
    tagline: 'VR 공간에 더미 헤드 마이크를 놓아 음성을 공간 음향으로',
    download: '다운로드(BOOTH)',
    guide: '사용자 가이드',
    discord: 'Discord',
    soon: '준비 중',
    features: [
      {icon: 'place', name: '손으로 더미 헤드 배치', body: '오른손으로 옮기고 버튼을 놓으면 배치됩니다. VR 안에서 직관적으로 마이크 위치를 정할 수 있습니다.'},
      {icon: 'sound', name: '그 위치에서 들리는 음성', body: '배치한 더미 헤드와 사용자의 위치 관계가 그대로 바이노럴 오디오가 됩니다. OBS에서 바로 스트리밍하거나 녹음할 수 있습니다.'},
      {icon: 'camera', name: 'VRChat 카메라 추적', body: 'User Camera를 놓은 곳으로 마이크도 자동 이동하여 영상과 소리의 위치가 일치합니다.'},
    ],
  },
  'zh-Hans': {
    title: 'OVR-DummyHeadMic',
    tagline: '在 VR 空间中放置假人头麦克风，让你的声音成为空间音频',
    download: '下载（BOOTH）',
    guide: '用户指南',
    discord: 'Discord',
    soon: '即将推出',
    features: [
      {icon: 'place', name: '用手放置假人头', body: '用右手移动它，松开按钮即可放置。你可以在 VR 中直观地确定麦克风位置。'},
      {icon: 'sound', name: '从该位置听见你的声音', body: '你与已放置假人头之间的位置关系会直接转换为双耳音频，并可在 OBS 中直接直播或录制。'},
      {icon: 'camera', name: '跟随 VRChat 摄像机', body: '麦克风会自动移动到 User Camera 的放置位置，使画面与声音的位置保持一致。'},
    ],
  },
  'zh-Hant': {
    title: 'OVR-DummyHeadMic',
    tagline: '在 VR 空間中放置假人頭麥克風，將您的聲音轉換為空間音訊',
    download: '下載（BOOTH）',
    guide: '使用指南',
    discord: 'Discord',
    soon: '即將推出',
    features: [
      {icon: 'place', name: '用手放置假人頭', body: '用右手移動假人頭，放開按鈕即可放置。您可以在 VR 中直覺地決定麥克風位置。'},
      {icon: 'sound', name: '從該位置聽見您的聲音', body: '您與放置後的假人頭之間的位置關係會直接轉換為雙耳音訊，並可在 OBS 中直接直播或錄影。'},
      {icon: 'camera', name: '跟隨 VRChat 攝影機', body: '麥克風會自動移動到 User Camera 的放置位置，讓影像與聲音的位置保持一致。'},
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
