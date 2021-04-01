import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ShareIcon from '@material-ui/icons/Share';
import CommentIcon from '@material-ui/icons/Comment';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Slider from "../Common/Slider";
import { TextField, Tooltip } from '@material-ui/core';
import month from '../../common/monthNames';

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 460,
    background: theme.palette.background,
    margin: "auto",
    marginBottom: theme.spacing(1)
  },
  media: {
    height: 0,
    paddingTop: '56.25%',
    backgroundSize: 'contain'
  },
  avatar: {
    backgroundColor: theme.palette.color,
  },
  action: {
    justifyContent: 'space-between'
  },
  caption:{
    display: 'flex',
    width: '100%',
    padding: '2px',
    justifyContent: 'space-around'
  },
  editorClassName: {
    maxHeight: 300,
    overflow: "auto",

    '& .public-DraftStyleDefault-block': {
      color: theme.palette.color2,
      background: theme.palette.background,
      margin: '0 auto',
      marginLeft: -1,
      padding: 5,
      width: 'calc(100% + 1px)'
    },

    '& .public-DraftEditorPlaceholder-root' : {
      color: '#999',
      position: 'absolute'
    }
  },
  toolbarClassName: {
    color: theme.palette.background,
    marginBottom: 0
  },
  upload: {
    display: "block",
    float: "left",

    '& input' : {
      display: "none",
      width: 0,
      height: 0,
    }
  },
  postBtn:{
    background: theme.palette.background3,
  }
}));

const Post = (props) => {
  const classes = useStyles();
  
  const [data, setData] = useState(props.data);
  const [expanded, setExpanded] = React.useState(false);
  const [comment, setComment] = React.useState('');
  const date = new Date(data.created_at);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const getSlider = (() =>{
    if(data.postFile){
      let Images = [];
      for (let i = 0; i < data.files.length; i++) {
        const element = data.files[i];
        Images.push(
          <CardMedia
            key={i}
            className={classes.media}
            image={element.file}
            title={data.user.name}
          />
        )
      }
      return (
        <>
          <Slider arrow full nodots>
            {Images}
          </Slider>
        </>
      )
    }
  })

  const getContent = (() =>{
    if(data.postText !== null){
      return (
        <>
          <CardContent>        
            <Typography variant="body1" style={{whiteSpace: 'break-spaces'}} dangerouslySetInnerHTML={{__html: data.postText}}></Typography>
          </CardContent>
          <Divider/>
        </>
      )
    }
  })

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" src={data.user.avatar} className={classes.avatar}>
            {data.user.name[0]}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={data.user.name}
        subheader={date.getDate()+', '+month[date.getMonth()]+' '+date.getFullYear()}
      />
      <Divider/>
      
      {getContent()}

      {getSlider()}

      <CardActions className={classes.action}>
        <IconButton color="inherit" aria-label="add to favorites">
          <Tooltip title="Add to favorite" placement="top">
            <><FavoriteBorderIcon /></>
          </Tooltip>
        </IconButton>
        <IconButton style={{display: "none"}} aria-label="share">
          <Tooltip title="Share" placement="top">
            <ShareIcon />
          </Tooltip>
        </IconButton>
        <IconButton
          color="inherit"
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="comments"
        >
          <Tooltip color="inherit" title="Comment" placement="top">
            <><CommentIcon/></>
          </Tooltip>
        </IconButton>
      </CardActions>

      <div className={classes.caption}>
        <Typography variant="caption">{data.postLike} Likes</Typography>
        <Typography onClick={handleExpandClick} variant="caption">{data.postComment} comments</Typography>
      </div>
      <Divider/>
      
      <TextField type="text" placeholder="Add comment..." InputProps={{
          style: {padding: 5, minHeight: 50},
          endAdornment: (
            <Button
              aria-label="add comment"
              size="small"
              variant="contained"
              color="primary"
              disabled={comment === ''}
            >post</Button>
          )
        }} value={comment} onChange={e => setComment(e.target.value)} multiline fullWidth/>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        
      </Collapse>
    </Card>
  );
};

Post.propTypes = {
  data: PropTypes.object.isRequired
};

export {
  Post,
  useStyles
}
