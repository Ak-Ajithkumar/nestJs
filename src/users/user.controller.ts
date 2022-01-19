import { Body, Controller, Delete, Get, Param, Post, Put  } from "@nestjs/common";
import { UserService } from "./user.service";

@Controller('users')
export class userController {
    
    constructor(private readonly userService:UserService){}

    @Get()
    getUsers(){ 
        return "hiiiiiiiiii"
        }

    @Post()
    insertUser(
        @Body('name')name :string,
        @Body('age')age :number
    ){
       const userId = this.userService.insertUser(name,age)
       return {
            id :userId ,
            // name:name,
            // age:age
            
            
       }
    }    
   @Get()
   getAllUsers(){
       return this.userService.getUsers() 
   }     

   @Get(":userId")
   getUser(@Param("userId")userId: string){
       return this.userService.getUser(userId)
 }
   
    @Put(":userId")
    updateUser(
        @Body('userId') userId:string,
        @Body('name')  name:string, 
        @Body("age") age:number
    ) 
{
       return this.userService.updateUser(userId,name,age)
   }

   @Delete(":userId")
   c (@Param("userId")userId:string){
       this.userService.deleteUser(userId)
   }
}