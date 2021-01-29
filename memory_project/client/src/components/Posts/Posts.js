import React from 'react';
import  { Grid, CircularProgress } from '@material-ui/core';
import Post from './Post/Post';
import { useSelector } from 'react-redux';
import useStyles from './styles';

const Posts = ({ setCurrentId }) => {
    // initialize as a hook. this state will get access to whole global redux Store/State.
    const posts = useSelector((state) => state.posts);
    const classes = useStyles();

    // console.log(posts);

    return (
        !posts.length ? <CircularProgress /> : (
            <Grid className={classes.container} container alignItems="stretch" spacing={3} >
                {posts.map((post) => (
                    <Grid item key={post._id} xs={12} sm={6}>
                        <Post post={post} setCurrentId={setCurrentId} />
                    </Grid>
                ))}
            </Grid>
        )
    );
}
export default Posts;