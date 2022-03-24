import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common"
import { CreateAdminDao } from "./dao/admin.dao"
import { AdminService } from "./admin.service"
import { ObjectId } from "mongoose"
import { CreateUserDao } from "../user/dao/user.dao"

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

    @Get('/loginByNameAndPassword/:fullname/:password')
    getLoginResult(@Param('fullname') fullname: string, @Param('password') password: string) {
        console.log(`User, password: ${fullname}, ${password}`)
        return this.adminService.getLoginResult(fullname, password)
    }

    // Delete single admin from DB
    @Delete(':id')
    delete(@Param('id') id: ObjectId) {
        return this.adminService.delete(id)
    }

    // Update single admin by dao
    @Put(':id/newId/:uid')
    update(@Param('id') id: ObjectId, @Param('uid') uid: string) {
        const admin = this.adminService.update(uid, id)
        console.log(admin)
        return admin
    }
}