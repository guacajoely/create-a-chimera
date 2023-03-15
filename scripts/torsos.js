import { getTorsos, setTorso } from "./dataAccess.js";
const arrayOfTorsos = getTorsos()

export const generateTorsoList = () => {
    return `<select id="dropdown-Torsos" class='form-select align-self-center' style='width:12rem'>
        <option value="0">Select a Torso</option>
        ${arrayOfTorsos.map(obj => {
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
    if (event.target.id === "dropdown-Torsos") {
        setTorso(parseInt(event.target.value))
    }
})