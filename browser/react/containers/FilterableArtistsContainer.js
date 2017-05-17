// This stateful component is going to compose our FilterInput and Artists together by managing the state of the input form, and then filtering the list of artists it passes to Artists.

import React from 'react';
import { Link } from 'react-router';
import FilterInput from '../FilterInput';
import Artists from '../Artists';

export default class FilterableArtistsContainer extends Component {
  constructor(){
    super()
    this.state = {
      currentInput: '',
      artists: []
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(evt){
    this.setState(
      {
        currentInput: event.target.value
      }
    )
  }
componentDidMount(){
  axios.get('/api/artists')
  .then (res => res.data)
  .then(function(artists){
    this.setState({
      artists: artists
    }
  }))

}


  render(){
    return (
    <div>
      <FilterInput handleChange={ this.handleChange }/>
      <Artists this.state.currentInput/>
    </div>
  )
}

}
