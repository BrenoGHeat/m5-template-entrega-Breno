import { Request , Response} from "express";
import { TasksServices } from "../services/tasks.services";
import { prisma } from "../database/prisma";
import { inject, injectable } from "tsyringe";

@injectable()
export class TasksControllers{
    constructor(@inject("TasksServices") private tasksServices: TasksServices ){}
    async getTasks( req: Request, res: Response){


        const search = req.query.category as string;

        if(search){
            const tasks = await this.tasksServices.getTasks(search);

             return res.status(200).json(tasks);

        }

        const tasks = await this.tasksServices.getTasks();

        return res.status(200).json(tasks);
    } 

    async deleteTask( req: Request, res: Response){

       await this.tasksServices.deleteTask(Number(req.params.id));

        return res.status(204).send();
       
    }

    async createTask( req: Request, res: Response){

        const body = req.body;

        const task = await this.tasksServices.createTask(body);

        return res.status(201).json(task);

    }

    async updateTask( req: Request, res: Response){

        const body = req.body;

        const id = Number(req.params.id);

        const updateTask = await this.tasksServices.updateTask(body, id);

        return res.status(200).json(updateTask);

    }

    async getTaskById(req: Request, res: Response){

        const taskById = await this.tasksServices.getTaskById(Number(req.params.id))

        return res.status(200).json(taskById);

    }

}