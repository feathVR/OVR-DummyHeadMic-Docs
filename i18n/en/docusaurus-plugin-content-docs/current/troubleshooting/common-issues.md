# Common issues

## No audio

- Check whether **Audio route** is Normal or VST bridge. Choose Normal if you are not using a DAW.
- Check that the input device is the microphone you are using.
- Check that the output device matches where your headphones are connected.
- Check mute and volume settings in Windows and the app.
- Check whether another app is using the audio device exclusively.
- After changing devices, wait briefly for the audio engine to restart.

## No audio reaches OBS

- These steps are for the Normal route. For VST bridge, check the [DAW route](../audio/vst-bridge).
- Add **Audio Output Capture**, not “Audio Input Capture,” to OBS.
- Select the same output device in OVR-DummyHeadMic and OBS.
- Check that the OBS source and audio mixer are not muted.

## The unprocessed and processed voices are both audible

Mute the regular microphone input in OBS. Use only the Audio Output Capture that captures OVR-DummyHeadMic's output for your stream.

## Cannot move the dummy head

- Check that SteamVR recognizes both controllers.
- Hold left-hand X + right-hand A, or both A buttons, at the same time.
- If VRChat camera sync is active, end sync temporarily to return to manual placement.
- For another controller or custom binding, check the [in-app binding names](../operation/controllers).

## Dropouts or unwanted noise

- In Normal mode, try **Dropout protection (ring buffer)** under Audio device settings. Switching it restarts the audio engine.
- For steady background noise, try noise reduction. Turn it off if it changes the character of your voice.
- Check device connections and whether another app is using a device exclusively.

## VST bridge does not connect

- Insert `VOrbit Bridge` in the DAW and rescan plug-ins if needed.
- Set the DAW sample rate to 44.1 or 48 kHz.
- If another app is using the bridge, end its bridge mode first.
- See the [VST bridge status guide](../audio/vst-bridge) for specific messages.

## VRChat camera is not detected

- Check that OSC is enabled in the VRChat Action Menu.
- Show the User Camera before pressing “Start.”
- If you restarted VRChat or this app, press “Start” again.
- Check that your firewall or security software is not blocking local communication, mDNS, or OSC.
- If a message says OSCQuery could not start, check for a port conflict with another OSC receiver app.

## Calibration does not complete

- Keep the camera level and move it slowly with the same hand.
- During left-right movement, keep its orientation and height steady and move in a straight line once in each direction.
- During orientation measurement, keep the position fixed and change only the camera's orientation.
- Do not use the stick to move or turn while holding the camera.

## Sync position is offset

- Check that the camera's selfie/outward-facing orientation has not changed since calibration.
- Calibrate again after changing or reloading your avatar.
- For portrait filming, set “Acoustic Camera Orientation” to “Portrait.”
- Use Local Anchor, not World Anchor or Pin.

If the problem remains, see [how to report it](report).
