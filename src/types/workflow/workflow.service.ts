import { Injectable } from "@nestjs/common"
import { InjectModel } from "@nestjs/mongoose"
import { Model } from "mongoose"
import { ObjectId } from "mongoose"
import { CreateWorkflowDao } from "./workflow.dao"
import { WorkflowDocument, Workflow, WorkflowSchema } from "./workflow.schema"


@Injectable()
export class WorkflowService { 
    constructor(
        @InjectModel(Workflow.name) private adminModel: Model<WorkflowDocument>,
    ) {}

    // Add admin to DB
    async create(dao: CreateWorkflowDao): Promise<Workflow> {
        const admin = await this.adminModel.create({...dao})
        console.log(admin)
        return admin
    }

    // Get all admin from DB
    async getAll(): Promise<Workflow[]> {
        const admin = await this.adminModel.find()
        return admin
    }

    // Get single admin from DB
    async getSingle(id: string): Promise<Workflow> {
        const admin = await this.adminModel.findOne({"username": id})
        return admin
    }

    // Delete single admin from DB
    async delete(id: ObjectId): Promise<ObjectId> {
        const admin = await this.adminModel.findByIdAndDelete(id)
        return admin._id
    }
}