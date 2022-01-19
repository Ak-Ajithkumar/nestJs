import { Get, Injectable } from "@nestjs/common";
import { User } from "./user.model";
import {v4 as uuidv4} from 'uuid'

@Injectable()
export class UserService{
    private users : User[] = [];
    userService: any;

    insertUser(name:string ,age:number){
        const id = uuidv4()
        const newUser = new User(id,name,age)
        this.users.push(newUser)
        return id;
    }

   getUsers(){
        return [... this.users]
    }

   getUser(id:string){
       return this.getUserById(id)[0 ]
   }

   updateUser(id :string,name:string,age:number)
   {
    const [targetUser,index] =this.getUserById(id);
    const nup = {
        ...targetUser,
         name,
        age
    }
    const newUser = new User(id,nup.name,nup.age)
    this.users[index] = newUser;
    return newUser;

   }
   deleteUser(id:string){
    const [_,index] = this.getUserById(id)
    this.users.splice(index,1)
 }

   private getUserById(id:string):[User,number]  {
      const index=  this.users.findIndex((u)=>u.id === id);
      return[this.users[index],index]
   }

   
    
}

