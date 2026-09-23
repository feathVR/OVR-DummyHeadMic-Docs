# Report an unresolved issue

If [common issues](common-issues) do not help, ask in the [Discord community](https://discord.gg/5r9Ub76fnz). This is the same Discord community as VOrbit ASMR. Report guide typos or broken links in [this guide's GitHub Issues](https://github.com/feathVR/OVR-DummyHeadMic-Docs/issues).

Include what you can:

- App edition and version
- Windows version, HMD, and controller type
- Audio route (Normal or VST bridge); for Normal, the input and output devices
- Whether VRChat camera sync is in use, the Anchor type, and the displayed status
- Steps to reproduce, expected result, and actual result
- A screenshot with personal information hidden, if useful

If support asks for a log, check Unity's `Player.log`. On a typical Windows installation it is at `%USERPROFILE%\AppData\LocalLow\feath\OVR-DummyHeadMic\Player.log`. It may contain device names or other local environment details, so review it before attaching it to a public Issue.

The same folder also contains `support-info.txt`, which the app writes automatically. It summarizes the app version, audio route, selected input and output devices, sample rates, and the status of VST bridge and VRChat sync on one page, so including it helps narrow down the cause quickly. The file is only created on your PC and is never sent automatically. It contains device and DAW names, so review it before sharing.
