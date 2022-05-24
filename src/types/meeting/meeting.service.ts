import { Injectable } from "@nestjs/common"
import { InjectModel } from "@nestjs/mongoose"
import { Model } from "mongoose"
import { ObjectId } from "mongoose"
import { CreateMeetingDao } from "./meeting.dao"
import { Meeting, MeetingDocument } from "./meeting.schema"
import { Admin, AdminDocument } from "../admin/schemas/admin.schema"
import { createTransport, getTestMessageUrl } from "nodemailer"
import axios from "axios"
import { AdminController } from "../admin/admin.controller"

@Injectable()
export class MeetingService { 
    constructor(
        @InjectModel(Meeting.name) private meetingModel: Model<MeetingDocument>,
    ) {}

    // Add user to DB
    async create(dao: CreateMeetingDao): Promise<Meeting> {

        const url = "https://api.zoom.us/v2/users/6gRlK_vvTtKNNAWDnRxqoQ/meetings" 
        const body = {
            "agenda": "",
            "default_password": false,
            "duration": 200,
            "password": "a",
            "pre_schedule": false,
            "recurrence": {
              "end_date_time": "2025-08-24T14:15:22Z",
              "end_times": 1,
              "monthly_day": 1,
              "monthly_week": -1,
              "monthly_week_day": 1,
              "repeat_interval": 0,
              "type": 1,
              "weekly_days": "1"
            },
            "schedule_for": "6gRlK_vvTtKNNAWDnRxqoQ",
            "settings": {
              "additional_data_center_regions": [
                ""
              ],
              "allow_multiple_devices": true,
              "alternative_hosts": "",
              "alternative_hosts_email_notification": true,
              "approval_type": 0,
              "approved_or_denied_countries_or_regions": {
                "approved_list": [
                  ""
                ],
                "denied_list": [
                  ""
                ],
                "enable": true,
                "method": "approve"
              },
              "audio": "both",
              "authentication_domains": "",
              "authentication_exception": [
                {
                  "email": "rudovruben4all@gmail.com",
                  "name": "Ruben Rudov"
                }
              ],
              "authentication_option": "",
              "auto_recording": "local",
              "breakout_room": {
                "enable": true,
                "rooms": [
                  {
                    "name": "string",
                    "participants": [
                      "string"
                    ]
                  }
                ]
              },
              "calendar_type": 1,
              "close_registration": false,
              "cn_meeting": false,
              "contact_email": "rudovruben4all@gmail.com",
              "contact_name": "rub",
              "email_notification": true,
              "encryption_type": "enhanced_encryption",
              "focus_mode": true,
              "global_dial_in_countries": [
                ""
              ],
              "host_video": true,
              "in_meeting": false,
              "jbh_time": 0,
              "join_before_host": false,
              "language_interpretation": {
                "enable": true
              },
              "meeting_authentication": true,
              "meeting_invitees": [
                {
                  "email": "rudovruben4all@gmail.com"
                }
              ],
              "mute_upon_entry": false,
              "participant_video": true,
              "private_meeting": true,
              "registrants_confirmation_email": true,
              "registrants_email_notification": true,
              "registration_type": 1,
              "show_share_button": true,
              "use_pmi": false,
              "waiting_room": true,
              "watermark": false
            },
            "start_time": `${dao.date}`,
            "template_id": "Aa",
            "timezone": "",
            "topic": "",
            "type": 1
          }
        const headers = {
            "authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOm51bGwsImlzcyI6InlMNG5jVE5CU2EyUEk2dUNIR01GMmciLCJleHAiOjE2NDYzNDMzNjQsImlhdCI6MTY0NTczODU2Nn0.ruf0ZTHGnBKitb_ybp0KLC2PmQ3FttQfay6h8kr2G_8"
        }

        axios.post(url, body, { headers })
            // .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
            
          // TODO: send mail with link
          // create reusable transporter object using the default SMTP transport
          /**let transporter = createTransport({
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
              from: `"${dao.admin}" 'allmyclass.aa@gmail.com'`, // sender address
              to: `rudovruben4all@gmail.com`, // list of receivers   TODO: change to dynamic via dao...
              subject: `${dao.topic}`, // Subject line
              text: `Hey ${dao.user}, you've got a new remote meeting appointment from ${dao.admin}, Link: ${dao.link}\n
              `, // plain text body
              html: `Hey ${dao.user}, you've got a new remote meeting appointment from ${dao.admin}, Link: ${dao.link}\n`, // html body
          });

          console.log("Message sent: %s", info.messageId);
          // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
          **/
          // Preview only available when sending through an Ethereal account
          // console.log("Preview URL: %s", getTestMessageUrl(info));

        
        const meeting = await this.meetingModel.create({...dao})
        console.log(meeting) // TODO: generate link from zoom api

        return meeting
    }

    // Get all users from DB
    async getAll(): Promise<Meeting[]> {
        const meeting = await this.meetingModel.find()
        return meeting
    }

    // Get single meeting from DB
    async getSingle(id: ObjectId): Promise<Meeting> {
        const meeting = await this.meetingModel.findById(id)
        return meeting
    }

    // Get all meetings of admin by admin name
    async getAllByAdmin(id: string): Promise<Meeting[]> {
      const meetings = await this.meetingModel.find({admin: id})
      return meetings
    }


    // Delete single user from DB
    async delete(id: ObjectId): Promise<ObjectId> {
        const meeting = await this.meetingModel.findByIdAndDelete(id)
        return meeting._id
    }

    // Update meeting info 
    async update(id: ObjectId, dao: CreateMeetingDao): Promise<ObjectId>{
      const meeting = await this.meetingModel.findByIdAndUpdate(id, dao)
      return meeting._id
    }
}