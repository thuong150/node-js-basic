import express from "express";

const configViewEngine = (app) => {
    app.use(express.static('./src/public'))

    app.set("view engine", "ejs"); //cấu hình view engine của  nó là ejs
    app.set("views", "./src/views");//Làm cho express biết tìm file ejs ở đâu
}

export default configViewEngine;