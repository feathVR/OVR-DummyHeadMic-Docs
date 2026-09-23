# Screenshot plan

公開マニュアルで使用する画像の台帳です。画像を追加・差し替えた場合は、対象バージョンと確認結果を更新します。

| Image | Page | Purpose | Status |
| --- | --- | --- | --- |
| `static/img/screenshots/ja/basic-guide.png` | `getting-started/first-sound` | 初回設定、OBS、基本操作の全体像 | Existing guide artwork; review with current build |
| `static/img/screenshots/ja/vrchat-camera-sync.png` | `vrchat-camera/calibration` | VRChatカメラ同期の初回手順 | Existing guide artwork; review with current build |
| `static/img/screenshots/en/app-window-en.png` | `operation/sound` | 最新ビルドの英語Main settings実画面 | Captured from v1.10 build on 2026-09-23 |
| `static/img/screenshots/en/basic-guide.png` | `getting-started/first-sound` | 基本ガイドの英語版 | Localized from the Japanese guide artwork; reviewed |
| `static/img/screenshots/en/vrchat-camera-sync.png` | `vrchat-camera/calibration` | カメラ同期ガイドの英語版 | Localized from the Japanese guide artwork; reviewed |

## 図解（コードで描く図）

ページ内ではReactコンポーネントを直接表示し、日英・ライト/ダーク・スマホ幅に追従します。PNGはサイト外（SNS・Booth・README等）で使う用に同じコンポーネントから書き出します。文言を変えたら `npm run build` → `pwsh scripts/export-figures.ps1` でPNGを更新してください。

| Component | Page | PNG (ja / en) | Purpose |
| --- | --- | --- | --- |
| `src/components/ObsFlowFigure.jsx` | `audio/obs` | `static/img/figures/{ja,en}/obs-flow.png` | 音声の流れと、OBSのマイク入力による二重取り込みの注意 |
| `src/components/DummyHeadFigure.jsx` | `operation/dummy-head` | `static/img/figures/{ja,en}/dummy-head.png` | 手で運んで置く流れと、顔の向き（前方／後方）の真上図 |
| `src/components/CamSyncLimitsFigure.jsx` | `vrchat-camera/limitations` | `static/img/figures/{ja,en}/camsync-limits.png` | 対応するカメラ配置、約2.5mの範囲（真上図）、再較正の要否 |

## 公開前チェック

- 個人名、VRChatユーザー名、デバイス固有名、ローカルパスを含めない
- 現行版のUIと手順に一致することを実機で確認する
- 画像内の文章だけに依存せず、同じ要点を本文にも記載する
- 英語版では英語UIの画像を使用するか、日本語UIであることを明記する
