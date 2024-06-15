import mongoose, { Schema } from "mongoose";

// Schema
const schema = new Schema({
    title: String,
    desc: String
});

// Model
const Movie = mongoose.model("Movie", schema);

export default Movie;