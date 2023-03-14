import { database } from "./database.js";

export const getHeads = () => {
    return database.heads.map(obj => ({ ...obj }))
}

export const getTorsos = () => {
    return database.torsos.map(obj => ({ ...obj }))
}

export const getLegs = () => {
    return database.legs.map(obj => ({ ...obj }))
}

export const getTails = () => {
    return database.tails.map(obj => ({ ...obj }))
}

export const getArms = () => {
    return database.arms.map(obj => ({ ...obj }))
}

export const getPowers = () => {
    return database.powers.map(obj => ({ ...obj }))
}

export const getOrders = () => {
    return database.orders.map(obj => ({ ...obj }))
}


//Now you need to export functions whose responsibility is to SET state.

export const setHead = (id) => {
    database.chimeraBuilder.headID = id
    console.log(database.chimeraBuilder)
}

export const setTorso = (id) => {
    database.chimeraBuilder.torsoID = id
    console.log(database.chimeraBuilder)
}

export const setLeg = (id) => {
    database.chimeraBuilder.legID = id
    console.log(database.chimeraBuilder)
}

export const setTail = (id) => {
    database.chimeraBuilder.tailID = id
    console.log(database.chimeraBuilder)
}

export const setArm = (id) => {
    database.chimeraBuilder.armID = id
    console.log(database.chimeraBuilder)
}

export const setPower = (id) => {
    database.chimeraBuilder.powerID = id
    console.log(database.chimeraBuilder)
}


//function that takes temporary choices being stored in the orderBuilder state object and make them permanent.
export const addCustomOrder = () => {
    // Copy the current state of user choices
    const newOrder = { ...database.chimeraBuilder }

    // Add a new primary key to the object
    const lastIndex = database.orders.length - 1
    newOrder.id = database.orders[lastIndex].id + 1

    // Add a timestamp to the order
    newOrder.timestamp = Date.now()

    // Add the new order object to custom orders state
    database.orders.push(newOrder)

    // Reset the temporary state for user choices
    database.orderBuilder = {}

    // Broadcast a notification that permanent state has changed
    document.dispatchEvent(new CustomEvent("stateChanged"))
}