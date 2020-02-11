import React, { Component } from "react";

export default class Header extends Component {
    render() {
        return (
        <div>
            <img src={this.props.logo} alt='square logo with a black background with a white fork and knife side by side in the center'/>
            <h2>Delicious</h2>
                <span>
                    The best food blog on the web</span>
        </div>    
        );
    }
}