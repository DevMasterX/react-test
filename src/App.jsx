// import Header from "./components/Header/Header";
// import Content from "./components/Content";
// import Counter from "./components/Counter/Counter";
import { Component } from "react";
// import ColorPicker from "./components/ColorPicker";
// import Dropdown from "./components/Dropdown/Dropdown";
import TodoList from "./components/TodoList";
import initialTodos from "./todos.json";
import Counter1 from "./components/Counter1/Counter1";


class App extends Component {
  state = {
    todos: initialTodos,
  };

  deleteTodo = (todoId) => {
    this.setState((prevState) => ({
      todos: prevState.todos.filter((todo) => todo.id !== todoId),
    }));
  };

  render() {
    const { todos } = this.state;

    const totalTodoCount = todos.length;
    const completedTodosCount = todos.reduce(
      (total, todo) => (todo.completed ? total + 1 : total),
      0
    );

    return (
      <>
        {/* <Header />
      <Content />
      <h1>Состояние компонента</h1>
      <Counter initialValue={10} /> */}
        {/* <Dropdown /> */}
        {/* <ColorPicker options={colorPickerOptions} /> */}

        <div>
          <p>Общее кол-во: {totalTodoCount}</p>
          <p>Кол-во выполненных: {completedTodosCount}</p>
        </div>

        <TodoList todos={todos} onDeleteTodo={this.deleteTodo} />
        <Counter1 />
      </>
    );
  }
}

export default App;
