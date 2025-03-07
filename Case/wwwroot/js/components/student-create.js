"use strict"
import { Component } from "../component.js"
import { html } from "../html.js"

const template = html`
<div class="row mb-3">
	<label class="col-sm-2 col-form-label opacity-75">CPR</label>
	<div class="col-sm-10">
		<input id="cpr" />
	</div>
</div>
<div class="row mb-3">
	<label class="col-sm-2 col-form-label opacity-75">Navn</label>
	<div class="col-sm-10">
		<input id="name" />
	</div>
</div>
<div class="row mb-3">
	<label class="col-sm-2 col-form-label opacity-75">E-mail</label>
	<div class="col-sm-10">
		<input id="email" />
	</div>
</div>
<div class="row mb-3">
	<label class="col-sm-2 col-form-label opacity-75">Campus</label>
	<div class="col-sm-10">
		<select id="campus">
			<option></option>
			<option>Odense</option>
			<option>Esbjerg</option>
			<option>Sønderborg</option>
			<option>Kolding</option>
			<option>Vejle</option>
		</select>
	</div>
</div>

<div class="row mb-3">
	<label class="col-sm-2 col-form-label opacity-75">Nyt fag</label>
	<div class="col-sm-10">
		<input id="new-course" />
		<input id="new-grade" />
		<button id="new-course-button">Tilføj</button>
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

<button id="save-button">Gem</button>
`

export class StudentCreateComponent extends Component {
	constructor(studentService) {
		super(template)
		this.studentService = studentService
		this.student = {
			cpr: "",
			name: "",
			email: "",
			campus: "",
			courses: [],
		}
	}

	onLoad() {
		this.l("cpr").onchange = x => this.student.cpr = x.target.value
		this.l("name").onchange = x => this.student.name = x.target.value
		this.l("email").onchange = x => this.student.email = x.target.value
		this.l("campus").onchange = x => this.student.campus = x.target.value
		this.l("new-course").onchange = x => this.newCourse = x.target.value
		this.l("new-grade").onchange = x => this.newGrade = x.target.value
		this.l("new-course-button").onclick = this.addCourse
		this.l("save-button").onclick = this.saveStudent
	}

	onUpdate() {
		if (!this.student)
			return
		this.l("course-list").innerHTML = this.student.courses.map(this.courseEntry).join("")
	}

	courseEntry = (course) => {
		return `<tr><td>${course.title}</td><td>${course.grade}</td></tr>`
	}

	addCourse = () => {
		this.student.courses.push({
			title: this.newCourse,
			grade: this.newGrade
		})
		this.newCourse = ""
		this.newGrade = ""
		this.l("new-course").value = ""
		this.l("new-grade").value = ""
		this.update()
	}

	saveStudent = async () => {
		const newStudent = await this.studentService.create(this.student)
		window.navigation.navigate("/student/" + newStudent.id)
	}
}
