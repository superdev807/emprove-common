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
    right: 0,
    top: 3
  }
});
