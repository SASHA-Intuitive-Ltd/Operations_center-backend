// Data access object of admin login

import { ObjectId, Date } from "mongoose"

export class CreateAdminDao {
    readonly adminId: ObjectId
    readonly fullname: string
    readonly password: string
    readonly location: string
}