import { Router } from "express"
import { MessageBroker } from "./message-broker"

const router = Router()

const broker = new MessageBroker()

const users = []

router.post('/users', async (request, response) => {
    const { name, email, age } = request.body

    users.push({ name, email, age })

    await broker.publish('user-created', { name, email })

    return response.status(201).json('User created')
})

export {
    router
}