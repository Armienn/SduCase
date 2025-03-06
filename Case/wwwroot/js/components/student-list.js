"use strict"
import { Component } from "../component.js"
import { html } from "../html.js"
import { StudentListEntryComponent } from "./student-list-entry.js"

const template = html`
<h1>Studerende</h1>
<ul id="student-list">
	<li><a href="/student/1">Student 1</a></li>
</ul>
`

export class StudentListComponent extends Component {
	constructor(studentService) {
		super(template)
		this.studentService = studentService
	}

	async onLoad() {
		this.students = await this.studentService.getAll()
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
