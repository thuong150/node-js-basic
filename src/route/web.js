import express from "express";
import homeController from '../controller/homeController';

let router = express.Router();

const initWebRoute = (app) => {
    // router.get('/about', (req, res) => {
    //     res.send('Hello World! thuong dz')
    // })
    router.get('/', homeController.getHomePage);
    router.get('/detail/user/:id', homeController.getDetaiPage);
    router.post('/create-new-user', homeController.createNewUser);
    router.post('/delete-user', homeController.deleteUser);
    router.get('/edit-user/:id', homeController.getEditPage);
    router.post('/update-user', homeController.postUpdateUser);

    return app.use('/', router); //giống prefix laravel
}

export default initWebRoute;