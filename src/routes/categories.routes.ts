import { Router , Request, Response} from "express";

export const categoriesRouter = Router();

categoriesRouter.post("/" , (req: Request, res: Response) => {
    return res.status(201).json({ message: "Criação Realizada com sucesso!" });
});

categoriesRouter.delete("/:id" , (req: Request, res: Response) => {
    return res.send("Exclusão realizada com sucesso");
});
