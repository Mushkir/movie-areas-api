import mongoose, { Schema } from "mongoose";

// Schema
const schema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    desc: {
        type: String,
        required: true
    }
});

// Model
const Movie = mongoose.model("Movie", schema);

export default Movie;