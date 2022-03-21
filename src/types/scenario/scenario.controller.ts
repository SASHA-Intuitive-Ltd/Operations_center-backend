// Related imports
import { Body, Controller, Delete, Get, Param, Post, Put, UploadedFile, UploadedFiles, UseInterceptors } from "@nestjs/common"
import { CreateScenarioDao } from "./dao/scenario.dao"
import { ScenarioService } from "./scenario.service"
import { ObjectId } from "mongoose"

// Scenario api controller 
@Controller('/scenarios')
export class ScenariosController {

    // Constructor
    constructor(private scenarioService: ScenarioService) {}

    // Add scenario to DB
    @Post()
    create(@Body() dao: CreateScenarioDao) {
        return this.scenarioService.create(dao, )
    }

    // Get all scenarios from DB
    @Get()
    getAll() {
        return this.scenarioService.getAll()
    }

    // Get single scenario from DB
    @Get(':id')
    getSingle(@Param('id') id: ObjectId) {
        return this.scenarioService.getSingle(id)
    }

    // Delete single scenario from DB
    @Delete(':id')
    delete(@Param('id') id: ObjectId) {
        return this.scenarioService.delete(id)
    }

    // Update single scenario in the database
    @Put(':id')
    update(@Param('id') id: ObjectId, @Body() dao: CreateScenarioDao) {
        return this.scenarioService.update(id, dao)
    }
}