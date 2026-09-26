# 了解摄像机同步状态

校准期间，请按照屏幕上和 VR 中的提示操作。主要状态如下：

| 显示 | 含义和操作 |
| --- | --- |
| Open the camera in VRChat | 显示 User Camera，并检查 VRChat 中是否启用了 OSC。 |
| MOVE | 应用检测到移动。不要抓取摄像机；请停止移动或转身。 |
| WAIT | 不要进行输入，等待姿势稳定。 |
| READY | 现在可以抓取摄像机，并继续执行[校准步骤](calibration)。 |
| Follow the dot left and right | 保持摄像机高度和朝向稳定；沿直线缓慢移动。 |
| Green circle | 用同一只手将摄像机稳定保持在中央，直到确认完成。 |
| Following | 摄像机跟随已启用。 |
| Paused: out of range | 返回虚拟形象周围约 2.5 m 范围内以恢复。 |
| Paused: move the camera once | 轻微移动摄像机，让 VRChat 发送新的姿势数据。 |
| Position lost: restarting calibration | 从头再次按照校准提示操作。 |

如果 MOVE 或 WAIT 长时间保持不变，请检查手持摄像机时是否使用摇杆移动或转身。有关 OSCQuery 备用端口消息，请参阅[常见问题](../troubleshooting/common-issues)。
