const express = require('express');
const {getAllBlog, singleBlog, createBlog, deleteBlog, updateBlog, myBlog} = require('../controllers/blogController')
const requireAuth = require('../middleware/requireAuth')

const router = express.Router()


// // all blogs
router.get('/', getAllBlog)


// single blog
router.get('/:id', singleBlog)

////Authenticated user
router.use(requireAuth)


// //new blog
router.get('/my-blog', myBlog)


// //new blog
router.post('/', createBlog)

// //delete blog
router.delete('/:id', deleteBlog)

// //update a blog
router.put('/:id', updateBlog)


module.exports = router