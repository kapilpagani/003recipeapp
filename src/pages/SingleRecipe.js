import React, { Component } from 'react'
import { recipeData } from '../data/tempDetails'
import { Link } from 'react-router-dom'

export default class SingleRecipe extends Component {
  constructor(props) {
    super(props);
    const id = this.props.match.params.id;
    this.state = {
      recipe: recipeData,
      id,
      loading: false
    }
  }

  render() {
    const { image_url, publisher, publisher_url, source_url, title, ingredients } = this.state.recipe;
    if (this.state.loading) {
      return (
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto col-md-6 my-3">
              <h2 className="text-uppercase text-orange text-center">
                loadning recipe....
              </h2>
            </div>
          </div>
        </div>
      )
    }
    return (
      <div className="container mt-3">
        <div className="row">

          {/* left pannel */}
          <div className="col-10 mx-auto col-md-6 my-3">
            <Link to="/recipes" className="btn btn-warning mb-5 text-capitalize">back to recipes list</Link>
            <img src={image_url} className="d-bloack w-100" style={{ "maxHeight": "30rem" }} alt="recipe" />
          </div>

          {/* info Right Panel */}
          <div className="col-10 mx-auto col-md-6 my-3">
            <h6 className="text-uppercase">{title}</h6>
            <h6 className="text-warning text-capitalize text-slanted">provide by {publisher}</h6>
            <a href={publisher_url} target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-2 text-capitalize">publisher website</a>
            <a href={source_url} target="_blank" rel="noopener noreferrer" className="btn btn-success mx-2 mt-2 text-capitalize">recipe url</a>
            <ul className="list-group mt-4">
              <h2 className="mt-3 mb-4">ngredients</h2>
              {ingredients.map((item, index) => {
                return (
                  <li key={index} className="list-group-item text-slanted">
                    {item}
                  </li>
                )
              })}
            </ul>

          </div>
        </div>

      </div>


    )

  }
}
