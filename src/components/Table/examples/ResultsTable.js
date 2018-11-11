// @flow
import * as React from "react";

import GenericTable, { type TableRow } from "../";

export type Result = TableRow & {
  name: string,
  score: number
};

type Props = {
  results: Array<Result>
};

export default class ResultsTable extends React.Component<Props> {
  renderItem = (result: Result) => {
    return [<td>{result.name}</td>, <td>{result.score}</td>];
  };

  render() {
    return (
      <GenericTable
        headings={["Name", "Score"]}
        items={this.props.results}
        renderItem={this.renderItem}
      />
    );
  }
}
