/**
 * @Author Ruben Rudov
 * @Purpose Contain all MVCs stuff of the app
 */

// Imports
import { Module } from "@nestjs/common"
import { UserModule } from "./types/user/user.module"
import { MongooseModule } from '@nestjs/mongoose'
import { AdminModule } from "./types/admin/admin.module"
import { MeetingModule } from "./types/meeting/meeting.module"
import { ScenarioModule } from "./types/scenario/scenario.module"
import { StepModule } from "./types/step/step.module"
import * as config from '././configs/dbconfig.json'
import { DeviceModule } from "./types/device/device.module"
import { WorkflowModule } from "./types/workflow/workflow.module"

@Module({
    imports: [
        MongooseModule.forRoot(`mongodb+srv://ruben:${config.password}@cluster0.ely3j.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`),
        UserModule,
        AdminModule,
        MeetingModule,
        ScenarioModule,
        StepModule,
        DeviceModule,
        WorkflowModule
    ]
})

export class AppModule {}
