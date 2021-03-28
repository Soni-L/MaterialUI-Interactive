export const intro = `
const {
    colors,
    CssBaseline,
    ThemeProvider,
    Typography,
    Container,
    makeStyles,
    createMuiTheme,
    Box,
    SvgIcon,
    Link,
    Button,
  } = MaterialUI;

  function ExtendedButton() {
    return (
      <Button variant="contained" onClick={()=> alert('hello button')} color="primary">
          button
      </Button>
    );
  }`;

export const theme = `
const {
    colors,
    CssBaseline,
    ThemeProvider,
    Typography,
    Container,
    makeStyles,
    createMuiTheme,
    Box,
    SvgIcon,
    Link,
    Button,
  } = MaterialUI;

  const theme = createMuiTheme({
    palette: {
      primary: {
        main: colors.orange[500],
      },
      secondary: {
        main: colors.green[500],
      },
    },
  });

  function ExtendedButton() {
    return (
      <ThemeProvider theme={theme}>
        <Button variant="contained" onClick={()=> alert('hello button')} color="primary">
            button
        </Button>
      </ThemeProvider>
    );
  }`;

export const styling = `
const {
    colors,
    CssBaseline,
    ThemeProvider,
    Typography,
    Container,
    makeStyles,
    createMuiTheme,
    Box,
    SvgIcon,
    Link,
    Button,
  } = MaterialUI;

  const theme = createMuiTheme({
    palette: {
      primary: {
        main: colors.orange[500],
      },
      secondary: {
        main: colors.green[500],
      },
    },
  });

  const useStyles = makeStyles({
    root: {
      width : "300px",
      border : "solid 1px black",
    }
  });

  function ExtendedButton() {
    const classes = useStyles();
    return (
      <ThemeProvider theme={theme}>
        <Button variant="contained"  color="primary"  className={classes.root}>
            button
        </Button>
      </ThemeProvider>
    );
  }`;
