import CamSyncLimitsFigure from "@site/src/components/CamSyncLimitsFigure";

# 支援的設定與重新校正

## 支援的攝影機放置方式

僅支援 **Local Anchor**。不支援下列功能：

- World Anchor
- Pin 1–3
- 使用 Holoport 或傳送進行移動

<CamSyncLimitsFigure part="anchor" />

## 校正後

- 請勿在攝影機的前後方向（自拍與朝外）之間切換。若已切換，請切回原方向或重新校正。
- 追蹤範圍約為虛擬人偶周圍 2.5 m。超出此範圍時同步會暫停，返回範圍後會恢復。
- 切換世界後，應用程式會自動重新連線。
- 變更或重新載入虛擬人偶後，請重新校正。
- 結束同步後，即可再次使用 A 按鈕手動放置假人頭。

<CamSyncLimitsFigure part="after" />

## Smooth Movement

校正期間，應用程式會暫時關閉 VRChat 攝影機的 Smooth Movement 並進行檢查。校正後，會還原原本的開啟／關閉設定；若強度高於 5，則會設為 5。只有在應用程式回報自動檢查失敗時，才需要在 VRChat 中手動將其關閉。
