import { Injectable } from "@nestjs/common"
import { InjectModel } from "@nestjs/mongoose"
import { Model } from "mongoose"
import { ObjectId } from "mongoose"
import { CreateMeetingDao } from "./meeting.dao"
import { Meeting, MeetingDocument } from "./meeting.schema"
import { createTransport, getTestMessageUrl } from "nodemailer"

@Injectable()
export class MeetingService { 
    constructor(
        @InjectModel(Meeting.name) private meetingModel: Model<MeetingDocument>,
    ) {}

    // Add user to DB
    async create(dao: CreateMeetingDao): Promise<Meeting> {
        const meeting = await this.meetingModel.create({...dao})
        console.log(meeting) // TODO: generate link from zoom api
        // TODO: send mail with link


        // create reusable transporter object using the default SMTP transport
        let transporter = createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
            user: "allmyclass.aa", // generated ethereal user
            pass: "1234adam", // generated ethereal password
            },
        });

        // send mail with defined transport object
        let info = await transporter.sendMail({
            from: '"Fred Foo 👻" allmyclass.aa@gmail.com', // sender address
            to: "livneadam@gmail.com, rudovruben4all@gmail.com", // list of receivers
            subject: "Hello ✔", // Subject line
            text: "Hello world?", // plain text body
            html: "<b>Hello world?</b>", // html body
        });

        console.log("Message sent: %s", info.messageId);
        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

        // Preview only available when sending through an Ethereal account
        console.log("Preview URL: %s", getTestMessageUrl(info));
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