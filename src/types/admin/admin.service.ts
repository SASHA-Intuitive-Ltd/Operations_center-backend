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

    // Delete single admin from DB
    async delete(id: ObjectId): Promise<ObjectId> {
        const admin = await this.adminModel.findByIdAndDelete(id)
        return admin._id
    }

    // Update admin
    async update(newPatientId: string, adminId: ObjectId): Promise<ObjectId> {

        let admin_old = this.getSingle(adminId)

        let updated_admin = admin_old
        ;(await updated_admin).patients.push(newPatientId)

        const admin = await this.adminModel.findByIdAndUpdate({_id: adminId}, updated_admin, {
            new: true
        })

        return admin._id
    }
}