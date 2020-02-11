import React, { Component } from 'react';

export default class SectionThree extends Component {
  render() {
    return (
      <div>
        <div>
          <h3> {this.props.authorName} </h3>
          <span> {this.props.authorBio} </span>
        </div>
        <button>Share Recipe</button>
      </div>
    );
  }
}
