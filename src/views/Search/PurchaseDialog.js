import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
    backdrop:{
        background: 'rgb(255,255,255, 0.5)'
    },
    content:{
        background: '#1f1917',
        maxWidth: 460,
        borderRadius: theme.palette.borderRadius
    },
    form:{
        width: 300,
        textAlign: 'center',

        '& > div':{
            marginBottom: 10,

            '& label.Mui-focused': {
                color: theme.palette.color,
            },
            '& .MuiInput-underline:after': {
                borderBottomColor: theme.palette.color,
            },
            '& .MuiOutlinedInput-root': {
                '& fieldset': {
                    borderColor: 'red',
                },
                '&:hover fieldset': {
                    borderColor: 'yellow',
                },
                '&.Mui-focused fieldset': {
                    borderColor: theme.palette.color,
                },
            }
        }
    },
    
    add:{
        margin: 'auto',
        background: 'rgb(48,222,171)',
        backgroundImage: 'linear-gradient(135deg, rgba(48,222,171,1) 10%, rgba(255,89,114,0.5) 50%, rgba(0,0,0,0.8) 100%)'
    }
}));

function PurchaseDialog(props){
    const classes = useStyles();

    const handleClose = () => {
        props.toggle(false);
    };
    return(
        <Dialog
            open={props.open}
            onClose={handleClose}
            aria-labelledby="purchase-dialog-title"
            aria-describedby="purchase-dialog-description"
            className={classes.backdrop}
        >
            <DialogContent className={classes.content}>
                <form className={classes.form} noValidate autoComplete="off">
                    <TextField type="date" id="date" label="Date" InputLabelProps={{shrink: true}} fullWidth required/>
                    <TextField type="number" id="nshares" label="No.of Shares" fullWidth required/>
                    <TextField type="number" id="pshares" label="Price per Shares" fullWidth required/>
                    <TextField type="number" id="brokerage" label="Brokerage" fullWidth required/>
                    <TextField type="number" id="total" label="Total price" fullWidth required/>

                    <Button className={classes.add} onClick={handleClose}>Add purchase</Button>
                </form>
                <DialogActions>
                    <Button onClick={handleClose} color="secondary">
                        close
                    </Button>
                </DialogActions>
            </DialogContent>
        </Dialog>
    )
}

PurchaseDialog.propTypes = {
    open: PropTypes.bool,
    toggle: PropTypes.func,
};

export default PurchaseDialog;
