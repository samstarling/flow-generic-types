// @flow
import * as React from "react";

import { storiesOf } from "@storybook/react";

import ResultsTable, { type Result } from "./examples/ResultsTable";

const results: Array<Result> = [
  { key: "123", name: "Sam", score: 0.1 },
  { key: "456", name: "James", score: 0.99 }
];

storiesOf("Table/ResultsTable", module).add("Default", () => (
  <ResultsTable results={results} />
));
