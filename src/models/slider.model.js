import mongoose from 'mongoose'
import normalize from 'normalize-mongoose';
const {Schema} = mongoose;

const SliderModel = new Schema({
    _id: {type: Schema.ObjectId, auto: true},
    title: {type: String, required: true},
    subTitle: {type: String, required: true},
    sliderImage: {type: String, required: true},
    statusSlider: {type: String},
    createdAt: {type: Date},
    updateAt: {type: Date}
});

SliderModel.plugin(normalize);
const Slider = mongoose.model('slider', SliderModel);
export default Slider;
