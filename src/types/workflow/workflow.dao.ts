import { ObjectId } from "mongoose"

export class CreateWorkflowDao {
    readonly workflowId: ObjectId    
    readonly username: string
    readonly workflow: string
    readonly steps: JSON
    readonly timer: Number
}