/* eslint-disable import/no-anonymous-default-export */
import palette from '../palette';
export default {
  root: {
    backgroundColor: palette.palette.background2,
    paddingBottom: '2px',
    '& th':{
      color: palette.palette.color
    },
    '& td, th':{
      border: 'none !important',
      backgroundColor: palette.palette.background2
    },
    '& th:first-child':{
      borderTopLeftRadius: palette.palette.borderRadius
    },
    '& th:last-child':{
      borderTopRightRadius: palette.palette.borderRadius
    }
  }
};
