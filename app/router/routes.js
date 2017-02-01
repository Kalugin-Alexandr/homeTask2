"use strict";
//
// const router = require("koa-router")();
//
//
// router.get('/users', async (ctx, next) => {
//    ctx.body = '/users';
// });
//
// module.exports = {
//     routes: router.routes,
//     allowedMethods: router.allowedMethods
// };

module.exports = function(app) {
    const Router = require('koa-router');
    const path = require('path');
    const router = new Router();
    const bodyParser = require('koa-bodyparser');

    var userController = require("../controllers/userController")(app);
    var purcasesController = require("../controllers/purcasesController")(app);
    router.get('/', function (ctx, next) {
        ctx.body = 'Hello World';
    })

    .get("/users", userController.getAll)
    .get("/users/:id", userController.getUserId)
    .post("/users", bodyParser(), userController.postUsers)
    .put("/users/:id", bodyParser(), userController.putUsers)
    .del("/users/:id", userController.delUsers)

    .get("/purcases/:id", purcasesController.getPurcasesId)
    .post("/purcases/:id", bodyParser(),purcasesController.postPurcases)
    .del("/purcases/:id", purcasesController.delPurcases);

    app.use(router.routes());
    app.use(router.allowedMethods());
};