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
    padding: '12px 14px'
  },
  inputLabel: {
    transform: 'translate(14px, 14px) scale(1)'
  }
});
