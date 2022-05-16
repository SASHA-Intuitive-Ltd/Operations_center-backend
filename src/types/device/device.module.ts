/**
 * @Author Ruben Rudov
 * @Purpose Contain all MVCs stuff of the app
 */

// Imports
import { Module } from "@nestjs/common"
import { DeviceController } from "./device.controller";
import { DeviceService } from "./deivce.service";
import { MongooseModule } from '@nestjs/mongoose'
import { Device, DeviceSchema } from "./device.schema";

@Module({
    imports: [
        MongooseModule.forFeature([{name: Device.name, schema: DeviceSchema}]),
    ],
    controllers: [DeviceController],
    providers: [DeviceService]
})

export class DeviceModule {}