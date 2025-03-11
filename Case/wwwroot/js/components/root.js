"use strict"
import { Component } from "../component.js"
import { html } from "../html.js"

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

export class RootComponent extends Component {
	constructor() {
		super(template)
	}
}
