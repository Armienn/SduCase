"use strict"

export class StudentService {
	getAll() {
		return fetch("/api/student/getall")
			.then(response => response.json())
	}

	get(id) {
		return fetch(`/api/student/get/${id}`)
			.then(response => response.json())
	}

	create(student) {
		return fetch(`/api/student/add`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(student)
		})
			.then(response => response.json())
	}

	update(student) {
		return fetch(`/api/student/update`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(student)
		})
			.then(response => response.json())
	}

	delete(id) {
		return fetch(`/api/student/delete/${id}`, {
			method: "DELETE"
		})
	}
}