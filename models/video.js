import mongoose from 'mongoose'

// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema

const videoSchema = new Schema({
  videoType: String,
  title: String,
  watched: Boolean,
})

// Compile the schema into a model and export it
const Video = mongoose.model('Video', videoSchema)

export {
  Video
}
