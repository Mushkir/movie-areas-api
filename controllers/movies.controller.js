// Defining a seperate controller method to show movies index file.
export const MovieIndex = (req, res) => {
    res.send("Get all movie lists");
}

// Add new movie details
export const MovieCreate = (req, res) => {
    res.send("Add movie details");
}

// Update Movie detail
export const MovieUpdate = (req, res) => {
    res.send("Update a movie");
}

// Delete Movie detail
export const MovieDelete = (req, res) => {
    res.send("Delete a movie");
}