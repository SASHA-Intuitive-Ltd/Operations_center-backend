// mongo related imports
import { Injectable } from "@nestjs/common"
import { InjectModel } from "@nestjs/mongoose"
import { Model } from "mongoose"
import { ObjectId } from "mongoose"
import { CreateScenarioDao } from "./dao/scenario.dao"
import { Scenario, ScenarioDocument } from "./schemas/scenario.schema"


// Scemarios service, CRUD
@Injectable()
export class ScenarioService { 
    // Constructor includes model injectipm of scenario document
    constructor(
        @InjectModel(Scenario.name) private scenarioModel: Model<ScenarioDocument>,
    ) {}

    // Add user to DB
    async create(dao: CreateScenarioDao): Promise<Scenario> {
        // Create new doc on the scenarios doc
        const scenario = await this.scenarioModel.create({...dao})

        // Log new doc
        console.log(scenario)

        // Return new doc to api controller
        return scenario
    }

    // Get all scenarios from DB
    async getAll(): Promise<Scenario[]> {
        // Find all possible scenarios
        const scenarios = await this.scenarioModel.find()

        // Log scenarios list
        console.log(scenarios)

        // Return scenarios list to api controller
        return scenarios
    }

    // Get single scenario from DB
    async getSingle(id: ObjectId): Promise<Scenario> {
        // Find scenario info by id
        const scenario = await this.scenarioModel.findById(id)

        // Log this specific scenario
        console.log(scenario)

        // Return scenario to api controller
        return scenario
    }

    // Delete single scenario from DB
    async delete(id: ObjectId): Promise<ObjectId> {
        // Delete scenario by id
        const scenario = await this.scenarioModel.findByIdAndDelete(id)

        // Log deleted scenario - confirm it's null value
        console.log(scenario)

        // Return deleted scenario's id to api controller 
        return scenario._id
    }

    // Update function for a user, returns a promise of ObjectId
    async update(id: ObjectId, dao: CreateScenarioDao): Promise<ObjectId> {
        // Update scenario by id
        const scenario = await this.scenarioModel.findByIdAndUpdate(id, dao)

        // Log updated scenario - confirm that its the new value
        console.log(scenario._id)

        // Return updated scenario's id to api controller 
        return scenario._id
    }
}