import CamSyncLimitsFigure from "@site/src/components/CamSyncLimitsFigure";

# Configurações compatíveis e nova calibração

## Posicionamento de câmera compatível

Somente o **Local Anchor** é compatível. Os seguintes recursos não são compatíveis:

- World Anchor
- Pin 1–3
- Movimento usando Holoport ou teletransporte

<CamSyncLimitsFigure part="anchor" />

## Depois da calibração

- Não alterne a câmera entre a frente e a traseira (selfie e voltada para fora). Se fizer isso, volte à orientação anterior ou calibre novamente.
- O alcance do rastreamento é de aproximadamente 2.5 m ao redor do avatar. A sincronização pausa temporariamente fora desse alcance e é retomada quando você volta.
- O aplicativo se reconecta automaticamente depois que você muda de mundo.
- Calibre novamente depois de trocar ou recarregar seu avatar.
- Quando você encerra a sincronização, pode voltar a posicionar a cabeça binaural manualmente com o botão A.

<CamSyncLimitsFigure part="after" />

## Smooth Movement

Durante a calibração, o aplicativo desativa temporariamente o Smooth Movement da câmera do VRChat e o verifica. Depois da calibração, ele restaura a configuração original, ATIVADO ou DESATIVADO, e define a intensidade como 5 caso estivesse acima de 5. Desative-o manualmente no VRChat apenas se o aplicativo informar que a verificação automática falhou.
