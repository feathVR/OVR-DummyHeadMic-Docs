# Usar el puente VST con una DAW

El puente VST envía audio desde una DAW a través de `VOrbit Bridge.vst3` hacia esta aplicación y devuelve el audio procesado a la DAW. Si no usas una DAW, elige la [ruta Normal](routes).

## Configuración inicial

1. En **Configuración del dispositivo de audio** de esta aplicación, haz clic en **Abrir carpeta del puente VST**.
2. Copia toda la carpeta `VOrbit Bridge.vst3` en un directorio de análisis de VST3. La ubicación por usuario es `%LOCALAPPDATA%\Programs\Common\VST3`; la ubicación para todos los usuarios es `%COMMONPROGRAMFILES%\VST3`. Si la ubicación de análisis configurada en tu DAW es distinta, úsala.
3. Vuelve a analizar los plug-ins en la DAW e inserta **VOrbit Bridge** en la pista de audio que quieras procesar. Si lo insertas en una pista de micrófono, habilita el monitoreo de entrada en la DAW.
4. Configura la frecuencia de muestreo de la DAW en **44.1 kHz o 48 kHz**.
5. Cambia la **Ruta de audio** de esta aplicación a **Puente VST**. Confirma que el estado indique **Espacializando** y que el audio llegue a la DAW.

:::note
El plug-in se llama “VOrbit Bridge” porque ese es el nombre del plug-in incluido. No necesitas cambiarle el nombre para OVR-DummyHeadMic.
:::

## Estado y controles

| Estado | Significado y siguiente paso |
| --- | --- |
| Esperando VOrbit Bridge en una DAW | Inserta el plug-in en una DAW e inicia el procesamiento de audio. Si ya estaba conectado, prueba **Reconectar el puente VST**. |
| Espacializando | Está conectado. Comprueba el enrutamiento y los niveles de pista de la DAW. |
| Frecuencia de muestreo no compatible: omisión | Cambia la frecuencia de muestreo de la DAW a 44.1 o 48 kHz. |
| Renderización sin conexión: omisión | El procesamiento espacial se omite durante la renderización sin conexión. Compruébalo con reproducción en tiempo real. |
| Otra aplicación está usando el puente VST | Finaliza el modo puente en VOrbit ASMR o en otra aplicación que use el mismo puente y vuelve a conectarlo. |

**Desconectar el puente VST** libera la conexión actual con la DAW y deja el plug-in en omisión. **Reconectar el puente VST** vuelve a intentar una conexión en espera.

Después de actualizar la aplicación, copia nuevamente el plug-in recién incluido en el directorio de análisis de la DAW y vuelve a analizarlo en la DAW.

## Transmitir a OBS

Con el puente VST, el audio espacializado regresa a la DAW. Para transmitirlo, **configura una ruta separada que lleve el audio procesado de la DAW a OBS**; por ejemplo, envía la salida de la DAW a un dispositivo de audio virtual y captúrala con **Captura de salida de audio** de OBS. Elige el método adecuado para tu configuración.

Escucharlo en tus audífonos no confirma que llegue a OBS. Comprueba el medidor de audio de OBS y haz una grabación de prueba corta. Silencia la entrada de micrófono habitual en OBS para que tu voz sin procesar no se capture dos veces.

## Cuándo no necesitas volver a conectarlo

- **Cambiar de ruta**: cambiar entre Normal y Puente VST mantiene la conexión con la DAW. Mientras Normal esté seleccionado, el plug-in de la DAW deja pasar el audio; volver a Puente VST reanuda la espacialización.
- **Iniciar la aplicación**: cuando se inicia la aplicación (o cuando eliges Puente VST por primera vez después de iniciarla), esta solicita automáticamente la reconexión a un plug-in en espera en la DAW.

Después de presionar **Desconectar el puente VST**, la conexión no se restablece por sí sola. Presiona **Reconectar el puente VST** para volver a conectarlo.

Para obtener información sobre la latencia que agrega la aplicación y la compensación de latencia de la DAW, consulta [Latencia](routes#latency).
