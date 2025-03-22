import { Request, Response } from 'express';
import User from '../models/Users';
import { hashPassword } from '../utils/auth';
import { validationResult } from 'express-validator';

export const createAccount = async(req: Request, res: Response)=>{

    let errors = validationResult(req);
    console.log(errors)
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }

    const {name, password, email, username } = req.body;

    const userExists = await User.findOne({email});
    if(userExists){
        res.status(400).json({message: "Correo ya existe."});
        return;
    }

    const usernameExists = await User.findOne({username});
    if(usernameExists){
        res.status(400).json({message: "Usuario ya existe."})
        return;
    }

    const user = new User(req.body);
    user.password = await hashPassword(password);
    await user.save();
    res.status(201).json({message: "Datos del usuario recibidos con éxito"});
}