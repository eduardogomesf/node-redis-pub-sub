// @ts-ignore
import { createClient, RedisClientType } from 'redis'

export class MessageBroker {
    private connection: RedisClientType

    constructor () {
        this.connection = createClient({
            socket: {
                port: 6379,
                host: 'redis'
            }
        })

        this.connection.connect()
    }

    async publish (channel: string, message: any) {
        return await this.connection.publish(channel, JSON.stringify(message))
    }
}