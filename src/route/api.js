import express from "express";
import APIController from "../controller/APIController";
let router = express.Router();

const initAPIRoute = (app) => {
    router.get('/users', APIController.getAllUsers);
    router.post('/create-user', APIController.createNewUser);//create data
    router.put('/update-user', APIController.updateUser);//create data
    router.delete('/delete-user/:id', APIController.deleteUser);//create data







    return app.use('/api/v1', router); //giống prefix laravel
}

export default initAPIRoute;