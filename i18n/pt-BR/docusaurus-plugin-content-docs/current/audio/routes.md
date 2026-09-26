# Escolher uma rota de áudio

Em **Configurações do dispositivo de áudio → Rota de áudio**, escolha **Normal** ou **Ponte VST**. Sua escolha será restaurada na próxima inicialização.

| Rota | Caminho do áudio | Mais indicada para |
| --- | --- | --- |
| Normal | Microfone → OVR-DummyHeadMic → dispositivo de saída do Windows | Verificação com fones de ouvido e [captura no OBS](obs) |
| Ponte VST | Faixa da DAW → VOrbit Bridge.vst3 → OVR-DummyHeadMic → DAW | Monitoramento e gravação em uma DAW |

Comece com Normal para verificar o som. No modo Ponte VST, os controles de dispositivo de entrada/saída e buffer circular ficam ocultos; configure os dispositivos de áudio na DAW. As instruções de Captura de saída de áudio do OBS para a rota Normal não se aplicam diretamente ao modo Ponte VST.

## Configurações compartilhadas pelas duas rotas

- **Reduzir ruído de fundo constante**: reduz sons como ventoinhas do PC e ar-condicionado. Desativado por padrão. Pode alterar a textura de sussurros ou da respiração e acrescenta cerca de 10 ms de latência ao aplicativo.
- **Proteção contra falhas (buffer circular)**: experimente esta opção se houver falhas no áudio no modo Normal. Alterá-la reinicia o mecanismo de áudio. Ela fica oculta no modo Ponte VST.

## Latência {#latency}

A tela de status do aplicativo mostra a latência total e sua composição. As partes fixas são:

| Parte | Duração | Quando |
| --- | --- | --- |
| Espacializador | 5 ms | Sempre |
| Reduzir ruído de fundo constante | 10 ms | Quando ativado |
| Reverberação | Depende das configurações | Quando usada |

- **Rota Normal**: o microfone e o dispositivo de saída acrescentam sua própria latência de E/S às partes acima. Isso depende do hardware, mas um total de cerca de 20 ms é comum; portanto, a latência geral fica em torno de 25 ms (cerca de 35 ms com a redução de ruído ativada). Ativar **Proteção contra falhas (buffer circular)** acrescenta mais latência.
- **Ponte VST**: o aplicativo acrescenta somente as partes acima (5 ms com a redução de ruído desativada). A E/S do dispositivo de áudio é definida pela DAW e não está incluída na tela do aplicativo. O plug-in informa essa latência à DAW, de modo que gravações e renderizações permaneçam sincronizadas graças à compensação de latência da DAW. Você só percebe o atraso durante o monitoramento em tempo real.
