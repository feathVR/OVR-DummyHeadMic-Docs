# 通过 DAW 使用 VST 桥接

VST 桥接会将 DAW 中的音频通过 `VOrbit Bridge.vst3` 发送到本应用，并将处理后的音频返回 DAW。如果不使用 DAW，请选择 [Normal 路由](routes)。

## 首次设置

1. 在本应用的 **音频设备设置** 中，点击 **打开 VST 桥接文件夹**。
2. 将整个 `VOrbit Bridge.vst3` 文件夹复制到 VST3 扫描目录。单用户位置为 `%LOCALAPPDATA%\Programs\Common\VST3`，所有用户共用的位置为 `%COMMONPROGRAMFILES%\VST3`。如果 DAW 配置了其他扫描位置，请使用该位置。
3. 在 DAW 中重新扫描插件，并在要处理的音频轨道上插入 **VOrbit Bridge**。如果将它插入麦克风轨道，请在 DAW 中启用输入监听。
4. 将 DAW 采样率设置为 **44.1 kHz 或 48 kHz**。
5. 将本应用的 **音频路由** 切换为 **VST bridge**。确认状态显示 **Spatializing**，并且音频能够到达 DAW。

:::note
该插件名为“VOrbit Bridge”，因为这是随附插件的名称。无需为 OVR-DummyHeadMic 重命名。
:::

## 状态和控制项

| 状态 | 含义和下一步操作 |
| --- | --- |
| Waiting for VOrbit Bridge in a DAW | 在 DAW 中插入插件并开始音频处理。如果之前已经连接，请尝试 **重新连接 VST 桥接**。 |
| Spatializing | 已连接。请检查 DAW 的路由和轨道电平。 |
| Unsupported sample rate: bypass | 将 DAW 采样率更改为 44.1 或 48 kHz。 |
| Offline render: bypass | 离线渲染期间会绕过空间音频处理。请使用实时播放检查。 |
| Another app is using the VST bridge | 结束 VOrbit ASMR 或其他使用同一桥接的应用中的桥接模式，然后重新连接。 |

**断开 VST 桥接** 会释放当前 DAW 连接，使插件保持旁路状态。**重新连接 VST 桥接** 会重试正在等待的连接。

更新应用后，请再次将新随附的插件复制到 DAW 扫描目录，并在 DAW 中重新扫描。

## 直播到 OBS

使用 VST 桥接时，空间化音频会返回 DAW。如需直播，**请另行设置一条将 DAW 处理后音频送入 OBS 的路径**，例如将 DAW 输出发送到虚拟音频设备，再通过 OBS **音频输出采集**进行采集。请选择适合你的设置方式。

能从耳机听见声音并不代表声音已经到达 OBS。请检查 OBS 音频电平表并进行一次简短的测试录制。将 OBS 中常规的麦克风输入静音，以免未处理的声音被重复采集。

## 无需重新连接的情况

- **切换路由**：在 Normal 与 VST bridge 之间切换时会保留 DAW 连接。选择 Normal 时，DAW 中的插件会让音频直通；切回 VST bridge 后会恢复空间化处理。
- **启动应用**：应用启动时（或启动后首次选择 VST bridge 时），会自动请求 DAW 中正在等待的插件重新连接。

按下 **断开 VST 桥接** 后，连接不会自动恢复。请按 **重新连接 VST 桥接** 再次连接。

有关应用增加的延迟及 DAW 延迟补偿，请参阅[延迟](routes#latency)。
