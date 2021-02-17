import React from 'react';
import { makeStyles } from '@material-ui/styles';
import {
  Avatar,
  Grid,
  Card,
  CardHeader,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar
} from '@material-ui/core';
import { LatestSales } from '../Common/Charts';
import MarketUpdate from "../Common/MarketUpdate";
import PostAction from '../Common/PostAction';
import Slider from "../Common/Slider";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2)
  },
  grid: {
    background: theme.palette.background,
    padding: theme.spacing(2)
  },
  title: {
    color: theme.palette.color,
    fontSize: theme.spacing(2.5)
  },
  comment:{
    background: theme.palette.background3
  },
  list: {
    '& li': {
      width: '80%',
      display:'flex',
      background: theme.palette.background2,
      margin: theme.spacing(1, 0),
      padding: theme.spacing(0, 1),
      borderRadius: theme.palette.borderRadius,
      marginLeft: 'auto'
    },
    replay:{
      display: 'flex'
    }
  }
}));

const ElephantWall = () => {
  const classes = useStyles();

  const replays = [
    {
      avatar: '',
      name  : 'Name',
      replay: 'Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur',
      likes: 5,
      shares: 2
    },
    {
      avatar: '',
      name  : 'Name 2',
      replay: 'Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur',
      likes: 13,
      shares: 3
    },

  ];

  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={1}
      ><Grid
          item
          lg={9}
          md={12}
          className={classes.grid}
        >
          <Card>
            <CardHeader title="Relaince Industries Ltd" titleTypographyProps={{className: classes.title}} />
            <CardContent>
              <Slider>
                <LatestSales />
                <LatestSales />
                <LatestSales />
              </Slider>
            </CardContent>
          </Card>

          <div className={classes.comment}>
            <Card>
              <CardHeader
                avatar={
                  <Avatar aria-label="recipe" className={classes.avatar}>
                    R
                  </Avatar>
                }
                action={
                  <small>
                    If you fish with us, you can catch a big whale
                  </small>
                }
                title="Relaince Industries Ltd"
                titleTypographyProps={{className: classes.title}}
              />
              <CardContent>
                <Typography variant="subtitle2">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
                </Typography>
                <PostAction/>

                <List className={classes.list}>
                  {
                    replays.map((replay, i) => {

                      return(
                        <ListItem key={i} alignItems="flex-start">
                          <ListItemAvatar>
                            <Avatar aria-label="recipe" className={classes.avatar}>
                              {replay.avatar}
                            </Avatar>
                          </ListItemAvatar>
                          <ListItemText
                            primary={replay.name}
                            secondary={
                              <div>
                                <Typography className={classes.replay} variant="body2">
                                  {replay.replay}
                                </Typography>
                                <PostAction {...replay}/>
                              </div>
                            }
                          />
                        </ListItem>
                      )
                    })
                  }
                </List>

              </CardContent>
            </Card>
          </div>

          
        </Grid>

        <MarketUpdate />
      </Grid>
    </div>
  );
};

export default ElephantWall;
