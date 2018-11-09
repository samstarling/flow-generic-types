// @flow
import * as React from "react";

import GenericList from "./GenericList";

export default class NumberList extends React.Component<*> {
  renderItem = (n: number) => {
    return <span>Number is {n}</span>;
  };

  render() {
    return <GenericList items={[1, 4, 3]} renderItem={this.renderItem} />;
  }
}
