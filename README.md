# dbaudio-EnSnap-Chataigne-Module
Chataigne module to control d&amp;b audiotechnik/Gareth Owen En-Snap software with OSC protocol.  

To learn more about Chataigne, please visit : http://benjamin.kuperberg.fr/chataigne/

And Ben's Youtube channel where you can find tutorials : https://youtu.be/RSBU9MwJNLY

About En-Snap software : https://www.dbaudio.com/global/en/about-db/press/newsroom/db-audiotechnik-partners-with-gareth-owen-sound-to-advance-soundscape/

To learn more about d&amp;b audiotechnik Soundscape, please visit : https://www.dbsoundscape.com/  

For global support on how to use Chataigne and its modules, please visit the forum : 
http://benjamin.kuperberg.fr/chataigne/forum 
or join us on Discord : 
https://discord.com/invite/ngnJ5z my contact there is also "madees".

## Installation
To install the Custom Module, unzip the folder to your Documents/Chataigne/Modules folder.

## Principle of use
Use Module Commands to control En-Snap software.
This module is OSC output only.

Example of application : fire cues from a MIDI Module control change value or Powerpoint Module slide number...

## En-Snap OSC implementation v1.01

### OSC Cue Control Enable state
Enables or disables OSC cue firing controls.

### Enable ALL Cue Control
Re-enables both OSC and MTC cue firing controls if they have been previously disabled.

### OSC Cue GOs
Fires a cue by name.
