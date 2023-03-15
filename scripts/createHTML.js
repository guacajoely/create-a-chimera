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
        <article class="choices row justify-content-evenly">
            <section class="choice_head options col-sm-5 card m-2 p-2 text-bg-dark">
                <h2>Heads</h2>
                ${generateHeadList()}
            </section>
            <section class="choice_torso options col-sm-5 card m-2 p-2 text-bg-dark">
                <h2>Torsos</h2>
                ${generateTorsoList()}
            </section>
        </article>

        <article class="choices row justify-content-evenly">
            <section class="choice_leg options col-sm-5 card m-2 p-2 text-bg-dark">
                <h2>Legs</h2>
                ${generateLegList()}
            </section>
            <section class="choice_tail options col-sm-5 card m-2 p-2 text-bg-dark">
            <h2>Tails</h2>
                ${generateTailList()}
            </section>
        </article>

        <article class="choices row justify-content-evenly">
            <section class="choice_arm options col-sm-5 card m-2 p-2 text-bg-dark">
            <h2>Arms</h2>
                ${generateArmList()}
            </section>
            <section class="choice_power options col-sm-5 card m-2 p-2 text-bg-dark">
            <h2>Powers</h2>
                ${generatePowerList()}
            </section>
        </article>

        <article>
            <button id="createButton" class="btn btn-lg btn-dark">Build Chimera</button>
        </article>
        <article class="orders">
            <h1>Chimeras</h1>
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