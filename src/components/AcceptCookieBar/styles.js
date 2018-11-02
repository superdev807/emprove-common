'use strict';

export default theme => ({
  root: {
    width: '100%'
  },
  content: {
    backgroundColor: theme.palette.text.primary,
    borderRadius: 0,
    width: '100%',
    maxWidth: '100%'
  },
  link: {
    color: 'white',
    textDecoration: 'underline'
  },
  action: {
    borderColor: 'white',
    marginRight: 0
  }
});
