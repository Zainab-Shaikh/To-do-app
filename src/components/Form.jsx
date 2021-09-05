import style from "../style.module.css";
function Form({ todo, remove, done }) {
  function handleRemove(remove_index) {
    remove(remove_index);
  }
  function check(id) {
    done(id);
  }
  return (
    <>
      <ul key={todo}>
        {todo.map((element, index) => (
          <li key={element.id}>
            <p
              onDoubleClick={() => check(element.id)}
              className={element.checked ? style.checked : ``}
            >
              {element.value}
            </p>
            <button onClick={() => handleRemove(element.id)}>delete</button>
          </li>
        ))}
      </ul>
    </>
  );
}
export default Form;
