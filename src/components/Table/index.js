// @flow
import * as React from "react";

import styles from "./index.module.css";

type Props<T> = {
  items: Array<T>,
  headings: Array<string>,
  renderItem: T => Array<React.Element<"td">>
};

export type TableRow = { +key: string };

export default class GenericTable<T: TableRow> extends React.Component<
  Props<T>
> {
  renderHeadings = () => {
    return (
      <tr>
        {this.props.headings.map(h => (
          <th>{h}</th>
        ))}
      </tr>
    );
  };

  renderRow: T => React.Element<"tr"> = (item: T) => {
    return (
      <tr className={styles.Row} key={item.key}>
        {this.props.renderItem(item)}
      </tr>
    );
  };

  render() {
    return (
      <table className={styles.Table}>
        <thead>{this.renderHeadings()}</thead>
        <tbody>{this.props.items.map(this.renderRow)}</tbody>
      </table>
    );
  }
}
