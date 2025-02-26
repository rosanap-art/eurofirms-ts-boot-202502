import { Logic } from "./types"

import { DuplicityError, CredentialsError, NotFoundError } from "./errors"

import data from "./data"

const logic: Logic = {
    registerUser(name, email, username, password) {
        let user = data.users.find(user => user.email === email || user.username === username)

        if (user) throw new DuplicityError("user already exists")

        user = {
            id: data.uuid(),
            name,
            email,
            username,
            password
        }
        data.users.push(user)
    },

    authenticateUser(username, password) {
        let user = data.users.find(user => user.username === username && user.password === password)

        if (!user) throw new CredentialsError("wrong credentials")

        return user.id
    },

    getUserName(userId) {
        let user = data.users.find(user => user.id === userId)

        if (!user) throw new NotFoundError("user not found")

        return user?.name
    }
}

export default logic