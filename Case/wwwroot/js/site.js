"use strict"
import { HomeComponent } from "./components/home.js"
import { RootComponent } from "./components/root.js"
import { StudentCreateComponent } from "./components/student-create.js"
import { StudentListComponent } from "./components/student-list.js"
import { StudentViewComponent } from "./components/student-view.js"
import { StudentService } from "./services/student-service.js"

const rootComponent = new RootComponent()
document.body.appendChild(rootComponent.element)

setTimeout(() => getPage(window.location.pathname), 0)

window.navigation.addEventListener("navigate", (event) => {
	if (event.navigationType === "reload")
		return

	const url = new URL(event.destination.url)
	// TODO: don't intercept outbound navigation
	if (url.pathname.startsWith("/api/"))
		return
	event.intercept({
		handler() {
			getPage(url.pathname)
		},
	})
})

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

function loadPageContent(component, path) {
	rootComponent.clear("page-content")
	rootComponent.addChildTo("page-content", component)
	setTimeout(() => component.onLoad?.(path), 0)
}
