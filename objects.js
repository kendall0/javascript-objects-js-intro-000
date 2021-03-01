var playlist = {};
var playlist = {
  artistName: 'The Verve',
  songTitle: 'On Your Own'
}

function updatePlaylist(playlist, artistName, songTitle) {

  return Object.assign({}, updatedPlaylist, {[artistName]: songTitle})
