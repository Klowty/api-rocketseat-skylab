const mongoose = require('mongoose');

const Product = mongoose.model('Product');

module.exports = {
    //listagem
    async index(req, res){
        // const products = await Product.find();
        const { page = 1 } = req.query;
        const products = await Product.paginate({}, { page, limit: 10 });

        return res.json(products);
    },

    async store(req, res){
        //criação
        const product = await Product.create(req.body); //req.body => todo o corpo da requisição

        return res.json(product);
    },

    async show(req, res){
        //detalhes
        const product = await Product.findById(req.params.id);

        return res.json(product);
    },

    async update(req, res){
        //atualizar
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });

        return res.json(product);
    },

    async destroy(req, res){
        //deletar
        const product = await Product.findByIdAndDelete(req.params.id);
        
        return res.json("deu bom");
    }
};