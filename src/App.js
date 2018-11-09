// @flow
import * as React from "react";

import GenericList, { type Props } from "./components/GenericList";

const SecondGenericList: React.ComponentType<Props<number>> = GenericList;

class App extends React.Component<*> {
  render() {
    return (
      <div className="App">
        <h1>First Generic List</h1>
        <GenericList items={[1, 2, 3]} renderItem={(n: number) => n} />
        <h1>Second Generic List</h1>
        <SecondGenericList items={[1, 2, 3]} renderItem={(n: number) => n} />
      </div>
    );
  }
}

export default App;
