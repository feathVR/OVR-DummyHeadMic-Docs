import React from 'react';
import {FlowNodes, useFigureText} from './figure/parts';

// 「ダミーヘッドの設置」の図解。
//   part="place"  … 掴んで運んで置く流れ（「掴んで動かす」の下）
//   part="facing" … 顔の向き 前方／後方 を真上から見た図（「顔の向き」の下）
//   variant="poster" … PNG書き出し用に全部をまとめた1600×900
// 文言は本文（docs/operation/dummy-head.md と英語版）と食い違わないように直すこと。
// 掴み方の実装: グリップで掴む（近くで掴む／ビームで指して掴む。DummyHeadGrab.cs）。前方はダミーヘッドが自分と向き合う姿勢。既定は前方。

const TEXT = {
  ja: {
    title: <><em>ダミーヘッド</em>を置く</>,
    lead: 'グリップで掴んで運び、離したところに置きます。顔の向きは2種類から選べます。',
    placeLabel: '手を近づけて水色の輪郭線が出たらグリップで掴み、運んで離すとその位置に置かれる流れ',
    place: [
      {icon: 'grip', name: 'グリップで掴む', note: '水色の輪郭線が出たら握る（ビームで指して握ってもよい）'},
      {icon: 'carry', name: '運ぶ', note: '握っている間、ダミーヘッドが手について動く', badge: '握ったまま'},
      {icon: 'drop', name: '離して置く', note: 'グリップを離した位置に固定される'},
    ],
    facingLabel: '顔の向きの設定。前方はダミーヘッドが自分と向き合い、後方は自分と同じ方向を向く（真上から見た図）',
    facingTitle: '顔の向き（向きの反転／Main settings）',
    facingLegend: <>真上から見た図　<i className="gfig__dot" />額の赤い点が顔の正面</>,
    you: 'あなた',
    front: {name: '前方（Front）', note: '自分と向き合う', badge: '既定'},
    back: {name: '後方（Back）', note: '自分と同じ方向を向く'},
    tipTitle: '設置のコツ：',
    tip: <>「ダミーヘッドの透明度」で完全に透明にすると位置を見失いやすいので、<b>設置中は少し表示を残す</b>のがおすすめです。</>,
  },
  en: {
    title: <>Place the <em>dummy head</em></>,
    lead: 'Grab it with the grip, carry it, and let go to place it. Choose one of two face directions.',
    placeLabel: 'Bring your hand close, grip when the light-blue outline appears, carry it, and let go to place it there',
    place: [
      {icon: 'grip', name: 'Grab with the grip', note: 'Squeeze when the light-blue outline appears (or point the beam and squeeze)'},
      {icon: 'carry', name: 'Carry it', note: 'While you hold the grip, the dummy head moves with your hand', badge: 'Keep holding'},
      {icon: 'drop', name: 'Let go to place', note: 'It stays where you release the grip'},
    ],
    facingLabel: 'Face direction setting. Front: the dummy head faces you. Back: it faces the same direction as you (top view)',
    facingTitle: 'Face direction (Flip facing / Main settings)',
    facingLegend: <>Top view · <i className="gfig__dot" />red dot on the forehead = face</>,
    you: 'You',
    front: {name: 'Front', note: 'Faces you', badge: 'Default'},
    back: {name: 'Back', note: 'Faces the same direction as you'},
    tipTitle: 'Tip: ',
    tip: <>If you make it fully transparent with “Dummy head opacity,” it is easy to lose track of. <b>Leave it slightly visible while positioning it.</b></>,
  },
};

const ICONS = {
  // 輪郭線の出たダミーヘッドと、近づけたコントローラー（グリップを握る）
  grip: (
    <>
      <ellipse cx="24" cy="26" rx="14" ry="16" />
      <ellipse cx="24" cy="26" rx="19" ry="21" strokeDasharray="4 3" />
      <circle cx="35" cy="19" r="2.8" className="gfig__red" />
      <rect x="44" y="30" width="13" height="28" rx="6.5" />
      <path d="M44 42h-4M44 47h-4" />
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
