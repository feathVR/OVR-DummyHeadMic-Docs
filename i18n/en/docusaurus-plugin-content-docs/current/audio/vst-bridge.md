# Use the VST bridge with a DAW

The VST bridge sends audio from a DAW through `VOrbit Bridge.vst3` to this app and returns the processed audio to the DAW. If you do not use a DAW, choose the [Normal route](routes).

## First-time setup

1. In this app's **Audio device settings**, click **Open VST bridge folder**.
2. Copy the entire `VOrbit Bridge.vst3` folder to a VST3 scan directory. The per-user location is `%LOCALAPPDATA%\Programs\Common\VST3`; the all-users location is `%COMMONPROGRAMFILES%\VST3`. Use your DAW's configured scan location if different.
3. Rescan plug-ins in the DAW and insert **VOrbit Bridge** on the audio track you want to process.
4. Set the DAW sample rate to **44.1 kHz or 48 kHz**.
5. Switch this app's **Audio route** to **VST bridge**. Confirm the status says **Spatializing** and audio reaches the DAW.

:::note
The plug-in is named “VOrbit Bridge” because that is the bundled plug-in's name. You do not need to rename it for OVR-DummyHeadMic.
:::

## Status and controls

| Status | Meaning and next step |
| --- | --- |
| Waiting for VOrbit Bridge in a DAW | Insert the plug-in in a DAW and start audio processing. If it was already connected, try **Reconnect VST bridge**. |
| Spatializing | Connected. Check the DAW's routing and track levels. |
| Unsupported sample rate: bypass | Change the DAW sample rate to 44.1 or 48 kHz. |
| Offline render: bypass | Spatial processing is bypassed during offline rendering. Check with real-time playback. |
| Another app is using the VST bridge | End bridge mode in VOrbit ASMR or another app using the same bridge, then reconnect. |

**Disconnect VST bridge** releases the current DAW connection, leaving the plug-in in bypass. **Reconnect VST bridge** retries a waiting connection.

After updating the app, copy the newly bundled plug-in into the DAW scan directory again and rescan it in the DAW.

## When you do not need to reconnect

- **Switching routes**: switching between Normal and VST bridge keeps the DAW connection. While Normal is selected, the plug-in in the DAW passes audio through; switching back to VST bridge resumes spatialization.
- **Starting the app**: when the app starts (or when you first choose VST bridge after starting it), it automatically asks a waiting plug-in in the DAW to reconnect.

After you press **Disconnect VST bridge**, the connection does not come back on its own. Press **Reconnect VST bridge** to connect again.

For the latency the app adds and the DAW's latency compensation, see [Latency](routes#latency).
