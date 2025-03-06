"use strict"
import { Component } from "../component.js"
import { html } from "../html.js"

const template = html`
Ja hej
`

export class HomeComponent extends Component {
	constructor() {
		super(template)
	}
}
