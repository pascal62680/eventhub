/* import userModel from "../Models/users.model.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config();

async function register(req,res) {
    try {
        const body = req.body;
        body.password = bcrypt.hashSync(body.password, 10);
        const inserted = await userModel.insert(body);
        res.status(201).json(inserted)
    } catch (error) {
        res.status(500).json({error : "Une erreur est survenue lors de l'inscription "});
    }
}

async function login(req,res) {
    try {
        // Récupère le body envoyé par postman/appli
        const body = req.body;
        // Jé vérifie que on m'envoie un login et un password
        if( !body.login || !body.password){
            return res.status(403).json({error : "Indentifiant incorrect"});
        }
        // Je vérifie que mon user existe bien avec ce login
        const user = await userModel.getByLogin(body.login);
        if(!user){
            return res.status(403).json({error : "Indentifiant incorrect"});
        }
        // Jé vérifie que le mot de passe correspond bien
        const compare = bcrypt.compareSync(body.password, user.us_password);
        if (!compare) {
            return res.status(403).json({error : "Indentifiant incorrect"});
        }
        // Je créé mon jeton d'accès(TOKEN)
        const token = jwt.sign({
            user : user
        }, process.env.JWT_SECRET, { "expiresIn" : "1h"})

        res.json(token);
    } catch (error) {
        res.status(500).json({error : "Une erreur est survenue lors de la connexion "});
    }
}

export default {
    register,
    login
} */