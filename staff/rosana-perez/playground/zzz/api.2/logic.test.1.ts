import logic from "./logic"
import data from "./data"

console.info("SUITE logic")

console.info("TEST registerUser")

console.info("CASE succeeds on new user")
try {
    logic.registerUser("Peter Pan", "peter@pan.com", "peterpan", "123123123")

    console.log(data.users)
} catch (error) {
    console.error(error)
}

console.info("CASE fails on already existing user")
try {
    data.users.push({
        id: data.uuid(),
        name: "Wendy Darling",
        email: "wendy@darling.com",
        username: "wendydarling",
        password: "123123123"
    })
    logic.registerUser("Wendy Darling", "wendy@darling.com", "wendydarling", "123123123")

    console.log(data.users)
} catch (error) {
    console.error(error)
}

console.info("TEST authenticateUser")

console.info("CASE succeeds on correct credentials")
try {
    data.users.push({
        id: data.uuid(),
        name: "Pepito Grillo",
        email: "pepito@grillo.com",
        username: "pepitogrillo",
        password: "123123123"
    })
    let userId = logic.authenticateUser("pepitogrillo", "123123123")

    console.log(userId)
} catch (error) {
    console.error(error)
}

console.info("CASE fails on existing user but wrong username")
try {
    data.users.push({
        id: data.uuid(),
        name: "James Hook",
        email: "james@hook.com",
        username: "jameshook",
        password: "123123123"
    })
    let userId = logic.authenticateUser("jameshoo", "123123123")

} catch (error) {
    console.error(error)
}

console.info("CASE fails existing user but wrong password")
try {
    data.users.push({
        id: data.uuid(),
        name: "Campa Nilla",
        email: "campa@nilla.com",
        username: "campanilla",
        password: "123123123"
    })
    let userId = logic.authenticateUser("campanilla", "123123124")

} catch (error) {
    console.error(error)
}

console.info("CASE fails non existing user")
try {
    let userId = logic.authenticateUser("mickeymouse", "123123124")

} catch (error) {
    console.error(error)
}
