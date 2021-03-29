export const fullPage = `
const {
    colors,
    Container,
    makeStyles,
    Grid,
    Paper,
  } = MaterialUI;

  const useStyles = makeStyles({
    containter: {
      padding : '5px'
    }
  });

  function ExtendedButton() {
    const classes = useStyles();
    return (
      <Grid container spacing={3}>
        <Grid item xs={3} sm={6}>
          <Paper>1</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper>2</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper>3</Paper>
        </Grid>
      </Grid>
    );
}`;

export const extraResponsive = `
const {
  colors,
  Container,
  makeStyles,
  Grid,
  Paper,
} = MaterialUI;

  const useStyles = makeStyles((theme) => ({
    [theme.breakpoints.down("xs")]: {
      mainContainer: {
        flexDirection: "column-reverse",
      },
    },
  }));

  function ExtendedButton() {
    const classes = useStyles();
    return (
      <Grid className={classes.mainContainer} container spacing={3}>
        <Grid item xs={3} sm={6}>
          <Paper>1</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper>2</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper>3</Paper>
        </Grid>
      </Grid>
    );
  }`;
