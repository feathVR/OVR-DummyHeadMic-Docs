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

The latency display shows a breakdown. In VST bridge mode, the displayed app latency excludes DAW and audio-device I/O latency.
