/**
 * @Author Ruben Rudov
 * @Purpose Contain all MVCs stuff of the app
 */

// Imports
import { Module } from "@nestjs/common"
import { MeetingController } from "./meeting.controller";
import { MeetingService } from "./meeting.service";
import { MongooseModule } from '@nestjs/mongoose'
import { Meeting, MeetingSchema } from "./meeting.schema";

@Module({
    imports: [
        MongooseModule.forFeature([{name: Meeting.name, schema: MeetingSchema}]),
    ],
    controllers: [MeetingController],
    providers: [MeetingService]
})

export class MeetingModule {}