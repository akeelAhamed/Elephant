import React, {useState} from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import { Link as RouterLink } from 'react-router-dom';
import {
  Divider,
  InputBase,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Button,
  Badge
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import Helper from '../../_services/Helper';

const useStyles = makeStyles(theme => ({
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    margin: 'auto',
    marginBottom: 10,
    width: '90%',
    boxShadow: '0px 2px 1px -1px rgb(0, 0, 0, 0.2), 0px 1px 1px 0px rgb(0, 0, 0, 0.4), 0px 1px 3px 0px rgb(0, 0, 0, 0.2)'
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%'
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '100%',
      '&:focus': {
        width: '100%',
      },
    },
  },
  friends: {
    background: theme.palette.background3,
    marginBottom: 6
  }
}));

const _helper = new Helper();

function FindFriend() {
  const classes = useStyles();
  const _d = {data:[]};
  const [friends, setFriends] = useState(_d);
  const [follower, setFollower] = React.useState([]);

  const handleToggle = (value) => () => {
    const currentIndex = follower.indexOf(value);
    const newFollower = [...follower];

    if (currentIndex === -1) {
        newFollower.push(value);
    } else {
        newFollower.splice(currentIndex, 1);
    }

    setFollower(newFollower);
  };

  const searchFriend=  ((props) => {
    if(props.target.value !== ''){
        _helper.api('/search/friends', function (response) {
            if(response.status){
                return setFriends(response.data);
            }

            return setFriends(_d);
        }, {payload: props.target.value})
    }
  })

  return (
      <div>
        <div className={classes.search}>
            <div className={classes.searchIcon}>
                <SearchIcon />
            </div>
            <InputBase
                type="search"
                placeholder="Find friends…"
                classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
                autoFocus
                onChange={searchFriend}
            />
        </div>
        
        <Divider />
            
        <List dense>
            {
                friends.data.map((friend) => {
                    const labelId = `checkbox-list-secondary-label-${friend.id}`;
                    return (
                    <ListItem className={classes.friends} key={friend.id} button>
                        <ListItemAvatar>
                            <Badge
                                overlap="circle"
                                anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'right',
                                }}
                                badgeContent={!friend.is_verified?"":<VerifiedUserIcon fontSize="small"/>}
                            >
                                <Avatar
                                    alt={friend.fname}
                                    src={friend.avatar}
                                    component={RouterLink}
                                    target="_blank"
                                    to={"user/"+friend.username}
                                />
                            </Badge>
                        </ListItemAvatar>
                        <ListItemText id={labelId} primary={(friend.fname +' '+friend.lname).toUpperCase()} secondary={'@'+friend.username } />
                        <ListItemSecondaryAction>
                            <Button variant="contained" onClick={handleToggle(friend.id)}>
                                {
                                    friend.is_private
                                    ?follower.indexOf(friend.id) !== -1?"Requested":"Request"
                                    :follower.indexOf(friend.id) !== -1?"Unfollow":"Follow"
                                }
                            </Button>
                        </ListItemSecondaryAction>
                    </ListItem>
                    );
                })
            }

            {
                friends.data.length > 0
                ?''
                :<span>No results found.</span>
            }
        </List>

      </div>
    );
}

export default FindFriend;