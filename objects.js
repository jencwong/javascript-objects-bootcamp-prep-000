var playlist = {artistName: "songTitle"};

var function updatePlaylist(playlist, artistName, songTitle){
  return Object.assign({}, playlist, { [artistName]: "songTitle"});
}