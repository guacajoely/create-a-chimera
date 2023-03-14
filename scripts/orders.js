import { getArms, getHeads, getLegs, getPowers, getTails, getTorsos, getOrders } from "./dataAccess.js";
const arrayOfHeads = getHeads()
const arrayOfTorsos = getTorsos()
const arrayOfLegs = getLegs()
const arrayOfTails = getTails()
const arrayOfArms = getArms()
const arrayOfPowers = getPowers()


const buildOrderListItem = (order) => {

    // The function passed to find() needs to return true/false
    const matchedHead = arrayOfHeads.find((obj) => {
        return obj.id === order.headID
    })

    const matchedTorso = arrayOfTorsos.find((obj) => {
        return obj.id === order.torsoID
    })

    const matchedLeg = arrayOfLegs.find((obj) => {
        return obj.id === order.legID
    })

    const matchedTail = arrayOfTails.find((obj) => {
        return obj.id === order.legID
    })

    const matchedArm = arrayOfArms.find((obj) => {
        return obj.id === order.armID
    })

    const matchedPower = arrayOfPowers.find((obj) => {
        return obj.id === order.powerID
    })

    let totalCost = 0
    if (matchedHead) { totalCost += matchedHead.price }
    if (matchedTorso) { totalCost += matchedTorso.price }
    if (matchedLeg) { totalCost += matchedLeg.price }
    if (matchedTail) { totalCost += matchedTail.price }
    if (matchedArm) { totalCost += matchedArm.price }

    const costString = totalCost.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
        maximumFractionDigits: 0
    })

    return `<li class="order">
                Order #${order.id} has a ${matchedHead.name} head, a ${matchedTorso.name} torso, ${matchedLeg.name} legs, a ${matchedTail.name} tail, ${matchedArm.name} arms and its special power is ${matchedPower.name}. The final price is ${costString}.
            </li>`

}


export const generateOrdersList = () => {

    //WE NEED TO ASSIGN ORDERS WITHIN THE FUNCTION SO IT IS "CURRENT" EACH TIME IT IS CALLED
    const arrayOfOrders = getOrders()

    let html = "<ul>"

    const listItems = arrayOfOrders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}