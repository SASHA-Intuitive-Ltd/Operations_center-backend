// Data access object of scenarios 

import { ObjectId } from "mongoose"

export class CreateScenarioDao {
    readonly scenarioId: ObjectId
    readonly title: string
    readonly desc: string
    readonly devices: JSON[]
    readonly steps: JSON[]
}