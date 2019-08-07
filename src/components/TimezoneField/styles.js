'use strict';

export default theme => ({
  root: {
    height: 250,
    flexGrow: 1
  },
  container: {
    position: 'relative'
  },
  suggestionsContainer: {
    position: 'absolute',
    marginLeft: 15,
    zIndex: theme.zIndex.snackbar
  },
  suggestion: {
    display: 'block'
  },
  suggestionsList: {
    margin: 0,
    padding: 0,
    listStyleType: 'none'
  },
  divider: {
    height: theme.spacing(2)
  },
  input: {
    color: theme.palette.text.primary,
    '&:before': {
      borderBottom: `1px solid ${theme.palette.bottomLine}`
    }
  },
  helperText: {
    color: theme.palette.text.primary
  },
  formHelperText: {
    whiteSpace: 'nowrap'
  }
});
