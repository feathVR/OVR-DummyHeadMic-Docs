# 解決しない問題を報告する

[よくある問題](common-issues)で解決しない場合は、[Discordコミュニティ](https://discord.gg/5r9Ub76fnz)で相談できます。このDiscordはVOrbit ASMRと共通です。マニュアルの誤記やリンク切れは[このガイドのGitHub Issues](https://github.com/feathVR/OVR-DummyHeadMic-Docs/issues)で報告できます。

報告には、分かる範囲で次を添えてください。

- 使用している配布版とアプリのバージョン
- Windows、HMD、コントローラーの種類
- 音声経路（通常／VSTブリッジ）と、通常経路なら入力・出力デバイス
- VRChatカメラ同期の使用有無、使っているAnchorと画面に出た状態表示
- 問題が起きるまでの手順、期待した動作、実際の動作
- 可能なら、個人情報を隠した画面写真

ログの提出を求められたときは、Unityの`Player.log`を確認します。通常のWindows環境では`%USERPROFILE%\AppData\LocalLow\feath\OVR-DummyHeadMic\Player.log`にあります。デバイス名やローカル環境の情報が含まれる可能性があるため、公開のIssueへそのまま添付する前に内容を確認してください。

同じフォルダーには、アプリが自動で書き出す`support-info.txt`もあります。アプリのバージョン、音声経路、選んでいる入力・出力デバイス、サンプルレート、VSTブリッジとVRChat同期の状態が1枚にまとまっているので、相談の際に添えていただくと原因を早く絞り込めます。このファイルはPCの中に作られるだけで、自動で送信されることはありません。デバイス名やDAW名が含まれるため、共有する前に内容を確認してください。
