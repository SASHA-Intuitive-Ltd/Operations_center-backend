/**
 * @Authro Ruben Rudov
 * @Purpose Meeting db schema
 */

// Imports
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'
import * as mongoose from 'mongoose'

export type MeetingDocument = Meeting & Document;

@Schema()
export class Meeting {
    
    // Properties
    @Prop()
    topic: string

    @Prop()
    admin: string

    @Prop()
    user: string

    @Prop()
    date: string

    @Prop()
    link: string
}



export const MeetingSchema = SchemaFactory.createForClass(Meeting);