# Elegir una ruta de audio

En **Configuración del dispositivo de audio → Ruta de audio**, elige **Normal** o **Puente VST**. Tu elección se restaurará la próxima vez que inicies la aplicación.

| Ruta | Trayecto del audio | Ideal para |
| --- | --- | --- |
| Normal | Micrófono → OVR-DummyHeadMic → Dispositivo de salida de Windows | Comprobaciones con audífonos y [captura en OBS](obs) |
| Puente VST | Pista de DAW → VOrbit Bridge.vst3 → OVR-DummyHeadMic → DAW | Monitoreo y grabación en una DAW |

Comienza con Normal para comprobar el sonido. En el modo Puente VST se ocultan los controles del dispositivo de entrada/salida y del búfer circular; configura los dispositivos de audio en la DAW. Las instrucciones de Captura de salida de audio de OBS para la ruta Normal no se aplican directamente al modo Puente VST.

## Ajustes compartidos por ambas rutas

- **Reducir el ruido de fondo constante**: reduce sonidos como ventiladores de PC y aire acondicionado. Está desactivado de forma predeterminada. Puede cambiar la textura de los susurros o la respiración y agrega unos 10 ms de latencia de la aplicación.
- **Protección contra interrupciones (búfer circular)**: pruébala si el audio se interrumpe en el modo Normal. Al cambiarla, se reinicia el motor de audio. Está oculta en el modo Puente VST.

## Latencia {#latency}

La pantalla de estado de la aplicación muestra la latencia total y su desglose. Las partes fijas son:

| Parte | Duración | Cuándo |
| --- | --- | --- |
| Espacializador | 5 ms | Siempre |
| Reducir el ruido de fondo constante | 10 ms | Cuando está activado |
| Reverberación | Depende de los ajustes | Cuando se usa |

- **Ruta Normal**: el micrófono y el dispositivo de salida agregan su propia latencia de E/S a las partes anteriores. Depende del hardware, pero lo habitual es unos 20 ms en total, por lo que la latencia general es de aproximadamente 25 ms (unos 35 ms con la reducción de ruido activada). Activar **Protección contra interrupciones (búfer circular)** agrega más.
- **Puente VST**: la aplicación solo agrega las partes anteriores (5 ms con la reducción de ruido desactivada). La E/S del dispositivo de audio se configura en la DAW y no se incluye en la pantalla de la aplicación. El plug-in informa esta latencia a la DAW, por lo que las grabaciones y renderizaciones se mantienen sincronizadas mediante la compensación de latencia de la DAW. Solo notarás el retraso al monitorear en tiempo real.
