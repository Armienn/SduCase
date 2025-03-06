"use strict"

export class Component {
	constructor(template) {
		this.rootId = Math.random().toString(36).substring(6)
		this.template = template.replace(/id="([^"]+)"/g, `id="$1-${this.rootId}"`)
		this.element = document.createElement("div")
		this.element.innerHTML = this.template
		this.children = {}
		setTimeout(() => this.update(), 0);
	}

	/** Gets an element within this component by id */
	l(id){ // l for eLement; I'm allowing myself to use a single-letter name since it'll be a very common operation
		return document.getElementById(id + "-" + this.rootId)
	}

	/** Adds a component as the (only) child of the element with the given id*/
	addChildTo(id, childComponent) {
		const fullId = id + "-" + rootId
		const containerElement = document.getElementById(fullId)
		if (!containerElement)
			return console.error(`Element with id ${fullId} not found`)
		if (this.children[fullId])
			this.children[fullId].destroy?.()
		this.children[fullId] = childComponent
		containerElement.innerHTML = ""
		containerElement.appendChild(childComponent.element)
	}

	update(){
		this.onUpdate?.()
		for(const child of Object.values(this.children))
			child.update?.()
	}

	destroy() {
		this.onDestroy?.()
		for (const child of Object.values(this.children))
			child.destroy?.()
	}
}
