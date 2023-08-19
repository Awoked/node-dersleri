import express, { Request, Response } from "express";

const app = express();
const router = express.Router();
const port = 8181;

app.use(router);

interface IUser {
    id: string;
    userName: string;
    password: string;
    email?: string | null;
    phone?: number | null;
}

const newUser: IUser = {
    id: "1",
    userName: "Alper",
    password: "1234",
    email: undefined,
    phone: undefined
}

router.get('/', (req: Request, res: Response) => {
    const arr: IUser[] = [
        {
            id: "2",
            userName: "alper",
            password: "1231313",
        },
        {
            id: "2",
            userName: "ilayda",
            password: "1231313",
        },
    ]

    res.status(200);
    res.json(arr)
})

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
})

console.log(process.env.NODE_ENV)