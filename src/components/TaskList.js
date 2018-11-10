// @flow
import * as React from "react";

import GenericList, { type ListItem } from "./GenericList";

export type Task = ListItem & {
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
