import { generateOrdersList } from "./orders.js"
import { addCustomOrder } from "./dataAccess.js"
import { generateHeadList } from "./heads.js"
import { generateTorsoList } from "./torsos.js"
import { generateLegList } from "./legs.js"
import { generateTailList } from "./tails.js"
import { generateArmList } from "./arms.js"
import { generatePowerList } from "./powers.js"

export const createHTML = () => {
    return `
        <h1>Create a Chimera</h1>
        <article class="choices">
            <section class="choice_head options">
                <h2>Heads</h2>
                ${generateHeadList()}
            </section>
            <section class="choice_torso options">
                <h2>Torsos</h2>
                ${generateTorsoList()}
            </section>
            <section class="choice_leg options">
                <h2>Legs</h2>
                ${generateLegList()}
            </section>
            <section class="choice_tail options">
            <h2>Tails</h2>
                ${generateTailList()}
            </section>
            <section class="choice_arm options">
            <h2>Arms</h2>
                ${generateArmList()}
            </section>
            <section class="choice_power options">
            <h2>Powers</h2>
                ${generatePowerList()}
            </section>
            
        </article>
        <article>
            <button id="createButton">Place Order</button>
        </article>
        <article class="orders">
            <h2>Chimeras</h2>
            ${generateOrdersList()}
        </article>
    `
}


document.addEventListener("click", (clickEvent) => {
    const itemClicked = clickEvent.target
    if (itemClicked.id === "createButton") {
        addCustomOrder()
    }
})