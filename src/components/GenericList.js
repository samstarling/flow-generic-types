// @flow
import * as React from "react";

export type Props<T> = {
  items: Array<T>,
  renderItem: T => React.Node
};

export default class GenericList<T: { +key: string }> extends React.Component<
  Props<T>
> {
  renderListItem: T => React.Node = (item: T) => {
    return <li key={item.key}>{this.props.renderItem(item)}</li>;
  };

  render() {
    return <ul>{this.props.items.map(this.renderListItem)}</ul>;
  }
}
