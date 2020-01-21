import express from 'express'
import configure from "./config";
import Connection from "./databases/connection";
import middleware from './middlewares/app-middleware';
import appRouter from './routes';

export async function app() {
    configure();
    try {
        const app = express();
        Connection();
        app.use(middleware);
        app.use(appRouter);
        return app;
    }catch (e) {
        throw e;
    }
}
