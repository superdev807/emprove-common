'use strict';

export default theme => ({
  root: {
    overflow: 'hidden'
  },
  mobileRoot: {
    height: '100%',
    position: 'relative'
  },
  paper: {
    margin: `${theme.spacing(1)}px 0`
  },
  mobileDocument: {
    height: 'calc(100% - 48px)',
    overflow: 'auto'
  },
  buttonContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    textAlign: 'center'
  }
});
