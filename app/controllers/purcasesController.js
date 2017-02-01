
module.exports = function (app) {
    const purcasesModel = require('../models/purcases');
    const bodyParser = require('koa-bodyparser');

    return{
        getPurcasesId: async(ctx, next) => {
            ctx.body = await purcasesModel.getById(ctx.params.id);
        },
        postPurcases: async(ctx, next) => {

            let res = await purcasesModel.add(ctx.params.id, ctx.request.body);
            console.log(res);
            if (res) {
                ctx.status = 201;
                ctx.body = res;
            } else {
                ctx.status = 400;
            }
        },

        delPurcases: async(ctx, next) => {
            // if(typeof ctx.params.id === 'number'){
            //     console.log(1111);
                ctx.body = purcasesModel.remove( ctx.params.id);
            // }
        }
    }
}