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
    endNote: '同期を終了すると、グリップで掴む通常の手動設置へ戻ります。',
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
    endNote: 'When you end sync, you can grab and place it manually again with the grip.',
  },
  'zh-Hans': {
    title: <><em>摄像机同步</em>的适用范围</>,
    lead: '请在距离化身约 2.5 m 以内使用 Local Anchor 摄像机。',
    anchorLabel: '仅支持 Local Anchor。不支持 World Anchor、Pin 1–3，以及通过 Holoport 或传送移动',
    anchorTitle: '摄像机锚点',
    ok: 'Local Anchor',
    ng: ['World Anchor', 'Pin 1–3', 'Holoport／传送'],
    rangeLabel: '以化身为中心约 2.5 m 为收录范围。超出范围时同步暂停，回到范围内即恢复（俯视图）',
    rangeTitle: '收录范围（俯视图）',
    radius: '约 2.5 m',
    inside: '同步中',
    outside: '等待中',
    back: '返回后恢复',
    avatar: '化身',
    recalLabel: '更换或重新加载化身、切换摄像机前后时需要重新校准。移动世界和超出范围会自动恢复',
    recalTitle: '需要重新校准的情况',
    need: '需要重新校准',
    needItems: ['更换或重新加载了化身', <>切换了摄像机的前后（自拍／朝外）<small>切换回来则不需要</small></>],
    auto: '自动恢复',
    autoItems: [<>移动到了其他世界<small>自动重新连接</small></>, <>超出了范围<small>回到约 2.5 m 以内即恢复</small></>],
    endNote: '结束同步后，可以再次用握把抓住假人头，手动放置。',
  },
  'zh-Hant': {
    title: <><em>攝影機同步</em>的適用範圍</>,
    lead: '請在距離虛擬化身約 2.5 m 以內使用 Local Anchor 攝影機。',
    anchorLabel: '僅支援 Local Anchor。不支援 World Anchor、Pin 1–3，以及透過 Holoport 或傳送移動',
    anchorTitle: '攝影機錨點',
    ok: 'Local Anchor',
    ng: ['World Anchor', 'Pin 1–3', 'Holoport／傳送'],
    rangeLabel: '以虛擬化身為中心約 2.5 m 為收錄範圍。超出範圍時同步暫停，回到範圍內即恢復（俯視圖）',
    rangeTitle: '收錄範圍（俯視圖）',
    radius: '約 2.5 m',
    inside: '同步中',
    outside: '等待中',
    back: '返回後恢復',
    avatar: '虛擬化身',
    recalLabel: '更換或重新載入虛擬化身、切換攝影機前後時需要重新校準。移動世界與超出範圍會自動恢復',
    recalTitle: '需要重新校準的情況',
    need: '需要重新校準',
    needItems: ['更換或重新載入了虛擬化身', <>切換了攝影機的前後（自拍／朝外）<small>切換回來則不需要</small></>],
    auto: '自動恢復',
    autoItems: [<>移動到了其他世界<small>自動重新連線</small></>, <>超出了範圍<small>回到約 2.5 m 以內即恢復</small></>],
    endNote: '結束同步後，即可再次用握把抓住假人頭，手動放置。',
  },
  ko: {
    title: <><em>카메라 동기화</em> 지원 범위</>,
    lead: '아바타에서 약 2.5m 이내에서 Local Anchor 카메라를 사용하세요.',
    anchorLabel: 'Local Anchor만 지원합니다. World Anchor, Pin 1–3, Holoport나 텔레포트로 이동하는 것은 지원하지 않습니다',
    anchorTitle: '카메라 앵커',
    ok: 'Local Anchor',
    ng: ['World Anchor', 'Pin 1–3', 'Holoport／텔레포트'],
    rangeLabel: '아바타를 중심으로 약 2.5m가 수록 범위입니다. 범위를 벗어나면 동기화가 일시 정지되고, 돌아오면 재개됩니다(위에서 본 그림)',
    rangeTitle: '수록 범위(위에서 본 그림)',
    radius: '약 2.5m',
    inside: '동기화 중',
    outside: '대기 중',
    back: '돌아오면 재개',
    avatar: '아바타',
    recalLabel: '아바타 변경·다시 불러오기와 카메라 앞뒤 전환은 다시 보정해야 합니다. 월드 이동과 범위 이탈은 자동으로 복구됩니다',
    recalTitle: '다시 보정이 필요할 때',
    need: '다시 보정 필요',
    needItems: ['아바타를 변경하거나 다시 불러왔을 때', <>카메라의 앞뒤(셀카／바깥쪽)를 전환했을 때<small>원래대로 돌리면 필요 없음</small></>],
    auto: '자동 복구',
    autoItems: [<>다른 월드로 이동했을 때<small>자동으로 다시 연결</small></>, <>범위를 벗어났을 때<small>약 2.5m 이내로 돌아오면 재개</small></>],
    endNote: '동기화를 종료하면 그립으로 더미 헤드를 잡아 다시 수동 배치할 수 있습니다.',
  },
  ru: {
    title: <>Зона <em>синхронизации камеры</em></>,
    lead: 'Используйте камеру Local Anchor на расстоянии до 2,5 м от аватара.',
    anchorLabel: 'Поддерживается только Local Anchor. World Anchor, Pin 1–3 и перемещение через Holoport или телепорт не поддерживаются',
    anchorTitle: 'Привязка камеры',
    ok: 'Local Anchor',
    ng: ['World Anchor', 'Pin 1–3', 'Holoport / телепорт'],
    rangeLabel: 'Зона записи — около 2,5 м вокруг аватара. За её пределами синхронизация приостанавливается и возобновляется при возвращении (вид сверху)',
    rangeTitle: 'Зона записи (вид сверху)',
    radius: '≈ 2,5 м',
    inside: 'Синхронизация',
    outside: 'Ожидание',
    back: 'Возобновится при возврате',
    avatar: 'Аватар',
    recalLabel: 'После смены или перезагрузки аватара и переключения камеры вперёд/назад нужна повторная калибровка. Смена мира и выход из зоны восстанавливаются сами',
    recalTitle: 'Когда нужна повторная калибровка',
    need: 'Откалибруйте заново',
    needItems: ['Вы сменили или перезагрузили аватар', <>Вы переключили камеру между селфи и съёмкой наружу<small>Не нужно, если вернули обратно</small></>],
    auto: 'Восстанавливается само',
    autoItems: [<>Вы перешли в другой мир<small>Подключится автоматически</small></>, <>Камера вышла из зоны<small>Возобновится в пределах ≈ 2,5 м</small></>],
    endNote: 'После завершения синхронизации макет головы снова можно брать кнопкой захвата и размещать вручную.',
  },
  es: {
    title: <>Alcance de la <em>sincronización de cámara</em></>,
    lead: 'Usa una cámara con Local Anchor a menos de unos 2,5 m de tu avatar.',
    anchorLabel: 'Solo se admite Local Anchor. No se admiten World Anchor, Pin 1–3 ni moverse con Holoport o teletransporte',
    anchorTitle: 'Anclaje de la cámara',
    ok: 'Local Anchor',
    ng: ['World Anchor', 'Pin 1–3', 'Holoport / teletransporte'],
    rangeLabel: 'El alcance es de unos 2,5 m alrededor del avatar. Fuera de él, la sincronización se pausa y se reanuda al volver (vista superior)',
    rangeTitle: 'Alcance (vista superior)',
    radius: '≈ 2,5 m',
    inside: 'Sincronizando',
    outside: 'En pausa',
    back: 'Se reanuda al volver',
    avatar: 'Avatar',
    recalLabel: 'Cambiar o recargar el avatar, o cambiar la cámara entre frontal y trasera, requiere recalibrar. Cambiar de mundo y salir del alcance se recuperan solos',
    recalTitle: 'Cuándo recalibrar',
    need: 'Recalibrar',
    needItems: ['Cambiaste o recargaste el avatar', <>Cambiaste la cámara entre selfie y hacia fuera<small>No hace falta si la vuelves a cambiar</small></>],
    auto: 'Se recupera solo',
    autoItems: [<>Te moviste a otro mundo<small>Se reconecta automáticamente</small></>, <>La cámara salió del alcance<small>Se reanuda a menos de unos 2,5 m</small></>],
    endNote: 'Al finalizar la sincronización, puedes volver a agarrar la cabeza binaural con el grip y colocarla manualmente.',
  },
  'pt-BR': {
    title: <>Alcance da <em>sincronização da câmera</em></>,
    lead: 'Use uma câmera com Local Anchor a até cerca de 2,5 m do seu avatar.',
    anchorLabel: 'Somente Local Anchor é compatível. World Anchor, Pin 1–3 e mover-se com Holoport ou teleporte não são compatíveis',
    anchorTitle: 'Âncora da câmera',
    ok: 'Local Anchor',
    ng: ['World Anchor', 'Pin 1–3', 'Holoport / teleporte'],
    rangeLabel: 'O alcance é de cerca de 2,5 m ao redor do avatar. Fora dele, a sincronização pausa e volta quando a câmera retorna (vista de cima)',
    rangeTitle: 'Alcance (vista de cima)',
    radius: '≈ 2,5 m',
    inside: 'Sincronizando',
    outside: 'Em pausa',
    back: 'Volta ao retornar',
    avatar: 'Avatar',
    recalLabel: 'Trocar ou recarregar o avatar, ou alternar a câmera entre frontal e traseira, exige recalibrar. Trocar de mundo e sair do alcance se recuperam sozinhos',
    recalTitle: 'Quando recalibrar',
    need: 'Recalibrar',
    needItems: ['Você trocou ou recarregou o avatar', <>Você alternou a câmera entre selfie e para fora<small>Não é preciso se você voltar</small></>],
    auto: 'Recupera sozinho',
    autoItems: [<>Você foi para outro mundo<small>Reconecta automaticamente</small></>, <>A câmera saiu do alcance<small>Volta a até cerca de 2,5 m</small></>],
    endNote: 'Quando você encerra a sincronização, pode voltar a pegar a cabeça binaural com o grip e posicioná-la manualmente.',
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
