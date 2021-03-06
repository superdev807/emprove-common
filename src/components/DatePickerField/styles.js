'use strict';

export default theme => ({
  inputWrapper: {
    position: 'relative',
    'label + &': {
      marginTop: 16
    }
  },
  icon: {
    position: 'absolute',
    pointerEvents: 'none',
    right: 6,
    top: 6
  },
  input: {
    padding: '12px 14px',
    fontSize: 12,
    fontWeight: 400
  },
  originIcon: {
    right: 0,
    top: 3
  }
});
