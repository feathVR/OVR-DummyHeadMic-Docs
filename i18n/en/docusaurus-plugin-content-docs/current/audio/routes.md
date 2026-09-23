# Choose an audio route

Under **Audio device settings → Audio route**, choose **Normal** or **VST bridge**. Your choice is restored on the next launch.

| Route | Audio path | Best for |
| --- | --- | --- |
| Normal | Microphone → OVR-DummyHeadMic → Windows output device | Headphone checks and [OBS capture](obs) |
| VST bridge | DAW track → VOrbit Bridge.vst3 → OVR-DummyHeadMic → DAW | Monitoring and recording in a DAW |

Start with Normal to check the sound. In VST bridge mode, the input/output device and ring-buffer controls are hidden; configure audio devices in the DAW instead. The Normal route's OBS Audio Output Capture instructions do not directly apply to VST bridge mode.

## Settings shared by both routes

- **Reduce steady background noise**: reduces sounds such as PC fans and air conditioning. Off by default. It can change the texture of whispers or breathing and adds about 10 ms of app latency.
- **Dropout protection (ring buffer)**: try this if Normal mode drops audio. Changing it restarts the audio engine. It is hidden in VST bridge mode.

## Latency

The app's status display shows the total latency and a breakdown. The fixed parts are:

| Part | Length | When |
| --- | --- | --- |
| Spatializer | 5 ms | Always |
| Reduce steady background noise | 10 ms | When on |
| Reverb | Depends on settings | When used |

- **Normal route**: the microphone and output device add their own I/O latency on top of the parts above. It depends on the hardware, but about 20 ms in total is typical, so the overall latency is roughly 25 ms (about 35 ms with noise reduction on). Turning on **Dropout protection (ring buffer)** adds more.
- **VST bridge**: the app adds only the parts above (5 ms with noise reduction off). Audio-device I/O is set by the DAW and is not included in the app's display. The plug-in reports this latency to the DAW, so recordings and renders stay in time through the DAW's latency compensation. You only notice the delay while monitoring in real time.
