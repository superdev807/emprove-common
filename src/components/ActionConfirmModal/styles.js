'use strict';

export default theme => ({
  dialogActions: {
    textAlign: 'right',
    paddingTop: theme.spacing(2)
  },
  button: {
    height: 30,
    lineHeight: 1,
    minHeight: 0,
    fontSize: '1.4vh',
    fontWeight: 500,
    boxShadow: 'none'
  },
  cancelButton: {
    marginRight: '1.2vh'
  },
  closeButton: {
    position: 'absolute',
    right: 0,
    top: 0
  },
  description: {
    '& em': {
      color: theme.palette.primary.main,
      fontStyle: 'normal',
      fontWeight: 600
    },
    '& svg.icon': {
      fontSize: 'inherit',
      position: 'relative',
      top: 2 // to better align icon with text
    }
  },
  // have to use this because the default padding is too narrow on mobile or too
  // wide on bigger screens:
  dialogContentExtraPadding: {
    padding: '0 32px 48px'
  },
  dialogTitleExtraPadding: {
    padding: '48px 16px 8px'
  }
});
