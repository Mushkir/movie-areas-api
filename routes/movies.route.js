import express from "express";
import { MovieIndex, MovieShow} from "../controllers/movies.controller.js";
import { MovieCreate } from "../controllers/movies.controller.js";
import { MovieUpdate } from "../controllers/movies.controller.js";
import { MovieDelete } from "../controllers/movies.controller.js";

const router = express.Router();

// 1. R - Read all movies
router.get('/', MovieIndex);

// 2. C - For creating / adding movies.
router.post('/', MovieCreate);

// Read selected movie detail
router.get('/:id', MovieShow)

// 3. U - For updating movie.
router.put('/:id', MovieUpdate);

// D - For delete movie.
router.delete('/:id', MovieDelete);

// 5 oreppu
// Ithere palam 0.5kg

export default router;