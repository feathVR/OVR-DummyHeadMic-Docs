# Sincronización con la cámara de VRChat

Esta función hace que el micrófono de cabeza binaural siga automáticamente la posición de la User Camera de VRChat. Reduce la discrepancia de que “el video proviene de la cámara de VRChat, pero el audio viene de otro lugar”.

:::caution Función experimental (beta)
Esta función es inestable. Incluso después de una calibración completa, la posición puede desviarse según la tasa de fotogramas, y la sincronización puede romperse si el seguimiento del HMD se vuelve inestable. Si se desvía, [vuelve a calibrar](calibration).
:::

## Antes de comenzar

1. Abre el Action Menu de VRChat.
2. Abre **Options → OSC**.
3. Habilita OSC.
4. Muestra la User Camera de VRChat.
5. Abre **Configuración principal** en OVR-DummyHeadMic.

Por lo general, la conexión se detecta automáticamente. Puedes usar otras aplicaciones compatibles con OSC al mismo tiempo en entornos donde OSCQuery esté disponible.

A continuación, [calibra la cámara](calibration).

Consulta la [guía de estados](status) para obtener información sobre mensajes como MOVIMIENTO, ESPERA y LISTO después de iniciar la sincronización.
