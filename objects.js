var playlist = {Beck : "Odelay"}
function updatePlaylist(playlist,artistName,songTitle){
var newplaylist = Object.assign({},playlist,{[artistName] : 'songTitle'})

  return newplaylist
}
