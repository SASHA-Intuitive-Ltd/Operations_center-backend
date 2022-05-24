import { Injectable } from "@nestjs/common"
import { InjectModel } from "@nestjs/mongoose"
import { Model } from "mongoose"
import { ObjectId } from "mongoose"
import { CreateWorkflowDao } from "./workflow.dao"
import { WorkflowDocument, Workflow, WorkflowSchema } from "./workflow.schema"


@Injectable()
export class WorkflowService { 
    constructor(
        @InjectModel(Workflow.name) private workflowModel: Model<WorkflowDocument>,
    ) {}

    // Add workflow to DB
    async create(dao: CreateWorkflowDao): Promise<Workflow> {
        const workflow = await this.workflowModel.create({...dao})
        console.log(workflow)
        return workflow
    }

    // Get all workflow from DB
    async getAll(): Promise<Workflow[]> {
        const workflow = await this.workflowModel.find()
        return workflow
    }

    // Get single workflow from DB
    async getSingle(id: string): Promise<Workflow> {
        const workflow = await this.workflowModel.findOne({"username": id})
        return workflow
    }

    // Delete single workflow from DB
    async delete(id: ObjectId): Promise<ObjectId> {
        const workflow = await this.workflowModel.findByIdAndDelete(id)
        return workflow._id
    }
}