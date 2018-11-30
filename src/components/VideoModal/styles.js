'use strict';

export default theme => ({
  dialogContent: {
    width: '90vh',
    height: '50vh',

    background: '#000'
  },
  fixedCloseIcon: {
    position: 'absolute',
    zIndex: 1,
    right: '-50px',
    width: '48px',
    height: '48px',
    [theme.breakpoints.down('sm')]: {
      left: '-8px',
      top: '-6px'
    }
  },
  iconClose: {
    color: '#fff',
    [theme.breakpoints.down('sm')]: {
      width: '0.7em',
      height: '0.7em',
      color: '#888888'
    },
    '&:hover': {
      color: '#fff'
    }
  },
  dialogContentPaper: {
    padding: '0 !important',
    overflow: 'inherit',
    [theme.breakpoints.down('sm')]: {
      overflow: 'hidden'
    }
  },
  videoContainer: {
    display: 'flex',
    flexDirection: 'column'
  }
});
