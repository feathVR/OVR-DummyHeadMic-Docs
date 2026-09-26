# Problemas comuns

## Nenhuma janela aparece depois de iniciar o aplicativo

O OVR-DummyHeadMic é iniciado sem exibir uma janela e fica na bandeja do sistema do Windows (a área de notificação no canto inferior direito da tela).

- Clique no ícone do OVR-DummyHeadMic na bandeja para abrir a janela de configurações. Se você não encontrar o ícone, abra o “^” na área de notificação.
- Clique com o botão direito no ícone para escolher **Abrir configurações** ou **Sair do OVR-DummyHeadMic**.
- O botão de fechar (×) da janela não encerra o aplicativo; ele apenas o devolve à bandeja. Para sair, use o menu da bandeja.
- Para iniciar com a janela visível em vez de minimizada na bandeja, adicione a opção de inicialização `-showwindow`.

## Sem áudio

- Verifique se a **Rota de áudio** é Normal ou Ponte VST. Escolha Normal se você não estiver usando uma DAW.
- Verifique se o dispositivo de entrada é o microfone que você está usando.
- Verifique se o dispositivo de saída corresponde ao local em que seus fones estão conectados.
- Verifique as configurações de volume e mudo no Windows e no aplicativo.
- Verifique se outro aplicativo está usando o dispositivo de áudio em modo exclusivo.
- Depois de trocar de dispositivo, aguarde um pouco o mecanismo de áudio reiniciar.

## Nenhum áudio chega ao OBS

- Estas etapas são para a rota Normal. Para a Ponte VST, verifique a [rota da DAW](../audio/vst-bridge).
- Adicione **Captura de saída de áudio**, e não “Captura de entrada de áudio”, ao OBS.
- Selecione o mesmo dispositivo de saída no OVR-DummyHeadMic e no OBS.
- Verifique se a fonte e o mixer de áudio do OBS não estão silenciados.

## É possível ouvir tanto a voz sem processamento quanto a processada

Silencie a entrada de microfone convencional no OBS. Para sua transmissão, use somente a Captura de saída de áudio que captura a saída do OVR-DummyHeadMic.

## Não é possível mover a cabeça binaural

- Verifique se o SteamVR reconhece os dois controles.
- Mantenha pressionados X da mão esquerda + A da mão direita ou os dois botões A ao mesmo tempo.
- Se a sincronização da câmera do VRChat estiver ativa, encerre-a temporariamente para voltar ao posicionamento manual.
- Para outro controle ou uma associação personalizada, verifique no aplicativo os [nomes das associações](../operation/controllers).

## Falhas ou ruído indesejado

- No modo Normal, experimente **Proteção contra falhas (buffer circular)** em Configurações do dispositivo de áudio. Alterar essa opção reinicia o mecanismo de áudio.
- Para ruído de fundo constante, experimente a redução de ruído. Desative-a se ela alterar as características da sua voz.
- Verifique as conexões dos dispositivos e se outro aplicativo está usando algum dispositivo em modo exclusivo.

## A ponte VST não se conecta

- Insira o `VOrbit Bridge` na DAW e faça uma nova varredura dos plug-ins, se necessário.
- Defina a taxa de amostragem da DAW como 44.1 ou 48 kHz.
- Se outro aplicativo estiver usando a ponte, encerre primeiro o modo de ponte desse aplicativo.
- Consulte o [guia de status da ponte VST](../audio/vst-bridge) para mensagens específicas.

## A câmera do VRChat não é detectada

- Verifique se o OSC está ativado no Action Menu do VRChat.
- Exiba a User Camera antes de pressionar “Iniciar”.
- Se você reiniciou o VRChat ou este aplicativo, pressione “Iniciar” novamente.
- Verifique se o firewall ou software de segurança não está bloqueando a comunicação local, o mDNS ou o OSC.
- Se uma mensagem disser que o OSCQuery não pôde ser iniciado, verifique se há conflito de porta com outro aplicativo receptor de OSC.

## A calibração não é concluída

- Mantenha a câmera nivelada e mova-a lentamente com a mesma mão.
- Durante o movimento para a esquerda e para a direita, mantenha a orientação e a altura estáveis e mova-a em linha reta uma vez em cada direção.
- Durante a medição da orientação, mantenha a posição fixa e altere somente a orientação da câmera.
- Não use o analógico para se mover ou girar enquanto segura a câmera.

## A posição sincronizada está deslocada

- Verifique se a orientação selfie/voltada para fora da câmera não mudou desde a calibração.
- Calibre novamente depois de trocar ou recarregar seu avatar.
- Para filmar em modo retrato, defina “Orientação da câmera acústica” como “Retrato”.
- Use Local Anchor, não World Anchor nem Pin.

Se o problema persistir, consulte [como relatá-lo](report).
