'use strict';

export default theme => ({
  root: {
    width: '100%'
  },
  content: {
    backgroundColor: theme.palette.text.primary,
    borderRadius: 0,
    padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
    width: '100%',
    maxWidth: '100%'
  },
  message: {
    flex: 1,
    padding: 0
  },
  action: {
    paddingLeft: theme.spacing.unit,
    marginRight: 0
  },
  link: {
    color: 'white',
    textDecoration: 'underline'
  },
  action: {
    color: 'white',
    borderColor: 'white',
    marginRight: 0,
    transition: 'all 0.1s ease',
    '&:hover, &:active': {
      color: theme.palette.primary.main
    }
  }
});
