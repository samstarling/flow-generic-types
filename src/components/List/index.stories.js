// @flow
import * as React from "react";

import { storiesOf } from "@storybook/react";

import TaskList, { type Task } from "./examples/TaskList";

const tasks: Array<Task> = [
  { key: "1", title: "Wash car", isCompleted: true },
  { key: "2", title: "Do shopping", isCompleted: false },
  { key: "3", title: "Collect parcel", isCompleted: false }
];

storiesOf("List/TaskList", module).add("Default", () => (
  <TaskList items={tasks} />
));
