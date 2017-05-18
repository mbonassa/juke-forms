// This stateful component is going to compose our FilterInput and Artists together by managing the state of the input form, and then filtering the list of artists it passes to Artists.

import React, { Component } from 'react';
import { Link } from 'react-router';
import FilterInput from '../components/FilterInput';
import Artists from '../components/Artists';
import axios from 'axios';

export default class FilterableArtistsContainer extends Component {
  constructor() {
    super()
    this.state = {
      currentInput: '',
      artists: []
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    axios.get('/api/artists')
      .then(res => res.data)
      .then((artists) => {
        this.setState({ artists })
      })
  }

  handleChange(event) {
    this.setState({ currentInput: event.target.value })
  }


  render() {
    const currentInput = this.state.currentInput;
    const newArtists = this.state.artists.filter(artist =>
      artist.name.toLowerCase().match(currentInput.toLowerCase()));
    return (
      <div>
        <FilterInput handleChange={this.handleChange} />
        <Artists artists={newArtists} />
      </div>
    )
  }

}
