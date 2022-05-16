import { ObjectId, Date } from "mongoose"

export class CreateDeviceDao {
    readonly deviceId: ObjectId
    readonly username: string
    readonly shower: string[]
    readonly registers: Number[]
}