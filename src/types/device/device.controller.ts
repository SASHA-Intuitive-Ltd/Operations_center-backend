import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common"
import { CreateDeviceDao } from "./device.dao"
import { DeviceService } from "./deivce.service"
import { ObjectId } from "mongoose"

@Controller('/device')
export class DeviceController {

    // Constructor
    constructor(private deviceService: DeviceService) {}

    // Add admin to DB
    @Post()
    create(@Body() dao: CreateDeviceDao) {
        return this.deviceService.create(dao)
    }

    // Get all admins from DB
    @Get()
    getAll() {
        return this.deviceService.getAll()
    }

    // Get single admin from DB
    @Get(':username')
    getSingle(@Param('username') username: string) {
        return this.deviceService.getSingle(username)
    }


    // Delete single admin from DB
    @Delete(':id')
    delete(@Param('id') id: ObjectId) {
        return this.deviceService.delete(id)
    }

    // Update single admin by dao
    // @Put('')
    // update(@Param('id') id: ObjectId) {
    //     const admin = this.deviceService.update()
    //     console.log(admin)
    //     return admin
    // }
}