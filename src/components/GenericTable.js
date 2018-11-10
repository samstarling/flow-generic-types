// @flow
import * as React from "react";

type Props<T> = {
  items: Array<T>,
  renderItem: T => Array<React.Element<"td">>
};

export type TableRow = { +key: string };

export default class GenericTable<T: TableRow> extends React.Component<
  Props<T>
> {
  renderRow: T => React.Element<"tr"> = (item: T) => {
    return <tr key={item.key}>{this.props.renderItem(item)}</tr>;
  };

  render() {
    return (
      <table border={1}>
        <tbody>{this.props.items.map(this.renderRow)}</tbody>
      </table>
    );
  }
}
