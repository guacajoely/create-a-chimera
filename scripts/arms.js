import { getArms, setArm } from "./dataAccess.js";
const arrayOfArms = getArms()

export const generateArmList = () => {
    return `<select id="dropdown-Arms">
        <option value="0">Select a Arm</option>
        ${arrayOfArms.map(obj => {
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
    if (event.target.id === "dropdown-Arms") {
        setArm(parseInt(event.target.value))
    }
})