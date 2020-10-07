<template>
  <div class="player">
    <h4><i class="material-icons">equalizer</i>Podcast</h4>
    <div class="card">
      <div class="card-image" :style="cover"></div>
      <div class="card-content">
        <h5>Title</h5>
        <p class="artist">Artist</p>
        <audio controls ></audio>
        
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
      // }
    }
  },
  mounted() {
    window.addEventListener('load', this.start());
  },
  methods: {
    start() {
        this.cover = document.querySelector('.card-image');
        this.title = document.querySelector('.card-content h5');
        this.artist = document.querySelector('.card-content .artist');
        this.audio = document.querySelector('audio');

        this.update();

        this.audio.onended  = () => this.next();
    },
    next() {
      this.currentPlaying++;
      if(this.currentPlaying == this.audioData.length) {
        this.restart();
      }
      this.update();
    },
    update() {
      this.currentAudio = this.audioData[this.currentPlaying];

      this.cover = { background: `url('${this.path(data[currentPlaying].cover)}') no-repeat center center / cover` };
      this.title.innerText = data[currentPlaying].title;
      this.artist.innerText = data[currentPlaying].artist;
      this.audio.src = this.path(this.currentAudio.file);
    },
    restart() {
      this.currentPlaying = 0;
      this.update();
    },
    path(file) {
      return `../assets/files/${file}`;
    },

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
