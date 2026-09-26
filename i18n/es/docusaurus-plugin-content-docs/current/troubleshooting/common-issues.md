# Problemas comunes

## No aparece ninguna ventana después de iniciar la aplicación

OVR-DummyHeadMic se inicia sin mostrar una ventana y permanece en la bandeja del sistema de Windows (el área de notificaciones en la parte inferior derecha de la pantalla).

- Haz clic en el icono de OVR-DummyHeadMic en la bandeja para abrir la ventana de configuración. Si no puedes ver el icono, abre “^” en el área de notificaciones.
- Haz clic derecho en el icono para elegir **Abrir configuración** o **Salir de OVR-DummyHeadMic**.
- El botón de cierre (×) de la ventana no cierra la aplicación; la devuelve a la bandeja. Para salir, usa el menú de la bandeja.
- Para iniciar con la ventana visible en lugar de hacerlo en la bandeja, agrega la opción de inicio `-showwindow`.

## No hay audio

- Comprueba si **Ruta de audio** está configurada en Normal o Puente VST. Elige Normal si no usas una DAW.
- Comprueba que el dispositivo de entrada sea el micrófono que estás usando.
- Comprueba que el dispositivo de salida coincida con la conexión de tus audífonos.
- Comprueba los ajustes de silencio y volumen en Windows y en la aplicación.
- Comprueba si otra aplicación está usando el dispositivo de audio de forma exclusiva.
- Después de cambiar de dispositivo, espera unos instantes a que se reinicie el motor de audio.

## El audio no llega a OBS

- Estos pasos corresponden a la ruta Normal. Para Puente VST, comprueba la [ruta de la DAW](../audio/vst-bridge).
- Agrega **Captura de salida de audio**, no “Captura de entrada de audio”, a OBS.
- Selecciona el mismo dispositivo de salida en OVR-DummyHeadMic y OBS.
- Comprueba que la fuente y el mezclador de audio de OBS no estén silenciados.

## Se oyen tanto la voz sin procesar como la procesada

Silencia la entrada de micrófono habitual en OBS. Usa únicamente la Captura de salida de audio que captura la salida de OVR-DummyHeadMic para tu transmisión.

## No se puede mover la cabeza binaural

- Comprueba que SteamVR reconozca ambos controles.
- Mantén presionados X de la mano izquierda + A de la mano derecha, o ambos botones A, al mismo tiempo.
- Si la sincronización con la cámara de VRChat está activa, finalízala temporalmente para volver a la colocación manual.
- Para otro control o una asignación personalizada, comprueba los [nombres de las asignaciones en la aplicación](../operation/controllers).

## Interrupciones o ruido no deseado

- En el modo Normal, prueba **Protección contra interrupciones (búfer circular)** en Configuración del dispositivo de audio. Al cambiarla, se reinicia el motor de audio.
- Para el ruido de fondo constante, prueba la reducción de ruido. Desactívala si cambia el carácter de tu voz.
- Comprueba las conexiones de los dispositivos y si otra aplicación está usando un dispositivo de forma exclusiva.

## El puente VST no se conecta

- Inserta `VOrbit Bridge` en la DAW y vuelve a analizar los plug-ins si es necesario.
- Configura la frecuencia de muestreo de la DAW en 44.1 o 48 kHz.
- Si otra aplicación está usando el puente, finaliza primero su modo puente.
- Consulta la [guía de estados del puente VST](../audio/vst-bridge) para obtener información sobre mensajes específicos.

## No se detecta la cámara de VRChat

- Comprueba que OSC esté habilitado en el Action Menu de VRChat.
- Muestra la User Camera antes de presionar “Iniciar”.
- Si reiniciaste VRChat o esta aplicación, vuelve a presionar “Iniciar”.
- Comprueba que tu firewall o software de seguridad no esté bloqueando la comunicación local, mDNS u OSC.
- Si un mensaje indica que OSCQuery no pudo iniciarse, comprueba si hay un conflicto de puerto con otra aplicación receptora de OSC.

## La calibración no termina

- Mantén la cámara nivelada y muévela lentamente con la misma mano.
- Durante el movimiento de izquierda a derecha, mantén estables su orientación y altura y muévela en línea recta una vez en cada dirección.
- Durante la medición de la orientación, mantén fija la posición y cambia solo la orientación de la cámara.
- No uses la palanca para moverte o girar mientras sostienes la cámara.

## La posición de sincronización está desplazada

- Comprueba que la orientación selfi/hacia afuera de la cámara no haya cambiado desde la calibración.
- Calibra de nuevo después de cambiar o volver a cargar tu avatar.
- Para grabar en vertical, configura “Orientación de la cámara acústica” en “Retrato”.
- Usa Local Anchor, no World Anchor ni Pin.

Si el problema persiste, consulta [cómo informarlo](report).
