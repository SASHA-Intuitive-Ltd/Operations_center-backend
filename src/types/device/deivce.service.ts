import { Injectable } from "@nestjs/common"
import { InjectModel } from "@nestjs/mongoose"
import { Model } from "mongoose"
import { ObjectId } from "mongoose"
import { CreateDeviceDao } from "./device.dao"
import { DeviceSchema, Device, DeviceDocument } from "./device.schema"


@Injectable()
export class DeviceService { 
    constructor(
        @InjectModel(Device.name) private deviceModel: Model<DeviceDocument>,
    ) {}

    // Add device to DB
    async create(dao: CreateDeviceDao): Promise<Device> {
        const device = await this.deviceModel.create({...dao})
        console.log(device)
        return device
    }

    // Get all device from DB
    async getAll(): Promise<Device[]> {
        const device = await this.deviceModel.find()
        return device
    }

    // Get single device from DB
    async getSingle(username: string): Promise<Device> {
        const device = await this.deviceModel.findOne({"username": username})
        return device
    }

    // Delete single device from DB
    async delete(id: ObjectId): Promise<ObjectId> {
        const device = await this.deviceModel.findByIdAndDelete(id)
        return device._id
    }
}