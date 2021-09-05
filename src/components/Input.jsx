import "../style.module.css";
function Input(props) {
  function handleChange(e) {
    props.onChange(e);
  }
  function add() {
    props.add();
  }
  return (
    <div>
      <input onChange={handleChange} />
      <button onClick={add}>{props.value}</button>
    </div>
  );
}
export default Input;
