import express from 'express';
import sliderRouter from './slider.route'

export default express.Router()
    .use('/sliders', sliderRouter)
