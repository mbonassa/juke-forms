import React, { Component } from 'react';


export default class NewPlaylistContainer extends Component {
  constructor(){
    super()
    this.state = {
      inputValue: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ inputValue: event.target.value})
    console.log(this.state);
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state.inputValue);
    this.state.inputValue = ''
  }
  render(){

    return
    (
      <div>
        <NewPlaylist handleSubmit={this.handleSubmit}/>
      </div>

    )
  }

}
