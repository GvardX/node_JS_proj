'use strict'

const mongoose = require('mongoose'),
Schema = mongoose.Schema,
    SliderSchema = new Schema({
        title: {
            type: String,
            required: [true, "Укажите заголовок работы"]
        },
        description: {
            type: String,
            required: [true, "Укажите используемые технологии"]
        },
        link: {
            type: String,
            required: [true, "Укажите ссылку на сайт"]   
        },
        picture: {
            type: String
        }
    });
    mongoose.model('slider', SliderSchema);
