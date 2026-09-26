import ObsFlowFigure from "@site/src/components/ObsFlowFigure";

# 在 OBS 中采集音频

1. 在 OBS 中打开要使用的场景。
2. 选择“来源”下方的“+”，添加一个 **音频输出采集** 来源。
3. 选择在 OVR-DummyHeadMic 中配置的输出设备。
4. 对着麦克风说话，确认 OBS 音频电平表有反应。
5. 将 OBS 中常规的麦克风输入静音。

<ObsFlowFigure />

:::danger 避免重复采集未处理的声音
如果同时启用处理后的 OVR-DummyHeadMic 音频与 OBS 麦克风输入，未处理的声音和空间音频都会被直播出去。通常应将 OBS 中常规的麦克风输入静音。
:::

## 如果游戏音频或通知声音也被采集

音频输出采集会采集发送到所选设备的所有声音。如果不想包含其他应用的声音，请使用专用的虚拟音频设备。
