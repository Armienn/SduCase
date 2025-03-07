"use strict"
import { Component } from "../component.js"
import { html } from "../html.js"

const template = html`
<div class="row mb-3">
	<label class="col-sm-2 col-form-label opacity-75">CPR</label>
	<div class="col-sm-10">
		<div id="cpr" class="form-control-plaintext"></div>
	</div>
</div>
<div class="row mb-3">
	<label class="col-sm-2 col-form-label opacity-75">Navn</label>
	<div class="col-sm-10">
		<div id="name" class="form-control-plaintext"></div>
	</div>
</div>
<div class="row mb-3">
	<label class="col-sm-2 col-form-label opacity-75">E-mail</label>
	<div class="col-sm-10">
		<div id="email" class="form-control-plaintext"></div>
	</div>
</div>
<div class="row mb-3">
	<label class="col-sm-2 col-form-label opacity-75">Campus</label>
	<div class="col-sm-10">
		<div id="campus" class="form-control-plaintext"></div>
	</div>
</div>


<table class="table table-striped table-hover">
	<thead class="thead-dark">
		<tr>
			<th scope="col">Fag</th>
			<th scope="col">Karakter</th>
		</tr>
	</thead>
	<tbody id="course-list">
	</tbody>
</table>
`

export class StudentViewComponent extends Component {
	constructor(studentService) {
		super(template)
		this.studentService = studentService
	}

	async onLoad(path) {
		const id = path.split("/").pop()
		this.student = await this.studentService.get(id)
		this.onUpdate()
	}

	onUpdate() {
		if (!this.student)
			return
		this.l("cpr").textContent = this.student.cpr
		this.l("name").textContent = this.student.name
		this.l("email").textContent = this.student.email
		this.l("campus").textContent = this.student.campus
		this.l("course-list").innerHTML = this.student.courses.map(this.courseEntry).join("")
	}

	courseEntry = (course) => {
		return `<tr><td>${course.title}</td><td>${course.grade}</td></tr>`
	}
}
