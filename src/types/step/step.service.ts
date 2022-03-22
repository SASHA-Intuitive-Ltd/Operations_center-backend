// mongo related imports
import { Injectable } from "@nestjs/common"
import { InjectModel } from "@nestjs/mongoose"
import { Model } from "mongoose"
import { ObjectId } from "mongoose"
import { CreateStepDao } from "./dao/step.dao"
import { Step, StepDocument, StepSchema } from "./schemas/step.schema"


// Steps service, CRUD
@Injectable()
export class StepService { 
    // Constructor includes model injectipm of steps document
    constructor(
        @InjectModel(Step.name) private stepModel: Model<StepDocument>,
    ) {}

    // Add step to DB
    async create(dao: CreateStepDao): Promise<Step> {
        // Create new doc on the steps doc
        const step = await this.stepModel.create({...dao})

        // Log new doc
        console.log(step)

        // Return new doc to api controller
        return step
    }

    // Get all steps from DB
    async getAll(): Promise<Step[]> {
        // Find all possible steps
        const steps = await this.stepModel.find()

        // Log steps list
        console.log(steps)

        // Return steps list to api controller
        return steps
    }

    // Get single step from DB
    async getSingle(id: ObjectId): Promise<Step> {
        // Find step info by id
        const step = await this.stepModel.findById(id)

        // Log this specific step
        console.log(step)

        // Return step to api controller
        return step
    }

    // Delete single scenario from DB
    async delete(id: ObjectId): Promise<ObjectId> {
        // Delete step by id
        const step = await this.stepModel.findByIdAndDelete(id)

        // Log deleted step - confirm it's null value
        console.log(step)

        // Return deleted step's id to api controller 
        return step._id
    }

    // Update function for a user, returns a promise of ObjectId
    async update(id: ObjectId, dao: CreateStepDao): Promise<ObjectId> {
        // Update step by id
        const step = await this.stepModel.findByIdAndUpdate(id, dao)

        // Log updated step - confirm that its the new value
        console.log(step._id)

        // Return updated step's id to api controller 
        return step._id
    }
}