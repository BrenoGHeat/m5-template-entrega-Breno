import { Request , Response} from "express";
import { TasksServices } from "../services/tasks.services";

export class TasksControllers{
    async getTasks( req: Request, res: Response){

        const tasksServices = new TasksServices();

        const tasks = await tasksServices.getTasks();

        return res.status(200).json(tasks);
    } 

    deleteTask( req: Request, res: Response): Response{

        const tasksServices = new TasksServices();

        const id = req.body.id;

        tasksServices.deleteTask(id);

        return res.status(204).send();
       
    }

    createTask( req: Request, res: Response): Response{

        const tasksServices = new TasksServices();

        const body = req.body;

        const task = tasksServices.createTask(body);

        return res.status(201).json(task);

    }

    updateTask( req: Request, res: Response): Response{

        const tasksServices = new TasksServices();

        const body = req.body;

        const updateTask = tasksServices.updateTask();

        return res.status(201).send(updateTask);

    }

    getTaskById(){

        const tasksServices = new TasksServices();

    }


}