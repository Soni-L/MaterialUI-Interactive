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

  const mozendaTheme = createMuiTheme({
    palette: {
      primary: {
        main: "rgba(255, 86, 33, 1)",
      },
      secondary: {
        main: "rgba(0, 61, 89, 1)",
      },
    },
  });

  const dexiTheme = createMuiTheme({
    palette: {
      primary: {
        main: "#8dc540",
      },
      secondary: {
        main: "#203a5b",
      },
    },
  });

  function ExtendedButton() {
    return (
      <ThemeProvider theme={mozendaTheme}>
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

  const mozendaTheme = createMuiTheme({
    palette: {
      primary: {
        main: "rgba(255, 86, 33, 1)",
      },
      secondary: {
        main: "rgba(0, 61, 89, 1)",
      },
    },
  });

  const useStyles = makeStyles({
    extra: {
      width : "200px",
      border : "solid 1px black",
      /*
      '&.MuiButton-root': {
       backgroundColor: '#8dc540',
      },
      */
    }
  });

function ExtendedButton(props) {
  const classes = useStyles();
  return (
    <ThemeProvider theme={mozendaTheme}>
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

  const mozendaTheme = createMuiTheme({
    palette: {
      primary: {
        main: "rgba(255, 86, 33, 1)",
      },
      secondary: {
        main: "rgba(0, 61, 89, 1)",
      },
    },
  });
  

  const useStyles = makeStyles({
    extra: {
      width : props => props.width || "200px",
      border : "solid 1px black",
      '&.MuiButton-root': {
       backgroundColor: '#8dc540',
      },
    }
  });

  function ExtendedButton(props) {
    const classes = useStyles(props);
    return (
      <ThemeProvider theme={mozendaTheme}>
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
        <input 
          value="username" 
          style={{height : "20px", width : "100%"}}
        />
        <input 
          value="password" 
          style={{height : "20px", width : "100%"}} 
          type='password'
        />
        <ExtendedButton 
          onClick={() => alert('form submitted')}
        />
      </div>
    );
  }`;
