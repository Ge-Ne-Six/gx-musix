const mySongs = [
  {name: 'Too Busy To Be Bae', path: './music/Kizz_Daniel_-_Too_Busy_To_Be_Bae.mp3', artist: 'Kizz Daniel'},
  {name: 'Egwu', path: './music/Chike_Ft_MohBad_-_Egwu.mp3', artist: 'Chike Ft MohBad'},
  {name: 'Twe Twe', path: './music/Kizz_Daniel_-_Twe_Twe.mp3', artist: 'KizzDaniel'},
  {name: 'Run', path: './music/OneRepublic_-_Run_(Jesusful.com).mp3', artist: 'OneRepublic'},
  {name: 'T-Classic Nobody Fine Pass You', path: './music/T-Classic-Nobody-Fine-Pass-You.mp3', artist: 'T-Classic'}
];

let i = 0;

let shuffled = [];
let favourite = []
let shuffle = 'false';
let listPlayingV = 'all';

var mainWrapper = document.querySelector('.detail');
var headDrop = document.querySelector('.head-drop');
var dropImg = document.querySelector('.drop-img');
var option = document.querySelector('.options');
var songImg = document.querySelector('.songImg');
var songTitle = document.querySelector('.title');
var artist = document.querySelector('.artist');
var durationRange = document.getElementById('duration');
var volume = document.getElementById('volume');
var music = document.querySelector('audio');
var playDiv = document.querySelector('.play');
var playBtn = document.querySelector('.playBtn');
let value = 'false';
var sideMenu = document.querySelector('.side-menu');
let songs = document.querySelector('.lets');
var stopT = document.querySelector('.stopT')
var menuImge = document.querySelector('.menu-btn').addEventListener('click', ()=>{

  (sideMenu.style.display === 'none') ? sideMenu.style.display = 'block' : sideMenu.style.display = 'none';
  
});
var songsValue = document.querySelector('.songs');
var playlistValue = document.querySelector('.playlist');
var listPlaying = document.querySelector('.h');
 var imgToggle =document.querySelector('.img-toggle');


 mainWrapper.addEventListener('click', ()=> {
  sideMenu.style.display = 'none';
 })

function playAll(){
  if(listPlayingV === 'favourite'){
    listPlayingV = 'all';
    listPlaying.innerHTML = 'All Songs';

    songs.innerHTML = '';

    mySongs.forEach((song, index) => {
  
      songs.innerHTML += `<div class='song-div'><a href='#' onclick='playSong(${index})'>${song.name}</a> <div class='all-side-imgs'><div class="side-play fav-icon"><img src="./images/add_FILL0_wght400_GRAD0_opsz24.svg" onclick='addToFavourite(${index}, this)' class="add-to-fav" alt=""> <div class='add-fav'>Add to Favorite</div></div><div class="side-play"><img src="./images/play_arrow_FILL0_wght400_GRAD0_opsz24.svg" alt=""></div></div></div>`;   
      
    });

  }
  
}

function playFavourite(){
  listPlayingV = 'favourite';
  listPlaying.innerHTML = 'Favourite';
  console.log(listPlayingV);

  songs.innerHTML = '';
  
  favourite.forEach((song, index) => {

    songs.innerHTML += `<div class='song-div'><a href='#' onclick='playSong(${index})'>${song.name}</a> <div class='all-side-imgs'><div class="side-play fav-icon"><img src="./images/add_FILL0_wght400_GRAD0_opsz24.svg" onclick='removeFromFavourite(${index}, this)' class="add-to-fav" alt=""> <div class='add-fav'>Add to Favorite</div></div><div class="side-play"><img src="./images/play_arrow_FILL0_wght400_GRAD0_opsz24.svg" alt=""></div></div></div>`;   
    
  });

}


  // let audio = document.querySelector('audio');
  function showSongs(){
    if(shuffle === 'false'){
      music.src = mySongs[i].path;
      songTitle.innerHTML = mySongs[i].name;
      artist.innerHTML = mySongs[i].artist;
    }else{
      music.src = shuffled[i].path;
      songTitle.innerHTML = shuffled[i].name;
      artist.innerHTML = shuffled[i].artist;
    }
    
  }

  showSongs()

window.addEventListener('keydown', (e)=>{
  if(e.key === 'MediaPlayPause'){
    play()
  }else if(e.key === 'MediaTrackNext'){
    next()
  }else if(e.key === 'MediaTrackPrevious'){
    back()
  }
})

  function play(){

    if(value === 'false'){
      music.play()
      value = 'true';
      playBtn.src = './images/pause_FILL0_wght400_GRAD0_opsz24.png';
      songImg.classList.add('rotate');
    }else{
      music.pause()
      value = 'false';
      playBtn.src = './images/play_arrow_FILL0_wght400_GRAD0_opsz24.svg';
      songImg.classList.remove('rotate');
    }

  }

  

  function next(){

   

    if(shuffle === 'false'){

      if(i < mySongs.length -1){
        (value === 'true') ? music.play() : '';
  
        i++;
        music.src = mySongs[i].path;
        songTitle.innerHTML = mySongs[i].name;
        artist.innerHTML = mySongs[i].artist;
        (value === 'true') ? music.play() : '';
        
        
      }else{
        i = 0;
        music.src = mySongs[i].path;
        songTitle.innerHTML = mySongs[i].name;
        artist.innerHTML = mySongs[i].artist;
        (value === 'true') ? music.play() : '';
      }

    }else{

      if(i < shuffled.length -1){
        (value === 'true') ? music.play() : '';
  
        i++;
        music.src = shuffled[i].path;
        songTitle.innerHTML = shuffled[i].name;
        artist.innerHTML = mySongs[i].artist;
        (value === 'true') ? music.play() : '';
        
        
      }else{
        i = 0;
        music.src = shuffled[i].path;
        songTitle.innerHTML = shuffled[i].name;
        artist.innerHTML = shuffled[i].artist;
        (value === 'true') ? music.play() : '';
      }

    }
       

   
  }

  function back(){

    if(shuffle === 'false'){

      if(i === 0){
        i = mySongs.length -1;
        music.src = mySongs[i].path;
        songTitle.innerHTML = mySongs[i].name;
        artist.innerHTML = mySongs[i].artist;

        (value === 'true') ? music.play() : '';
      }else{

       i--;
        music.src = mySongs[i].path;
        songTitle.innerHTML = mySongs[i].name;
        artist.innerHTML = mySongs[i].artist;

        (value === 'true') ? music.play() : '';

      }

    }else{
      
      if(i === 0){
        i = shuffled.length -1;
        music.src = shuffled[i].path;
        songTitle.innerHTML = shuffled[i].name;
        artist.innerHTML = shuffled[i].artist;

        (value === 'true') ? music.play() : '';
      }else{

       i--;
        music.src = shuffled[i].path;
        songTitle.innerHTML = shuffled[i].name;
        artist.innerHTML = shuffled[i].artist;

        (value === 'true') ? music.play() : '';

      }

    }
    
  }

    music.addEventListener('ended', next)

  music.addEventListener('loadeddata', () =>{
    // setTime
    durationRange.setAttribute('max', music.duration);
  });

  music.addEventListener('timeupdate', () =>{
    durationRange.value = music.currentTime;
  })

  durationRange.addEventListener('input', () =>{
   music.currentTime = durationRange.value

  })

  // volume

  music.addEventListener('volume', () =>{
    
    music.volume = volume.value;
    
  })

  volume.addEventListener('input', ()=>{
    volume.value = music.volume;
  })

  function songList(){
    
   if(listPlayingV === 'all'){
    mySongs.forEach((song, index) => {

      songs.innerHTML += `<div class='song-div'><a href='#' onclick='playSong(${index})'>${song.name}</a> <div class='all-side-imgs'><div class="side-play fav-icon"><img src="./images/add_FILL0_wght400_GRAD0_opsz24.svg" onclick='addToFavourite(${index}, this)' alt=""> <div class='add-fav'>Add to Favorite</div></div><div class="side-play"><img src="./images/play_arrow_FILL0_wght400_GRAD0_opsz24.svg" alt=""></div></div></div>`;   
      
    });
   }
    
  }

  songList();


  function playSong(i){
    
    console.log(mySongs[i].path);
      value = 'false';
      music.src = mySongs[i].path;
      songTitle.innerHTML = mySongs[i].name;
      artist.innerHTML = mySongs[i].artist;
      // music.play();

      play()


  }



  function shuffleSongs(songs) {

    for (let i = songs.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));

        [songs[i], songs[j]] = [songs[j], songs[i]];

        shuffled.push(songs[i] || songs[j])


    }
    
    console.log(shuffled);



    return songs;
}


function shuff(){
  if(shuffle === 'false'){
    shuffle = 'true';
    imgToggle.src = './images/shuffle_on_FILL0_wght400_GRAD0_opsz24.png';
     if(listPlayingV === 'favourite'){
      shuffleSongs(favourite);
     }else{
      shuffleSongs(mySongs);
     }
  }else{
    shuffle = 'false';
    imgToggle.src = './images/shuffle_FILL0_wght400_GRAD0_opsz24.png';
    shuffled = [];
  }

 

}

function select(){

 if(!option.classList.contains('options-show')){

  dropImg.style.transform = 'rotate(360deg)';
  option.classList.add('options-show');
  option.style.top = '40px';
 }else{
  option.classList.remove('options-show')
  dropImg.style.transform = 'rotate(180deg)';
 }

}

// function to add to favourite playlist 
function addToFavourite(ix, imgElement) {
  let song = mySongs[ix];

  // Check if the song is already in the favourites list
  let songExists = favourite.some(favSong => favSong.path === song.path);

  if (songExists) {
    console.log(`The song "${song.path}" is already added to favourites!`);
  } else {
    
    let addFav = favourite.push(song);
     imgElement.src = './images/check.png'
    console.log(`The song "${song.path}" has been added to favourites!`);
    
  }

  console.log(favourite);

}

function removeFromFavourite(item){
  favourite.splice(item);
  console.log(favourite);
}