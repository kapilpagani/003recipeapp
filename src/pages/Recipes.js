import React, { Component } from 'react'
import Search from '../components/Search'
import RecipeList from '../components/RecipeList'
import { recipeData } from '../data/tempList'

export default class Recipes extends Component {
  constructor(props) {
    super(props)
    this.getRecipes = this.getRecipes.bind(this);
  }

  state = {
    recipes: recipeData,
    search: '',
    url: `https://www.food2fork.com/api/search?key=${process.env.REACT_APP_API_KEY}`
  }

  async getRecipes() {
    try {
      const data = await fetch(this.state.url);
      const jsonData = await data.json();
      console.log(jsonData);
      this.setState({
        recipes: jsonData.recipes
      })
    } catch (error) {
      console.log(error);
    }
  }

  async componentDidMount() {
    this.getRecipes();
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
