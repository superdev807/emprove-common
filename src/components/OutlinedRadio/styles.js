'use strict';

const controlHeight = 32;
const controlWidth = 24;
const borderRadius = 4;

export const labelStyles = theme => ({
  root: {
    borderRadius: borderRadius,
    border: `1px solid ${theme.palette.primary.main}`,
    height: controlHeight,
    marginLeft: 'auto',
    marginRight: 'auto',
    '&$disabled': {
      border: 'none',
      paddingLeft: controlWidth
    },
    [theme.breakpoints.down('sm')]: {
      width: '100%'
    }
  },
  disabled: {},
  label: {
    color: theme.palette.primary.main,
    textAlign: 'center',
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    [theme.breakpoints.up('md')]: {
      minWidth: 80
    }
  }
});

export const radioStyles = theme => ({
  root: {
    borderRadius: 0,
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
    width: controlWidth,
    height: controlHeight
  },
  colorPrimary: {
    color: theme.palette.primary.main,
    borderRight: `1px solid ${theme.palette.primary.main}`,
    '&$checked': {
      backgroundColor: theme.palette.primary.main,
      color: 'white'
    }
  },
  checked: {}
});

export default theme => ({
  checkIcon: {
    width: controlHeight / 2,
    height: controlHeight / 2
  }
});
