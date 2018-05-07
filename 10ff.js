// ==UserScript==
// @name 10FastFingers current WPM
// @namespace Violentmonkey Scripts
// @include *10fastfingers.com*
// @grant none
// @run-at document-end
// ==/UserScript==

let sidebar = document.getElementById('sidebar-md-lg')

let wpmNode = document.createElement('div')
wpmNode.classList.add('list-group')
let inner = document.createElement('div')
inner.classList.add('list-group-item')
let textBindTitle = textBind = document.createTextNode('WPM:')
textBind = document.createTextNode(0)

inner.appendChild(textBindTitle)
inner.appendChild(textBind)
wpmNode.appendChild(inner)
sidebar.prepend(wpmNode)

let inputField = document.getElementById('inputfield')
inputField.addEventListener('keyup', ()=>{
	let keystrokes = Math.round(error_keystrokes/5)
	let scale = ((get_current_time()-start_time)/1000)/60
	let currentWpm = Math.floor(keystrokes/scale*1.05)
	if (end_time == 0)
		 textBind.data = currentWpm
})
