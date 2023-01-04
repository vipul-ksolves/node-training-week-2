// import express from "express";
const express = require("express")
const controller = require("./controller")
const router = express.Router()

router.get('/', controller.getBlogs)
router.get('/:id', controller.getBlogById)
router.post('/', controller.addBlog)
router.put('/:id', controller.updateBlog)
router.delete('/:id', controller.deleteBlogById)


// export default router;
module.exports = router;
