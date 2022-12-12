import {NextFunction, Request, Response, Router} from "express";
import {StatusCodes} from 'http-status-codes';
const userRoute = Router();

userRoute.get('/users', (req: Request, res: Response, next: NextFunction) =>{
    const user = [{username: "Drakiz"}];
    res.status(StatusCodes.OK).json(user);
});

userRoute.get('/users/:uuid', (req: Request<{uuid: string}>, res: Response, next: NextFunction) =>{
    const uuid = req.params.uuid;
    res.status(StatusCodes.OK).send({uuid});
});

userRoute.post('/users',(req: Request, res: Response, next: NextFunction) =>{
    const newUser = req.body;
    res.status(StatusCodes.CREATED).send(newUser);
})

userRoute.put('/users/:uuid',(req: Request<{uuid: string}>, res: Response, next: NextFunction) =>{
    const uuid = req.params.uuid;
    const modifiedUser = req.body;

    modifiedUser.uuid = uuid;

    res.status(StatusCodes.CREATED).send({message: `Usuário editado com sucess`, modifiedUser});
})

userRoute.delete('/users/:uuid', (req: Request, res: Response, next: NextFunction) =>{
    res.sendStatus(StatusCodes.OK);
});

export default userRoute;