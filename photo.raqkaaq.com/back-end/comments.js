const mongoose = require('mongoose');
const express = require("express");
const router = express.Router();
const users = require("./users.js");
const User = users.model;
const validUser = users.valid;
const photos = require("./photos.js");
const Photo = photos.model;
const commentSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User'
    },
    photo: {
        type: mongoose.Schema.ObjectId,
        ref: 'Photo'
    },
    description: String,
    created: {
        type: Date,
        default: Date.now
    },
})
const Comment = mongoose.model('Comment', commentSchema);
router.post("/:id", validUser, async (req, res) => {
    try{
    let photo = await Photo.findOne({ _id: req.params.id })
    const comment = new Comment({
        user : req.user,
        photo : photo.id,
        description : req.body.description,
    });
    
        await comment.save();
        return res.sendStatus(200);

    } catch (error) {
        console.log(error);
        return res.sendStatus(500);
    }
});
router.get("/:id", async (req, res) => {
    try {
        let comments = await Comment.find({photo: req.params.id}).sort({
            key: -1,
        }).populate('user')
        return res.send(comments);
    } catch (error) {
        console.log(error);
        return res.sendStatus(500);
    }
})
module.exports = {
    model: Comment,
    routes: router,
}
