import { Router } from "express"
import {  MessageBroker } from "./message-broker.js"

const router = Router()

const broker = new MessageBroker()

const users = []

router.post('/users', async (request, response) => {
    const { name, email, age } = request.body
    
    await broker.publish('default', { name, email })

    users.push({ name, email, age })

    return response.status(201).json('User created')
})

export {
    router
}