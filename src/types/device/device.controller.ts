import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common"
import { CreateDeviceDao } from "./device.dao"
import { DeviceService } from "./deivce.service"
import { ObjectId } from "mongoose"

@Controller('/device')
export class DeviceController {

    // Constructor
    constructor(private deviceService: DeviceService) {}

    // Add device to DB
    @Post()
    create(@Body() dao: CreateDeviceDao) {
        return this.deviceService.create(dao)
    }

    // Get all devices from DB
    @Get()
    getAll() {
        return this.deviceService.getAll()
    }

    // Get single device from DB
    @Get(':username')
    getSingle(@Param('username') username: string) {
        return this.deviceService.getSingle(username)
    }


    // Delete single device from DB
    @Delete(':id')
    delete(@Param('id') id: ObjectId) {
        return this.deviceService.delete(id)
    }
}