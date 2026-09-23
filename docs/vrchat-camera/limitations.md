import CamSyncLimitsFigure from "@site/src/components/CamSyncLimitsFigure";

# 対応範囲と再較正

## 対応するカメラ配置

対応するのは**Local Anchor**です。次の機能には対応していません。

- World Anchor
- Pin 1～3
- Holoportまたはテレポートによる移動

<CamSyncLimitsFigure part="anchor" />

## 較正後の注意

- カメラの前後（自撮り／外向き）を切り替えないでください。切り替えた場合は元へ戻すか、再較正します。
- 収録範囲はアバターを中心に約2.5mです。範囲外では同期が一時停止し、戻ると再開します。
- ワールド移動後は自動的に再接続します。
- アバターを変更またはリロードした場合は再較正してください。
- 同期を終了すると、Aボタンによる通常の手動設置へ戻ります。

<CamSyncLimitsFigure part="after" />

## Smooth Movement

較正中は、VRChatカメラのSmooth Movementをアプリが一時的にOFFにして確認します。完了後は元のON/OFFへ戻し、強さが5を超えていた場合は5へ調整します。自動確認に失敗したと案内された場合のみ、VRChat側で手動でOFFにしてください。
