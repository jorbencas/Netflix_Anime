import React, { Component } from 'react'

export class Collection extends React.Component {
   
    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        this.state = {
            animes : []
        };
        //this.handleClick = this.handleClick.bind(this);
      }

    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default Collection
