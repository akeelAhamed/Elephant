import React from 'react';
import { makeStyles } from '@material-ui/styles';
import {
  Grid,
  Card,
  CardHeader,
  CardContent,
} from '@material-ui/core';
import MarketUpdate from "../Common/MarketUpdate";
import Slider from "../Common/Slider";

import {
  LatestSales
} from '../Common/Charts';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(1)
  },
  card: {
    background: theme.palette.background
  },
  title: {
    color: theme.palette.color,
    fontSize: theme.spacing(2.5)
  }
}));

const CompanyFeed = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={1}
      ><Grid
          item
          lg={9}
          md={12}
        >
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
        </Grid>

        <MarketUpdate />
      </Grid>
    </div>
  );
};

export default CompanyFeed;
