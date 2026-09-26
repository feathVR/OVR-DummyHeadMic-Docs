import ObsFlowFigure from "@site/src/components/ObsFlowFigure";

# Capturar audio en OBS

1. Abre la escena que quieras usar en OBS.
2. Selecciona “+” en Fuentes y agrega una fuente de **Captura de salida de audio**.
3. Selecciona el dispositivo de salida configurado en OVR-DummyHeadMic.
4. Habla por el micrófono y confirma que el medidor de audio de OBS se mueva.
5. Silencia la entrada de micrófono habitual en OBS.

<ObsFlowFigure />

:::danger Evita capturar dos veces la voz sin procesar
Si están habilitados tanto el audio procesado de OVR-DummyHeadMic como la entrada de micrófono de OBS, se transmitirán la voz sin procesar y el audio espacial. Por regla general, silencia la entrada de micrófono habitual en OBS.
:::

## Si también se capturan el audio del juego o los sonidos de notificación

Captura de salida de audio captura todo el sonido enviado al dispositivo seleccionado. Si no quieres incluir sonidos de otras aplicaciones, usa un dispositivo de audio virtual dedicado.
