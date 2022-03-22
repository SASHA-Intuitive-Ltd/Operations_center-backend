/**
 * @Authro Ruben Rudov
 * @Purpose Scen
 */

// Imports
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'
import * as mongoose from 'mongoose'

export type StepDocument = Step & Document;

@Schema()
export class Step {
    
    // Title, string property
    @Prop()
    title: string

    // Description, string property
    @Prop()
    desc: string

    // Description, string property
    @Prop()
    trigger: string

    // Is step shown in frontend, json of DEVICE_NAME: state (string)
    @Prop()
    isShown: Boolean
}

// Create the schema in the data base
export const StepSchema = SchemaFactory.createForClass(Step);