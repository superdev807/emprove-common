export default theme => ({
  inputWrapper: {
    position: 'relative',
    'label + &': {
      marginTop: 16
    }
  },
  icon: {
    position: 'absolute',
    cursor: 'pointer',
    right: 0,
    top: 3
  }
});
