// @flow
import * as React from "react";

import { storiesOf } from "@storybook/react";

import PersonForm, { type Person } from "./examples/PersonForm";

const person: Person = {
  firstName: "Sam",
  lastName: "Starling"
};

storiesOf("Form/PersonForm", module)
  .add("With data", () => <PersonForm person={person} />)
  .add("Without data", () => <PersonForm />);
