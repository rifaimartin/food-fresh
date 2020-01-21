import express from 'express';
import bodyParser from 'body-parser';

export default express.Router()
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({extended: false}))

