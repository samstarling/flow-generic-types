// @flow
import * as React from "react";

import { storiesOf } from "@storybook/react";

import ArtistPicker, { type Artist } from "./examples/ArtistPicker";

const tasks: Array<Artist> = [
  { key: "1", name: "Mondrian" },
  { key: "2", name: "Monet" },
  { key: "3", name: "Picasso" },
  { key: "4", name: "Van Gogh" }
];

storiesOf("Picker/ArtistPicker", module).add("Default", () => (
  <ArtistPicker items={tasks} onSelect={console.log} />
));
