import { getHeads, setHead } from "./dataAccess.js";
const arrayOfHeads = getHeads()

export const generateHeadList = () => {
    return `<select id="dropdown-Heads">
        <option value="0">Select a Head</option>
        ${arrayOfHeads.map(obj => {
        const price = obj.price.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
            maximumFractionDigits: 0
        })
        return `<option value="${obj.id}">${obj.name} (${price})</option>`
    }).join("")
        }
            </select>`
}


document.addEventListener("change", (event) => {
    if (event.target.id === "dropdown-Heads") {
        setHead(parseInt(event.target.value))
    }
})