import React, { Component } from 'react';
import Task from './components/Task/Task';
import TaskForm from './components/TaskForm/TaskForm';

class App extends Component {
  state = {
      taskList: [
          {title: 'Купить диван', id: 'task0', status: 'default'},
          {title: 'Выпить молоко', id: 'task1', status: 'default'},
          {title: 'Сдать домашнее задание', id: 'task2', status: 'default'},
          {title: 'Приготовить еду', id: 'task3', status: 'default'}
      ],
      currentTask: '',
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
               id: newID,
               status: 'default'
           };
           taskList.push(newTask);
           this.setState({taskList});
       } else {
           alert('Задача не может быть пустым !');
       }
   };

    changeStatus = index => {
        let id = this.state.taskList.findIndex(t => t.id === index);
        if (id !== -1) {
            const taskList = [...this.state.taskList];
            if (this.state.taskList[id].status === 'done') {
                taskList[id].status = 'default';
            } else {
                taskList[id].status = 'done';
            }
            this.setState({taskList});
        }
    };

  render() {
    const taskList = this.state.taskList.map((task) => (
        <Task
            text={task.title}
            key={task.id}
            remove={() => this.removeTask(task.id)}
            status={task.status}
            checkbox={() => this.changeStatus(task.id)}
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