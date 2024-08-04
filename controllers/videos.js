// Import the model that we exported in the Todo.js model file
import { Video } from "../models/video.js"

async function index(req, res) {
  try {
    const videos = await Video.find({})
    res.render('videos/index', {
    videos
  })
  } catch (error) {
    console.log(error)
    res.redirect('/')
  }
  
}

async function newVideo(req, res) {
  res.render('videos/new')
}

async function create(req, res) {
  try {
   req.body.watched = false
   await Video.create(req.body)
   res.redirect('/videos')
  } catch (error) {
    console.log(error)
    res.redirect('/videos')
  }
}

async function show(req, res) {
  try {
    const video = await Video.findById(req.params.videoId)
    res.render('videos/show', {
      video
    })
  } catch (error) {
    console.log(error)
    res.redirect('/videos')
  }
}

async function deleteVideo(req, res) {
try {
  await Video.findByIdAndDelete(req.params.videoId)
  res.redirect('/videos')
} catch (error) {
  console.log(error)
  res.redirect('/videos')
}
}

export {
  index,
  newVideo as new,
  create,
  show,
  deleteVideo as delete,
}