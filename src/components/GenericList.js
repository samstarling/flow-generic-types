import * as React from "react";

type Props = {
  items: Array<T>,
  renderItem: (item: T) => React.Node
};

export default class GenericList<T> extends React.Component<Props<T>> {
  renderListItem = (item: T) => {
    return <li>{this.props.renderItem(item)}</li>;
  };

  render() {
    return <ul>{this.props.items.map(this.renderListItem)}</ul>;
  }
}
