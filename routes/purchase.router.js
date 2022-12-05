import express from "express";
import purchaseModel from "../models/purchase.model.js";

const purchaseRoute = express.Router();

// ## Iteração 3: Crie as rotas `/purchases`

// ### 3.1 Crie a rota `POST /purchases`

purchaseRoute.post("/purchase", async (req, res) => {
  try {
    const newPurchase = await purchaseModel.create(req.body);
    return res.status(201).json(newPurchase);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error.errors);
  }
});

// ### 3.2 Crie a rota `GET /purchases/:purchaseId`

purchaseRoute.get("/purchase/:purchaseId", async (req, res) => {
  try {
    const { purchaseId } = req.params;
    const purchase = await purchaseModel.findById(purchaseId);
    return res.status(200).json(purchase);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error.errors);
  }
});

export default purchaseRoute;
