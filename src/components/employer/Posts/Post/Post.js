// singular post component
import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import moment from 'moment';

function Post({ post, setCurrentId }) {
  return (
    <Card>
      <div>
        <Typography variant="h6">{post.title}</Typography>
        <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
      </div>
      <div>
        <Button size="small" onClick={() => setCurrentId(post._id)}>
          <MoreHorizIcon fontSize="default" />
        </Button>
      </div>
      <CardContent>
        <Typography variante="body2" color="textSecondary">
          Job Posting Details
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          LOCATION: {post.location}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          EXPERIENCE: {post.experience}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          SALARY: {post.salary}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          REMOTE: {post.remote}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          POSITION: {post.position}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          CLOSING DATE: {post.closing}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          JOB DETAILS: <br />{post.details}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary" onClick={() => {}}>
          <DeleteIcon fontSize="small" />
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}

export default Post;
