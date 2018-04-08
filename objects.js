var playlist = {Beck : "Odelay"}
function updatePlaylist(playlist,artistName,songTitle){
 Object.assign(playlist,{[artistName] : 'songTitle'})
}
