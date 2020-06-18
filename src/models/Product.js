const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate'); //ORGANIZAÇÃO, PAGAINAÇÃO NO DB

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    cratedAt: { //guardar a data de crialçao do schema
        type: Date,
        default: Date.now,
    },
});

ProductSchema.plugin(mongoosePaginate); //add o mongoose paginate

mongoose.model('Product', ProductSchema);