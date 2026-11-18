# Screenshot plan

公開マニュアルで使用する画像の台帳です。画像を追加・差し替えた場合は、対象バージョンと確認結果を更新します。

| Image | Page | Purpose | Status |
| --- | --- | --- | --- |
| `static/img/screenshots/<locale>/basic-guide.png`（8言語: ja, en, zh-Hans, zh-Hant, ko, ru, es, pt-BR） | `getting-started/first-sound` | 初回設定、OBS、基本操作の全体像 | 2026-11-18 に③④を新操作（グリップで掴む／頭の下のボタン列）へ描き直し。ja・en を作成し、他の6言語は en から文字を置き換えて作成。全言語の文字を目視確認済み。アプリ内（`Assets/Texture/ManualGuides/basic-guide-<locale>.png`）と同じファイル |
| `static/img/screenshots/<locale>/vrchat-camera-sync.png`（8言語） | `vrchat-camera/calibration` | VRChatカメラ同期の初回手順 | 2026-10 に8言語を用意。2026-11 の操作変更の影響なし（Codex 点検 2026-11-18） |
| `static/img/screenshots/en/app-window-en.png` | `operation/sound` | 英語 Main settings の実画面 | **要撮り直し**：v1.10（2026-09-23）の画面で、廃止した「ASMR (toggle with both B buttons)」「Dummy head follows right hand (both A buttons)」が写っている。現行ビルドの実アプリで撮り直す |

## 図解（コードで描く図）

ページ内ではReactコンポーネントを直接表示し、8言語・ライト/ダーク・スマホ幅に追従します（文言は各コンポーネントの `TEXT` に8言語分ある。ObsFlowFigure は日英のみで、他の言語は英語を表示）。PNGはサイト外（SNS・Booth・README等）で使う用に同じコンポーネントから日英だけ書き出します。文言を変えたら `npm run build` → `pwsh scripts/export-figures.ps1` でPNGを更新してください。

| Component | Page | PNG (ja / en) | Purpose |
| --- | --- | --- | --- |
| `src/components/ObsFlowFigure.jsx` | `audio/obs` | `static/img/figures/{ja,en}/obs-flow.png` | 音声の流れと、OBSのマイク入力による二重取り込みの注意 |
| `src/components/DummyHeadFigure.jsx` | `operation/dummy-head` | `static/img/figures/{ja,en}/dummy-head.png` | グリップで掴んで運び、離して置く流れと、顔の向き（前方／後方）の真上図。2026-11-18 に新操作へ更新・PNG再書き出し |
| `src/components/CamSyncLimitsFigure.jsx` | `vrchat-camera/limitations` | `static/img/figures/{ja,en}/camsync-limits.png` | 対応するカメラ配置、約2.5mの範囲（真上図）、再較正の要否。2026-11-18 に同期終了後の手動設置をグリップ操作へ更新・PNG再書き出し |

## 公開前チェック

- 個人名、VRChatユーザー名、デバイス固有名、ローカルパスを含めない
- 現行版のUIと手順に一致することを実機で確認する
- 画像内の文章だけに依存せず、同じ要点を本文にも記載する
- 英語版では英語UIの画像を使用するか、日本語UIであることを明記する
