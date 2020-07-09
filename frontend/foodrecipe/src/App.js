import React, { Component } from 'react';
import './App.css';
import {recipes} from "./tempList";
import RecipeList from "./components/RecipeList";
import RecipeDetails from
"./components/RecipeDetails";

class App extends Component {
  state ={
    recipes: [],
    url:"https://recipesapi.herokuapp.com/api/search"
  };

  
  render() {
    return <React.Fragment> Hello From
      App</React.Fragment>;
  }
}

export default App;
