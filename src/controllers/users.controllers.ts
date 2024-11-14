import { inject, injectable } from "tsyringe";
import { UsersServices } from "../services/users.services";

@injectable()
export class UsersControllers{
    constructor(@inject("UserServices") private usersServices: UsersServices ){}

    async register(){

    }


    async login(){
        
    }



}