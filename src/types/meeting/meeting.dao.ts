// Meeting dao
import { ObjectId, Date } from "mongoose"

export class CreateMeetingDao {
    readonly meetingId: ObjectId
    readonly topic: string
    readonly admin: string
    readonly user: string
    readonly date: string
    readonly link: string
}