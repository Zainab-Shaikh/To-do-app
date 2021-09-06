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
      <input onChange={handleChange} value={props.value} />
      <button onClick={add}>{props.title}</button>
    </div>
  );
}
export default Input;
