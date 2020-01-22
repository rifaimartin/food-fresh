import express from 'express';
import employeRouter from './employe.route'

export default express.Router()
    .use('/employes', employeRouter)
