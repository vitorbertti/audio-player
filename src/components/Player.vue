<template>
   <div class="player">
      <h4><i class="material-icons">equalizer</i>Podcast</h4>
      <div class="card">
         <div class="card-image" :style="cover">
            <a href="#" class="btn-floating btn-large halfway-fab">
               <i class="material-icons" id="play-pause">play_arrow</i>
            </a>
         </div>
         <div class="card-content">
            <h5>Title</h5>
            <p class="artist">Artist</p>

            <div class="row valign-wrapper">
               <div class="col s2" id="current-duration">00:00</div>
               <div class="col s6 range-field valign-wrapper">
                  <input type="range" min="0" max="0" id="seekbar" step="1" />
               </div>

               <div class="col s2" id="total-duration">00:00</div>
               <div>
                  <a href="#">
                     <i class="material-icons" id="vol">volume_up</i>
                  </a>
               </div>
               <div class="col s3 range-field valign-wrapper">
                  <input type="range" min="0" max="100" id="vol-control" step="1" />
               </div>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
import data from '../service/data';

export default {
   name: 'Player',
   data() {
      return {
         // player: {
         cover: {},
         title: {},
         artist: {},
         audioData: {},
         currentAudio: {},
         currentPlaying: 0,
         audio: {},
         playPause: {},
         isPlaying: false,
         // }
      };
   },
   mounted() {
      window.addEventListener('load', this.start());
   },
   methods: {
      start() {
         this.cover = document.querySelector('.card-image');
         this.title = document.querySelector('.card-content h5');
         this.artist = document.querySelector('.card-content .artist');
         this.playPause = document.querySelector('#play-pause');
         this.vol = document.querySelector('#vol');
         this.volume = document.querySelector('#vol-control');
         this.seekbar = document.querySelector('#seekbar');
         this.currentDuration = document.querySelector('#current-duration');
         this.totalDuration = document.queryCommandIndeterm('#total-duration');

         this.update();

         this.audio.onended = () => this.next();
      },
      next() {
         this.currentPlaying++;
         if (this.currentPlaying == this.audioData.length) {
            this.restart();
         }
         this.update();
      },
      update() {
         this.currentAudio = this.audioData[this.currentPlaying];

         this.cover = {
            background: `url('${this.path(data[currentPlaying].cover)}') no-repeat center center / cover`,
         };
         this.title.innerText = data[currentPlaying].title;
         this.artist.innerText = data[currentPlaying].artist;
         this.createAudioElement(this.path(this.currentAudio.file));
         
         this.audio.onloadeddata = () => {
            this.actions();
         }
         
      },
      createAudioElement(audio) {
         this.audio = new Audio(audio);
      },
      actions() {  
        this.playPause.onclick = () => this.togglePlayPause();
        this.vol.onclick = () => this.toggleMute();
        this.volume.oninput = () => this.setVolume(this.volume.value);
        this.volume.onchange = () => this.setVolume(this.volume.value);
        this.seekbar.oninput = () => this.setSeek(this.seekbar.value);
        this.seekbar.onchange = () => this.setSeek(this.seekbar.value);
        this.seekbar.max = this.audio.duration;
        this.totalDuration.innerText = this.secondsToMinutes(this.audio.duration); 
      },
      play() {
        this.isPlaying = true;
        this.audio.play();
        this.playPause.innerText = 'pause';
      },
      pause() {
         this.isPlaying = false;
         this.audio.pause();
         this.playPause.innerText = 'play_arrow';
      },
      togglePlayPause() {
         if ( this.isPlaying ) {
            this.pause();
         }else {
            this.play();
         }
      },
      toggleMute() {
         this.audio.muted = !this.audio.muted;
         this.vol.innerText = this.audio.muted ? 'volume_down' : 'volume_up';
      },
      setVolume(value) {
         this.audio.volume = value / 100;
      },
      setSeek(value) {
         this.audio.currentTime = value;
      },
      restart() {
         this.currentPlaying = 0;
         this.update();
      },
      path(file) {
         return `../assets/files/${file}`;
      },
      secondsToMinutes(time) {
         const minutes = Math.floor(time / 60);
         const seconds = Math.floor(time % 60);
         return `${('0' + minutes).slice(-2)}:${('0' + seconds).slice(-2)}`
      }
   },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#play-pause {
   background-color: #7159c1;
}

#vol {
   color: #7159c1;
   transform: translate(2px);
}

input[type='range'] ::-webkit-slider-thumb {
   background-color: #7159c1;
}

input[type='range'] ::-moz-range-thumb {
   background-color: #7159c1;
}

input[type='range'] ::-ms-thumb {
   background-color: #7159c1;
}
</style>
