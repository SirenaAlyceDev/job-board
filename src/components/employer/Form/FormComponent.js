import React, { useState, useEffect } from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { createPost, updatePost } from "../../../actions/posts.js";

function Form({ currentId, setCurrentId }) {
  const [postData, setPostData] = useState({
    title: "",
    location: "",
    experience: "",
    salary: "",
    remote: "",
    position: "",
    closing: new Date(),
    details: "",
  });
  const post = useSelector((state) => currentId ? state.posts.find((p) => p._id === currentId) : null );

  const dispatch = useDispatch();

  useEffect(() => {
    if(post) setPostData(post);
  }, [post])

  const handleSubmit = (e) => {
    e.preventDefault();
   
    if(currentId) {
      dispatch(updatePost(currentId,postData));
    } else {
      dispatch(createPost(postData));
    }
    clear();
  };

  const clear = () => {
    setCurrentId(null);
    setPostData({ title: "",
    location: "",
    experience: "",
    salary: "",
    remote: "",
    position: "",
    closing: new Date(),
    details: "",})
  };

  return (
    <Paper>
      <form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Typography variant="h6">{currentId ? "Editing" : "Creating"} A Job Post</Typography>
        <TextField name="title" variant="outlined" label="Title" fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />

         <TextField
          name="location"
          variant="outlined"
          label="Location"
          fullWidth
          value={postData.location}
          onChange={(e) =>
            setPostData({ ...postData, location: e.target.value })
          }
        />
        <TextField
          name="experience"
          variant="outlined"
          label="Experience"
          fullWidth
          value={postData.experience}
          onChange={(e) =>
            setPostData({ ...postData, experience: e.target.value })
          }
        />
        <TextField
          name="salary"
          variant="outlined"
          label="Salary"
          fullWidth
          value={postData.salary}
          onChange={(e) => setPostData({ ...postData, salary: e.target.value })}
        />
        <TextField
          name="remote"
          variant="outlined"
          label="Remote"
          fullWidth
          value={postData.remote}
          onChange={(e) => setPostData({ ...postData, remote: e.target.value })}
        />
        <TextField
          name="position"
          variant="outlined"
          label="Position"
          fullWidth
          value={postData.position}
          onChange={(e) =>
            setPostData({ ...postData, position: e.target.value })
          }
        />
        <TextField
          name="closing"
          variant="outlined"
          label="Closing"
          fullWidth
          value={postData.closing}
          onChange={(e) =>
            setPostData({ ...postData, closing: e.target.value })
          }
        />
        <TextField
          name="details"
          variant="outlined"
          label="Details"
          fullWidth
          multiline
          rows="5"
          value={postData.details}
          onChange={(e) =>
            setPostData({ ...postData, details: e.target.value })
          }
        />      
        <Button variant="contained" type="submit" fullWidth>
        {currentId ? "Editing" : "Add"} Job Listing
        </Button>
        <Button variant="contained" onClick={clear} fullWidth>
          Clear
        </Button>
      </form>
    </Paper>
  );
}

export default Form;
