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
    marginBottom: theme.spacing.unit * 2
  },
  error: {
    fontSize: 10
  },
  imageField: {
    display: 'flex'
  },
  imageFieldLabel: {
    marginRight: theme.spacing.unit * 2
  }
});
