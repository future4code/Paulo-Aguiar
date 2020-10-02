import express, { Request, Response } from "express";
import { AddressInfo } from "net";
import UserController from "./controller(API)/UserController";
import dotenv from "dotenv"

dotenv.config();
const app = express();
app.use(express.json());

app.get("/teste", async (req: Request, res: Response) => {
    try {
        res.status(200).send("Oi, seu server está funcionando!");
    } catch (error) {
        res.status(400).send("ERRO");
    }
});

const server = app.listen(3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});

const userController = new UserController()

app.put('/signup', userController.signup)
app.post('/login', userController.login)
app.get('/all', userController.getAllUsers)
app.delete('/delete/:id', userController.deleteUserById)


