import { Injectable } from "@nestjs/common"
import { InjectModel } from "@nestjs/mongoose"
import { Model } from "mongoose"
import { ObjectId } from "mongoose"
import { CreateUserDao } from "./dao/user.dao"
import { User, UserDocument } from "./schemas/user.schema"


@Injectable()
export class UserService { 
    constructor(
        @InjectModel(User.name) private userModel: Model<UserDocument>,
    ) {}

    // Add user to DB
    async create(dao: CreateUserDao): Promise<User> {
        const user = await this.userModel.create({...dao})
        console.log(user)
        return user
    }

    // Get all users from DB
    async getAll(): Promise<User[]> {
        const users = await this.userModel.find()
        return users
    }

    // Get single user from DB
    async getSingle(id: ObjectId): Promise<User> {
        const user = await this.userModel.findById(id)
        return user
    }

    // Delete single user from DB
    async delete(id: ObjectId): Promise<ObjectId> {
        const user = await this.userModel.findByIdAndDelete(id)
        return user._id
    }

    // Update function for a user, returns a promise of ObjectId
    async update(id: ObjectId, dao: CreateUserDao): Promise<ObjectId> {
        const user = await this.userModel.findByIdAndUpdate(id, dao)
        return user._id
    }
}