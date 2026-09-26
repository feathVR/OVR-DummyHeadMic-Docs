# 报告未解决的问题

如果[常见问题](common-issues)没有帮助，请在 [Discord 社区](https://discord.gg/MJmu7Shger)中提问。该社区与 VOrbit ASMR 使用同一个 Discord 社区。指南中的错别字或失效链接请在[本指南的 GitHub Issues](https://github.com/feathVR/OVR-DummyHeadMic-Docs/issues)中报告。

请尽量提供以下信息：

- 应用版本类型和版本号
- Windows 版本、HMD 和控制器类型
- 音频路由（Normal 或 VST bridge）；若为 Normal，请提供输入和输出设备
- 是否正在使用 VRChat 摄像机同步、Anchor 类型及显示的状态
- 重现步骤、预期结果和实际结果
- 如有帮助，请提供已隐藏个人信息的截图

如果支持人员要求提供日志，请检查 Unity 的 `Player.log`。在典型的 Windows 安装中，其路径为 `%USERPROFILE%\AppData\LocalLow\feath\OVR-DummyHeadMic\Player.log`。其中可能包含设备名称或其他本地环境详情，因此附加到公开 Issue 前请先检查内容。

同一文件夹还包含由应用自动写入的 `support-info.txt`。它会在一页中汇总应用版本、音频路由、所选输入和输出设备、采样率，以及 VST 桥接和 VRChat 同步的状态，因此附上该文件有助于快速缩小问题原因的范围。该文件只会在你的电脑上创建，绝不会自动发送。它包含设备和 DAW 名称，因此分享前请先检查内容。
