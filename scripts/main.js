import { createHTML } from "./createHTML.js"

const mainContainer = document.querySelector("main")

const renderAllHTML = () => {
    mainContainer.innerHTML = createHTML()
}

renderAllHTML()

document.addEventListener("stateChanged", event => {
    console.log("State of data has changed. Regenerating HTML...")
    renderAllHTML()
})