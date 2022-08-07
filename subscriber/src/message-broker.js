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

    async subscribe(channel, callback) {
        return await this.connection.subscribe(channel, callback)
    }
}