import React, { Component } from 'react';
import TodoListTemplate from './components/TodoListTemplate';
import Form from './components/Form';
import TodoItemList from './components/TodoItemList';


const initaltodos = new Array(500).fill(0).map(
  (item, idx) => ({ id: {idx}, text: `일정${idx}`, checked: true })
);

class App extends Component {
  id = 3
  state = {
    input: '',
    todos: [
      { id: 0, text: '리액트 소개', checked: false },
      { id: 1, text: '리액트 구조', checked: true },
      { id: 2, text: '리액트 사용', checked: false }
    ]
    //todos : initaltodos
  }

  handleChange = (e) => {
    this.setState({
      input: e.target.value // input의 다음 바뀔값
    });
  }

  handleCreate = () => {
    const { input, todos } = this.state;
    this.setState({
      input: '', //input reset
      // concat 을 사용하여 배열에 추가
      todos: todos.concat({
        id: this.id++,
        text: input,
        checked: false
      })
    });
  }

  handleKeyPress = (e) => {
    // 눌려진 키가 Enter 이면 handleCreate 호출
    if (e.key === 'Enter') {
      this.handleCreate();
    }
  }

  handleToggle = (id) => {
    const { todos } = this.state;
    // 파라미터로 받은 id 를 가지고 몇번째 Item인지 찾습니다.
    const index = todos.findIndex(todo => todo.id === id);
    const selected = todos[index]; // 선택한 객체
    const copyTodos = [...todos]; // 배열을 복사
    // 기존의 값들을 복사하고, checked 값을 덮어쓰기
    copyTodos[index] = {
      ...selected,
      checked: !selected.checked
    };
    this.setState({
      todos: copyTodos
    });
  }

  handleRemove = (id) => {
    const { todos } = this.state;
    this.setState({
      todos: todos.filter(todo => todo.id !== id)
    });
  }


  render() {
    const { input, todos } = this.state;
    const {
      handleChange,
      handleCreate,
      handleKeyPress,
      handleToggle,
      handleRemove
    } = this;
    return (

      <div>
        <TodoListTemplate form={<Form
          todo={input}
          myClick={handleCreate}
          myChange={handleChange}
          myPress={handleKeyPress} />}>
          <TodoItemList todos={todos} myToggle={handleToggle} myRemove={handleRemove} />
        </TodoListTemplate>
      </div>
    );
  }
}

export default App;