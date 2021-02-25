import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
    center:{
      justifyContent: 'center'
    },
    card: {
      width: 450,
      minHeight: 400,
      margin: 'auto',
      padding: theme.spacing(2),
      borderRadius: theme.spacing(0.5),
      background: theme.palette.background2T,
    },
    form:{
      marginTop: theme.spacing(2),

      '& label':{
        color: theme.palette.background
      },
      '& input':{
        background: '#c4c4c4',
        color: theme.palette.background
      }
    },
    form2:{
      marginTop: theme.spacing(2),

      '& input':{
        color: '#c4c4c4',
      }
    },
    passwordIcon:{
      background: '#c4c4c4',
      color: theme.palette.background
    }
}));

export default useStyles;