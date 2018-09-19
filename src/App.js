import React, { Component } from 'react';

class TaskItem extends React.Component {
	render() {
		return <li onClick={this.props.onClick}>{this.props.task.title}</li>;
	}
}

class App extends Component {
	state = { inputValue: '', tasks: [] };

	onChangeInputValue = (event) => {
		this.setState({ inputValue: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.addTask();
  }

	addTask = () => {
		const tasks = this.state.tasks;
    const task = { title: this.state.inputValue };
		tasks.push(task);
		this.setState({ tasks: tasks });
	};

  // ... App component ...
	removeTask = (index) => {
		const tasks = this.state.tasks;
		tasks.splice(index, 1);
		this.setState({ tasks: tasks });
	};

	renderTasks = () => {
		return (
			<ul>
				{this.state.tasks.map((task, index) => (
					<TaskItem onClick={() => this.removeTask(index)} key={index} task={task} />
				))}
			</ul>
		);
	};
  // ...
	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<label>
						Tarefa:
						<input type="text" value={this.state.inputValue} onChange={this.onChangeInputValue} />
					</label>
					<input type="submit" value="Adicionar" />
        </form>
        {this.renderTasks()}
			</div>
		);
	}
}

export default App;
