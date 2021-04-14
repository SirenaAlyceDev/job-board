import mongoose from "mongoose";
import PostDetail from "../models/postDetail.js"

export const getPosts = async (req, res) => {
  try {
    const postDetail = await PostDetail.find();
    console.log(postDetail)
    res.status(200).json(postDetail);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createPost = async (req, res) => {
    console.log(req.body)
    const post = req.body;
    console.log(post)

    const newPost = new PostDetail(post);

    try {
       await  newPost.save();
       console.log(newPost)
       res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
};

export const updatePost = async (req, res) => {
  const { id: _id } = req.params;
  const post = req.body;

  if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with that id');


  const updatedPost = await PostDetail.findByIdAndUpdate(_id,   {...post, _id}, { new: true });

  res.json(updatePost);

};

export const deletePost = async (req, res) => {
  const { id } = req.params;

  if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with that id');

  await PostDetail.findByIdAndRemove(id);

  res.json({message: 'Post deleted successfully'})
}