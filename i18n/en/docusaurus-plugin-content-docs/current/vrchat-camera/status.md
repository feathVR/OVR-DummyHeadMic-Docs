# Understand camera-sync status

Follow the on-screen and in-VR prompts during calibration. These are the main states:

| Display | Meaning and action |
| --- | --- |
| Open the camera in VRChat | Show the User Camera and check that OSC is enabled in VRChat. |
| MOVE | The app detects movement. Do not grab the camera; stop moving or turning. |
| WAIT | Let the pose settle without input. |
| READY | You can grab the camera and continue the [calibration steps](calibration). |
| Follow the dot left and right | Keep camera height and orientation steady; move slowly in a straight line. |
| Green circle | Hold the camera still at the center with the same hand until confirmation completes. |
| Following | Camera following is active. |
| Paused: out of range | Return within about 2.5 m of your avatar to resume. |
| Paused: move the camera once | Move the camera slightly so VRChat sends a fresh pose. |
| Position lost: restarting calibration | Follow the calibration prompts again from the beginning. |

If MOVE or WAIT remains for a long time, check that you are not moving or turning with the stick while holding the camera. For an OSCQuery fallback-port message, see [common issues](../troubleshooting/common-issues).
