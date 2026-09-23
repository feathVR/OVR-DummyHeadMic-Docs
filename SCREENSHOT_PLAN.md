# Screenshot plan

公開マニュアルで使用する画像の台帳です。画像を追加・差し替えた場合は、対象バージョンと確認結果を更新します。

| Image | Page | Purpose | Status |
| --- | --- | --- | --- |
| `static/img/screenshots/ja/basic-guide.png` | `getting-started/first-sound` | 初回設定、OBS、基本操作の全体像 | Existing guide artwork; review with current build |
| `static/img/screenshots/ja/vrchat-camera-sync.png` | `vrchat-camera/calibration` | VRChatカメラ同期の初回手順 | Existing guide artwork; review with current build |

## 図解（コードで描く図）

ページ内ではReactコンポーネントを直接表示し、日英・ライト/ダーク・スマホ幅に追従します。PNGはサイト外（SNS・Booth・README等）で使う用に同じコンポーネントから書き出します。文言を変えたら `npm run build` → `pwsh scripts/export-figures.ps1` でPNGを更新してください。

| Component | Page | PNG (ja / en) | Purpose |
| --- | --- | --- | --- |
| `src/components/ObsFlowFigure.jsx` | `audio/obs` | `static/img/figures/{ja,en}/obs-flow.png` | 音声の流れと、OBSのマイク入力による二重取り込みの注意 |

## 公開前チェック

- 個人名、VRChatユーザー名、デバイス固有名、ローカルパスを含めない
- 現行版のUIと手順に一致することを実機で確認する
- 画像内の文章だけに依存せず、同じ要点を本文にも記載する
- 英語版では英語UIの画像を使用するか、日本語UIであることを明記する
