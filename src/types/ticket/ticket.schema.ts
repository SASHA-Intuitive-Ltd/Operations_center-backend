/**
 * @Authro Ruben Rudov
 * @Purpose Bug ticket db schema
 */

// Imports
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'
import * as mongoose from 'mongoose'

export type TicketDocument = Ticket & Document;

@Schema()
export class Ticket {
    
    // Properties
    @Prop()
    title: string

    @Prop()
    description: string

    @Prop()
    date: string
}