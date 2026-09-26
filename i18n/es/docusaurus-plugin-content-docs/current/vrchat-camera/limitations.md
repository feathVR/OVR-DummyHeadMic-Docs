import CamSyncLimitsFigure from "@site/src/components/CamSyncLimitsFigure";

# Configuraciones compatibles y recalibración

## Colocación compatible de la cámara

Solo se admite **Local Anchor**. Las siguientes funciones no son compatibles:

- World Anchor
- Pin 1–3
- Movimiento mediante Holoport o teletransporte

<CamSyncLimitsFigure part="anchor" />

## Después de la calibración

- No cambies la cámara entre frontal y trasera (selfi y orientada hacia afuera). Si lo haces, vuelve a cambiarla o calibra de nuevo.
- El rango de seguimiento es de aproximadamente 2.5 m alrededor del avatar. La sincronización se pausa temporalmente fuera de este rango y se reanuda cuando regresas.
- La aplicación se vuelve a conectar automáticamente después de cambiar de mundo.
- Calibra de nuevo después de cambiar o volver a cargar tu avatar.
- Al finalizar la sincronización, puedes volver a colocar manualmente la cabeza binaural con el botón A.

<CamSyncLimitsFigure part="after" />

## Smooth Movement

Durante la calibración, la aplicación desactiva temporalmente Smooth Movement de la cámara de VRChat y lo comprueba. Después de la calibración, restaura el ajuste original ACTIVADO/DESACTIVADO y establece la intensidad en 5 si era superior a 5. Desactívalo manualmente en VRChat únicamente si la aplicación informa que falló la comprobación automática.
