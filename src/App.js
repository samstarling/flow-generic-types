// @flow
import * as React from "react";

import NumberList from "./components/NumberList";

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
