import express from 'express';
import SliderService from "../services/slider.service";
import upload from "../middlewares/uploadMiddleware";

const sliderService = new SliderService();

const sliderRouter = express.Router()
    .post('/', upload.single('sliderImage'), async (req, res) => {
        try {
            const file = req.file;
            if (!file || file.mimetype !== 'image/jpeg') {
                res.status(400).send({
                    STATUS: 400,
                    MESSAGE: "Please choose file image"
                })
            }
            let slider = await sliderService.createSlider(req.file, req.body);
            console.log(req.body);
            res.status(201).send({
                STATUS: 201,
                MESSAGE: 'Created successfully',
                DATA: slider
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
            let sliders = await sliderService.findAllSliders();
            res.status(200).send({
                STATUS: 200,
                MESSAGE: "SUCCESS",
                DATA: sliders
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
            let sliders = await sliderService.findSlider(id);
            if (!sliders) {
                res.status(404).send({
                    STATUS: 404,
                    MESSAGE: 'SLIDER NOT FOUND'
                })
            } else {
                res.status(200).send({
                    STATUS: 200,
                    MESSAGE: "SUCCESS",
                    DATA: sliders
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

    .put('/:id',upload.single('sliderImage'), async (req, res) => {
        try{
            const {id} = req.params;
            let body = {...req.body};
            const image = req.file;
            let slider = await sliderService.updateSlider(id, body, image);
            res.status(200).send({
                STATUS: 200,
                MESSAGE: 'Updated slider successfully',
                DATA: slider
            })
        } catch (e) {
            console.log(e);
            res.status(500).send({
                STATUS: 500,
                MESSAGE: 'Internal Server Error'
            })
        }
    });

export default sliderRouter;
