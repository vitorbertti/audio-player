<template>
  <div class="player">
    <h4><i class="material-icons">equalizer</i>Podcast</h4>
    <div class="card">
      <div class="card-image" :style="cover"></div>
      <div class="card-content">
        <h5>Title</h5>
        <p class="artist">Artist</p>
        <audio controls :src="audio" ></audio>
        
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
        audio: {},
      // }
    }
  },
  mounted() {
    this.start();
  },
  methods: {
    start() {
        this.cover = { background: `url('${data[0].cover}') no-repeat center center / cover` };
        this.title = document.querySelector('.card-content h5');
        this.title.innerText = data[0].title;
        this.artist = document.querySelector('.card-content .artist');
        this.artist.innerText = data[0].artist;
        this.audio = data[0].file;
        // this.audio.addEventListener('ended', () => {})
      },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
