import Movie from "../models/movie.model.js";

// Defining a seperate controller method to show movies index file.
export const MovieIndex = async (req, res) => {

    try {

        const moviesList = await Movie.find();
        res.status(200).json({moviesList});

    } catch (error) {
        res.status(500).json({msg: error.message})
    }  
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

// View selected movie detail
export const MovieShow = async (req, res) => {
    
    try {
        const movieInfo = await Movie.findById(req.params.id);

        if (movieInfo == null) {
            return res.status(404).json({msg: "Movie not found"});
        } else {
            res.json(movieInfo);
        }
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
    
    // res.send("View selected movie detail")
}

// Update Movie detail
export const MovieUpdate = async (req, res) => {
    // res.send("Update a movie");

    try {
        
        const result = await Movie.findOneAndUpdate({_id: req.params.id}, {
            title:  req.body.title,
            desc: req.body.desc
        },
        {
            new: true
        }
    )

        res.status(200).json(result);

    } catch (error) {
        res.status(400).json({msg: error.message})
    }
}

// Delete Movie detail
export const MovieDelete = async (req, res) => {
    // res.send("Delete a movie");
    try {
        const movieId = req.params.id;

        // const doc = await Movie.findOneAndDelete({_id: movieId})
        await Movie.deleteOne({_id: movieId})

        res.json({messsage: "Movie deleted!"})
    // res.json(movieInfo)
    } catch (error) {
        res.json({msg: error.message})
    }
}