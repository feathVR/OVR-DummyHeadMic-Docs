# VRChatカメラ同期

VRChatのUser Cameraを置いた場所へ、ダミーヘッドマイクを自動追従させる機能です。「映像はVRChatカメラ、音は別の位置」というずれを減らせます。

## 使用前の準備

1. VRChatのAction Menuを開きます。
2. **Options → OSC**を開きます。
3. OSCを有効にします。
4. VRChatのUser Cameraを表示します。
5. OVR-DummyHeadMicの**Main settings**を開きます。

接続先は通常、自動で検出されます。ほかのOSC対応アプリを使用していても、OSCQueryを利用できる環境では併用できます。

次に[カメラを較正する](calibration)へ進んでください。

開始後の「MOVE」「WAIT」「READY」などの意味は[状態表示の一覧](status)で確認できます。
