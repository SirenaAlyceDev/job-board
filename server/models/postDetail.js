import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  title: String,
  location: String,
  experience: String,
  salary: String,
  remote: String,
  position: String,
  closing: {
    type: Date,
  },
  details: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const PostDetail = mongoose.model("PostDetail", postSchema);

export default PostDetail;
