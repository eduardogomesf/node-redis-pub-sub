import express from 'express'
import { MessageBroker } from './message-broker'

const app = express()

app.use(express.json())

const broker = new MessageBroker()

broker.subscribe('user-created', (message) => {
    console.log('Message received.')
    const user = JSON.parse(message)
    console.log(`Sending e-mail to ${user.name}(${user.email})`)
})

app.listen(8081, () => console.log('Running on 8081'))
