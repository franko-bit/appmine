const Input = (props) => {
  return [
    <input
      type={props.type}
      name={props.name}
      onChange={props.onChange}
      placeholder={props.placeholder}
      className={props.className}
      value={props.value}
    />,
    ,
  ];
};
export default Input;
