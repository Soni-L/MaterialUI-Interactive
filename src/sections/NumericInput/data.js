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
    SvgIcon
  } = MaterialUI;


  function Arrows() {

    return (
      <div>
        <SvgIcon>
            <path d="M7 14l5-5 5 5z" />
        </SvgIcon>
        <SvgIcon>
            <path d="M7 10l5 5 5-5z" />
        </SvgIcon>
      </div>
    );
}`;
