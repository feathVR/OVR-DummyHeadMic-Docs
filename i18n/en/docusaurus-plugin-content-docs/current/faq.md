---
sidebar_position: 99
---

# Frequently asked questions

## Can I use it outside VRChat?

Basic manual placement and spatial audio processing are not specific to VRChat. You can use them for stream and recording audio processing in any VR environment supported by SteamVR and its controllers. Camera sync is specific to VRChat.

## Are headphones required?

Headphones or earphones are strongly recommended to check positioning accurately and prevent microphone feedback.

## Should I add a microphone input or audio output in OBS?

Capture the output configured in OVR-DummyHeadMic using OBS **Audio Output Capture**. Mute the regular microphone input to avoid capturing the unprocessed voice twice.

## Do I need to calibrate VRChat camera sync every time?

The app reconnects automatically after changing worlds. Calibrate again after changing or reloading your avatar, or after changing the camera's front/rear orientation.

## Can I use multiple OSC apps at the same time?

Normally, the app uses OSCQuery for automatic detection, so you can use other apps at the same time. If OSCQuery fails to start and the app switches to a fallback port, it may conflict with an app using the same receive port.

## Are settings saved when I exit?

Major settings are saved in the app and restored on the next launch. To account for force quits or exits initiated by SteamVR, wait briefly after changing important settings before closing the app.
