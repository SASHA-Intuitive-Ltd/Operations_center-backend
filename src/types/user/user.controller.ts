import { Body, Controller, Delete, Get, Param, Post, Put, UploadedFile, UploadedFiles, UseInterceptors } from "@nestjs/common"
import { CreateUserDao } from "./dao/user.dao"
import { UserService } from "./user.service"
import { isValidObjectId, ObjectId } from "mongoose"
import { FileFieldsInterceptor } from "@nestjs/platform-express"

@Controller('/users')
export class UserController {

    // Constructor
    constructor(private userService: UserService) {}

    // Add user to DB
    @Post()
    create(@Body() dao: CreateUserDao) {
        return this.userService.create(dao, )
    }

    // Get all users from DB
    @Get()
    getAll() {
        return this.userService.getAll()
    }

    // Get single user from DB
    @Get(':id')
    getSingle(@Param('id') id: ObjectId) {
        return this.userService.getSingle(id)
    }

    @Get('/byName/:fullname')
    getSingleByName(@Param('fullname') fullname: string) {
        return this.userService.getSingleByName(fullname)
    }

    // Delete single user from DB
    @Delete(':id')
    delete(@Param('id') id: ObjectId) {
        return this.userService.delete(id)
    }

    @Put(':id')
    update(@Param('id') id: ObjectId, @Body() dao: CreateUserDao) {
        return this.userService.update(id, dao)
    }

    @Delete('/byFilter/byFilter')
    deleteByNull() {
        return this.userService.deleteByFilterNull()
    }
}