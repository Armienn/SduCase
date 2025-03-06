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
	constructor(studentService) {
		super(template)
		this.studentService = studentService
	}

	async onLoad(path){
		const id = +path.split("/").pop()
		this.student = await this.studentService.get(id)
		this.onUpdate()
	}

	onUpdate() {
		if(!this.student)
			return
		this.l(`cpr`).textContent	= this.student.cpr
		this.l(`name`).textContent = this.student.name
		this.l(`email`).textContent = this.student.email
	}
}
