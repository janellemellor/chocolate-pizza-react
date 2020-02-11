import React, { Component } from 'react';

export default class SectionOne extends Component {
  render() {
    return (
      <div>
        <div>
          <h1> {this.props.title} </h1>
        </div>
        <div>
          <span>
            Posted on {this.props.date} / {this.props.category}
          </span>
          <div>
            <span>Print</span>
          </div>
        </div>
        <p> {this.props.pOne} </p>
        <p> {this.props.pTwo} </p>
        <p> {this.props.pThree} </p>
      </div>
    );
  }
}
