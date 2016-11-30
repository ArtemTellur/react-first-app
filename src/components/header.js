import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';

export default class Header extends React.Component {
  linkToGithub() {
    return (
      <IconButton
        iconClassName="muidocs-icon-custom-github"
        href="https://github.com/ArtemTellur/react-first-app"
      />
    );
  }

  render() {
    return (
      <AppBar
        title="React TODOs"
        iconElementLeft={<span></span>}
        iconElementRight={this.linkToGithub()}
      />
    );
  }
}