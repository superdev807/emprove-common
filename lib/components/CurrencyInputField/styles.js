export default (function (theme) {
  return {
    currencyInput: {
      color: theme.palette.text.primary,
      '&:before': {
        borderBottomColor: theme.palette.bottomLine
      }
    }
  };
});