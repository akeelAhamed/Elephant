import React from 'react';
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

const PersonelFeed = () => {
  const classes = useStyles();

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

          <AddPost/>
          
          <Post/>
          
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
        </Grid>

        <MarketUpdate />
      </Grid>
    </div>
  );
};

export default PersonelFeed;
