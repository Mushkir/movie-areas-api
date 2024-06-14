import express from "express";


const app = express();
const PORT = 6969;

app.get('/', (req, res) => {

    res.json({msg: "Hello students"})
})

// CRUD functionality of movies.
// 1. R - Read all movies
app.get('/movies', (req, res) => {

})

// 2. C - For creating / adding movies.
app.post('/movies', () => {

})

// 3. U - For updating movie.
app.put('/movies/:id', () => {

})

// D - For delete movie.
app.delete('/movies/:id', () => {

})


app.listen(PORT, () => {
    console.log(`The server is running at http://localhost:${PORT}`);
})