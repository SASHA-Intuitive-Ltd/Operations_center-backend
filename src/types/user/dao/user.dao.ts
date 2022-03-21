import { ObjectId, Date } from "mongoose"

export class CreateUserDao {
    readonly userId: ObjectId
    readonly fullname: string
    readonly password: string
    readonly email: string
    readonly phone: string
    readonly address: string
    readonly profileImg: string
    readonly age: Number
   // readonly date_of_birth: Date
   // readonly diagnosis: string[]
}