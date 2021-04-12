const Button = (props) => {
  return [
    <button
      type={props.type}
      name={props.name}
      value={props.value}
      className={props.className}
      idName="one"
    >
      Login
    </button>,
  ];
};
export default Button;
