// @flow
import * as React from "react";

import GenericList from "./GenericList";

export type Task = {
  key: string,
  title: string,
  isCompleted: boolean
};

type Props = {
  items: Array<Task>
};

export default class TaskList extends React.Component<Props> {
  renderItem = (task: Task) => {
    return (
      <span>
        {task.title} ({task.isCompleted ? "Done" : "Not done"})
      </span>
    );
  };

  render() {
    return (
      <GenericList items={this.props.items} renderItem={this.renderItem} />
    );
  }
}
