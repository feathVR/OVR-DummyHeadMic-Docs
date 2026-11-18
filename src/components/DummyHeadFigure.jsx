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
  'zh-Hans': {
    title: <>放置<em>假人头</em></>,
    lead: '用握把抓住并移动，松手后即放置在该处。面部朝向有两种可选。',
    placeLabel: '把手靠近，出现浅蓝色轮廓线后用握把抓住，移动后松手即放置在该位置的流程',
    place: [
      {icon: 'grip', name: '用握把抓住', note: '出现浅蓝色轮廓线后握住（也可用光束指向后握住）'},
      {icon: 'carry', name: '移动', note: '握住期间，假人头随手移动', badge: '保持握住'},
      {icon: 'drop', name: '松手放置', note: '固定在松开握把的位置'},
    ],
    facingLabel: '面部朝向设置。Front 时假人头面向你，Back 时与你朝向相同（俯视图）',
    facingTitle: '面部朝向（反转朝向／Main settings）',
    facingLegend: <>俯视图　<i className="gfig__dot" />额头的红点为脸的正面</>,
    you: '你',
    front: {name: 'Front', note: '面向你', badge: '默认'},
    back: {name: 'Back', note: '与你朝向相同'},
    tipTitle: '放置提示：',
    tip: <>用“仿真人头透明度”设为完全透明后容易找不到位置，<b>放置时建议保留一点可见度</b>。</>,
  },
  'zh-Hant': {
    title: <>放置<em>假人頭</em></>,
    lead: '用握把抓住並移動，放開後即放置在該處。朝向有兩種可選。',
    placeLabel: '將手靠近，出現淺藍色輪廓線後用握把抓住，移動後放開即放置在該位置的流程',
    place: [
      {icon: 'grip', name: '用握把抓住', note: '出現淺藍色輪廓線後握住（也可用光束指向後握住）'},
      {icon: 'carry', name: '移動', note: '握住期間，假人頭會跟著手移動', badge: '保持握住'},
      {icon: 'drop', name: '放開放置', note: '固定在放開握把的位置'},
    ],
    facingLabel: '朝向設定。正面時假人頭面向您，背面時與您面向相同方向（俯視圖）',
    facingTitle: '朝向（反轉朝向／Main settings）',
    facingLegend: <>俯視圖　<i className="gfig__dot" />額頭的紅點為臉的正面</>,
    you: '您',
    front: {name: '正面', note: '面向您', badge: '預設'},
    back: {name: '背面', note: '與您面向相同方向'},
    tipTitle: '放置提示：',
    tip: <>以「仿真人頭透明度」設為完全透明後容易找不到位置，<b>放置時建議保留些許可見度</b>。</>,
  },
  ko: {
    title: <><em>더미 헤드</em> 배치하기</>,
    lead: '그립으로 잡아 옮기고, 놓은 곳에 배치됩니다. 얼굴 방향은 두 가지 중에서 고를 수 있습니다.',
    placeLabel: '손을 가까이 대고 하늘색 윤곽선이 나타나면 그립으로 잡아 옮긴 뒤 놓으면 그 위치에 배치되는 흐름',
    place: [
      {icon: 'grip', name: '그립으로 잡기', note: '하늘색 윤곽선이 나타나면 쥐기(빔으로 가리키고 쥐어도 됨)'},
      {icon: 'carry', name: '옮기기', note: '쥐고 있는 동안 더미 헤드가 손을 따라 움직임', badge: '쥔 채로'},
      {icon: 'drop', name: '놓아서 배치', note: '그립을 놓은 위치에 고정'},
    ],
    facingLabel: '얼굴 방향 설정. 앞은 더미 헤드가 사용자를 바라보고, 뒤는 사용자와 같은 방향을 바라봄(위에서 본 그림)',
    facingTitle: '얼굴 방향(방향 반전／Main settings)',
    facingLegend: <>위에서 본 그림　<i className="gfig__dot" />이마의 빨간 점이 얼굴 정면</>,
    you: '나',
    front: {name: '앞', note: '나를 바라봄', badge: '기본값'},
    back: {name: '뒤', note: '나와 같은 방향을 바라봄'},
    tipTitle: '배치 요령: ',
    tip: <>"더미 헤드 투명도"로 완전히 투명하게 하면 위치를 놓치기 쉬우므로, <b>배치하는 동안에는 조금 보이게 두는 것</b>을 권장합니다.</>,
  },
  ru: {
    title: <>Размещение <em>макета головы</em></>,
    lead: 'Возьмите его кнопкой захвата, перенесите и отпустите — он останется на месте. Направление лица — одно из двух.',
    placeLabel: 'Поднесите руку, при появлении голубого контура возьмите кнопкой захвата, перенесите и отпустите — макет останется там',
    place: [
      {icon: 'grip', name: 'Возьмите кнопкой захвата', note: 'Сожмите при появлении голубого контура (или наведите луч и сожмите)'},
      {icon: 'carry', name: 'Перенесите', note: 'Пока кнопка сжата, макет движется вместе с рукой', badge: 'Не отпускайте'},
      {icon: 'drop', name: 'Отпустите', note: 'Макет остаётся там, где вы отпустили кнопку'},
    ],
    facingLabel: 'Направление лица. «Вперёд» — макет смотрит на вас, «Назад» — в ту же сторону, что и вы (вид сверху)',
    facingTitle: 'Направление лица («Развернуть» / Main settings)',
    facingLegend: <>Вид сверху · <i className="gfig__dot" />красная точка на лбу = лицо</>,
    you: 'Вы',
    front: {name: 'Вперёд', note: 'Смотрит на вас', badge: 'По умолчанию'},
    back: {name: 'Назад', note: 'Смотрит в ту же сторону, что и вы'},
    tipTitle: 'Совет: ',
    tip: <>Если сделать макет полностью прозрачным параметром «Прозрачность головы», его легко потерять. <b>Во время размещения оставляйте его слегка видимым.</b></>,
  },
  es: {
    title: <>Colocar la <em>cabeza binaural</em></>,
    lead: 'Agárrala con el grip, llévala y suéltala para colocarla. Puedes elegir entre dos direcciones de la cara.',
    placeLabel: 'Acerca la mano, agárrala con el grip cuando aparezca el contorno azul claro, llévala y suéltala para dejarla ahí',
    place: [
      {icon: 'grip', name: 'Agarra con el grip', note: 'Aprieta cuando aparezca el contorno azul claro (o apunta con el rayo y aprieta)'},
      {icon: 'carry', name: 'Llévala', note: 'Mientras aprietas el grip, la cabeza se mueve con tu mano', badge: 'Sin soltar'},
      {icon: 'drop', name: 'Suelta para colocar', note: 'Se queda donde sueltas el grip'},
    ],
    facingLabel: 'Dirección de la cara. Frente: la cabeza te mira. Atrás: mira en la misma dirección que tú (vista superior)',
    facingTitle: 'Dirección de la cara (Invertir orientación / Main settings)',
    facingLegend: <>Vista superior · <i className="gfig__dot" />punto rojo en la frente = cara</>,
    you: 'Tú',
    front: {name: 'Frente', note: 'Te mira', badge: 'Predeterminado'},
    back: {name: 'Atrás', note: 'Mira en la misma dirección que tú'},
    tipTitle: 'Consejo: ',
    tip: <>Si la haces totalmente transparente con “Transparencia de la cabeza”, es fácil perderla de vista. <b>Déjala un poco visible mientras la colocas.</b></>,
  },
  'pt-BR': {
    title: <>Posicionar a <em>cabeça binaural</em></>,
    lead: 'Pegue-a com o grip, leve-a e solte para posicioná-la. Escolha entre duas direções do rosto.',
    placeLabel: 'Aproxime a mão, pegue com o grip quando aparecer o contorno azul-claro, leve-a e solte para deixá-la ali',
    place: [
      {icon: 'grip', name: 'Pegue com o grip', note: 'Aperte quando aparecer o contorno azul-claro (ou aponte o raio e aperte)'},
      {icon: 'carry', name: 'Leve-a', note: 'Enquanto o grip estiver apertado, a cabeça acompanha sua mão', badge: 'Sem soltar'},
      {icon: 'drop', name: 'Solte para posicionar', note: 'Ela fica onde você soltar o grip'},
    ],
    facingLabel: 'Direção do rosto. Frente: a cabeça fica voltada para você. Trás: fica voltada para a mesma direção que você (vista de cima)',
    facingTitle: 'Direção do rosto (Inverter orientação / Main settings)',
    facingLegend: <>Vista de cima · <i className="gfig__dot" />ponto vermelho na testa = rosto</>,
    you: 'Você',
    front: {name: 'Frente', note: 'Voltada para você', badge: 'Padrão'},
    back: {name: 'Trás', note: 'Voltada para a mesma direção que você'},
    tipTitle: 'Dica: ',
    tip: <>Se ela ficar totalmente transparente em “Transparência da cabeça”, é fácil perdê-la de vista. <b>Deixe-a um pouco visível durante o posicionamento.</b></>,
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
