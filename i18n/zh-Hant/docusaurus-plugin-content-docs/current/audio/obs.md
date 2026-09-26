import ObsFlowFigure from "@site/src/components/ObsFlowFigure";

# 在 OBS 中擷取音訊

1. 在 OBS 中開啟要使用的場景。
2. 在「來源」下方選擇「+」，並新增一個**音訊輸出擷取**來源。
3. 選擇在 OVR-DummyHeadMic 中設定的輸出裝置。
4. 對著麥克風說話，確認 OBS 的音量表會變動。
5. 將 OBS 中的一般麥克風輸入設為靜音。

<ObsFlowFigure />

:::danger 避免重複擷取未處理的語音
若同時啟用經 OVR-DummyHeadMic 處理的音訊與 OBS 麥克風輸入，直播中會同時送出未處理的語音與空間音訊。原則上，請將 OBS 中的一般麥克風輸入設為靜音。
:::

## 若同時擷取到遊戲音訊或通知音效

「音訊輸出擷取」會擷取傳送到所選裝置的所有聲音。若不想包含其他應用程式的聲音，請使用專用的虛擬音訊裝置。
