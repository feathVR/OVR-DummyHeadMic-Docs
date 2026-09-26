# Usar a ponte VST com uma DAW

A ponte VST envia o áudio de uma DAW pelo `VOrbit Bridge.vst3` para este aplicativo e devolve o áudio processado à DAW. Se você não usa uma DAW, escolha a [rota Normal](routes).

## Configuração inicial

1. Em **Configurações do dispositivo de áudio** deste aplicativo, clique em **Abrir pasta da ponte VST**.
2. Copie a pasta `VOrbit Bridge.vst3` inteira para um diretório de varredura de VST3. O local por usuário é `%LOCALAPPDATA%\Programs\Common\VST3`; o local para todos os usuários é `%COMMONPROGRAMFILES%\VST3`. Se a DAW estiver configurada para procurar em outro local, use-o.
3. Faça uma nova varredura dos plug-ins na DAW e insira o **VOrbit Bridge** na faixa de áudio que você quer processar. Se você o inserir em uma faixa de microfone, ative o monitoramento da entrada na DAW.
4. Defina a taxa de amostragem da DAW como **44.1 kHz ou 48 kHz**.
5. Mude a **Rota de áudio** deste aplicativo para **Ponte VST**. Confirme que o status mostra **Espacializando** e que o áudio chega à DAW.

:::note
O plug-in se chama “VOrbit Bridge” porque esse é o nome do plug-in incluído. Você não precisa renomeá-lo para o OVR-DummyHeadMic.
:::

## Status e controles

| Status | Significado e próxima etapa |
| --- | --- |
| Aguardando o VOrbit Bridge em uma DAW | Insira o plug-in em uma DAW e inicie o processamento de áudio. Se ele já estava conectado, experimente **Reconectar ponte VST**. |
| Espacializando | Conectado. Verifique o roteamento e os níveis das faixas na DAW. |
| Taxa de amostragem incompatível: bypass | Altere a taxa de amostragem da DAW para 44.1 ou 48 kHz. |
| Renderização offline: bypass | O processamento espacial é ignorado durante a renderização offline. Verifique com reprodução em tempo real. |
| Outro aplicativo está usando a ponte VST | Encerre o modo de ponte no VOrbit ASMR ou em outro aplicativo que esteja usando a mesma ponte e reconecte. |

**Desconectar ponte VST** libera a conexão atual com a DAW e deixa o plug-in em bypass. **Reconectar ponte VST** tenta novamente uma conexão em espera.

Depois de atualizar o aplicativo, copie novamente o plug-in recém-incluído para o diretório de varredura da DAW e faça uma nova varredura.

## Transmitir para o OBS

Com a ponte VST, o áudio espacializado retorna à DAW. Para transmiti-lo, **configure um caminho separado que leve o áudio processado da DAW ao OBS**, por exemplo, enviando a saída da DAW a um dispositivo de áudio virtual e capturando-o com a **Captura de saída de áudio** do OBS. Escolha o método adequado à sua configuração.

Ouvir o áudio nos fones não confirma que ele chega ao OBS. Verifique o medidor de áudio do OBS e faça uma gravação curta de teste. Silencie a entrada de microfone convencional no OBS para que sua voz sem processamento não seja capturada duas vezes.

## Quando não é necessário reconectar

- **Ao trocar de rota**: alternar entre Normal e Ponte VST mantém a conexão com a DAW. Enquanto Normal estiver selecionada, o plug-in na DAW deixa o áudio passar; ao voltar para Ponte VST, a espacialização é retomada.
- **Ao iniciar o aplicativo**: quando o aplicativo é iniciado (ou quando você escolhe Ponte VST pela primeira vez depois de iniciá-lo), ele solicita automaticamente a reconexão de um plug-in em espera na DAW.

Depois que você pressionar **Desconectar ponte VST**, a conexão não será restabelecida sozinha. Pressione **Reconectar ponte VST** para conectar novamente.

Para saber sobre a latência acrescentada pelo aplicativo e a compensação de latência da DAW, consulte [Latência](routes#latency).
