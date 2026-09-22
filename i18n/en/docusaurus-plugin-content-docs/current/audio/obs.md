# Capture audio in OBS

1. Open the scene you want to use in OBS.
2. Select “+” under Sources and add an **Audio Output Capture** source.
3. Select the output device configured in OVR-DummyHeadMic.
4. Speak into the microphone and confirm that the OBS audio meter moves.
5. Mute the regular microphone input in OBS.

:::danger Avoid capturing the unprocessed voice twice
If both the processed OVR-DummyHeadMic audio and the OBS microphone input are enabled, the unprocessed voice and spatial audio will both be streamed. As a rule, mute the regular microphone input in OBS.
:::

## If game audio or notification sounds are also captured

Audio Output Capture captures all sound sent to the selected device. If you do not want to include sounds from other apps, use a dedicated virtual audio device.
