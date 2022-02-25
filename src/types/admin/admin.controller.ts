import { Body, Controller, Delete, Get, Param, Post, UploadedFile, UploadedFiles, UseInterceptors } from "@nestjs/common"
import { CreateAdminDao } from "./dao/admin.dao"
import { AdminService } from "./admin.service"
import { ObjectId } from "mongoose"
import { FileFieldsInterceptor } from "@nestjs/platform-express"

@Controller('/admins')
export class AdminController {

    // Constructor
    constructor(private adminService: AdminService) {}

    // Add admin to DB
    @Post()
    create(@Body() dao: CreateAdminDao) {
        return this.adminService.create(dao)
    }

    // Get all admins from DB
    @Get()
    getAll() {
        return this.adminService.getAll()
    }

    // Get single admin from DB
    @Get(':id')
    getSingle(@Param('id') id: ObjectId) {
        return this.adminService.getSingle(id)
    }

    // Delete single admin from DB
    @Delete(':id')
    delete(@Param('id') id: ObjectId) {
        return this.adminService.delete(id)
    }
}