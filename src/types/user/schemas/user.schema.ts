/**
 * @Authro Ruben Rudov
 * @Purpose Comment db schema
 */

// Imports
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'
import * as mongoose from 'mongoose'

export type UserDocument = User & Document;

@Schema()
export class User {
    // Properties
    @Prop()
    fullname: string

    @Prop()
    password: string

    @Prop()
    email: string

    @Prop()
    phone: string

    @Prop()
    address: string

    @Prop()
    profileImg: string

    @Prop()
    gender: string

    // @Prop()
    //age: Number

    @Prop()
    device: string
    //@Prop()
    //date_of_birth: mongoose.Date

    //@Prop()
    // diagnosis: string[]

}

export const UserSchema = SchemaFactory.createForClass(User);