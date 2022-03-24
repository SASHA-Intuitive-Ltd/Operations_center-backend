import { Injectable } from "@nestjs/common"
import { InjectModel } from "@nestjs/mongoose"
import { Model } from "mongoose"
import { ObjectId } from "mongoose"
import { CreateAdminDao } from "./dao/admin.dao"
import { AdminSchema, Admin, AdminDocument } from "./schemas/admin.schema"


@Injectable()
export class AdminService { 
    constructor(
        @InjectModel(Admin.name) private adminModel: Model<AdminDocument>,
    ) {}

    // Add admin to DB
    async create(dao: CreateAdminDao): Promise<Admin> {
        const admin = await this.adminModel.create({...dao})
        console.log(admin)
        return admin
    }

    // Get all admin from DB
    async getAll(): Promise<Admin[]> {
        const admin = await this.adminModel.find()
        return admin
    }

    // Get single admin from DB
    async getSingle(id: ObjectId): Promise<Admin> {
        const admin = await this.adminModel.findById(id)
        return admin
    }

    // Login function returns true if input and db passwords matching
    async getLoginResult(fullname: string, password: string): Promise<Object> {

        console.log("Fullname: " + fullname)

        // Get admin by full name
        const admin = await this.adminModel.findOne({ fullname: fullname })
        console.log("Admin found: " + admin)

        // If passwords match, return true
        if (admin.password !== null) {
            if (admin.password == password) {
                console.log("Correct password")
                return admin
            }
        }

        // Else, return false/null
        else {
            return null
        }
    }

    // Delete single admin from DB
    async delete(id: ObjectId): Promise<ObjectId> {
        const admin = await this.adminModel.findByIdAndDelete(id)
        return admin._id
    }

    // Update admin
    async update(newPatientId: string, adminId: ObjectId): Promise<Admin> {

        let admin_old = this.getSingle(adminId)

        let updated_admin = admin_old
        ;(await updated_admin).patients.push(newPatientId)

        // console.log("Update doc: " + (await updated_admin))
        console.log("Update list: " + (await updated_admin).patients)

        await this.adminModel.updateOne({_id: adminId}, (await updated_admin), {
            new: true
        })

        const admin = this.getSingle(adminId)

        return (await admin)
    }
}