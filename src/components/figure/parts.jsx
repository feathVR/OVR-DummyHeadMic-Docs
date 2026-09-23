import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

// 図解コンポーネント（src/components/*Figure.jsx）の共通部品。見た目は custom.css の .gfig* が持つ。

// { ja: {...}, en: {...} } から今のロケールの文言を選ぶ（未知のロケールは ja）
export function useFigureText(text) {
  const {i18n} = useDocusaurusContext();
  return text[i18n.currentLocale] ?? text.ja;
}

export function Arrow() {
  return (
    <div className="gfig__arrow" aria-hidden="true">
      <svg viewBox="0 0 52 40">
        <path d="M2 20H40M28 6l16 14-16 14" />
      </svg>
    </div>
  );
}

// 64×64 の線画アイコン。children に path などを渡す
export function LineIcon({children}) {
  return (
    <svg className="gfig__icon" viewBox="0 0 64 64" aria-hidden="true">
      {children}
    </svg>
  );
}

// 矢印でつないだ横並びの箱。nodes: [{icon, name, note, badge?}]、icons: {名前: SVG要素}
export function FlowNodes({nodes, icons}) {
  return (
    <div className="gfig__flow">
      {nodes.map((n, i) => (
        <React.Fragment key={i}>
          {i > 0 && <Arrow />}
          <div className={`gfig__node${n.badge ? ' gfig__node--hl' : ''}`}>
            {n.badge && <span className="gfig__badge">{n.badge}</span>}
            <LineIcon>{icons[n.icon]}</LineIcon>
            <div className="gfig__name">{n.name}</div>
            <div className="gfig__note">{n.note}</div>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
}
