import React, { Component } from 'react'

export default class SingleRecipe extends Component {
  constructor(props){
    super(props);
    console.log(this.props.match.params.id);
    
  }

  render() {
    return (
      <h4>
        Hello from SingleRecipe {this.props.match.params.id}
      </h4>
    )
  }
}
