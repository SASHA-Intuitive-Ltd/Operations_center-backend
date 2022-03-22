// Data access object of scenarios 

import { ObjectId } from "mongoose"

export class CreateStepDao {
    readonly scenarioId: ObjectId
    readonly title: string
    readonly desc: string
    readonly trigger: string
    readonly isShown: Boolean
    // readonly pers: Number
}