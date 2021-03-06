import React, { Component } from 'react'
import Recipe from '../components/Recipe'

export default class RecipeList extends Component {
  render() {
    const { recipes } = this.props;
    return (
      <React.Fragment>
        <div className="container py-5">
          {/* Title */}
          <div className="row">
            <div className="col-10 mx-auto col-md-6 text-center text-uppercase mb-3">
              <h1 className="text-slanted">recipe List</h1>
            </div>
          </div>

          <div className="row">
            {recipes.map(recipe => {
              return (
                <Recipe key={recipe.recipe_id} recipe={recipe} />
              )
            })}
          </div>

        </div>
      </React.Fragment>
    )
  }
}
