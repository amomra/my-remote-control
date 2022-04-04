# My remote control

Application to control Youtube and compatible players in a web browser using a mobile device. It provides a PWA (Progressive Web Application) that can be installed in a mobile device to access the service running on the target machine.

This application works by sending keyboard key events to the target machine based on which service was called. For example, if the user call the "play" service the application will send an key pressing event of the play media key. Some services will only work if the player is focused.