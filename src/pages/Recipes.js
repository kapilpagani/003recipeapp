import React, { Component } from 'react'
import Search from '../components/Search'
import RecipeList from '../components/RecipeList'
import { recipeData } from '../data/tempList'

export default class Recipes extends Component {
  constructor(props) {
    super(props)
  }

  state = {
    recipes: recipeData,
    search: ''
  }

  handleChange = (e) => {
    this.setState({
      search: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
  }

  render() {
    return (
      <React.Fragment>
        <Search handleChange={this.handleChange} handleSubmit={this.handleSubmit} search={this.state.search} />
        <RecipeList recipes={this.state.recipes} />
      </React.Fragment>
    )
  }
}
