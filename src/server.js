import express from 'express';
import configViewEngine from './configs/viewEngine';//Gọi hàm configViewEngine đã export ở file configs/viewEngine
import initWebRoute from './route/web';
import connection from './configs/connectDB';

require('dotenv').config();

const app = express()
const port = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));// dòng1
app.use(express.json());//dòng 2 : cấu hình 2 dòng này để gọi req.body bên controller

//setup view engine
configViewEngine(app);

//init web route 
initWebRoute(app);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})