import { getPowers, setPower } from "./dataAccess.js";
const arrayOfPowers = getPowers()

export const generatePowerList = () => {
    return `<select id="dropdown-Powers">
        <option value="0">Select a Power</option>
        ${arrayOfPowers.map(obj => {

            return `<option value="${obj.id}">${obj.name}</option>`
            }).join("")
        }
            </select>`
}


document.addEventListener("change", (event) => {
    if (event.target.id === "dropdown-Powers") {
        setPower(parseInt(event.target.value))
    }
})