import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

let time = localStorage.getItem('videoplayer-current-time');
if(time) {
    player.setCurrentTime(time);
}

// player.on('timeupdate', throttle (function() {
//     player.getCurrentTime().then(function(seconds) {
//         localStorage.setItem('videoplayer-current-time', seconds);
//     });
// }, 1000));

player.on('timeupdate', throttle(function ({ seconds }) {
    localStorage.setItem('videoplayer-current-time', seconds);
}, 1000));
    