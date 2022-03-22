/**
 * @Author Ruben Rudov
 * @Purpose Contain all MVCs stuff of the app
 */

// Imports
import { Module } from "@nestjs/common"
import { StepsController } from "./step.controller";
import { StepService } from "./step.service";
import { MongooseModule } from '@nestjs/mongoose'
import { Step, StepSchema } from "./schemas/step.schema";

// Create module
@Module({
    imports: [
        MongooseModule.forFeature([{name: Step.name, schema: StepSchema}]),
    ],
    controllers: [StepsController],
    providers: [StepService]
})

export class StepModule {}