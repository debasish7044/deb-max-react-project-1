import './App.css';
import Person from './Person/Person';
import React, { Component } from 'react';

class App extends Component {
  state = {
    persons: [
      { id: '1', name: 'Max', age: 28 },
      { id: '2', name: 'Arena', age: 22 },
      { id: '3', name: 'Saikat', age: 20 },
    ],
    showPerson: false,
  };

  nameUpdateHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(
      (person) => person.id === id
    );
    const person = {
      ...this.state.persons[personIndex],
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons });
  };

  nameToggleHandler = () => {
    const doesShow = this.state.showPerson;
    this.setState({ showPerson: !doesShow });
  };

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  render() {
    const style = {
      background: 'blue',
      padding: '.8rem 1rem',
      cursor: 'pointer',
      color: 'white',
      border: 'none',
      borderRadius: '1px',
    };

    let persons = null;

    if (this.state.showPerson) {
      persons = (
        <div className='personList'>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                key={person.id}
                name={person.name}
                age={person.age}
                click={() => this.deletePersonHandler(index)}
                changed={(event) => this.nameUpdateHandler(event, person.id)}
              />
            );
          })}
        </div>
      );
      style.background = 'red';
    }

    const warningMessageClasses = [];

    if (this.state.persons.length <= 2) {
      warningMessageClasses.push('red');
      console.log(warningMessageClasses);
    }
    if (this.state.persons.length <= 1) {
      warningMessageClasses.push('bold');
    }

    return (
      <div className='App'>
        <h1>Hello from the React side</h1>
        <p className={warningMessageClasses.join(' ')}>
          This is really working
        </p>
        <button style={style} onClick={this.nameToggleHandler}>
          change name
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
