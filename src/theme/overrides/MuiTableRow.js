/* eslint-disable import/no-anonymous-default-export */
import palette from '../palette';

export default {
  root: {
    backgroundColor: palette.palette.background,

    '&$selected': {
      backgroundColor: palette.palette.background2
    },
    '&$hover': {
      '&:hover': {
        backgroundColor: palette.palette.background2
      }
    },
    '& td, th':{
      borderBottom: 'none'
    },
    '& th':{
      borderRight: '2px solid '+palette.palette.color
    },
    '&.borderBottom':{
      borderBottom: '1px solid '+palette.palette.color
    }
  }
};
