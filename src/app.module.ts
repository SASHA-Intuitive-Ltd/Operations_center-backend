/**
 * @Author Ruben Rudov
 * @Purpose Contain all MVCs stuff of the app
 */

// Imports
import { Module } from "@nestjs/common"
import { UserModule } from "./types/user/user.module"
import { MongooseModule } from '@nestjs/mongoose'
import { AdminModule } from "./types/admin/admin.module"
import { MeetingModule } from "./types/meeting/meeting.module"
import * as config from '././configs/dbconfig.json'

@Module({
    imports: [
        MongooseModule.forRoot(`mongodb+srv://ruben:${config.password}@cluster0.ely3j.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`),
        UserModule,
        AdminModule,
        MeetingModule
    ]
})

export class AppModule {}