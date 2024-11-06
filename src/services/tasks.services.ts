import { prisma } from "../database/prisma";
import { TTaskCreate , TResponseTaskSchemaWithCategory, TupdateTaskSchema, TTaskResponseWithoutCategory } from "../interfaces/tasks.interfaces";

export class TasksServices{
   async getTasks(){
        const tasks = await prisma.task.findMany();

        return tasks;

    } 

    deleteTask(id: number){


       
    }

    createTask(body: TTaskCreate){

        const task = prisma.task.create({ data: body})

        return task;

    }

    updateTask(){
    

    }

    getTaskById(body: TResponseTaskSchemaWithCategory){
        
    }
}