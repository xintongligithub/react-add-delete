import React, { Component } from 'react';
import classes from './Content.module.css';

class Content extends Component {
    render () {
        return (
          <div className={classes.Content} onClick={this.props.clicked}>
              {this.props.children}
          </div>
        )
    }
}

export default Content;