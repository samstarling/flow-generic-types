// @flow
import * as React from "react";

import TaskList, { type Task } from "./components/TaskList";

class App extends React.Component<*> {
  render() {
    const tasks: Array<Task> = [
      { key: "1", title: "Wash car", isCompleted: true },
      { key: "2", title: "Do shopping", isCompleted: false },
      { key: "3", title: "Collect parcel", isCompleted: false }
    ];

    return (
      <div className="App">
        <h1>Task list</h1>
        <TaskList items={tasks} />
      </div>
    );
  }
}

export default App;
