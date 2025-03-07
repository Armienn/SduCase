"use strict"
import { Component } from "../component.js"
import { html } from "../html.js"

const template = html`
<td id="cpr"></td>
<td id="name"></td>
<td id="email"></td>
`

export class StudentListEntryComponent extends Component {
	constructor(student) {
		super(template, "tr")
		this.student = student
	}

	onUpdate() {
		if (!this.student)
			return
		this.l(`cpr`).textContent = this.student.cpr
		this.l(`name`).textContent = this.student.name
		this.l(`email`).textContent = this.student.email
	}
}
