import React from 'react';
import {useFigureText} from './figure/parts';

// 「対応範囲と再較正」（VRChatカメラ同期）の図解。
//   part="anchor" … 対応するカメラ配置（「対応するカメラ配置」の下）
//   part="after"  … 範囲の真上図と、再較正が要るかどうか（「較正後の注意」の下）
//   variant="poster" … PNG書き出し用に全部をまとめた1600×900
// 文言は本文（docs/vrchat-camera/limitations.md と英語版）と食い違わないように直すこと。
// 範囲外の表示はアプリの「待機中（測定範囲外。アバターの約2.5m以内で再開します）」（CamSyncController.cs）に合わせている。

const TEXT = {
  ja: {
    title: <><em>カメラ同期</em>の対応範囲</>,
    lead: 'Local Anchorのカメラを、アバターから約2.5m以内で使います。',
    anchorLabel: '対応するカメラ配置はLocal Anchorのみ。World Anchor、Pin 1〜3、Holoportやテレポートでの移動は非対応',
    anchorTitle: 'カメラ配置',
    ok: 'Local Anchor',
    ng: ['World Anchor', 'Pin 1〜3', 'Holoport／テレポート'],
    rangeLabel: 'アバターを中心に約2.5mが収録範囲。範囲外では同期が一時停止し、範囲内に戻ると再開する（真上から見た図）',
    rangeTitle: '収録範囲（真上から見た図）',
    radius: '約2.5m',
    inside: '同期中',
    outside: '待機中',
    back: '戻ると再開',
    avatar: 'アバター',
    recalLabel: 'アバターの変更・リロードとカメラの前後切り替えは再較正が必要。ワールド移動と範囲外は自動で戻る',
    recalTitle: '再較正が要るとき',
    need: '再較正が必要',
    needItems: ['アバターを変更・リロードした', <>カメラの前後（自撮り／外向き）を切り替えた<small>元に戻せば不要</small></>],
    auto: '自動で戻る',
    autoItems: [<>ワールドを移動した<small>自動で再接続</small></>, <>範囲外に出た<small>約2.5m以内に戻れば再開</small></>],
    endNote: '同期を終了すると、Aボタンによる通常の手動設置へ戻ります。',
  },
  en: {
    title: <>Camera sync <em>coverage</em></>,
    lead: 'Use a Local Anchor camera within about 2.5 m of your avatar.',
    anchorLabel: 'Only Local Anchor is supported. World Anchor, Pin 1–3, and moving with Holoport or teleport are not supported',
    anchorTitle: 'Camera anchor',
    ok: 'Local Anchor',
    ng: ['World Anchor', 'Pin 1–3', 'Holoport / teleport'],
    rangeLabel: 'The tracking range is about 2.5 m around your avatar. Outside it, sync pauses; it resumes when the camera returns (top view)',
    rangeTitle: 'Tracking range (top view)',
    radius: '≈ 2.5 m',
    inside: 'Syncing',
    outside: 'Paused',
    back: 'Resumes when back',
    avatar: 'Avatar',
    recalLabel: 'Changing or reloading your avatar, or switching the camera front/back, requires recalibration. World changes and leaving the range recover automatically',
    recalTitle: 'When to recalibrate',
    need: 'Recalibrate',
    needItems: ['You changed or reloaded your avatar', <>You switched the camera between selfie and outward<small>Not needed if you switch it back</small></>],
    auto: 'Recovers automatically',
    autoItems: [<>You moved to another world<small>Reconnects automatically</small></>, <>The camera left the range<small>Resumes within about 2.5 m</small></>],
    endNote: 'When you end sync, the A buttons return to normal manual placement.',
  },
};

function Anchor({t}) {
  return (
    <div className="gfig__anchor">
      <span className="gfig__chip gfig__chip--ok"><b aria-hidden="true">✓</b>{t.ok}</span>
      {t.ng.map((n) => (
        <span key={n} className="gfig__chip gfig__chip--ng"><b aria-hidden="true">✕</b>{n}</span>
      ))}
    </div>
  );
}

// 小さなカメラの絵（中心 x,y）
function Cam({x, y, cls}) {
  return (
    <g transform={`translate(${x - 16} ${y - 11})`} className={cls}>
      <rect x="0" y="4" width="32" height="20" rx="4" />
      <path d="M9 4l3-4h8l3 4" />
      <circle cx="16" cy="14" r="5" />
    </g>
  );
}

function Range({t}) {
  // 円の中心 (140,140)・半径105。文字は円の線・アバターと重ならない位置に置く（ポスターでは拡大されるので余裕を取る）
  return (
    <svg className="gfig__range" viewBox="0 0 360 280" aria-hidden="true">
      <circle cx="140" cy="140" r="105" className="gfig__rg-area" />
      {/* 半径（アバターの頭の上から円の縁まで） */}
      <path d="M140 112V35" className="gfig__rg-radius" />
      <path d="M133 35h14" className="gfig__rg-radius" />
      <text x="132" y="100" textAnchor="end" className="gfig__rg-text">{t.radius}</text>
      {/* アバター */}
      <circle cx="140" cy="130" r="11" className="gfig__rg-avatar" />
      <path d="M120 168a20 20 0 0 1 40 0" className="gfig__rg-avatar" />
      <text x="140" y="192" textAnchor="middle" className="gfig__rg-sub">{t.avatar}</text>
      {/* 範囲内のカメラ */}
      <Cam x={196} y={92} cls="gfig__rg-cam" />
      <text x="196" y="124" textAnchor="middle" className="gfig__rg-in">{t.inside}</text>
      {/* 範囲外のカメラと、戻る矢印 */}
      <Cam x={320} y={200} cls="gfig__rg-cam gfig__rg-cam--off" />
      <path d="M300 196Q272 172 244 184" className="gfig__rg-back" />
      <path d="M253 176l-10 8 12 4" className="gfig__rg-back" />
      <text x="356" y="236" textAnchor="end" className="gfig__rg-off">{t.outside}</text>
      <text x="356" y="258" textAnchor="end" className="gfig__rg-back-t">{t.back}</text>
    </svg>
  );
}

function Recal({t}) {
  return (
    <div className="gfig__recal">
      <div className="gfig__recal-col gfig__recal-col--need">
        <div className="gfig__ctitle">{t.need}</div>
        <ul>{t.needItems.map((x, i) => <li key={i}>{x}</li>)}</ul>
      </div>
      <div className="gfig__recal-col gfig__recal-col--auto">
        <div className="gfig__ctitle">{t.auto}</div>
        <ul>{t.autoItems.map((x, i) => <li key={i}>{x}</li>)}</ul>
      </div>
    </div>
  );
}

export default function CamSyncLimitsFigure({part = 'anchor', variant = 'inline'}) {
  const t = useFigureText(TEXT);

  if (variant === 'poster') {
    return (
      <figure className="gfig gfig--poster gfig--lim" aria-label={`${t.anchorLabel} / ${t.rangeLabel} / ${t.recalLabel}`}>
        <header className="gfig__head">
          <h1>{t.title}</h1>
          <p>{t.lead}</p>
        </header>
        <div className="gfig__lim-anchor">
          <div className="gfig__ptitle">{t.anchorTitle}</div>
          <Anchor t={t} />
        </div>
        <div className="gfig__lim-grid">
          <div className="gfig__panel">
            <div className="gfig__ptitle">{t.rangeTitle}</div>
            <Range t={t} />
          </div>
          <div className="gfig__panel">
            <div className="gfig__ptitle">{t.recalTitle}</div>
            <Recal t={t} />
            <p className="gfig__legend">{t.endNote}</p>
          </div>
        </div>
      </figure>
    );
  }

  if (part === 'after') {
    return (
      <figure className="gfig" aria-label={`${t.rangeLabel} / ${t.recalLabel}`}>
        <div className="gfig__lim-grid">
          <div className="gfig__panel">
            <div className="gfig__ptitle">{t.rangeTitle}</div>
            <Range t={t} />
          </div>
          <div className="gfig__panel">
            <div className="gfig__ptitle">{t.recalTitle}</div>
            <Recal t={t} />
          </div>
        </div>
      </figure>
    );
  }

  return (
    <figure className="gfig" aria-label={t.anchorLabel}>
      <Anchor t={t} />
    </figure>
  );
}
