// @flow
import * as React from "react";

import GenericList from "./components/GenericList";

class App extends React.Component<*> {
  render() {
    return (
      <div className="App">
        <h1>Generic List</h1>
        <GenericList items={[1, 2, 3]} renderItem={(n: number) => n} />
      </div>
    );
  }
}

export default App;
