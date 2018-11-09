// @flow
import * as React from "react";

import GenericList from "./components/GenericList";

class NumberList extends React.Component<*> {
  renderItem = (n: number) => {
    return <span>Number is {n}</span>;
  };

  render() {
    return <GenericList items={[1, 4, 3]} renderItem={this.renderItem} />;
  }
}

class App extends React.Component<*> {
  render() {
    return (
      <div className="App">
        <h1>A list of numbers</h1>
        <NumberList items={[1, 4, 3]} />
      </div>
    );
  }
}

export default App;
