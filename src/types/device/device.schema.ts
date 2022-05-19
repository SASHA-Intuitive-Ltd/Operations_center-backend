/**
 * @Authro Ruben Rudov
 */

// Imports
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'
import * as mongoose from 'mongoose'

export type DeviceDocument = Device & Document;

@Schema()
export class Device {
    // Properties
    @Prop()
    username: string

    @Prop()
    shower: Number[]

    @Prop()
    states: boolean[]
}

export const DeviceSchema = SchemaFactory.createForClass(Device);