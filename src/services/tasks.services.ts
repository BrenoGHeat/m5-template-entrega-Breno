import { prisma } from "../database/prisma";
import { TTaskCreate } from "../interfaces/tasks.interfaces";

export class TasksServices{
    getTasks(){
      
    } 

    deleteTask(){
       
    }

    createTask(body: TTaskCreate){

        const task = prisma.task.create({ data: body})

        return task;

    }

    updateTask(){

    }

    getTaskById(){
        
    }
}