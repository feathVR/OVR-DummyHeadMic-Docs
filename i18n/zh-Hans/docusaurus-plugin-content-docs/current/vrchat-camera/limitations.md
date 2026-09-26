import CamSyncLimitsFigure from "@site/src/components/CamSyncLimitsFigure";

# 支持的配置和重新校准

## 支持的摄像机放置方式

仅支持 **Local Anchor**。不支持以下功能：

- World Anchor
- Pin 1–3
- 使用 Holoport 或传送进行移动

<CamSyncLimitsFigure part="anchor" />

## 校准后

- 不要在前置和后置（自拍和朝外）之间切换摄像机。如果进行了切换，请切换回来或重新校准。
- 跟踪范围约为虚拟形象周围 2.5 m。超出该范围时同步会暂时暂停，返回范围内后会恢复。
- 切换世界后，应用会自动重新连接。
- 更换或重新加载虚拟形象后请重新校准。
- 结束同步后，可以再次使用 A 按钮手动放置假人头。

<CamSyncLimitsFigure part="after" />

## Smooth Movement

校准期间，应用会暂时关闭 VRChat 摄像机的 Smooth Movement 并进行检查。校准后，它会恢复原来的开/关设置；如果强度原本高于 5，则将其设为 5。只有在应用报告自动检查失败时，才需要在 VRChat 中手动关闭它。
