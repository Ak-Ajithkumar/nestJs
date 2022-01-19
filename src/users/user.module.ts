import { userController } from "./user.controller";
import { Module } from "@nestjs/common";
import { UserService } from "./user.service";

@Module({
    imports:[UserModule],
    controllers:[userController],
    providers:[UserService],
})

export class UserModule{}