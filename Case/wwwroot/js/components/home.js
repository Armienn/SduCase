"use strict"
import { Component } from "../component.js"
import { html } from "../html.js"

const template = html`
<h1>SDU</h1>
Velkommen til SDU's nye, imponerende hjemmeside.
`

export class HomeComponent extends Component {
	constructor() {
		super(template)
	}
}
