// @flow
import * as React from "react";

import Picker, { type PickerItem } from "../";

export type Artist = PickerItem & {
  name: string
};

type Props = {
  items: Array<Artist>,
  onSelect: Artist => void
};

export default class ArtistPicker extends React.Component<Props> {
  renderItem = (artist: Artist) => {
    return (
      <>
        <span>{artist.name}</span>
        <button type="button" onClick={() => this.props.onSelect(artist)}>
          Select
        </button>
      </>
    );
  };

  render() {
    return <Picker items={this.props.items} renderItem={this.renderItem} />;
  }
}
