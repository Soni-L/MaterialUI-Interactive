export const textField = `
const {
    makeStyles,
    Input,
  } = MaterialUI;


  function NumericInput() {
    const [value, setValue] = React.useState(0);

    return (
      <Input 
        value={value} 
      />
    );
}`;

export const adornment = `
const {
    makeStyles,
    Input,
    SvgIcon,
  } = MaterialUI;


  function NumericInput() {
    const [value, setValue] = React.useState(0);

    return (
      <Input 
       value={value} 
       endAdornment={
        <p onIncrement={() => setValue(value + 1)} onDecrement={() => setValue(value - 1)}>
          arrows
        </p> 
      }/>
    );
}`;

export const arrows = `
const {
    makeStyles,
    Input,
    SvgIcon,
    IconButton,
  } = MaterialUI;

  const useArrowStyles = makeStyles({
    inputControls: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    iconButton: {
      padding: "0",
      margin: "0",
      size: "small",
      },
  });

  function Arrows(props) {
    const classes = useArrowStyles();

    return (
      <div className={classes.inputControls}>
        <IconButton
          className={classes.iconButton}
          onClick={props.onIncrement}    
        >
          <SvgIcon viewBox="0 -6 24 24" >
            <path d="M7 14l5-5 5 5z" />
          </SvgIcon>
        </IconButton>
        <IconButton
          className={classes.iconButton}
          onClick={props.onDecrement}
        >
          <SvgIcon viewBox="0 6 24 24">
            <path d="M7 10l5 5 5-5z" />
          </SvgIcon>
        </IconButton>
      </div>
    );
}


//export default Arrows;`;

export const inputComposition = `
const {
  makeStyles,
  Input,
  SvgIcon,
  IconButton,
} = MaterialUI;

//import Arrows from './Arrows'

  function NumericInput() {
    const [value, setValue] = React.useState(0);

    return (
      <Input 
       value={value} 
       endAdornment={
        <Arrows 
          onIncrement={() => setValue(value + 1)} 
          onDecrement={() => setValue(value - 1)}>
          arrows
        </Arrows> 
      }/>
    );
}`;

export const arrowsComposition = `
  const useArrowStyles = makeStyles({
    inputControls: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    iconButton: {
      padding: "0",
      margin: "0",
      size: "small",
      },
  });

  function Arrows(props) {
    const classes = useArrowStyles();

    return (
      <div className={classes.inputControls}>
        <IconButton
          className={classes.iconButton}
          onClick={props.onIncrement}    
        >
          <SvgIcon viewBox="0 -6 24 24" >
            <path d="M7 14l5-5 5 5z" />
          </SvgIcon>
        </IconButton>
        <IconButton
          className={classes.iconButton}
          onClick={props.onDecrement}
        >
          <SvgIcon viewBox="0 6 24 24">
            <path d="M7 10l5 5 5-5z" />
          </SvgIcon>
        </IconButton>
      </div>
    );
}`;
