import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div>
      <h1>fake header</h1>
        {this.props.children}
      </div>
    );
  }
}

/*
this.props.children

when nested routes are defined, if we visit nested route the child component is passed to parent as this.props.children. If we want it to show up, parent component must render this.props.children

..children placement must be specifically defined -- above or below other components or text
*/
