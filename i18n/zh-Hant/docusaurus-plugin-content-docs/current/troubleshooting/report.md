# 回報尚未解決的問題

若[常見問題](common-issues)無法提供協助，請在 [Discord 社群](https://discord.gg/MJmu7Shger)中詢問。這與 VOrbit ASMR 使用相同的 Discord 社群。若要回報指南中的錯字或失效連結，請使用[本指南的 GitHub Issues](https://github.com/feathVR/OVR-DummyHeadMic-Docs/issues)。

請盡量提供以下資訊：

- 應用程式版本類型與版本號
- Windows 版本、HMD 與控制器類型
- 音訊路徑（一般或 VST bridge）；若為「一般」，請提供輸入與輸出裝置
- 是否正在使用 VRChat 攝影機同步、Anchor 類型，以及顯示的狀態
- 重現步驟、預期結果與實際結果
- 若有幫助，請提供已隱藏個人資訊的螢幕擷取畫面

若支援人員要求提供記錄檔，請查看 Unity 的 `Player.log`。在一般 Windows 安裝環境中，其位置為 `%USERPROFILE%\AppData\LocalLow\feath\OVR-DummyHeadMic\Player.log`。其中可能包含裝置名稱或其他本機環境詳細資料，因此在附加至公開 Issue 前請先檢查內容。

同一個資料夾中也有應用程式自動寫入的 `support-info.txt`。它會在一頁內摘要應用程式版本、音訊路徑、所選的輸入與輸出裝置、取樣率，以及 VST bridge 與 VRChat 同步的狀態，因此一併提供有助於快速縮小原因範圍。此檔案只會建立在您的電腦上，絕不會自動傳送。檔案包含裝置與 DAW 名稱，因此分享前請先檢查內容。
