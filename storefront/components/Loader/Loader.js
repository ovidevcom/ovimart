import "../../styles/Loader/Loader.scss"
import React, { Component } from 'react';

class Loader extends Component {
    render() {
        return (
            <div>
                <div id="fadedBackground"></div>
                <div className="spiner-container">
                    <div id="spiner"></div>
                </div> 
            </div>
        );
    }
}

export default Loader;


