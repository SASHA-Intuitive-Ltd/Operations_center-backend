/**
 * @Author Ruben Rudov
 * @Purpose Contain all MVCs stuff of the app
 */

// Imports
import { Module } from "@nestjs/common"
import { ScenariosController } from "./scenario.controller";
import { ScenarioService } from "./scenario.service";
import { MongooseModule } from '@nestjs/mongoose'
import { Scenario, ScenarioSchema } from "./schemas/scenario.schema";

// Create module
@Module({
    imports: [
        MongooseModule.forFeature([{name: Scenario.name, schema: ScenarioSchema}]),
    ],
    controllers: [ScenariosController],
    providers: [ScenarioService]
})

export class ScenarioModule {}