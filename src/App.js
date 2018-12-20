import React, { Component } from 'react';
import Task from './components/Task/Task';
import TaskForm from './components/TaskForm/TaskForm';

class App extends Component {
  state = {
      taskList: [
          {title: 'Сделать это', id: 'task0'},
          {title: 'Молоко', id: 'task1'},
          {title: 'Dmitrii', id: 'task2'},
          {title: 'Стиать', id: 'task3'}
      ]
  };

  removeTask = index => {
    let id = this.state.taskList.findIndex(t => t.id === index);
    if (id !== -1) {
        const taskList = [...this.state.taskList];
        taskList.splice(id, 1);

        this.setState({taskList});
    }
  };

  render() {
    const taskList = this.state.taskList.map((task) => (
        <Task
            text={task.title}
            key={task.id}
            remove={() => this.removeTask(task.id)}
        />
    ));

    return (
      <div className="App container">
          <TaskForm />
          {taskList}

      </div>
    );
  }
}

export default App;
