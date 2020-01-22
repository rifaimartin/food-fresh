import express from 'express';
import EmployeService from "../services/employe.service";
import Employe from '../models/employe.model';

const employeService = new EmployeService();

const employeRouter = express.Router()
    .post('/', async (req, res) => {
        try {
            let employe = await employeService.createEmploye(req.body);
            res.status(200).send({
                STATUS: 200,
                MESSAGE: 'Created successfully',
                DATA: employe
            })
        } catch (e) {
            console.log(e);
            res.status(500).send({
                STATUS: 500,
                MESSAGE: 'INTERNAL SERVER ERROR'
            })
        }
    })

    .get('/', async (req, res) => {
        try {
            let employes = await employeService.findAllEmployes();
            res.status(200).send({
                STATUS: 200,
                MESSAGE: "SUCCESS",
                DATA: employes
            })
        } catch (e) {
            console.log(e);
            res.status(500).send({
                STATUS: 500,
                MESSAGE: 'INTERNAL SERVER ERROR'
            })
        }
    })

    .get('/:id', async (req, res) => {
        try {
            let id = req.params.id;
            console.log(id, "INI ADALAH ID")
            let employes = await employeService.findEmploye(id);
            if (!employes) {
                res.status(404).send({
                    STATUS: 404,
                    MESSAGE: 'EMPLOYE NOT FOUND'
                })
            } else {
                res.status(200).send({
                    STATUS: 200,
                    MESSAGE: "SUCCESS",
                    DATA: employes
                })
            }
        } catch (e) {
            console.log(e);
            res.status(500).send({
                STATUS: 500,
                MESSAGE: 'INTERNAL SERVER ERROR'
            })
        }
    })

    .delete('/:id', async (req,res) => {
        try{
        let id = req.param.id
        let employes = await employeService.deleteEmploye(id)
        if(!employes){
            res.status(404).send({
                STATUS : 404,
                MESSAGE: "MAAF EMPLOYE TIDAK ADA"
            })
        }else{
            res.status(200).send({
                STATUS: 200,
                MESSAGE : "SUCCESS"
            })
        }
    }catch(e){
        console.log(e);
        res.status(500).send({
            STATUS : 500,
            MESSAGE: 'INTERNAL SERVER ERROR'
        })
    }
    })

    .put('/:id', async (req, res) => {
        try{
            const {id} = req.params;
            let body = {...req.body};
            let employe = await employeService.updateEmploye(id, body);
            res.status(200).send({
                STATUS: 200,
                MESSAGE: 'Updated employe successfully',
                DATA: employe
            })
        } catch (e) {
            console.log(e);
            res.status(500).send({
                STATUS: 500,
                MESSAGE: 'Internal Server Error'
            })
        }
    });

    

export default employeRouter;
