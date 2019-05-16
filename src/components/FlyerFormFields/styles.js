'use strict';

export default theme => ({
  root: {
    marginTop: theme.spacing.unit * 2
  },
  label: {
    marginTop: theme.spacing.unit / 2
  },
  field: {
    marginBottom: theme.spacing.unit * 2
  },
  divider: {
    margin: `${theme.spacing.unit * 2}px 0`
  },
  error: {
    fontSize: 10
  },
  imageField: {
    display: 'flex'
  },
  imageFieldLabel: {
    marginRight: theme.spacing.unit * 2
  },
  image: {
    position: 'relative',
    width: 210,
    height: 140,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundSize: 'cover'
  },
  withRelativePosition: {
    position: 'relative'
  },
  helptext: {
    position: 'absolute',
    bottom: -6,
    width: 240,
    fontSize: 13,
    fontWeight: 400
  },
  addressFieldContainer: {
    position: 'relative'
  },
  arrowIcon: {
    position: 'absolute',
    right: 0
  },
  inputText: {
    textAlign: 'left'
  },
  imageField: {
    width: 210,
    height: 140
  }
});
