import React, { Component } from 'react';
import NewPlaylist from '../components/NewPlaylist';
import axios from 'axios';

export default class NewPlaylistContainer extends Component {
  constructor(){
    super()
    this.state = {
      inputValue: '',
      disabled: true,
      warning: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    event.target.value.length === 0 || event.target.value.length > 16 ? 
    this.setState({inputValue: event.target.value, disabled: true, warning: true}) : 
    this.setState({inputValue: event.target.value, disabled: false, warning: false})
  }

  handleSubmit (evt) {
    evt.preventDefault();
    const addPlaylist = this.props.addPlaylist;
    addPlaylist(this.state.inputValue);
    this.setState({inputValue: ''})
  }

  
  render(){
    return (
        <NewPlaylist handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          value={this.state.inputValue}
          disabled={this.state.disabled}
          warning={this.state.warning} />
      );
  }

}
