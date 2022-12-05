import express from "express";
import albumModel from "../models/album.model.js";

const albumRoute = express.Router();

// ## Iteração 2 Crie as rotas **`/albums`**

// ### 2.1 Crie a rota `POST /albums`

albumRoute.post("/albums", async (req, res) => {
  try {
    console.log(req.body);
    const newAlbum = await albumModel.create(req.body);
    return res.status(201).json(newAlbum);
  } catch (error) {
    console.log(error);
    return res.status(500).json(newAlbum);
  }
});

// ### 2.2 Crie a rota `GET /albums`

albumRoute.get("/albums", async (req, res) => {
  try {
    const albums = await albumModel.find();
    return res.status(201).json(albums);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error.errors);
  }
});

//  2.3 Crie a rota GET /albums/:albumId

albumRoute.get("/albums/:albumId", async (req, res) => {
  try {
    const { albumId } = req.params;
    const album = await albumModel.findById(albumId);
    return res.status(200).json(album);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error.errors);
  }
});

// 2.4 Crie a rota PUT /albums/:albumId

albumRoute.put("/albums/:albumId", async (req, res) => {
  try {
    const { albumId } = req.params;
    const updateAlbum = await albumModel.findByIdAndUpdate(
      albumId,
      { ...req.body },
      { new: true, runValidators: true }
    );
    return res.status(200).json(updateAlbum);
  } catch (error) {
    console.log(error);
    return res.status(400).json(error.errors);
  }
});

// 2.5 Crie a rota DELETE /albums/:albumId

albumRoute.delete("/albums/:albumId", async (req, res) => {
  try {
    const { albumId } = req.params;
    const deleteAlbum = await albumModel.findByIdAndDelete(albumId);
    return res.status(200).json(deleteAlbum);
  } catch (error) {
    console.log(error);
    return res.status(400).json(error.errors);
  }
});

export default albumRoute;
