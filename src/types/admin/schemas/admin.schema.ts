/**
 * @Authro Ruben Rudov
 * @Purpose Admin db schema
 */

// Imports
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'
import * as mongoose from 'mongoose'

export type AdminDocument = Admin & Document;

@Schema()
export class Admin {
    // Properties
    @Prop()
    fullname: string

    @Prop()
    password: string

    @Prop()
    email: string

    @Prop()
    location: string

    @Prop()
    patients: string[]

}

export const AdminSchema = SchemaFactory.createForClass(Admin);