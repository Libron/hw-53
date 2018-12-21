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
      ],
      currentTask: ''
  };

  changeTitle = event => {
      this.setState({currentTask: event.target.value});
  };

  removeTask = index => {
    let id = this.state.taskList.findIndex(t => t.id === index);
    if (id !== -1) {
        const taskList = [...this.state.taskList];
        taskList.splice(id, 1);

        this.setState({taskList});
    }
  };

   addTask = event => {
       event.preventDefault();
       if (this.state.currentTask) {
           const taskList = [...this.state.taskList];
           const newID = 'task' + Math.floor(Date.now() / Math.random());
           const newTask = {
               title: this.state.currentTask,
               id: newID
           };
           taskList.push(newTask);
           this.setState({taskList});
       } else {
           alert('Задача не может быть пустым !');
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
          <TaskForm
              currentTitle = {event => this.changeTitle(event)}
              submit = {event => this.addTask(event)}
          />
          {taskList}

      </div>
    );
  }
}

export default App;
