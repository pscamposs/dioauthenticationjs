import express, {Request, Response, NextFunction} from 'express';
import userRoute from "./routes/user.route";
import statusRoute from "./routes/status.route";

const app = express();
app.use(express.json());

app.use(userRoute);
app.use(statusRoute);
app.get("/status", (req: Request, res: Response, next: NextFunction) => {
    res.status(200).send({message: "API Ativa e sem problemas!", timestamp: new Date().getTime()});
});

app.listen(3000, () => {
    console.log("Aplicação iniciada na porta 3000")
})