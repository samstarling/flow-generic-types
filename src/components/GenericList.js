// @flow
import * as React from "react";

export type Props<T> = {
  items: Array<T>,
  renderItem: (item: T) => React.Node
};

export default class GenericList<T> extends React.Component<Props<T>> {
  renderListItem = <T>(item: T) => {
    return <li>{this.props.renderItem(item)}</li>;
  };

  render() {
    return <ul>{this.props.items.map(this.renderListItem)}</ul>;
  }
}
