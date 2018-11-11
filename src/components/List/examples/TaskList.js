// @flow
import * as React from "react";

import List, { type ListItem } from "../";

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
    return <List items={this.props.items} renderItem={this.renderItem} />;
  }
}
