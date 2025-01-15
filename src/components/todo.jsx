const Todo = (props) => {
  console.log(props);
  const onUpdateClick = () => {
    console.log("Update click");
  };

  const onDeleteClick = () => {
    console.log("Delit click");
  };

  return (
    <div className="todo">
      <p> {props.title} </p>
      <div className="icons">
        <i onClick={onUpdateClick} class="fa-solid fa-pencil"></i>
        <i onClick={onDeleteClick} class="fa-solid fa-trash-can"></i>
      </div>
    </div>
  );
};

export default Todo;
