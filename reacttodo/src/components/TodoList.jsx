
function TodoList() {

  let todos = ['wash dishes', 'eat food', 'sleep in']
  return (
    <ul className="main">{todos.map((todo, todoIndex) => {
      return <li className="todoItem" key={todo}>{todoIndex + 1}. {todo}</li>
    })}</ul>
  )
}

export default TodoList