const express = require("express");
const routes = express.Router();

    const ProductController = require('./controllers/ProductController');

    routes.get("/products", ProductController.index);
    routes.post("/products", ProductController.store); //POST -> CRIAÇÃO
    routes.get("/products/:id", ProductController.show);
    routes.put("/products/:id", ProductController.update); //PUT -> UPDATE
    routes.delete("/products/:id", ProductController.destroy); //PUT -> UPDATE

module.exports = routes;