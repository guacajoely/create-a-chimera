import { getLegs, setLeg } from "./dataAccess.js";
const arrayOfLegs = getLegs()

export const generateLegList = () => {
    return `<select id="dropdown-Legs" class='form-select align-self-center' style='width:12rem'>
        <option value="0">Select a Leg</option>
        ${arrayOfLegs.map(obj => {
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
    if (event.target.id === "dropdown-Legs") {
        setLeg(parseInt(event.target.value))
    }
})