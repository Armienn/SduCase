"use strict"
import { Component } from "../component.js"
import { html } from "../html.js"
import { StudentListEntryComponent } from "./student-list-entry.js"

const template = html`
<h1>Studerende</h1>
<table class="table table-striped table-hover">
	<thead class="thead-dark">
		<tr>
			<th id="cpr" scope="col">CPR</th>
			<th id="name" scope="col">Navn</th>
			<th id="email" scope="col">E-mail</th>
			<th id="campus" scope="col">Campus</th>
		</tr>
	</thead>
	<tbody id="student-list">
	</tbody>
</table>
`

export class StudentListComponent extends Component {
	constructor(studentService) {
		super(template)
		this.studentService = studentService
	}

	async onLoad() {
		this.students = await this.studentService.getAll()
		this.l(`cpr`).onclick = () => {
			this.students.sort((a, b) => a.cpr.localeCompare(b.cpr))
			this.onUpdate()
		}
		this.l(`name`).onclick = () => {
			this.students.sort((a, b) => a.name.localeCompare(b.name))
			this.onUpdate()
		}
		this.l(`email`).onclick = () => {
			this.students.sort((a, b) => a.email.localeCompare(b.email))
			this.onUpdate()
		}
		this.l(`campus`).onclick = () => {
			this.students.sort((a, b) => a.campus.localeCompare(b.campus))
			this.onUpdate()
		}	
		this.onUpdate()
	}

	onUpdate() {
		if (!this.students)
			return
		this.clear("student-list")
		for (const student of this.students)
			this.addChildTo("student-list", new StudentListEntryComponent(student))
	}
}
