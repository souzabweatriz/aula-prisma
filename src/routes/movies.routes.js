import express from "express";
import MovieController from "../controllers/movies.controller.js";
const movieRouter = express.Router();

movieRouter.get("/api/movies", MovieController.findAll);
movieRouter.post("/api/movies", MovieController.create);

export default movieRouter;