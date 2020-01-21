import Slider from '../models/slider.model';
import {SLiderStatus} from "../config/constants";
import fs from 'fs';

class SliderService {
    async createSlider(image, data) {
        console.log(image);
        const {destination, originalname} = image;
        data.sliderImage = destination + '/' + originalname;
        data.statusSlider = SLiderStatus.ACTIVE;
        data.createdAt = Date.now();
        return Slider.create(data);
    }

    async findAllSliders() {
        return Slider.find({statusSlider: {$eq: SLiderStatus.ACTIVE}});
    }

    async findSlider(id) {
        return await Slider.findById(id);
    }

    async updateSlider(id, data, image) {
        let slider = await this.findSlider(id);
        console.log(slider, image);
        const {destination, originalname} = image;
        let files= await this.readFileUploads();
        await this.deleteFile(files, slider.sliderImage);
        data.sliderImage = destination + '/' + originalname;
        slider.title = data.title;
        slider.subTitle = data.subTitle;
        slider.sliderImage = data.sliderImage;
        slider.updateAt = Date.now();
        // if (slider.sliderImage !== sliderImageNew){
        //     slider.sliderImage = sliderImageNew;
        //     await this.deleteFile(files, slider.sliderImage);
        // }
        return Slider.create(slider);
    }

    async readFileUploads() {
        return fs.readdirSync('uploads/sliders');
    }

    async deleteFile(files,directoryPath){
        for (let i = 0; i < files.length; i++) {
            if ('uploads/sliders/'+ files[i] === directoryPath){
                fs.unlink('uploads/sliders/' + files[i], function (err) {
                    if (err) throw err;
                    // if no error, file has been deleted successfully
                    console.log('File deleted!');
                });
            }
        }
    }
}

export default SliderService;
