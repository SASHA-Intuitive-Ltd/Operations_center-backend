import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common"
import { CreateWorkflowDao } from "./workflow.dao"
import { WorkflowService } from "./workflow.service"
import { ObjectId } from "mongoose"

@Controller('/workflows')
export class WorkflowController {

    // Constructor
    constructor(private workflowService: WorkflowService) {}

    // Add workflow to DB
    @Post()
    create(@Body() dao: CreateWorkflowDao) {
        return this.workflowService.create(dao)
    }

    // Get all admins from DB
    @Get()
    getAll() {
        return this.workflowService.getAll()
    }

    // Get single workflow from DB
    @Get(':id')
    getSingle(@Param('id') id: string) {
        return this.workflowService.getSingle(id)
    }


    // Delete single workflow from DB
    @Delete(':id')
    delete(@Param('id') id: ObjectId) {
        return this.workflowService.delete(id)
    }
}