import React from "react";
import { Grid } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import Post from "./Post";
import * as actions from "../../redux/actions";
import { postsState$ } from "../../redux/selectors";
import banner from '../../images/banner.png'


export default function PostList() {
  const dispatch = useDispatch();
  const posts = useSelector(postsState$);

  console.log("[PostList - posts]", posts);

  React.useEffect(() => {
    dispatch(actions.getPosts.getPostsRequest());
  }, [dispatch]);
  return (
    <div className="product-container">
      <img src={banner} className='responsive' width='83%' height='600px' />
      {posts?.map((post) => (
        <Grid>
          <Post key={post._id} post={post} />
        </Grid>
      ))}
    </div>
  );
}
