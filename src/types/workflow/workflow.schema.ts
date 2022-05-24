/**
 * @Author Ruben Rudov
 * @Purpose Workflow db schema
 */

// Imports
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'
import * as mongoose from 'mongoose'

export type WorkflowDocument = Workflow & Document;

@Schema()
export class Workflow {
    // Properties
    @Prop()
    username: string

    @Prop()
    workflow: string

    @Prop({ type: mongoose.Types.Map })
    steps: JSON

    @Prop()
    timer: Number
}

export const WorkflowSchema = SchemaFactory.createForClass(Workflow);