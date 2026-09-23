import React from 'react';
import {FlowNodes, useFigureText} from './figure/parts';

// 「OBSへの取り込み」の図解。ページ埋め込み（既定）と、PNG書き出し用のポスター（poster）の2形態。
// 文言は ja / en をこのファイルで持つ。本文（docs/audio/obs.md と英語版）と食い違わないように直すこと。

const TEXT = {
  ja: {
    title: <><em>OBS</em>へ空間音声を取り込む</>,
    lead: '声の通り道はこの一本だけ。OBSはアプリの「出力先」を拾います。',
    label: 'マイクからOVR-DummyHeadMic、出力デバイスを経由してOBSの音声出力キャプチャへ届く音声の流れ',
    nodes: [
      {icon: 'mic', name: 'マイク', note: 'アプリの入力デバイスに選ぶ'},
      {icon: 'head', name: <>OVR-<wbr />DummyHeadMic</>, note: 'ダミーヘッドの位置で声を空間音声化', badge: 'ここで立体音響に'},
      {icon: 'speaker', name: '出力デバイス', note: '仮想オーディオデバイスなど専用の出力先を推奨'},
      {icon: 'obs', name: 'OBS', note: 'アプリと同じ出力デバイスを選ぶ', badge: '音声出力キャプチャ'},
    ],
    stepsTitle: '手順',
    steps: [
      'OBSで対象のシーンを開く',
      <>ソースの「＋」→ <b>音声出力キャプチャ</b> を追加</>,
      <>アプリで設定した<b>出力デバイス</b>を選ぶ</>,
      <>マイクへ話す → <span className="gfig__ok">OBSの音量メーターが動けばOK</span></>,
      <>OBS側の<b>通常のマイク入力はミュート</b></>,
    ],
    ngTitle: '二重取り込みに注意',
    ngFrom: 'マイク',
    ngTo: 'OBSのマイク入力',
    ngBody: <>OBSのマイク入力が有効なままだと、<b>生の声</b>と<b>空間音声</b>が重なって配信されます。OBS側のマイク入力はミュートしてください。</>,
  },
  en: {
    title: <>Capture spatial audio in <em>OBS</em></>,
    lead: "Your voice takes a single path. OBS captures the app's output device.",
    label: 'Audio flows from the microphone through OVR-DummyHeadMic and the output device into an OBS Audio Output Capture source',
    nodes: [
      {icon: 'mic', name: 'Microphone', note: "Select it as the app's input device"},
      {icon: 'head', name: <>OVR-<wbr />DummyHeadMic</>, note: "Spatializes your voice at the dummy head's position", badge: 'Spatialized here'},
      {icon: 'speaker', name: 'Output device', note: 'A dedicated virtual audio device is recommended'},
      {icon: 'obs', name: 'OBS', note: 'Select the same output device as the app', badge: 'Audio Output Capture'},
    ],
    stepsTitle: 'Steps',
    steps: [
      'Open the scene you want to use in OBS',
      <>Under Sources, select “+” → add <b>Audio Output Capture</b></>,
      <>Select the <b>output device</b> configured in the app</>,
      <>Speak into the mic → <span className="gfig__ok">the OBS audio meter moves</span></>,
      <><b>Mute the regular microphone input</b> in OBS</>,
    ],
    ngTitle: 'Avoid capturing your voice twice',
    ngFrom: 'Microphone',
    ngTo: 'OBS mic input',
    ngBody: <>If the OBS microphone input stays enabled, your <b>unprocessed voice</b> and the <b>spatial audio</b> are streamed together. Mute the microphone input in OBS.</>,
  },
};

const ICONS = {
  mic: (
    <>
      <rect x="23" y="6" width="18" height="32" rx="9" />
      <path d="M15 30a17 17 0 0 0 34 0M32 47v10M22 57h20" />
    </>
  ),
  head: (
    <>
      <path d="M20 50V40a14 14 0 0 1-2-7V26a14 14 0 0 1 28 0v4l5 8-5 2v6a4 4 0 0 1-4 4h-4v8" />
      <path d="M10 34a22 22 0 0 1 44 0" opacity=".55" />
      <rect x="6" y="32" width="8" height="14" rx="3" />
      <rect x="50" y="32" width="8" height="14" rx="3" />
    </>
  ),
  speaker: (
    <>
      <path d="M10 25h10l14-12v38L20 39H10z" />
      <path d="M42 24a11 11 0 0 1 0 16M48 17a20 20 0 0 1 0 30" />
    </>
  ),
  obs: (
    <>
      <rect x="6" y="12" width="52" height="34" rx="5" />
      <path d="M24 56h16M32 46v10" />
      <circle cx="21" cy="29" r="5" className="gfig__rec" />
      <path d="M32 24h16M32 30h12M32 36h14" opacity=".55" />
    </>
  ),
};

export default function ObsFlowFigure({variant = 'inline'}) {
  const t = useFigureText(TEXT);
  const poster = variant === 'poster';

  return (
    <figure className={`gfig${poster ? ' gfig--poster' : ''}`} aria-label={t.label}>
      {poster && (
        <header className="gfig__head">
          <h1>{t.title}</h1>
          <p>{t.lead}</p>
        </header>
      )}

      <FlowNodes nodes={t.nodes} icons={ICONS} />

      {/* ページ内では直後の danger 注記が二重取り込みを説明するので、下段はポスターだけに出す */}
      {poster && (
        <div className="gfig__bottom">
          <div className="gfig__steps">
            <h2>{t.stepsTitle}</h2>
            <ol>
              {t.steps.map((s, i) => <li key={i}><span>{s}</span></li>)}
            </ol>
          </div>
          <div className="gfig__ng">
            <h2>⚠ {t.ngTitle}</h2>
            <div className="gfig__ngrow">
              <span className="gfig__pill">{t.ngFrom}</span>
              <span className="gfig__x" aria-hidden="true">✕</span>
              <span className="gfig__pill">{t.ngTo}</span>
            </div>
            <p>{t.ngBody}</p>
          </div>
        </div>
      )}
    </figure>
  );
}
