import CamSyncLimitsFigure from "@site/src/components/CamSyncLimitsFigure";

# 지원되는 구성 및 재보정

## 지원되는 카메라 배치

**Local Anchor**만 지원됩니다. 다음 기능은 지원되지 않습니다.

- World Anchor
- Pin 1–3
- Holoport 또는 텔레포트를 사용한 이동

<CamSyncLimitsFigure part="anchor" />

## 보정 후

- 카메라의 전면과 후면(셀카 및 바깥쪽)을 전환하지 마세요. 전환했다면 원래대로 되돌리거나 다시 보정하세요.
- 추적 범위는 아바타 주변 약 2.5 m입니다. 이 범위를 벗어나면 동기화가 일시 정지되고 돌아오면 재개됩니다.
- 월드를 변경한 뒤에는 앱이 자동으로 다시 연결됩니다.
- 아바타를 변경하거나 다시 불러온 뒤에는 다시 보정하세요.
- 동기화를 종료하면 A 버튼으로 더미 헤드를 다시 수동 배치할 수 있습니다.

<CamSyncLimitsFigure part="after" />

## Smooth Movement

보정 중에는 앱이 VRChat 카메라의 Smooth Movement를 일시적으로 OFF로 전환하여 확인합니다. 보정 후에는 원래 ON/OFF 설정을 복원하며, 강도가 5보다 높았다면 5로 설정합니다. 앱에서 자동 확인에 실패했다고 알릴 때만 VRChat에서 직접 끄세요.
