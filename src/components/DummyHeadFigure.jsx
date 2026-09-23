import React from 'react';
import {FlowNodes, useFigureText} from './figure/parts';

// 「ダミーヘッドの設置」の図解。
//   part="place"  … 手で運んで置く流れ（「手動で移動する」の下）
//   part="facing" … 顔の向き 前方／後方 を真上から見た図（「顔の向き」の下）
//   variant="poster" … PNG書き出し用に全部をまとめた1600×900
// 文言は本文（docs/operation/dummy-head.md と英語版）と食い違わないように直すこと。
// 向きの実装: 右コントローラーの姿勢に追従し、前方はそこから180°回した姿勢（VRHandToOSC.cs FaceDirectionChange）。既定は前方。

const TEXT = {
  ja: {
    title: <><em>ダミーヘッド</em>を置く</>,
    lead: '右手で運んで、ボタンを離したところに置きます。顔の向きは2種類から選べます。',
    placeLabel: 'ボタンを押し続けるとダミーヘッドが右手に追従し、離すとその位置に置かれる流れ',
    place: [
      {icon: 'buttons', name: 'ボタンを押し続ける', note: '左手X＋右手A（または両手のA）'},
      {icon: 'carry', name: '右手で運ぶ', note: '押している間、ダミーヘッドが右手に追従', badge: '押したまま'},
      {icon: 'drop', name: '離して置く', note: 'ボタンを離した位置に置かれる'},
    ],
    facingLabel: '顔の向きの設定。前方はダミーヘッドが自分と向き合い、後方は自分と同じ方向を向く（真上から見た図）',
    facingTitle: '顔の向き（Main settings）',
    facingLegend: <>真上から見た図　<i className="gfig__dot" />額の赤い点が顔の正面</>,
    you: 'あなた',
    front: {name: '前方（Front）', note: '自分と向き合う', badge: '既定'},
    back: {name: '後方（Back）', note: '自分と同じ方向を向く'},
    tipTitle: '設置のコツ：',
    tip: <>「ダミーヘッドの透明度」で完全に透明にすると位置を見失いやすいので、<b>設置中は少し表示を残す</b>のがおすすめです。</>,
  },
  en: {
    title: <>Place the <em>dummy head</em></>,
    lead: 'Carry it with your right hand and release the buttons to place it. Choose one of two face directions.',
    placeLabel: 'While you hold the buttons the dummy head follows your right hand; releasing them places it there',
    place: [
      {icon: 'buttons', name: 'Hold the buttons', note: 'Left X + right A (or A on both hands)'},
      {icon: 'carry', name: 'Carry it', note: 'While held, the dummy head follows your right hand', badge: 'Keep holding'},
      {icon: 'drop', name: 'Release to place', note: 'It stays where you release the buttons'},
    ],
    facingLabel: 'Face direction setting. Front: the dummy head faces you. Back: it faces the same direction as you (top view)',
    facingTitle: 'Face direction (Main settings)',
    facingLegend: <>Top view · <i className="gfig__dot" />red dot on the forehead = face</>,
    you: 'You',
    front: {name: 'Front', note: 'Faces you', badge: 'Default'},
    back: {name: 'Back', note: 'Faces the same direction as you'},
    tipTitle: 'Tip: ',
    tip: <>If you make it fully transparent with “Dummy head opacity,” it is easy to lose track of. <b>Leave it slightly visible while positioning it.</b></>,
  },
};

const ICONS = {
  // 左右のコントローラーと、押すボタン
  buttons: (
    <>
      <rect x="8" y="14" width="18" height="40" rx="9" />
      <rect x="38" y="14" width="18" height="40" rx="9" />
      <circle cx="17" cy="25" r="4.5" className="gfig__fill" />
      <circle cx="47" cy="25" r="4.5" className="gfig__fill" />
      <path d="M17 6v3M11 8l2 2.5M23 8l-2 2.5M47 6v3M41 8l2 2.5M53 8l-2 2.5" />
    </>
  ),
  // 横から見たダミーヘッドと、運ぶ向きの矢印
  carry: (
    <>
      <ellipse cx="26" cy="30" rx="15" ry="17" />
      <path d="M25 26a5 6 0 1 1 0 12" />
      <circle cx="38" cy="22" r="3" className="gfig__red" />
      <path d="M26 47v9M46 30h14M54 24l6 6-6 6" />
    </>
  ),
  // 置いた場所（床の印）へ下ろす
  drop: (
    <>
      <ellipse cx="32" cy="24" rx="13" ry="15" />
      <path d="M31 20a4.5 5.5 0 1 1 0 11" />
      <circle cx="42" cy="17" r="2.6" className="gfig__red" />
      <path d="M32 39v7" />
      <ellipse cx="32" cy="54" rx="20" ry="5" />
    </>
  ),
};

// 真上から見た図。上が「あなた」の向いている方向
function TopView({facing, you}) {
  const dotY = facing === 'front' ? 80 : 32;
  const arrow = facing === 'front' ? 'M80 88v14M74 96l6 6 6-6' : 'M80 24V10M74 16l6-6 6 6';
  return (
    <svg className="gfig__topview" viewBox="0 0 160 210" aria-hidden="true">
      {/* ダミーヘッド（耳つき） */}
      <ellipse cx="80" cy="56" rx="24" ry="28" className="gfig__tv-head" />
      <rect x="49" y="46" width="8" height="20" rx="3" className="gfig__tv-head" />
      <rect x="103" y="46" width="8" height="20" rx="3" className="gfig__tv-head" />
      <circle cx="80" cy={dotY} r="5" className="gfig__red" />
      <path d={arrow} className="gfig__tv-dir" />
      {/* あなた（上を向いている） */}
      <path d="M80 118v14" className="gfig__tv-gap" />
      <circle cx="80" cy="160" r="20" className="gfig__tv-you" />
      <path d="M66 147a20 20 0 0 1 28 0" className="gfig__tv-visor" />
      <path d="M72 131l8-9 8 9" className="gfig__tv-you" />
      <text x="80" y="200" textAnchor="middle" className="gfig__tv-label">{you}</text>
    </svg>
  );
}

function Facing({t}) {
  return (
    <div className="gfig__facing">
      {['front', 'back'].map((k) => (
        <div key={k} className={`gfig__card${k === 'front' ? ' gfig__node--hl' : ''}`}>
          {t[k].badge && <span className="gfig__badge">{t[k].badge}</span>}
          <TopView facing={k} you={t.you} />
          <div className="gfig__name">{t[k].name}</div>
          <div className="gfig__note">{t[k].note}</div>
        </div>
      ))}
    </div>
  );
}

export default function DummyHeadFigure({part = 'place', variant = 'inline'}) {
  const t = useFigureText(TEXT);

  if (variant === 'poster') {
    return (
      <figure className="gfig gfig--poster gfig--dh" aria-label={`${t.placeLabel} / ${t.facingLabel}`}>
        <header className="gfig__head">
          <h1>{t.title}</h1>
          <p>{t.lead}</p>
        </header>
        <div className="gfig__dh-grid">
          <FlowNodes nodes={t.place} icons={ICONS} />
          <div className="gfig__dh-side">
            <h2>{t.facingTitle}</h2>
            <Facing t={t} />
            <p className="gfig__legend">{t.facingLegend}</p>
          </div>
        </div>
        <div className="gfig__tip">
          <b>{t.tipTitle}</b>{t.tip}
        </div>
      </figure>
    );
  }

  if (part === 'facing') {
    return (
      <figure className="gfig gfig--narrow" aria-label={t.facingLabel}>
        <Facing t={t} />
        <p className="gfig__legend">{t.facingLegend}</p>
      </figure>
    );
  }

  return (
    <figure className="gfig" aria-label={t.placeLabel}>
      <FlowNodes nodes={t.place} icons={ICONS} />
    </figure>
  );
}
