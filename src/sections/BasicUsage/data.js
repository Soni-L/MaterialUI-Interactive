export const intro = `
const {
  colors,
  ThemeProvider,
  makeStyles,
  createMuiTheme,
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
  ThemeProvider,
  makeStyles,
  createMuiTheme,
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
    ThemeProvider,
    makeStyles,
    createMuiTheme,
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
    extra: {
      width : "200px",
      border : "solid 1px black",
      /*
      '&.MuiButton-root': {
       backgroundColor: 'pink',
      },
      */
    }
  });

function ExtendedButton(props) {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <Button 
        variant="contained" 
        onClick={props.onClick} 
        color="primary" 
        className={classes.extra}
      >
        button
      </Button>
    </ThemeProvider>
    );
  }

  //export default ExtendedButton`;

export const consume = `
const {
    colors,
    ThemeProvider,
    makeStyles,
    createMuiTheme,
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
    extra: {
      width : props => props.width || "200px",
      border : "solid 1px black",
      /*
      '&.MuiButton-root': {
       backgroundColor: 'pink',
      },
      */
    }
  });

  function ExtendedButton(props) {
    const classes = useStyles(props);
    return (
      <ThemeProvider theme={theme}>
        <Button 
          variant="contained" 
          onClick={props.onClick} 
          color="primary" 
          className={classes.extra}
        >
          {props.label || 'button'}
        </Button>
      </ThemeProvider>
    );
  }

  //export default ExtendedButton`;

export const consumerForm = `
  function Form(props) {
    return (
      <div 
        style={{display: "flex", 
        flexDirection: "column", 
        width : "300px",
        alignItems : "center",
      }}>
        <input value="username" style={{height : "20px", width : "100%"}}/>
        <input value="password" style={{height : "20px", width : "100%"}} type='password'/>

        <ExtendedButton 
          onClick={() => alert('form submitted')}
        />
      </div>
    );
  }`;
