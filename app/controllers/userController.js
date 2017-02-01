
module.exports = function (app) {
    const usersModel = require('../models/users');
    const bodyParser = require('koa-bodyparser');

    return{
        getAll: async(ctx, next) => {
            ctx.body = await usersModel.getAll();
        },
        getUserId: async(ctx, next) => {
            ctx.body = await usersModel.getById(ctx.params.id);
        },
        postUsers: async(ctx, next) => {

            let userId = await usersModel.add(ctx.request.body);

            if (typeof userId === 'number') {
                ctx.status = 201;
                ctx.body = {"id": userId};
            } else {
                ctx.status = 400;
            }
        },

        putUsers: async(ctx, next) => {
            try {
                await usersModel.update(ctx.params.id, ctx.request.body);
                ctx.status = 200;
            } catch (e) {
                ctx.status = 400;
            }
        },
        delUsers: async(ctx, next) => {
            try {
                await usersModel.remove(ctx.params.id)
                ctx.status = 204;
            } catch (e) {
                ctx.status = 400
            }
        }
    }
}