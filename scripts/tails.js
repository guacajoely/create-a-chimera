import { getTails, setTail } from "./dataAccess.js";
const arrayOfTails = getTails()

export const generateTailList = () => {
    return `<select id="dropdown-Tails">
        <option value="0">Select a Tail</option>
        ${arrayOfTails.map(obj => {
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
    if (event.target.id === "dropdown-Tails") {
        setTail(parseInt(event.target.value))
    }
})