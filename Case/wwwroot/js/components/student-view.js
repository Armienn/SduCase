"use strict"
import { Component } from "../component.js"
import { html } from "../html.js"

const template = html`
<label>CPR</label>
<div id="cpr"></div>
<label>Navn</label>
<div id="name"></div>
<label>E-mail</label>
<div id="email"></div>
`

export class StudentViewComponent extends Component {
	constructor() {
		super(template)
	}

	onUpdate() {
		this.l(`cpr`).textContent	= "123456-7890"
		this.l(`name`).textContent = "Jens Jensen"
		this.l(`email`).textContent = "aerg@WE"
	}
}
