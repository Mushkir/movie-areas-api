// Defining a seperate controller method to show movies index file.
export const MovieIndex = (req, res) => {
    res.send("Get all movie lists");
}

// Add new movie details
export const MovieCreate = (req, res) => {
    // id, title, desc
    console.log(req.body);

    return res.json(req.body)
}

// Update Movie detail
export const MovieUpdate = (req, res) => {
    res.send("Update a movie");
}

// Delete Movie detail
export const MovieDelete = (req, res) => {
    res.send("Delete a movie");
}