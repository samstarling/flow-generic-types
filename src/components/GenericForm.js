// @flow
import * as React from "react";

type Props<T> = {
  initialData: T,
  renderForm: T => React.Node,
  onSubmit: T => void
};

type State<T> = {
  data: T
};

export default class GenericForm<T> extends React.Component<
  Props<T>,
  State<T>
> {
  constructor(props: Props<T>) {
    super(props);
    this.state = { data: props.initialData };
  }

  handleChange = (event: SyntheticInputEvent<HTMLFormElement>) => {
    const change = { [event.target.name]: event.target.value };
    this.setState({ data: { ...this.state.data, ...change } }, () =>
      console.log(this.state)
    );
  };

  render() {
    return (
      <form onChange={this.handleChange} onSubmit={this.handleSubmit}>
        {this.props.renderForm(this.state.data)}
        <input type="submit" />
      </form>
    );
  }
}
