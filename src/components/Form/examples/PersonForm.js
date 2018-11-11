// @flow
import * as React from "react";

import Form from "../";

export type Person = {
  firstName: string,
  lastName: string
};

type Props = {
  person?: Person
};

export default class PersonForm extends React.Component<Props> {
  renderForm = (person?: Person) => {
    return (
      <div>
        <div>
          <span>First name:</span>
          <input name="firstName" defaultValue={person && person.firstName} />
        </div>
        <div>
          <span>Last name:</span>
          <input name="lastName" defaultValue={person && person.lastName} />
        </div>
      </div>
    );
  };

  render() {
    return (
      <Form
        initialData={this.props.person}
        renderForm={this.renderForm}
        onSubmit={console.log}
      />
    );
  }
}
