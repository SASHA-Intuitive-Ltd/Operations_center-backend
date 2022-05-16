import { Injectable } from "@nestjs/common"
import { InjectModel } from "@nestjs/mongoose"
import { Model } from "mongoose"
import { ObjectId } from "mongoose"
import { CreateDeviceDao } from "./device.dao"
import { DeviceSchema, Device, DeviceDocument } from "./device.schema"


@Injectable()
export class DeviceService { 
    constructor(
        @InjectModel(Device.name) private adminModel: Model<DeviceDocument>,
    ) {}

    // Add admin to DB
    async create(dao: CreateDeviceDao): Promise<Device> {
        const admin = await this.adminModel.create({...dao})
        console.log(admin)
        return admin
    }

    // Get all admin from DB
    async getAll(): Promise<Device[]> {
        const admin = await this.adminModel.find()
        return admin
    }

    // Get single admin from DB
    async getSingle(id: ObjectId): Promise<Device> {
        const admin = await this.adminModel.findById(id)
        return admin
    }

    // Delete single admin from DB
    async delete(id: ObjectId): Promise<ObjectId> {
        const admin = await this.adminModel.findByIdAndDelete(id)
        return admin._id
    }

    // // Update admin
    // async update(newPatientId: string, adminId: ObjectId): Promise<Device> {

    //     let admin_old = this.getSingle(adminId)

    //     let updated_admin = admin_old
    //     ;(await updated_admin).patients.push(newPatientId)

    //     // console.log("Update doc: " + (await updated_admin))
    //     console.log("Update list: " + (await updated_admin).patients)

    //     await this.adminModel.updateOne({_id: adminId}, (await updated_admin), {
    //         new: true
    //     })

    //     const admin = this.getSingle(adminId)

    //     return (await admin)
    // }
}