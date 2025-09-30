import express from "express";
import movieRouter from "./movies.routes.js";
// Importar todas as rotas

const router = express.Router();

// Rotas públicas

router.use('/movies', movieRouter);

export default router;