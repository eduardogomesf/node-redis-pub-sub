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

    async subscribe (channel: string, callback: any) {
        return await this.connection.subscribe(channel, callback)
    }
}