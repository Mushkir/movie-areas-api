import express from "express";


const router = express.Router();

// 1. R - Read all movies
router.get('/', (req, res) => {
    res.send("Get all movie lists");
})

// 2. C - For creating / adding movies.
router.post('/', (req, res) => {
    res.send("Add movie details");
})

// 3. U - For updating movie.
router.put('/:id', (req, res) => {
    res.send("Update a movie");
})

// D - For delete movie.
router.delete('/:id', (req, res) => {
    res.send("Delete a movie");

})

export default router;