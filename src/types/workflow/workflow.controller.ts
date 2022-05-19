import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common"
import { CreateWorkflowDao } from "./workflow.dao"
import { WorkflowService } from "./workflow.service"
import { ObjectId } from "mongoose"

@Controller('/workflows')
export class WorkflowController {

    // Constructor
    constructor(private workflowService: WorkflowService) {}

    // Add admin to DB
    @Post()
    create(@Body() dao: CreateWorkflowDao) {
        return this.workflowService.create(dao)
    }

    // Get all admins from DB
    @Get()
    getAll() {
        return this.workflowService.getAll()
    }

    // Get single admin from DB
    @Get(':id')
    getSingle(@Param('id') id: string) {
        return this.workflowService.getSingle(id)
    }


    // Delete single admin from DB
    @Delete(':id')
    delete(@Param('id') id: ObjectId) {
        return this.workflowService.delete(id)
    }

    // Update single admin by dao
    // @Put('')
    // update(@Param('id') id: ObjectId) {
    //     const admin = this.deviceService.update()
    //     console.log(admin)
    //     return admin
    // }
}