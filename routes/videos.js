import { Router } from 'express'
import * as videosCtrl from '../controllers/videos.js'

const router = Router()

// GET localhost:3000/videos
router.get('/', videosCtrl.index)

router.get('/new', videosCtrl.new)

router.post('/', videosCtrl.create)

router.get('/:videoId', videosCtrl.show)

router.delete('/:videoId', videosCtrl.delete)

export { router }
