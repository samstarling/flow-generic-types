// @flow
import * as React from "react";

import List, { type ListItem } from "../List";

export type PickerItem = ListItem;

type Props<T> = {
  items: Array<T>,
  renderItem: T => React.Node
};

export default class Picker<T: ListItem> extends React.Component<Props<T>> {
  render() {
    return <List items={this.props.items} renderItem={this.props.renderItem} />;
  }
}
