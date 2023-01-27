import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const ifram = document.querySelector('iframe');
const player = new Player(ifram);

player.on(
  'timeupdate',
  throttle(function (time) {
    localStorage.setItem('videoplayer-current-time', time.seconds);
  }, 1000)
);

function getTimeStorage() {
  return localStorage.getItem('videoplayer-current-time') || 0;
}

player.setCurrentTime(getTimeStorage());
