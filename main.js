import express from "express";
import movieRoutes from "./routes/movies.route.js";
import connectDB from "./lib/db.js";


const app = express();
const PORT = 6969;

// When sending the request body to server (API), it can't undersatnd the json format request.
// So we need to use middleware to parse the json format request.
app.use(express.json())

connectDB();

app.get('/', (req, res) => {

    res.json({msg: "Hello students"})
})

// CRUD functionality of movies.
app.use('/movies', movieRoutes);



app.listen(PORT, () => {
    console.log(`The server is running at http://localhost:${PORT}`);
})