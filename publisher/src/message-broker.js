import { createClient } from 'redis'

export class MessageBroker {
    constructor() {
        this.connection = createClient({
            socket: {
                port: 6379,
                host: 'redis'
            }
        })

        this.connection.connect()
    }

    async publish(channel, message) {
        return await this.connection.publish(channel, JSON.stringify(message))
    }
}