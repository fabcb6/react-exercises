// https://www.testdome.com/questions/react-js/toggle-message/57704?generator=104

import React, { Component } from "react";

type Props = {};

type State = {
  showMessage: boolean;
};

export default class Message extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      showMessage: false,
    };
  }

  handleClick() {
    const currentShow = this.state.showMessage;
    this.setState({ showMessage: !currentShow });
  }
  render() {
    return (
      <React.Fragment>
        <a onClick={() => this.handleClick()} href="#">
          Want to buy a new car?
        </a>
        {this.state.showMessage ? <p>Call +11 22 33 44 now!</p> : <></>}
      </React.Fragment>
    );
  }
}
