/* Chataigne Module for d&b audiotechnik/Gareth Owen EnSnap software OSC control v1.1.2 (c) Mathieu Delquignies, 03/2023
===============================================================================

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:
1. Redistributions of source code must retain the above copyright notice,
this list of conditions and the following disclaimer.
2. Redistributions in binary form must reproduce the above copyright notice,
this list of conditions and the following disclaimer in the documentation
and/or other materials provided with the distribution.
3. The name of the author may not be used to endorse or promote products
derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED "AS IS" AND ANY
EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY DIRECT, INDIRECT,
INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE
OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF
ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
===============================================================================
*/

/**
 * This function is called automatically by Chataigne when you add the module in your Noisette.
 */
function init() 
{
	local.scripts.setCollapsed(true);
	local.templates.setCollapsed(true);
}

/**
 * Enables or disables OSC cue firing controls.
 * * @param {boolean} state
 */
function OSCCueControl(state)
{
	local.send("/ensnap/enables/OscCueControl", state);
}

/**
 * Re-enables both OSC and MTC cue firing controls if they have been previously disabled.
 */
function enableAllCue()
{
	local.send("/ensnap/enables/AllCueControl");
}

/**
 * Set EnSpace reverb predelay factor
 * @param {string} name 
 */
function goCue(name)
{
	local.send("/ensnap/cue/"+name+"/go");
}
