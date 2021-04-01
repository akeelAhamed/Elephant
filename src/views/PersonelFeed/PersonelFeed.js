import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import {
  Grid,
  Card,
  CardHeader,
  CardContent,
} from '@material-ui/core';
import {
  LatestSales,
  ProfitLoss
} from '../Common/Charts';
import MarketUpdate from "../Common/MarketUpdate";
import Slider from "../Common/Slider";
import Helper from '../../_services/Helper';
import { Post, AddPost } from "../Post";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2)
  },
  card: {
    background: theme.palette.background
  },
  title: {
    color: theme.palette.color,
    fontSize: theme.spacing(2.5)
  }
}));

const helper = new Helper();

const PostList = ((props) => {
  let postList = [];
  for (let i = 0; i < props.list.length; i++) {
    const element = props.list[i];
    postList.push(<Post key={i} data={element}/>);
  }

  return postList;
})

const PersonelFeed = () => {
  const classes = useStyles();
  const _default = {data: []};
  const [posts, setPosts] = useState(_default);
  const [loading, setLoading] = useState('block');

  const addPost = ((post) => {
    const newPosts = [...posts.data, post];
    setPosts((prevState) => ({
      ...prevState,
      data: newPosts,
    }));
    window.location.reload();
  });

  useEffect(() => {
    helper.api('/posts', function(response) {
      setLoading('none');
      if(response.status){
        setPosts(response.data);
      }
    }, {}, 'GET');
  }, []);

  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={1}
      ><Grid
          item
          sm={8}
          xs={12}
        >

          <AddPost addPost={addPost}/>

          <PostList list={posts.data} />

          <div style={{display: loading}}>
            { Helper.getLoader() }
          </div>

          <div style={{display: "none"}}>
            <Card className={classes.card}>
              <CardHeader title="Relaince Industries Ltd" titleTypographyProps={{className: classes.title}} />
              <CardContent>
                <Slider>
                  <LatestSales />
                  <LatestSales />
                  <LatestSales />
                </Slider>
              </CardContent>
            </Card>

            <Card className={classes.card}>
              <CardHeader title="Relaince Industries Ltd" titleTypographyProps={{className: classes.title}} />
              <CardContent>
                <Slider>
                  <ProfitLoss/>
                  <ProfitLoss/>
                </Slider>
              </CardContent>
            </Card>
          </div>
        </Grid>

        <MarketUpdate />
      </Grid>
    </div>
  );
};

export default PersonelFeed;
