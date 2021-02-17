import { colors } from '@material-ui/core';

const white = '#FFFFFF';
const black = '#000000';

const palette =  {
  black,
  white,
  palette: {
    type: 'dark',
    background: '#202732',
    backgroundT: 'rgba(32,39,50, 0.8)',
    background2: '#374455',
    background2T: 'rgba(55,68,85,0.8)',
    background3: '#0a0c0f',
    color: '#fec600',
    color2: '#e5e5e5',
    borderRadius: 8,
  },
  primary: {
    contrastText: white,
    dark: colors.indigo[900],
    main: colors.indigo[500],
    light: colors.indigo[100]
  },
  secondary: {
    contrastText: white,
    dark: colors.blue[900],
    main: colors.blue['A400'],
    light: colors.blue['A400']
  },
  success: {
    contrastText: white,
    dark: colors.green[900],
    main: colors.green[600],
    light: colors.green[400]
  },
  info: {
    contrastText: white,
    dark: colors.blue[900],
    main: colors.blue[600],
    light: colors.blue[400]
  },
  warning: {
    contrastText: white,
    dark: colors.orange[900],
    main: colors.orange[600],
    light: colors.orange[400]
  },
  error: {
    contrastText: white,
    dark: colors.red[900],
    main: colors.red[600],
    light: colors.red[400]
  },
  text: {
    primary: '#e5e5e5',
    secondary: '#bfbbbc',
    link: '#202732'
  },
  background: {
    default: '#202732',
    paper: black
  },
  icon: colors.blueGrey[600],
  divider: colors.grey[200]
};

export default palette;