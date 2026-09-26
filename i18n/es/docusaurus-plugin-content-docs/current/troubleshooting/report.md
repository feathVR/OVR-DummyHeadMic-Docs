# Informar un problema sin resolver

Si [problemas comunes](common-issues) no te ayuda, pregunta en la [comunidad de Discord](https://discord.gg/MJmu7Shger). Es la misma comunidad de Discord que VOrbit ASMR. Informa los errores tipográficos o enlaces rotos de la guía en los [Issues de GitHub de esta guía](https://github.com/feathVR/OVR-DummyHeadMic-Docs/issues).

Incluye lo que puedas:

- Edición y versión de la aplicación
- Versión de Windows, HMD y tipo de control
- Ruta de audio (Normal o Puente VST); para Normal, los dispositivos de entrada y salida
- Si se está usando la sincronización con la cámara de VRChat, el tipo de Anchor y el estado mostrado
- Pasos para reproducir el problema, resultado esperado y resultado real
- Una captura de pantalla con la información personal oculta, si resulta útil

Si el equipo de soporte solicita un registro, consulta `Player.log` de Unity. En una instalación habitual de Windows se encuentra en `%USERPROFILE%\AppData\LocalLow\feath\OVR-DummyHeadMic\Player.log`. Puede contener nombres de dispositivos u otros detalles del entorno local, así que revísalo antes de adjuntarlo a un Issue público.

La misma carpeta también contiene `support-info.txt`, que la aplicación genera automáticamente. Resume en una sola página la versión de la aplicación, la ruta de audio, los dispositivos de entrada y salida seleccionados, las frecuencias de muestreo y el estado del puente VST y de la sincronización con VRChat, por lo que incluirlo ayuda a identificar rápidamente la causa. El archivo solo se crea en tu PC y nunca se envía automáticamente. Contiene nombres de dispositivos y de la DAW, así que revísalo antes de compartirlo.
