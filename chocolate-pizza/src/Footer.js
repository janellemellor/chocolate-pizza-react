import React, { Component } from "react";

export default class Footer extends Component {
    render() {
        return (
            <div> 
                <img src={this.props.smallLogo} alt='square logo with a grey background with a white fork and knife side by side in the center'/>
                <p>Delicious &copy; 2013 . All Rights Reserved.
                Proudly published with Ghost.</p>  
            </div>
        );
    }
}