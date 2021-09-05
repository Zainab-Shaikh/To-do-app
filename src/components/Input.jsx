function Input(props) {
  function handleChange(e) {
    props.onChange(e);
  }
  function add() {
    props.add();
  }
  return (
    <>
      <input onChange={handleChange} />
      <button onClick={add}>{props.value}</button>
    </>
  );
}
export default Input;
