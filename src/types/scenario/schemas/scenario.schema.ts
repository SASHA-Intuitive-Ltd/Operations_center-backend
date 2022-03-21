/**
 * @Authro Ruben Rudov
 * @Purpose Scen
 */

// Imports
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'
import * as mongoose from 'mongoose'

export type ScenarioDocument = Scenario & Document;

@Schema()
export class Scenario {
    
    // Title, string property
    @Prop()
    title: string

    // Description, string property
    @Prop()
    desc: string

    // Device states, json of DEVICE_NAME: state (string)
    @Prop()
    devices: JSON[]

    // steps, array of jsons (index: number, item: JSON)
    @Prop()
    steps: JSON[]
}

// Create the schema in the data base
export const ScenarioSchema = SchemaFactory.createForClass(Scenario);