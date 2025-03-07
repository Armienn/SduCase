"use strict"
import { HomeComponent } from "./components/home.js"
import { StudentCreateComponent } from "./components/student-create.js"
import { StudentListComponent } from "./components/student-list.js"
import { StudentViewComponent } from "./components/student-view.js"
import { html } from "./html.js"
import { StudentService } from "./services/student-service.js"

const template = html`
<header>
	<nav class="navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-white border-bottom box-shadow mb-3">
		<div class="container-fluid">
			<a class="navbar-brand" href="/">Case</a>
			<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target=".navbar-collapse"
				aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="navbar-collapse collapse d-sm-inline-flex justify-content-between">
				<ul class="navbar-nav flex-grow-1">
					<li class="nav-item">
						<a class="nav-link text-dark" href="/">Home</a>
					</li>
					<li class="nav-item">
						<a class="nav-link text-dark" href="/Students">Students</a>
					</li>
				</ul>
			</div>
		</div>
	</nav>
</header>
<div class="container">
	<main id="page-content" class="pb-3">
		No page loaded
	</main>
</div>
`

document.body.innerHTML = template

const root = document.getElementById("page-content")
root.innerHTML = ""
setTimeout(() => getPage(window.location.pathname), 0)

window.navigation.addEventListener("navigate", (event) => {
	if (event.navigationType === "reload")
		return

	const url = new URL(event.destination.url)
	// TODO: don't intercept outbound navigation
	event.intercept({
		handler() {
			getPage(url.pathname)
		},
	})
})

function loadPageContent(component, path) {
	root.innerHTML = ""
	root.appendChild(component.element)
	setTimeout(() => component.onLoad?.(path), 0)
}

function getPage(path) {
	path = path.toLowerCase()
	if (path == "/")
		loadPageContent(new HomeComponent(), path)
	else if (path == "/home")
		loadPageContent(new HomeComponent(), path)
	else if (path.startsWith("/students"))
		loadPageContent(new StudentListComponent(new StudentService()), path)
	else if (path.startsWith("/student/create"))
		loadPageContent(new StudentCreateComponent(new StudentService()), path)
	else if (path.startsWith("/student/"))
		loadPageContent(new StudentViewComponent(new StudentService()), path)
	else
		loadPageContent(new HomeComponent(), path)
}
