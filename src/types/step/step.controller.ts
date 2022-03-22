// Related imports
import { Body, Controller, Delete, Get, Param, Post, Put, UploadedFile, UploadedFiles, UseInterceptors } from "@nestjs/common"
import { CreateStepDao } from "./dao/step.dao"
import { StepService } from "./step.service"
import { ObjectId } from "mongoose"

// Steps api controller 
@Controller('/steps')
export class StepsController {

    // Constructor
    constructor(private stepService: StepService) {}

    // Add step to DB
    @Post()
    create(@Body() dao: CreateStepDao) {
        return this.stepService.create(dao, )
    }

    // Get all steps from DB
    @Get()
    getAll() {
        return this.stepService.getAll()
    }

    // Get single step from DB
    @Get(':id')
    getSingle(@Param('id') id: ObjectId) {
        return this.stepService.getSingle(id)
    }

    // Delete single step from DB
    @Delete(':id')
    delete(@Param('id') id: ObjectId) {
        return this.stepService.delete(id)
    }

    // Update single step in the database
    @Put(':id')
    update(@Param('id') id: ObjectId, @Body() dao: CreateStepDao) {
        return this.stepService.update(id, dao)
    }
}