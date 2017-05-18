import React from 'react'

class Playlist extends React.Component () {
    componentDidMount () {
        const playlistId = this.props.routeParams.playlistId
        this.props.selectPlaylist(playlistId)
    }

    return (
        <div>
            <h3>{ this.props.selectedPlaylist.name }</h3>
            <Songs songs={this.props.selectedPlaylist.songs} /> {/** Hooray for reusability! */}
            { this.props.selectedPlaylist.songs && !this.props.selectedPlaylist.songs.length && <small>No songs.</small> }
            <hr />
        </div>
    )
}

export default Playlist;