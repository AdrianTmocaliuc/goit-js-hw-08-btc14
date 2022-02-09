import Player from '@vimeo/player';
const throttle = require('lodash.throttle');
const videoRef = document.querySelector('#vimeo-player');

const iframePlayer = new Player(videoRef);
// iframePlayer
//   .play()
//   .then(function () {
//     // the video was played
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

const onPlay = function (data) {
  localStorage.setItem('videoplayer-current-time', JSON.stringify(data.seconds));
};
let currentTime = JSON.parse(localStorage.getItem('videoplayer-current-time'));
let setTime = currentTime ? currentTime : 0;
iframePlayer.setCurrentTime(setTime);

iframePlayer.on('timeupdate', throttle(onPlay, 1000));
