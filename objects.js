var playlist = {Beck : "Odelay"}
function updatePlaylist(playlist,artistName,songTitle){
return Object.assign(playlist,{[artistName] : 'songTitle'})
}
