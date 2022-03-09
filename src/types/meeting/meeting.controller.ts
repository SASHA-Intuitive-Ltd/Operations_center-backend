import { Body, Controller, Delete, Get, Param, Post, UploadedFile, UploadedFiles, UseInterceptors } from "@nestjs/common"
import { CreateMeetingDao } from "./meeting.dao"
import { MeetingService } from "./meeting.service"
import { ObjectId } from "mongoose"
import { FileFieldsInterceptor } from "@nestjs/platform-express"

@Controller('/meetings')
export class MeetingController {

    // Constructor
    constructor(private meetingService: MeetingService) {}

    // Add meeting to DB
    @Post()
    create(@Body() dao: CreateMeetingDao) {
        return this.meetingService.create(dao)
    }

    // Get all meeting from DB
    @Get()
    getAll() {
        return this.meetingService.getAll()
    }

    // Get single meeting from DB
    @Get(':id')
    getSingle(@Param('id') id: ObjectId) {
        return this.meetingService.getSingle(id)
    }

    // Get all meeting of single admin from DB
    @Get('/byAdmin/:id')
    getAllByAdmin(@Param('id') id: string) {
        return this.meetingService.getAllByAdmin(id)
    }

    // Delete single meeting from DB
    @Delete(':id')
    delete(@Param('id') id: ObjectId) {
        return this.meetingService.delete(id)
    }
}