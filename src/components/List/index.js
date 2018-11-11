// @flow
import * as React from "react";

type Props<T> = {
  items: Array<T>,
  renderItem: T => React.Node
};

export type ListItem = { +key: string };

export default class List<T: ListItem> extends React.Component<Props<T>> {
  renderListItem: T => React.Node = (item: T) => {
    return <li key={item.key}>{this.props.renderItem(item)}</li>;
  };

  render() {
    return <ul>{this.props.items.map(this.renderListItem)}</ul>;
  }
}
