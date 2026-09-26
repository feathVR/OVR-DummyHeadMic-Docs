import ObsFlowFigure from "@site/src/components/ObsFlowFigure";

# Capturar áudio no OBS

1. Abra no OBS a cena que você quer usar.
2. Selecione “+” em Fontes e adicione uma fonte **Captura de saída de áudio**.
3. Selecione o dispositivo de saída configurado no OVR-DummyHeadMic.
4. Fale ao microfone e confirme que o medidor de áudio do OBS se move.
5. Silencie a entrada de microfone convencional no OBS.

<ObsFlowFigure />

:::danger Evite capturar duas vezes a voz sem processamento
Se o áudio processado pelo OVR-DummyHeadMic e a entrada de microfone do OBS estiverem ativados, tanto a voz sem processamento quanto o áudio espacial serão transmitidos. Como regra geral, silencie a entrada de microfone convencional no OBS.
:::

## Se o áudio do jogo ou sons de notificação também forem capturados

A Captura de saída de áudio captura todo o som enviado ao dispositivo selecionado. Se você não quiser incluir sons de outros aplicativos, use um dispositivo de áudio virtual dedicado.
