"use strict"
import { Component } from "../component.js"
import { html } from "../html.js"

const template = html`
<td id="cpr"></td>
<td id="name"></td>
<td id="email"></td>
<td id="campus"></td>
`

export class StudentListEntryComponent extends Component {
	constructor(student) {
		super(template, "tr")
		this.student = student
		this.element.role = "button"
	}

	onLoad(){
		console.log("creating list entry")
	}

	onUpdate() {
		if (!this.student)
			return
		this.l("cpr").textContent = this.student.cpr
		this.l("name").textContent = this.student.name
		this.l("email").textContent = this.student.email
		this.l("campus").textContent = this.student.campus
		if(!this.element.onclick)
			this.element.onclick = () => window.navigation.navigate("/student/" + this.student.id)
	}
}
