// @flow
import * as React from "react";

import TaskList, { type Task } from "./components/TaskList";
import ResultsTable, { type Result } from "./components/ResultsTable";
import PersonForm, { type Person } from "./components/PersonForm";

class App extends React.Component<*> {
  render() {
    const tasks: Array<Task> = [
      { key: "1", title: "Wash car", isCompleted: true },
      { key: "2", title: "Do shopping", isCompleted: false },
      { key: "3", title: "Collect parcel", isCompleted: false }
    ];

    const results: Array<Result> = [
      { key: "123", name: "Sam", score: 0.1 },
      { key: "456", name: "James", score: 0.99 }
    ];

    const persion: Person = {
      firstName: "Sam",
      lastName: "Starling"
    };

    return (
      <div className="App">
        <h1>Task list</h1>
        <TaskList items={tasks} />
        <h1>Results table</h1>
        <ResultsTable results={results} />
        <h1>Person form</h1>
        <PersonForm person={persion} />
        <h1>Blank form</h1>
        <PersonForm />
      </div>
    );
  }
}

export default App;
