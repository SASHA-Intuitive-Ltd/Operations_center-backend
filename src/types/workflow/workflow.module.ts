/**
 * @Author Ruben Rudov
 * @Purpose Contain all MVCs stuff of the app
 */

// Imports
import { Module } from "@nestjs/common"
import { WorkflowController } from "./workflow.controller";
import { WorkflowService } from "./workflow.service";
import { MongooseModule } from '@nestjs/mongoose'
import { Workflow, WorkflowSchema } from "./workflow.schema";

@Module({
    imports: [
        MongooseModule.forFeature([{name: Workflow.name, schema: WorkflowSchema}]),
    ],
    controllers: [WorkflowController],
    providers: [WorkflowService]
})

export class WorkflowModule {}