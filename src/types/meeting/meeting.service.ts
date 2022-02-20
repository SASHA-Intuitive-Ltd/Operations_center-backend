import { Injectable } from "@nestjs/common"
import { InjectModel } from "@nestjs/mongoose"
import { Model } from "mongoose"
import { ObjectId } from "mongoose"
import { CreateMeetingDao } from "./meeting.dao"
import { Meeting, MeetingDocument } from "./meeting.schema"


@Injectable()
export class MeetingService { 
    constructor(
        @InjectModel(Meeting.name) private meetingModel: Model<MeetingDocument>,
    ) {}

    // Add user to DB
    async create(dao: CreateMeetingDao): Promise<Meeting> {
        const meeting = await this.meetingModel.create({...dao})
        console.log(meeting)
        return meeting
    }

    // Get all users from DB
    async getAll(): Promise<Meeting[]> {
        const meeting = await this.meetingModel.find()
        return meeting
    }

    // Get single user from DB
    async getSingle(id: ObjectId): Promise<Meeting> {
        const meeting = await this.meetingModel.findById(id)
        return meeting
    }

    //TODO: Get all by admin name

    // Delete single user from DB
    async delete(id: ObjectId): Promise<ObjectId> {
        const meeting = await this.meetingModel.findByIdAndDelete(id)
        return meeting._id
    }
}