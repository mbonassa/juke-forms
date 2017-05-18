import React, { Component } from 'react';
import NewPlaylist from '../components/NewPlaylist';

export default class NewPlaylistContainer extends Component {
  constructor(){
    super()
    this.state = {
      inputValue: ''
    }
    console.log('calling render: ', this.render());
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ inputValue: event.target.value})
    console.log(this.state);
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log("hello", this.state.inputValue);
    this.setState({ inputValue: ''});
  }
  render(){

    return (
        <NewPlaylist handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}/>
      );
  }

}
