import Movie from "../models/movie.model.js";

// Defining a seperate controller method to show movies index file.
export const MovieIndex = (req, res) => {
    res.send("Get all movie lists");
}

// Add new movie details
export const MovieCreate = async (req, res) => {
    // id, title, desc
    // console.log(req.body);

    // Validate the data
    const newMovie = new Movie({
        title: req.body.title,
        desc: req.body.desc
    })

    try {
        const movie = await newMovie.save();
        return res.status(201).json(movie);
    } catch (error) {
        return res.status(400).json({msg: error.message});
        
    }
    // return res.json(req.body)
}

// Update Movie detail
export const MovieUpdate = (req, res) => {
    res.send("Update a movie");
}

// Delete Movie detail
export const MovieDelete = (req, res) => {
    res.send("Delete a movie");
}