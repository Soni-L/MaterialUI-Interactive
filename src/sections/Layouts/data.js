export const fullPage = `
const {
    colors,
    CssBaseline,
    ThemeProvider,
    Typography,
    Container,
    makeStyles,
    createMuiTheme,
    Box,
    Grid,
    Link,
    Button,
  } = MaterialUI;

  const useStyles = makeStyles({
    containter: {
      padding : '5px'
    }
  });

  function ExtendedButton() {
    const classes = useStyles();
    return (
      <Container>
        <Button variant="contained" color="primary">
            Primary
        </Button>
      </Container>
    );
  }`;
