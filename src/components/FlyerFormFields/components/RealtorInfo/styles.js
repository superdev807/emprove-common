'use strict';

export default theme => ({
  realtorInfo: {
    padding: 16,
    marginBottom: 16,
    border: '1px solid rgba(0, 0, 0, 0.12)'
  },
  label: {
    marginTop: theme.spacing(0.5)
  },
  field: {
    marginBottom: theme.spacing(2)
  },
  image: {
    position: 'relative',
    width: 100,
    height: 100,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundColor: 'lightgray'
  },
  imageField: {
    display: 'flex'
  },
  imageFieldLabel: {
    marginRight: theme.spacing(2)
  },
  textLabel: {
    padding: '6px 0 7px',
    fontWeight: 400,
    color: theme.palette.primary.main,
    borderBottom: '1px solid rgba(0, 0, 0, 0.12)'
  }
});
