import React from 'react';
import { makeStyles } from '@material-ui/styles';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ReplyIcon from '@material-ui/icons/Reply';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(1),
    display: 'flex',
    justifyContent: 'flex-end'
  },
  action: {
    padding: theme.spacing(0, 1),
    display: 'flex',
    cursor: 'pointer',

    '& span': {
      marginRight: theme.spacing(1),
    }
  },
  fav: {
    color: '#FF5972'
  },
  share: {
    color: theme.palette.color
  }
}));

const PostAction = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.action}>
        <span>{props.likes === undefined?0:props.likes}</span> <FavoriteIcon className={classes.fav}/>
      </div>
      <div className={classes.action}>
      <span>{props.shares === undefined?0:props.shares}</span> <ReplyIcon className={classes.share}/>
      </div>
    </div>
  );
};

export default PostAction;
