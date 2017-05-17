// This stateful component is going to compose our FilterInput and Artists together by managing the state of the input form, and then filtering the list of artists it passes to Artists.

import React, {Component} from 'react';
import { Link } from 'react-router';
import FilterInput from '../components/FilterInput';
import Artists from '../components/Artists';
import axios from 'axios';

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
    .then(res => res.data)
    .then((artists) => {
      this.setState({artists})
    })
  }

  forceUpdate () {
      console.log('ran')
      let artists = this.state.artists;
      let currentInput = this.state.currentInput;
      let newArtists = artists.filter(function (artist) {
        return artist.name.slice(0, currentInput.length) === currentInput
      })
      this.setState({artists: newArtists})
  }


  render(){
    return (
    <div>
      <FilterInput handleChange={ this.handleChange }/>
      <Artists artists={this.state.artists}/>
    </div>
  )
}

}
